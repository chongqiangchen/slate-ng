import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  Input, OnChanges,
  OnInit, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Ancestor, BaseRange, Descendant, Editor, Element, Node, NodeEntry, Range} from 'slate';
import {ElementComponent} from '../element/element.component';
import {TextComponent} from '../text/text.component';
import {ComponentPortal} from '@angular/cdk/portal';
import {
  CHILD_PORTALS_TOKEN,
  CURRENT_NODE_TOKEN,
  DECORATIONS_TOKEN,
  IS_LAST_TOKEN,
  KEY_TOKEN,
  NODE_INDEX_TOKEN,
  PARENT_NODE_TOKEN,
  SELECTION_TOKEN
} from '../element/token';
import {AngularEditor} from '../../plugins/angular-editor';
import {
  EDITOR_TO_ON_CHANGE,
  KEY_TO_PORTAL,
  NODE_TO_INDEX,
  NODE_TO_PARENT,
  PLACEHOLDER_SYMBOL
} from '../../utils/weak-maps';
import {Key} from '../../utils/key';
import {isDecoratorRangeListEqual} from '../../utils/range-list';
import {NsDepsService} from '../../services/ns-deps.service';
import {RegistryNsElement} from '../../services/registry-ns-element.service';
import {NsEditorService} from '../../services/ns-editor.service';

@Component({
  selector: 'ns-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ChildrenComponent implements OnInit, OnChanges {
  @Input() placeholder: string;
  @Input() decorate: (entry: NodeEntry) => Range[];

  showPortals = [];
  decorations: (BaseRange & { placeholder?: string | undefined })[];

  constructor(
    private customElementService: RegistryNsElement,
    private editorService: NsEditorService,
    private injector: Injector,
    private cdr: ChangeDetectorRef,
    private deps: NsDepsService
  ) {
  }

  ngOnInit(): void {
    const editor = this.editorService.editor;
    this.getDecorations(editor);
    this.showPortals = this.resolvePortals(editor);
    const onChange = EDITOR_TO_ON_CHANGE.get(editor);
    EDITOR_TO_ON_CHANGE.set(editor, () => {
      this.getDecorations(editor);
      this.showPortals = this.resolvePortals(editor);
      this.cdr.detectChanges();
      // 需在resolvePortals结束后进行触发toNativeSelection事件，不然会造成得到的KEY_TO_ELEMENT错误
      onChange();
    });
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  computedPortal(providers, cNode, key): ComponentPortal<any> {
    let portal = null;
    this.deps.set(key, this.customElementService.getInjector(providers, this.injector));
    if (Element.isElement(cNode)) {
      portal = this.customElementService.getComponentPortal(
        (cNode as any).type,
        [{
          provide: KEY_TOKEN,
          useValue: key
        }],
        this.injector,
        ElementComponent
      );
    } else {
      portal = this.customElementService.getComponentPortal(
        'text',
        [{
          provide: KEY_TOKEN,
          useValue: key
        }],
        this.injector,
        TextComponent
      );
    }
    return portal;
  }

  resolvePortals(pNode: Ancestor): Array<ComponentPortal<any>> {
    const children = [];
    const editor = this.editorService.editor;
    const path = AngularEditor.findPath(editor, pNode);
    const selection = editor.selection;
    const isLeafBlock =
      Element.isElement(pNode) &&
      !editor.isInline(pNode) &&
      Editor.hasInlines(editor, pNode);

    for (let i = 0; i < pNode.children.length; i++) {
      const cNode = pNode.children[i] as Ancestor | Descendant;
      const idx = i;
      const p = path.concat(idx);
      const hasKey = AngularEditor.hasKey(cNode);
      const key = AngularEditor.findKey(editor, cNode);
      const isLast = isLeafBlock && idx === pNode.children.length - 1;
      const range = Editor.range(editor, p);
      const sel = selection && Range.intersection(range, selection);

      const ds = this.decorate([cNode, p]);
      for (const dec of this.decorations) {
        const d = Range.intersection(dec, range);

        if (d) {
          ds.push(d);
        }
      }

      let childPortals = [];
      let portal = null;

      NODE_TO_INDEX.set(cNode, idx);
      NODE_TO_PARENT.set(cNode, pNode);

      if ((cNode as Ancestor).children) {
        childPortals = this.resolvePortals(cNode as Ancestor);
      }

      const providers = [
        {
          provide: CHILD_PORTALS_TOKEN,
          useValue: childPortals
        },
        {
          provide: PARENT_NODE_TOKEN,
          useValue: pNode
        },
        {
          provide: CURRENT_NODE_TOKEN,
          useValue: cNode
        },
        {
          provide: NODE_INDEX_TOKEN,
          useValue: idx
        },
        {
          provide: KEY_TOKEN,
          useValue: key
        },
        {
          provide: DECORATIONS_TOKEN,
          useValue: ds || []
        },
        {
          provide: IS_LAST_TOKEN,
          useValue: isLast
        },
        {
          provide: SELECTION_TOKEN,
          useValue: sel
        }
      ];

      const prePortal = KEY_TO_PORTAL.get(key);
      const preDeps = this.deps.get(key);

      // 减少重新创建portal
      if (hasKey && prePortal && preDeps) {
        const preNode = preDeps.injector.get(CURRENT_NODE_TOKEN);
        const preDecorations = preDeps.injector.get(DECORATIONS_TOKEN);
        const curElementComp = this.customElementService.get((cNode as any).type)?.comp || ElementComponent;

        if (Element.isElement(cNode)) {
          if (
            preNode === cNode &&
            isDecoratorRangeListEqual(preDecorations, ds)
          ) {
            children.push(prePortal);
            continue;
          } else if (
            (preNode as any).type === (cNode as any).type &&
            prePortal.component === curElementComp
          ) {
            this.deps.set(key, this.customElementService.getInjector(providers, this.injector));
            children.push(prePortal);
            continue;
          }
        } else {
          const preParentNode = preDeps.injector.get(PARENT_NODE_TOKEN);
          const preIsLast = preDeps.injector.get(IS_LAST_TOKEN);
          const curTextComp = this.customElementService.get('text')?.comp || TextComponent;
          if (
            preParentNode === pNode &&
            preIsLast === isLast &&
            preNode === cNode &&
            isDecoratorRangeListEqual(preDecorations, ds)
          ) {
            children.push(prePortal);
            continue;
          } else if (prePortal.component === curTextComp) {
            this.deps.set(key, this.customElementService.getInjector(providers, this.injector));
            children.push(prePortal);
            continue;
          }
        }
      }

      portal = this.computedPortal(providers, cNode, key);
      KEY_TO_PORTAL.set(key, portal);
      children.push(portal);
    }

    return children;
  }

  getDecorations(editor) {
    this.decorations = this.decorate([editor, []]);
    if (
      this.placeholder &&
      editor.children.length === 1 &&
      Array.from(Node.texts(editor)).length === 1 &&
      Node.string(editor) === ''
    ) {
      const start = Editor.start(editor, []);
      this.decorations.push({
        [PLACEHOLDER_SYMBOL]: true,
        placeholder: this.placeholder,
        anchor: start,
        focus: start
      });
    }
  }

  trackBy(index, item: ComponentPortal<any>) {
    return (item.injector.get(KEY_TOKEN) as Key).id || index;
  }
}
