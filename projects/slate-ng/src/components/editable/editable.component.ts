import {
  AfterContentChecked,
  ChangeDetectorRef, Component,
  ElementRef, EventEmitter,
  SimpleChanges,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  OnDestroy
} from '@angular/core';
import {AngularEditor} from '../../plugins/angular-editor';
import {Descendant, Editor, Element, Node, NodeEntry, Path, Range, Transforms} from 'slate';
import {InputBoolean} from '../../utils/convert';
import {HAS_BEFORE_INPUT_SUPPORT} from '../../polyfills/before-input/before-input-event-plugin';
import {getDefaultView, isDOMNode, isPlainTextOnlyPaste} from '../../utils/dom';
import {
  EDITOR_TO_ELEMENT,
  EDITOR_TO_ON_CHANGE,
  EDITOR_TO_WINDOW,
  ELEMENT_TO_NODE, IS_FOCUSED, IS_READ_ONLY,
  NODE_TO_ELEMENT, NODE_TO_KEY
} from '../../utils/weak-maps';
import scrollIntoView from 'scroll-into-view-if-needed';
import {IS_CHROME, IS_FIREFOX, IS_SAFARI} from '../../utils/environment';
import {fromEvent, interval, Subject} from 'rxjs';
import {takeUntil, throttle} from 'rxjs/operators';
import {hasEditableTarget, hasTarget, isEventHandled, isTargetInsideVoid} from '../../utils/common';
import getDirection from 'direction';
import Hotkeys from '../../utils/hotkeys';
import {NsEditorService} from '../../services/ns-editor.service';


/**
 * A default memoized decorate function.
 */

const defaultDecorate: (entry: NodeEntry) => Range[] = () => [];


// In Internet Explorer, contenteditable cannot be applied to
// the <table>, <col>, <colgroup>, <tbody>, <td>, <tfoot>, <th>, <thead>, and <tr> elements directly.
// A content editable <span> or <div> element can be
// placed inside the individual table cells.

@Component({
  selector: 'div[ns-editor], span[ns-editor]',
  host: {
    '[attr.contenteditable]': '!readonly',
    '[attr.data-slate-ng-editor]': 'true',
    '[attr.data-slate-node]': '\'value\'',
    '[attr.data-gramm]': 'false',
    '[attr.spellCheck]': `!hasBeforeInputSupport ? undefined : spellCheck`,
    '[attr.autoCorrect]': `!hasBeforeInputSupport ? undefined : autoCorrect`,
    '[attr.autoCapitalize]': `!hasBeforeInputSupport ? undefined : autoCapitalize`,
    '[attr.suppressContentEditableWarning]': 'true'
  },
  template: `
    <ns-children [placeholder]="placeholder" [decorate]="decorate"></ns-children>
    <ng-content></ng-content>
  `,
  styles: [':host {position: relative; outline: none; white-space: pre-wrap; word-wrap: break-word;}']
})
export class EditableComponent implements OnInit, OnChanges, AfterContentChecked, OnDestroy {
  @Input() @InputBoolean() readonly = false;
  @Input() editor: AngularEditor;
  @Input() value: Descendant[];
  @Input() decorate: (entry: NodeEntry) => Range[] = defaultDecorate;

  // extended event
  @Input() nsBeforeInput: (e: InputEvent) => {};
  @Input() nsOnClick: (e: Event) => {};
  @Input() nsOnCompositionStart: (e: CompositionEvent) => {};
  @Input() nsOnCompositionUpdate: (e: CompositionEvent) => {};
  @Input() nsOnCompositionEnd: (e: CompositionEvent) => {};
  @Input() nsOnBlur: (e: FocusEvent) => {};
  @Input() nsOnCopy: (e: ClipboardEvent) => {};
  @Input() nsOnCut: (e: ClipboardEvent) => {};
  @Input() nsOnDragOver: (e: DragEvent) => {};
  @Input() nsOnDragStart: (e: DragEvent) => {};
  @Input() nsOnDragEnd: (e: DragEvent) => {};
  @Input() nsOnDrop: (e: DragEvent) => {};
  @Input() nsOnFocus: (e: FocusEvent) => {};
  @Input() nsOnKeyDown: (e: KeyboardEvent) => {};
  @Input() nsOnPaste: (e: ClipboardEvent) => {};
  @Input() nsOnBeforeInput: (e: InputEvent) => {};
  @Input() nsSelectionChange: (e: Event) => {};

