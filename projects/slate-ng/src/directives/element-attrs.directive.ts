import { Directive, HostBinding, Inject, OnInit } from '@angular/core';
import { CURRENT_NODE_TOKEN, KEY_TOKEN } from '../components/element/token';
import { Key } from '../utils/key';
import { NsDepsService } from '../services/ns-deps.service';
import { NsEditorService } from '../services/ns-editor.service';
import { Editor, Node } from 'slate';
import getDirection from 'direction';

@Directive({
  selector: '[nsElementAttrs]'
})
export class ElementAttrsDirective implements OnInit {
  @HostBinding('attr.data-slate-node') dataSlateNode = 'element';
  @HostBinding('attr.data-slate-void')  dataSlateVoid = undefined;
  @HostBinding('attr.data-slate-inline') dataSlateInline = undefined;
  @HostBinding('attr.contenteditable') contentEditable = undefined;
  @HostBinding('attr.dir')  dir = undefined;

  get injector() {
    return this.deps.get(this.key)?.injector;
  }

  get cNode() {
    return this.injector.get(CURRENT_NODE_TOKEN);
  }

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
  ) { }

  ngOnInit() {
    const editor = this.editorService.editor;
    console.log(editor);
    const isInline = editor.isInline(this.cNode);
    isInline && (this.dataSlateInline = true);

    if (!isInline && Editor.hasInlines(editor, this.cNode)) {
      const text = Node.string(this.cNode);
      const dir = getDirection(text);

      if (dir === 'rtl') {
        this.dir = dir;
      }
    }
    if (Editor.isVoid(editor, this.cNode)) {
      this.dataSlateVoid = true;

      if (isInline) {
        this.contentEditable = false;
      }
    }
  }
}
