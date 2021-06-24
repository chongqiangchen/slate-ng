import { Component, Input, OnInit } from '@angular/core';
import { Editor, Text, Transforms } from 'slate';
import { NsEditorService } from 'slate-ng';

@Component({
  selector: 'app-format-button',
  templateUrl: './format-button.component.html',
  styleUrls: ['./format-button.component.less']
})
export class FormatButtonComponent implements OnInit {
  @Input() format = '';
  @Input() icon = '';

  constructor(
    private editorService: NsEditorService,
  ) { }

  ngOnInit(): void {
  }

  handle($event: any) {
    $event.preventDefault();
    this.toggleFormat();
  }

  private toggleFormat() {
    const isActive = this.isFormatActive();
    Transforms.setNodes(
      this.editorService.editor,
      { [this.format]: isActive ? null : true },
      { match: Text.isText, split: true }
    );
  }

  isFormatActive() {
    const editor = this.editorService.editor;
    const [match] = Editor.nodes(editor, {
      match: n => n[this.format] === true,
      mode: 'all',
    });
    return !!match;
  }
}