  //#region DOM attr
  @Input() @InputBoolean() spellCheck = false;
  @Input() @InputBoolean() autoCorrect = false;
  @Input() @InputBoolean() autoCapitalize = false;
  @Input() @InputBoolean() autoFocus = false;
  @Input() placeholder: string;

  // output event
  @Output() valueChange = new EventEmitter();

  isComposing = false;
  manualListeners: Function[] = [];
  isUpdatingSelection = false;
  latestElement = null;
  destroy$$ = new Subject();
  isDraggingInternally = false;

  get noInputValue() {
    return this.placeholder &&
      this.editor.children.length === 1 &&
      Array.from(Node.texts(this.editor)).length === 1 &&
      Node.string(this.editor) === '';
  }

  get hasBeforeInputSupport() {
    return HAS_BEFORE_INPUT_SUPPORT;
  }

  constructor(
    private editorService: NsEditorService,
    public elementRef: ElementRef,
    public renderer2: Renderer2,
    public cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
    this.editor = this.editorService.init(this.editor, this.value);
    this.updateWeakMap();

    EDITOR_TO_ON_CHANGE.set(this.editor, () => {
      this.valueChange.emit(this.editor.children);
      this.toNativeSelection();
    });
    this.ngZone.runOutsideAngular(() => {
      fromEvent(EDITOR_TO_WINDOW.get(this.editor).document, 'selectionchange')
        .pipe(
          throttle(
            (value: Event) => {
              return interval(100);
            },
            {trailing: true, leading: true}
          ),
          takeUntil(this.destroy$$)
        )
        .subscribe(event => {
          this.toSlateSelection();
          this.nsSelectionChange && this.nsSelectionChange(event);
        });
      const fn = () => {
        IS_FOCUSED.set(this.editor, AngularEditor.isFocused(this.editor));
      };
      this.addEventListener('focus', fn, document);
      this.addEventListener('blur', fn, document);
      this.addEventListener('beforeinput', (event: InputEvent) => this.onDOMBeforeInput(event));
      this.addEventListener('click', (event: Event) => this.onDOMClick(event));
      // 修复中文输入法输入造成的一些错误
      this.addEventListener('compositionstart', (event: CompositionEvent) => this.onDOMCompositionStart(event));
      this.addEventListener('compositionupdate', (event: CompositionEvent) => this.onDOMCompositionUpdate(event));
      this.addEventListener('compositionend', (event: CompositionEvent) => this.onDOMCompositionEnd(event));
      // other
      this.addEventListener('blur', (event: FocusEvent) => this.onDOMBlur(event));
      this.addEventListener('copy', (event: ClipboardEvent) => this.onDOMCopy(event));
      this.addEventListener('cut', (event: ClipboardEvent) => this.onDOMCut(event));
      this.addEventListener('dragend', (event: DragEvent) => this.onDOMDragEnd(event));
      this.addEventListener('dragover', (event: DragEvent) => this.onDOMDragOver(event));
      this.addEventListener('dragstart', (event: DragEvent) => this.onDOMDragStart(event));
      this.addEventListener('drop', (event: DragEvent) => this.onDOMDrop(event));
      this.addEventListener('focus', (event: FocusEvent) => this.onDOMFocus(event));
      this.addEventListener('keydown', (event: KeyboardEvent) => this.onDOMKeyDown(event));
      this.addEventListener('paste', (event: ClipboardEvent) => this.onDOMPaste(event));
      this.addEventListener('input', (event: InputEvent) => this.onDOMInput(event));
    });
  }

