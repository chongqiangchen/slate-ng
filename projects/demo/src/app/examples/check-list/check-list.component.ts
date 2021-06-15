import { Component, OnInit } from '@angular/core';
import { createEditor, Element as SlateElement, Editor, Range, Point, Transforms, Descendant } from 'slate';
import { RegistryNsElement, NsEditorService, withAngular, NsDepsService } from 'slate-ng-view';
import { withHistory } from 'slate-history';
import { CheckListItemComponent } from './check-list-item/check-list-item.component';

const withChecklists = editor => {
  const { deleteBackward } = editor;

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [match] = Editor.nodes(editor, {
        match: n =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          (n as any).type === 'check-list-item'
      });

      if (match) {
        const [, path] = match;
        const start = Editor.start(editor, path);

        if (Point.equals(selection.anchor, start)) {
          const newProperties: Partial<SlateElement & { type: any }> = {
            type: 'paragraph'
          };
          Transforms.setNodes(editor, newProperties, {
            match: n =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              (n as any).type === 'check-list-item'
          });
          return;
        }
      }
    }

    deleteBackward(...args);
  };

  return editor;
};

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.less'],
  providers: [RegistryNsElement, NsDepsService, NsEditorService]
})
export class CheckListComponent implements OnInit {
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text:
            'With Slate you can build complex block types that have their own embedded content and behaviors, like rendering checkboxes inside check list items!'
        }
      ]
    },
    {
      type: 'check-list-item',
      checked: true,
      children: [{ text: 'Slide to the left.' }]
    },
    {
      type: 'check-list-item',
      checked: true,
      children: [{ text: 'Slide to the right.' }]
    },
    {
      type: 'check-list-item',
      checked: false,
      children: [{ text: 'Criss-cross.' }]
    },
    {
      type: 'check-list-item',
      checked: true,
      children: [{ text: 'Criss-cross!' }]
    },
    {
      type: 'check-list-item',
      checked: false,
      children: [{ text: 'Cha cha real smooth…' }]
    },
    {
      type: 'check-list-item',
      checked: false,
      children: [{ text: 'Let\'s go to work!' }]
    },
    {
      type: 'paragraph',
      children: [{ text: 'Try it out for yourself!' }]
    }
  ];

  editor = withChecklists(withHistory(withAngular(createEditor())));

  constructor(
    private customElementService: RegistryNsElement,
  ) {
  }

  ngOnInit(): void {
    this.customElementService.add([CheckListItemComponent]);
  }

}
