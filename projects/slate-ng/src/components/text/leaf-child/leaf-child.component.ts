import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  Inject,
  Injector,
  OnDestroy,
  OnInit, TemplateRef, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { PLACEHOLDER_SYMBOL } from '../../../utils/weak-maps';
import {
  CURRENT_NODE_TOKEN,
  IS_LAST_TOKEN,
  LEAF_TOKEN,
  PARENT_NODE_TOKEN,
  PLACEHOLDER_CHILDREN_TOKEN
} from '../../element/token';
import {Editor, Node, Path, Text} from 'slate';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { RegistryNsElement } from '../../../services/registry-ns-element.service';
import {AngularEditor} from "../../../plugins/angular-editor";
import {NsEditorService} from "../../../services/ns-editor.service";

@Component({
  selector: 'ns-leaf-child',
  templateUrl: './leaf-child.component.html',
  styleUrls: ['./leaf-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LeafChildComponent implements OnInit, AfterViewInit, OnDestroy {
  editorEl: HTMLElement;
  placeholderPortal = null;

  @ViewChild('ZeroWidthString') ZeroWidthStringTmpl: TemplateRef<any>;
  @ViewChild('TextString') TextStringTmpl: TemplateRef<any>;

  template: TemplateRef<any>;
  context: object;

  constructor(
    @Inject(IS_LAST_TOKEN) readonly isLast: boolean,
    @Inject(CURRENT_NODE_TOKEN) readonly cNode: any,
    @Inject(PARENT_NODE_TOKEN) readonly pNode: any,
    @Inject(LEAF_TOKEN) readonly leaf: Text,
    private customService: RegistryNsElement,
    private injector: Injector,
    private editorService: NsEditorService,
    private cdr: ChangeDetectorRef
  ) {
  }

  get hasPlaceholder() {
    return this.leaf[PLACEHOLDER_SYMBOL];
  }

  ngOnInit() {
    if (this.hasPlaceholder) {
      this.placeholderPortal =
        this.customService.getComponentPortal('placeholder', [{
          provide: PLACEHOLDER_CHILDREN_TOKEN,
          useValue: (this.leaf as any).placeholder
        }], this.injector, PlaceholderComponent);
    }
  }

  ngAfterViewInit() {
    this.generateStringData();
    this.cdr.detectChanges();

    // todo: 可以重构，使用editorService
    const editorEl = this.editorEl = document.querySelector<HTMLDivElement>(
      '[data-slate-ng-editor="true"]'
    );

    const placeholderEl = document.querySelector<HTMLElement>('[data-slate-placeholder="true"]');

    if (!placeholderEl || !editorEl) {
      return;
    }

    editorEl.style.minHeight = `${placeholderEl.clientHeight}px`;
  }

  ngOnDestroy() {
    this.editorEl && (this.editorEl.style.minHeight = 'auto');
  }

  private generateStringData() {
    const editor = this.editorService.editor;
    const path = AngularEditor.findPath(editor, this.cNode);
    const parentPath = Path.parent(path);
    if (editor.isVoid(this.pNode)) {
      this.template = this.ZeroWidthStringTmpl;
      this.context = {
        length: Node.string(this.pNode).length,
        isLineBreak: false
      };
    }

    if (
      this.leaf.text === '' &&
      this.pNode.children[this.pNode.children.length - 1] === this.cNode &&
      !editor.isInline(this.pNode) &&
      Editor.string(editor, parentPath) === ''
    ) {
      this.template = this.ZeroWidthStringTmpl;
      this.context = {
        length: 0,
        isLineBreak: true
      };
    }

    if (this.leaf.text === '') {
      this.template = this.ZeroWidthStringTmpl;
      this.context = {
        length: 0,
        isLineBreak: false
      };
    }

    if (this.isLast && this.leaf.text.slice(-1) === '\n') {
      this.template = this.TextStringTmpl;
      this.context = {
        isTrailing: true,
        text: this.leaf.text
      };
    }

    if (!this.template) {
      this.template = this.TextStringTmpl;
      this.context = {
        isTrailing: false,
        text: this.leaf.text
      };
    }
  }
}
