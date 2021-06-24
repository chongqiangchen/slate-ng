import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
  StaticProvider,
  ViewEncapsulation
} from '@angular/core';
import {
  CURRENT_NODE_TOKEN,
  IS_LAST_TOKEN,
  KEY_TOKEN,
  LEAF_CHILD_PORTAL_TOKEN,
  LEAF_TOKEN,
  PARENT_NODE_TOKEN
} from '../element/token';
import {Key} from '../../utils/key';
import {Editor, Text as SlateText, Text} from 'slate';
import {LeafComponent} from './leaf/leaf.component';
import {LeafChildComponent} from './leaf-child/leaf-child.component';
import {BaseTextComponent} from './base-text';
import {NsDepsService} from '../../services/ns-deps.service';
import {RegistryNsElement} from '../../services/registry-ns-element.service';
import {NsEditorService} from "../../services/ns-editor.service";

@Component({
  selector: 'ns-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TextComponent extends BaseTextComponent implements OnInit {
  static type = 'text';
  leaves: SlateText[] = [];
  leafPortals = [];
  pNodeIsInline = true;

  get pNodeIsVoid() {
    return Editor.isVoid(this.editorService.editor, this.pNode);
  }

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public elementRef: ElementRef,
    public cdr: ChangeDetectorRef,
    private customService: RegistryNsElement,
    private injector: Injector,
    private editorService: NsEditorService
  ) {
    super(key, deps, elementRef, cdr);
  }

  ngOnInit(): void {
    if (this.pNodeIsVoid) {
      this.pNodeIsInline = this.editorService.editor.isInline(this.pNode);
    }
    this.leaves = SlateText.decorations(this.cNode, this.pNodeIsVoid ? [] : this.decorations);
    this.getLeafPortals();
  }

  getLeafPortals() {
    this.leaves.forEach(leaf => {
      this.leafPortals.push(this.getLeafPortal(leaf));
    });
  }

  getLeafPortal(leaf: Text) {
    const providers: StaticProvider[] = [
      {
        provide: IS_LAST_TOKEN,
        useValue: this.pNodeIsVoid ? false : this.isLast
      },
      {
        provide: CURRENT_NODE_TOKEN,
        useValue: this.cNode
      },
      {
        provide: PARENT_NODE_TOKEN,
        useValue: this.pNode
      },
      {
        provide: LEAF_TOKEN,
        useValue: leaf
      }
    ];
    const leafChildPortal = this.customService.getComponentPortal('leaf-child', providers, this.injector, LeafChildComponent);
    const leafProviders: StaticProvider[] = providers.concat({
      provide: LEAF_CHILD_PORTAL_TOKEN,
      useValue: leafChildPortal
    });
    return this.customService.getComponentPortal('leaf', leafProviders, this.injector, LeafComponent);
  }
}
