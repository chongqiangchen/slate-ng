import { Component, OnInit } from '@angular/core';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { RegistryNsElement, NsEditorService, withAngular, NsDepsService } from 'slate-ng';
import { EditableVoidComponent } from './editable-void/editable-void.component';

const withEditableVoids = editor => {
  const { isVoid } = editor;

  editor.isVoid = element => {
    return element.type === 'editable-void' ? true : isVoid(element);
  };

  return editor;
};

@Component({
  selector: 'app-editable-voids',
  templateUrl: './editable-voids.component.html',
  styleUrls: ['./editable-voids.component.less'],
  providers: [NsEditorService, NsDepsService, RegistryNsElement]
})
export class EditableVoidsComponent implements OnInit {
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text:
            'In addition to nodes that contain editable text, you can insert void nodes, which can also contain editable elements, inputs, or an entire other Slate editor.',
        },
      ],
    },
    {
      type: 'editable-void',
      children: [{ text: '' }],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: '',
        },
      ],
    },
  ];
  editor = withEditableVoids(withHistory(withAngular(createEditor())));

  constructor(
    private custom: RegistryNsElement,
  ) {}

  ngOnInit(): void {
    this.custom.add([EditableVoidComponent]);
  }

}