  ngOnDestroy() {
    NODE_TO_ELEMENT.delete(this.editor);
    EDITOR_TO_ON_CHANGE.delete(this.editor);
    this.manualListeners.forEach(manualListener => manualListener());
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  ngOnChanges(changes: SimpleChanges) {
    // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
    // needs to be manually focused.
    if (changes.autoFocus?.currentValue !== changes.autoFocus?.previousValue) {
      this.elementRef.nativeElement.focus();
    }

    if (!changes.value?.isFirstChange() && (changes.value?.currentValue !== changes.value?.previousValue)) {
      this.editor.insertFragment(changes.value.currentValue);
    }

    if (!changes.placeholder?.isFirstChange() && (changes.placeholder?.currentValue !== changes.placeholder?.previousValue)) {
      this.editorService.editor.onChange();
    }
  }

  ngAfterContentChecked() {
    IS_READ_ONLY.set(this.editor, this.readonly);
  }

  toNativeSelection() {
    const editor = this.editor;
    const {selection} = editor;
    const root = AngularEditor.findDocumentOrShadowRoot(editor);
    const domSelection = root.getSelection();
    if (this.isComposing || !domSelection || !AngularEditor.isFocused(editor)) {
      return;
    }

    const hasDomSelection = domSelection.type !== 'None';

    // If the DOM selection is properly unset, we're done.
    if (!selection && !hasDomSelection) {
      return;
    }

    // verify that the dom selection is in the editor
    const editorElement = EDITOR_TO_ELEMENT.get(editor)!;
    let hasDomSelectionInEditor = false;
    if (
      editorElement.contains(domSelection.anchorNode) &&
      editorElement.contains(domSelection.focusNode)
    ) {
      hasDomSelectionInEditor = true;
    }

    // If the DOM selection is in the editor and the editor selection is already correct, we're done.
    if (hasDomSelection && hasDomSelectionInEditor && selection) {
      const slateRange = AngularEditor.toSlateRange(editor, domSelection, {
        exactMatch: true, // see https://github.com/ianstormtaylor/slate/pull/4304
      });
      if (slateRange && Range.equals(slateRange, selection)) {
        return;
      }
    }

    // when <Editable/> is being controlled through external value
    // then its children might just change - DOM responds to it on its own
    // but Slate's value is not being updated through any operation
    // and thus it doesn't transform selection on its own
    if (selection && !AngularEditor.hasRange(editor, selection)) {
      editor.selection = AngularEditor.toSlateRange(editor, domSelection, {
        exactMatch: false
      });
      return;
    }

    // Otherwise the DOM selection is out of sync, so update it.
    const el = AngularEditor.toDOMNode(editor, editor);
    this.isUpdatingSelection = true;

    const newDomRange = selection && AngularEditor.toDOMRange(editor, selection);

    if (newDomRange) {
      if (Range.isBackward(selection!)) {
        domSelection.setBaseAndExtent(
          newDomRange.endContainer,
          newDomRange.endOffset,
          newDomRange.startContainer,
          newDomRange.startOffset
        );
      } else {
        domSelection.setBaseAndExtent(
          newDomRange.startContainer,
          newDomRange.startOffset,
          newDomRange.endContainer,
          newDomRange.endOffset
        );
      }
      const leafEl = newDomRange.startContainer.parentElement!;
      leafEl.getBoundingClientRect = newDomRange.getBoundingClientRect.bind(
        newDomRange
      );
      scrollIntoView(leafEl, {
        scrollMode: 'if-needed',
        boundary: el
      });
      // @ts-ignore
      delete leafEl.getBoundingClientRect;
    } else {
      domSelection.removeAllRanges();
    }

    setTimeout(() => {
      // COMPAT: In Firefox, it's not enough to create a range, you also need
      // to focus the contenteditable element too. (2016/11/16)
      if (newDomRange && IS_FIREFOX) {
        el.focus();
      }

      this.isUpdatingSelection = false;
    });
  }

  toSlateSelection() {
    if (
      !this.readonly &&
      !this.isComposing &&
      !this.isUpdatingSelection &&
      !this.isDraggingInternally
    ) {
      const editor = this.editor;
      const root = AngularEditor.findDocumentOrShadowRoot(editor);
      const {activeElement} = root;
      const el = AngularEditor.toDOMNode(editor, editor);
      const domSelection = root.getSelection();
      if (activeElement === el) {
        this.latestElement = activeElement;
        IS_FOCUSED.set(editor, true);
      } else {
        IS_FOCUSED.delete(editor);
      }

      if (!domSelection) {
        return Transforms.deselect(editor);
      }

      const {anchorNode, focusNode} = domSelection;
      const anchorNodeSelectable =
        hasEditableTarget(editor, anchorNode) ||
        isTargetInsideVoid(editor, anchorNode);

      const focusNodeSelectable =
        hasEditableTarget(editor, focusNode) ||
        isTargetInsideVoid(editor, focusNode);
      if (anchorNodeSelectable && focusNodeSelectable) {
        const range = AngularEditor.toSlateRange(editor, domSelection, {
          exactMatch: false
        });
        Transforms.select(editor, range);
      } else {
        Transforms.deselect(editor);
      }
    }
  }

  updateWeakMap() {
    let window;
    const nativeEl = this.elementRef.nativeElement;
    const editor = this.editor;

    if (nativeEl && (window = getDefaultView(nativeEl))) {
      EDITOR_TO_WINDOW.set(editor, window);
      EDITOR_TO_ELEMENT.set(editor, nativeEl);
      NODE_TO_ELEMENT.set(editor, nativeEl);
      ELEMENT_TO_NODE.set(nativeEl, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    }
  }

  private onDOMBeforeInput(event: InputEvent) {
    if (
      this.readonly ||
      isEventHandled(event, this.nsOnBeforeInput) ||
      !hasEditableTarget(this.editor, event.target)
    ) {
      return;
    }
    if (!HAS_BEFORE_INPUT_SUPPORT) {
      // COMPAT: Certain browsers don't support the `beforeinput` event, so we
      // fall back to React's leaky polyfill instead just for it. It
      // only works for the `insertText` input type.
      event.preventDefault();
      if (!this.isComposing) {
        const text = (event as any).data as string;
        Editor.insertText(this.editor, text);
      }
    } else if (HAS_BEFORE_INPUT_SUPPORT) {
      const editor = this.editor;
      const {selection} = editor;
      const {inputType: type} = event;
      const data = (event as any).dataTransfer || event.data || undefined;

      // These two types occur while a user is composing text and can't be
      // cancelled. Let them through and wait for the composition to end.
      if (
        type === 'insertCompositionText' ||
        type === 'deleteCompositionText'
      ) {
        return;
      }

      event.preventDefault();

      // COMPAT: For the deleting forward/backward input types we don't want
      // to change the selection because it is the range that will be deleted,
      // and those commands determine that for themselves.
      if (!type.startsWith('delete') || type.startsWith('deleteBy')) {
        const [targetRange] = (event as any).getTargetRanges();

        if (targetRange) {
          const range = AngularEditor.toSlateRange(editor, targetRange, {
            exactMatch: false
          });

          if (!selection || !Range.equals(selection, range)) {
            Transforms.select(editor, range);
          }
        }
      }

      // COMPAT: If the selection is expanded, even if the command seems like
      // a delete forward/backward command it should delete the selection.
      if (
        selection &&
        Range.isExpanded(selection) &&
        type.startsWith('delete')
      ) {
        const direction = type.endsWith('Backward') ? 'backward' : 'forward';
        Editor.deleteFragment(editor, {direction});
        return;
      }

      switch (type) {
        case 'deleteByComposition':
        case 'deleteByCut':
        case 'deleteByDrag': {
          Editor.deleteFragment(editor);
          break;
        }

        case 'deleteContent':
        case 'deleteContentForward': {
          Editor.deleteForward(editor);
          break;
        }

        case 'deleteContentBackward': {
          Editor.deleteBackward(editor);
          break;
        }

        case 'deleteEntireSoftLine': {
          Editor.deleteBackward(editor, {unit: 'line'});
          Editor.deleteForward(editor, {unit: 'line'});
          break;
        }

        case 'deleteHardLineBackward': {
          Editor.deleteBackward(editor, {unit: 'block'});
          break;
        }

        case 'deleteSoftLineBackward': {
          Editor.deleteBackward(editor, {unit: 'line'});
          break;
        }

        case 'deleteHardLineForward': {
          Editor.deleteForward(editor, {unit: 'block'});
          break;
        }

        case 'deleteSoftLineForward': {
          Editor.deleteForward(editor, {unit: 'line'});
          break;
        }

        case 'deleteWordBackward': {
          Editor.deleteBackward(editor, {unit: 'word'});
          break;
        }

        case 'deleteWordForward': {
          Editor.deleteForward(editor, {unit: 'word'});
          break;
        }

        case 'insertLineBreak':
        case 'insertParagraph': {
          Editor.insertBreak(editor);
          break;
        }

        case 'insertFromComposition':
        case 'insertFromDrop':
        case 'insertFromPaste':
        case 'insertFromYank':
        case 'insertReplacementText':
        case 'insertText': {
          if (type === 'insertFromComposition') {
            // COMPAT: in Safari, `compositionend` is dispatched after the
            // `beforeinput` for "insertFromComposition". But if we wait for it
            // then we will abort because we're still composing and the selection
            // won't be updated properly.
            // https://www.w3.org/TR/input-events-2/
            this.isComposing = false;
          }

          const window = AngularEditor.getWindow(editor);
          if (data instanceof window.DataTransfer) {
            AngularEditor.insertData(editor, data as DataTransfer);
          } else if (typeof data === 'string') {
            Editor.insertText(editor, data);
          }

          break;
        }
      }
    }
  }

  private onDOMClick(event: Event) {
    if (
      !this.readonly &&
      hasTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnClick) &&
      isDOMNode(event.target)
    ) {
      const node = AngularEditor.toSlateNode(this.editor, event.target);
      const path = AngularEditor.findPath(this.editor, node);
      const start = Editor.start(this.editor, path);
      const end = Editor.end(this.editor, path);

      const startVoid = Editor.void(this.editor, {at: start});
      const endVoid = Editor.void(this.editor, {at: end});
      if (
        startVoid &&
        endVoid &&
        Path.equals(startVoid[1], endVoid[1])
      ) {
        const range = Editor.range(this.editor, start);
        Transforms.select(this.editor, range);
      }
    }
  }

  private onDOMCompositionStart(event: CompositionEvent) {
    if (
      hasEditableTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnCompositionStart)
    ) {
      const {selection} = this.editor;
      if (selection && Range.isExpanded(selection)) {
        Editor.deleteFragment(this.editor);
      }
    }
  }

