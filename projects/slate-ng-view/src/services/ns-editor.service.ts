import { Injectable } from '@angular/core';
import { AngularEditor } from "../plugins/angular-editor";
import { Descendant } from "slate";
import { SlateNgViewModule } from "../slate-ng-view.module";

@Injectable()
export class NsEditorService {
  editor: AngularEditor
  defaultValue = [
    {
      type: "paragraph",
      children: [{ text: '' }],
    }
  ]

  constructor() { }

  init(editor: AngularEditor, value: Descendant[]) {
    this.editor = editor;
    this.editor.children = value;
    return this.editor;
  }
}
