import { Component, ElementRef, HostBinding, Inject, OnInit } from '@angular/core';
import { BaseElementComponent, NsEditorService, Key, KEY_TOKEN, NsDepsService } from 'slate-ng';

@Component({
  selector: 'div[app-editable-void]',
  templateUrl: './editable-void.component.html',
  styleUrls: ['./editable-void.component.less']
})
export class EditableVoidComponent extends BaseElementComponent {
  static type = 'editable-void';
  @HostBinding('attr.contenteditable') contentEditable = false;
  name = '';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    protected deps: NsDepsService,
    protected editorService: NsEditorService,
    protected elementRef?: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}