  private onDOMCompositionUpdate(event: CompositionEvent) {
    if (
      hasEditableTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnCompositionUpdate)
    ) {
      this.isComposing = true;
    }
  }

  private onDOMCompositionEnd(event: CompositionEvent) {
    if (
      hasEditableTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnCompositionEnd)
    ) {
      this.isComposing = false;
      // COMPAT: In Chrome, `beforeinput` events for compositions
      // aren't correct and never fire the "insertFromComposition"
      // type that we need. So instead, insert whenever a composition
      // ends since it will already have been committed to the DOM.
      if (!IS_SAFARI && !IS_FIREFOX && event.data) {
        Editor.insertText(this.editor, event.data);
      }
    }
  }

  private onDOMBlur(event: FocusEvent) {
    if (
      this.readonly ||
      this.isUpdatingSelection ||
      !hasEditableTarget(this.editor, event.target) ||
      isEventHandled(event, this.nsOnBlur)
    ) {
      return;
    }

    // COMPAT: If the current `activeElement` is still the previous
    // one, this is due to the window being blurred when the tab
    // itself becomes unfocused, so we want to abort early to allow to
    // editor to stay focused when the tab becomes focused again.
    const root = AngularEditor.findDocumentOrShadowRoot(this.editor);
    if (this.latestElement === root.activeElement) {
      return;
    }

    const {relatedTarget} = event;
    const el = AngularEditor.toDOMNode(this.editor, this.editor);

    // COMPAT: The event should be ignored if the focus is returning
    // to the editor from an embedded editable element (eg. an <input>
    // element inside a void node).
    if (relatedTarget === el) {
      return;
    }

    // COMPAT: The event should be ignored if the focus is moving from
    // the editor to inside a void node's spacer element.
    // if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
    //   return;
    // }

    // COMPAT: The event should be ignored if the focus is moving to a
    // non- editable section of an element that isn't a void node (eg.
    // a list item of the check list example).
    if (
      relatedTarget != null &&
      isDOMNode(relatedTarget) &&
      AngularEditor.hasDOMNode(this.editor, relatedTarget)
    ) {
      const node = AngularEditor.toSlateNode(this.editor, relatedTarget);

      if (Element.isElement(node) && !this.editor.isVoid(node)) {
        return;
      }
    }

    // COMPAT: Safari doesn't always remove the selection even if the content-
    // editable element no longer has focus. Refer to:
    // https://stackoverflow.com/questions/12353247/force-contenteditable-div-to-stop-accepting-input-after-it-loses-focus-under-web
    if (IS_SAFARI) {
      const domSelection = root.getSelection();
      domSelection?.removeAllRanges();
    }

    IS_FOCUSED.delete(this.editor);
  }

  private onDOMCopy(event: ClipboardEvent) {
    if (hasEditableTarget(this.editor, event.target) && !isEventHandled(event, this.nsOnCopy)) {
      event.preventDefault();
      AngularEditor.setFragmentData(this.editor, event.clipboardData);
    }
  }

  private onDOMCut(event: ClipboardEvent) {
    if (
      !this.readonly &&
      hasEditableTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnCut)
    ) {
      event.preventDefault();
      AngularEditor.setFragmentData(this.editor, event.clipboardData);
      const {selection} = this.editor;

      if (selection) {
        if (Range.isExpanded(selection)) {
          Editor.deleteFragment(this.editor);
        } else {
          const node = Node.parent(this.editor, selection.anchor.path);

          if (Editor.isVoid(this.editor, node)) {
            Transforms.delete(this.editor);
          }
        }
      }
    }
  }

  private onDOMDragEnd(event: DragEvent) {
    // When dropping on a different droppable element than the current editor,
    // `onDrop` is not called. So we need to clean up in `onDragEnd` instead.
    // Note: `onDragEnd` is only called when `onDrop` is not called
    if (
      !this.readonly &&
      this.isDraggingInternally &&
      hasTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnDragEnd)
    ) {
      this.isDraggingInternally = false;
    }
  }

  private onDOMDragOver(event: DragEvent) {
    if (
      hasTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnDragOver)
    ) {
      const node = AngularEditor.toSlateNode(this.editor, event.target);

      if (Editor.isVoid(this.editor, node)) {
        event.preventDefault();
      }
    }
  }

  private onDOMDragStart(event: DragEvent) {
    if (
      hasTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnDragStart)
    ) {
      const node = AngularEditor.toSlateNode(this.editor, event.target);
      const path = AngularEditor.findPath(this.editor, node);
      const voidMatch =
        Editor.isVoid(this.editor, node) ||
        Editor.void(this.editor, { at: path, voids: true });

      // If starting a drag on a void node, make sure it is selected
      // so that it shows up in the selection's fragment.
      if (voidMatch) {
        const range = Editor.range(this.editor, path);
        Transforms.select(this.editor, range);
      }

      this.isDraggingInternally = true;

      AngularEditor.setFragmentData(this.editor, event.dataTransfer);
    }
  }

  private onDOMDrop(event: DragEvent) {
    if (
      !this.readonly &&
      hasTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnDrop)
    ) {
      event.preventDefault();
      const editor = this.editor;
      // Keep a reference to the dragged range before updating selection
      const draggedRange = editor.selection;

      // Find the range where the drop happened
      const range = AngularEditor.findEventRange(editor, event);
      const data = event.dataTransfer;
      Transforms.select(editor, range);

      if (this.isDraggingInternally) {
        if (draggedRange) {
          Transforms.delete(editor, {
            at: draggedRange,
          });
        }

        this.isDraggingInternally = false;
      }

      AngularEditor.insertData(editor, data);

      // When dragging from another source into the editor, it's possible
      // that the current editor does not have focus.
      if (!AngularEditor.isFocused(editor)) {
        AngularEditor.focus(editor);
      }
    }
  }

  private onDOMFocus(event: FocusEvent) {
    if (
      !this.readonly &&
      !this.isUpdatingSelection &&
      hasEditableTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnFocus)
    ) {
      const el = AngularEditor.toDOMNode(this.editor, this.editor);
      const root = AngularEditor.findDocumentOrShadowRoot(this.editor);
      this.latestElement = root.activeElement;

      if (IS_FIREFOX && event.target !== el) {
        el.focus();
        return;
      }

      IS_FOCUSED.set(this.editor, true);
    }
  }

  private onDOMKeyDown(event: KeyboardEvent) {
    const editor = this.editor;
    if (
      !this.readonly &&
      hasEditableTarget(editor, event.target) &&
      !isEventHandled(event, this.nsOnKeyDown)
    ) {
      const nativeEvent = event;
      const {selection} = editor;

      const element = editor.children[selection !== null ? selection.focus.path[0] : 0];
      const isRTL = getDirection(Node.string(element)) === 'rtl';

      // COMPAT: Since we prevent the default behavior on
      // `beforeinput` events, the browser doesn't think there's ever
      // any history stack to undo or redo, so we have to manage these
      // hotkeys ourselves. (2019/11/06)
      if (Hotkeys.isRedo(nativeEvent)) {
        event.preventDefault();
        const maybeHistoryEditor: any = editor;

        if (typeof maybeHistoryEditor.redo === 'function') {
          maybeHistoryEditor.redo();
        }

        return;
      }

      if (Hotkeys.isUndo(nativeEvent)) {
        event.preventDefault();
        const maybeHistoryEditor: any = editor;

        if (typeof maybeHistoryEditor.undo === 'function') {
          maybeHistoryEditor.undo();
        }

        return;
      }

      // COMPAT: Certain browsers don't handle the selection updates
      // properly. In Chrome, the selection isn't properly extended.
      // And in Firefox, the selection isn't properly collapsed.
      // (2017/10/17)
      if (Hotkeys.isMoveLineBackward(nativeEvent)) {
        event.preventDefault();
        Transforms.move(editor, {unit: 'line', reverse: true});
        return;
      }

      if (Hotkeys.isMoveLineForward(nativeEvent)) {
        event.preventDefault();
        Transforms.move(editor, {unit: 'line'});
        return;
      }

      if (Hotkeys.isExtendLineBackward(nativeEvent)) {
        event.preventDefault();
        Transforms.move(editor, {
          unit: 'line',
          edge: 'focus',
          reverse: true,
        });
        return;
      }

      if (Hotkeys.isExtendLineForward(nativeEvent)) {
        event.preventDefault();
        Transforms.move(editor, {unit: 'line', edge: 'focus'});
        return;
      }

      // COMPAT: If a void node is selected, or a zero-width text node
      // adjacent to an inline is selected, we need to handle these
      // hotkeys manually because browsers won't be able to skip over
      // the void node with the zero-width space not being an empty
      // string.
      if (Hotkeys.isMoveBackward(nativeEvent)) {
        event.preventDefault();

        if (selection && Range.isCollapsed(selection)) {
          Transforms.move(editor, {reverse: !isRTL});
        } else {
          Transforms.collapse(editor, {edge: 'start'});
        }

        return;
      }

      if (Hotkeys.isMoveForward(nativeEvent)) {
        event.preventDefault();

        if (selection && Range.isCollapsed(selection)) {
          Transforms.move(editor, {reverse: isRTL});
        } else {
          Transforms.collapse(editor, {edge: 'end'});
        }

        return;
      }

      if (Hotkeys.isMoveWordBackward(nativeEvent)) {
        event.preventDefault();

        if (selection && Range.isExpanded(selection)) {
          Transforms.collapse(editor, { edge: 'focus' });
        }

        Transforms.move(editor, { unit: 'word', reverse: !isRTL });
        return;
      }

      if (Hotkeys.isMoveWordForward(nativeEvent)) {
        event.preventDefault();

        if (selection && Range.isExpanded(selection)) {
          Transforms.collapse(editor, { edge: 'focus' });
        }

        Transforms.move(editor, { unit: 'word', reverse: isRTL });
        return;
      }

      // COMPAT: Certain browsers don't support the `beforeinput` event, so we
      // fall back to guessing at the input intention for hotkeys.
      // COMPAT: In iOS, some of these hotkeys are handled in the
      if (!HAS_BEFORE_INPUT_SUPPORT) {
        // We don't have a core behavior for these, but they change the
        // DOM if we don't prevent them, so we have to.
        if (
          Hotkeys.isBold(nativeEvent) ||
          Hotkeys.isItalic(nativeEvent) ||
          Hotkeys.isTransposeCharacter(nativeEvent)
        ) {
          event.preventDefault();
          return;
        }

        if (Hotkeys.isSplitBlock(nativeEvent)) {
          event.preventDefault();
          Editor.insertBreak(editor);
          return;
        }

        if (Hotkeys.isDeleteBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && Range.isExpanded(selection)) {
            Editor.deleteFragment(editor, {direction: 'backward'});
          } else {
            Editor.deleteBackward(editor);
          }

          return;
        }

        if (Hotkeys.isDeleteForward(nativeEvent)) {
          event.preventDefault();

          if (selection && Range.isExpanded(selection)) {
            Editor.deleteFragment(editor, {direction: 'forward'});
          } else {
            Editor.deleteForward(editor);
          }

          return;
        }

        if (Hotkeys.isDeleteLineBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && Range.isExpanded(selection)) {
            Editor.deleteFragment(editor, {direction: 'backward'});
          } else {
            Editor.deleteBackward(editor, {unit: 'line'});
          }

          return;
        }

        if (Hotkeys.isDeleteLineForward(nativeEvent)) {
          event.preventDefault();

          if (selection && Range.isExpanded(selection)) {
            Editor.deleteFragment(editor, {direction: 'forward'});
          } else {
            Editor.deleteForward(editor, {unit: 'line'});
          }

          return;
        }

        if (Hotkeys.isDeleteWordBackward(nativeEvent)) {
          event.preventDefault();

          if (selection && Range.isExpanded(selection)) {
            Editor.deleteFragment(editor, {direction: 'backward'});
          } else {
            Editor.deleteBackward(editor, {unit: 'word'});
          }

          return;
        }

        if (Hotkeys.isDeleteWordForward(nativeEvent)) {
          event.preventDefault();

          if (selection && Range.isExpanded(selection)) {
            Editor.deleteFragment(editor, {direction: 'forward'});
          } else {
            Editor.deleteForward(editor, {unit: 'word'});
          }

          return;
        }
      } else {
        if (IS_CHROME || IS_SAFARI) {
          // COMPAT: Chrome and Safari support `beforeinput` event but do not fire
          // an event when deleting backwards in a selected void inline node
          if (
            selection &&
            (Hotkeys.isDeleteBackward(nativeEvent) ||
              Hotkeys.isDeleteForward(nativeEvent)) &&
            Range.isCollapsed(selection)
          ) {
            const currentNode = Node.parent(
              editor,
              selection.anchor.path
            );

            if (
              Element.isElement(currentNode) &&
              Editor.isVoid(editor, currentNode) &&
              Editor.isInline(editor, currentNode)
            ) {
              event.preventDefault();
              Transforms.delete(editor, {unit: 'block'});

              return;
            }
          }
        }
      }
    }
  }

  private onDOMPaste(event: ClipboardEvent) {
    if (
      !this.readonly &&
      hasEditableTarget(this.editor, event.target) &&
      !isEventHandled(event, this.nsOnPaste)
    ) {
      // COMPAT: Certain browsers don't support the `beforeinput` event, so we
      // fall back to React's `onPaste` here instead.
      // COMPAT: Firefox, Chrome and Safari don't emit `beforeinput` events
      // when "paste without formatting" is used, so fallback. (2020/02/20)
      if (
        !HAS_BEFORE_INPUT_SUPPORT ||
        isPlainTextOnlyPaste(event)
      ) {
        event.preventDefault();
        AngularEditor.insertData(this.editor, event.clipboardData);
      }
    }
  }

  private onDOMInput(event: InputEvent) {
    const placeholderDOM = document.getElementById('slate-placeholder');
    if (this.noInputValue && placeholderDOM) {
      placeholderDOM.style.display = 'none';
    }
  }

  private addEventListener(eventName: string, handler: EventListener, target: HTMLElement | Document = this.elementRef.nativeElement) {
    this.manualListeners.push(
      this.renderer2.listen(target, eventName, handler)
    );
  }
}
