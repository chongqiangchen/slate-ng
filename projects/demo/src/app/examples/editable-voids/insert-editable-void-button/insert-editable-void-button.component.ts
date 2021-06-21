import { Component, OnInit } from '@angular/core';
import { NsEditorService } from 'slate-ng';
import { Transforms } from 'slate';
import { EditableVoidElement } from '../../../../../custom-types';

@Component({
  selector: 'app-insert-editable-void-button',
  templateUrl: './insert-editable-void-button.component.html',
  styleUrls: ['./insert-editable-void-button.component.less']
})
export class InsertEditableVoidButtonComponent implements OnInit {

  constructor(
    private editor: NsEditorService,
  ) { }

  ngOnInit(): void {
  }

  handleKeyDown($event: any) {
    $event.preventDefault();
    this.insertEditableVoid();
  }

  insertEditableVoid() {
    const text = { text: '' };
    const voidNode: EditableVoidElement = {
      type: 'editable-void',
      children: [text],
    };
    Transforms.insertNodes(this.editor.editor, voidNode);
  }

}
