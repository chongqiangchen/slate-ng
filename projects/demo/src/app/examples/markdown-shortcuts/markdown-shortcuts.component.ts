import {Component, OnInit} from '@angular/core';
import {createEditor, Editor, Element as SlateElement, Point, Range, Transforms} from 'slate';
import {withHistory} from 'slate-history';
import {NsDepsService, NsEditorService, RegistryNsElement, withAngular} from 'slate-ng';
import {CustomComponents} from '../rich-text/element';
import {BulletedListElement} from '../../../../custom-types';


const SHORTCUTS = {
  '*': 'list-item',
  '-': 'list-item',
  '+': 'list-item',
  '>': 'block-quote',
  '#': 'heading-one',
  '##': 'heading-two',
  '###': 'heading-three',
  '####': 'heading-four',
  '#####': 'heading-five',
  '######': 'heading-six',
};

const withShortcuts = editor => {
  const {deleteBackward, insertText} = editor;

  editor.insertText = text => {
    const {selection} = editor;

    if (text === ' ' && selection && Range.isCollapsed(selection)) {
      const {anchor} = selection;
      const block = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
      });
      const path = block ? block[1] : [];
      const start = Editor.start(editor, path);
      const range = {anchor, focus: start};
      const beforeText = Editor.string(editor, range);
      const type = SHORTCUTS[beforeText];

      if (type) {
        Transforms.select(editor, range);
        Transforms.delete(editor);
        const newProperties: Partial<SlateElement & { type: any }> = {
          type,
        };
        Transforms.setNodes(editor, newProperties, {
          match: n => Editor.isBlock(editor, n),
        });

        if (type === 'list-item') {
          const list: BulletedListElement = {
            type: 'bulleted-list',
            children: [],
          };
          Transforms.wrapNodes(editor, list, {
            match: n =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              (n as any).type === 'list-item',
          });
        }

        return;
      }
    }

    insertText(text);
  };

  editor.deleteBackward = (...args) => {
    const {selection} = editor;

    if (selection && Range.isCollapsed(selection)) {
      const match = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
      });

      if (match) {
        const [block, path] = match;
        const start = Editor.start(editor, path);

        if (
          !Editor.isEditor(block) &&
          SlateElement.isElement(block) &&
          (block as any).type !== 'paragraph' &&
          Point.equals(selection.anchor, start)
        ) {
          const newProperties: Partial<SlateElement & { type: any }> = {
            type: 'paragraph',
          };
          Transforms.setNodes(editor, newProperties);

          if ((block as any).type === 'list-item') {
            Transforms.unwrapNodes(editor, {
              match: n =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                (n as any).type === 'bulleted-list',
              split: true,
            });
          }

          return;
        }
      }

      deleteBackward(...args);
    }
  };

  return editor;
};

@Component({
  selector: 'app-markdown-shortcuts',
  templateUrl: './markdown-shortcuts.component.html',
  styleUrls: ['./markdown-shortcuts.component.less'],
  providers: [NsEditorService, NsDepsService, RegistryNsElement]
})
export class MarkdownShortcutsComponent implements OnInit {
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text:
            'The editor gives you full control over the logic you can add. For example, it\'s fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with "> " you get a blockquote that looks like this:',
        },
      ],
    },
    {
      type: 'block-quote',
      children: [{text: 'A wise quote.'}],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'Order when you start a line with "## " you get a level-two heading, like this:',
        },
      ],
    },
    {
      type: 'heading-two',
      children: [{text: 'Try it out!'}],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'Try it out for yourself! Try starting a new line with ">", "-", or "#"s.',
        },
      ],
    },
  ];
  editor = withShortcuts(withHistory(withAngular(createEditor())));

  constructor(
    private registryNsElement: RegistryNsElement
  ) {
  }

  ngOnInit(): void {
    this.registryNsElement.add([...CustomComponents]);
  }

}
