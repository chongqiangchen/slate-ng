import { ChangeDetectorRef, Component, ComponentRef, OnInit, ViewChildren } from '@angular/core';
import { RegistryNsElement, NsEditorService, withAngular, NsDepsService } from 'slate-ng';
import { createEditor, Editor, Transforms, Element as SlateElement } from 'slate';
import { withHistory } from 'slate-history';
import { CustomLeafComponent } from './custom-leaf/custom-leaf.component';
import { isKeyHotkey } from 'is-hotkey';
import { CustomComponents } from './element';
// @ts-ignore
import _debounce from 'lodash/debounce';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code'
};

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.less'],
  providers: [RegistryNsElement, NsDepsService, NsEditorService]
})
export class RichTextComponent implements OnInit {
  placeholder = 'Enter some rich text...';
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text:
            'Since it\'s rich text, you can do things like turn a selection of text '
        },
        { text: 'bold', bold: true },
        {
          text:
            ', or add a semantically rendered block quote in the middle of the page, like this:'
        }
      ]
    },
    {
      type: 'block-quote',
      children: [{ text: 'A wise quote.' }]
    },
    {
      type: 'paragraph',
      children: [{ text: 'Try it out for yourself!' }]
    }
  ];
  editor = withHistory(withAngular(createEditor()));

  constructor(
    private customElement: RegistryNsElement,
    private cdr: ChangeDetectorRef
  ) {
  }

  selectChange = _debounce(() => {
    this.cdr.detectChanges();
  }, 300);

  onKeyDown = (event: KeyboardEvent) => {
    for (const hotKey in HOTKEYS) {
      const isHot = isKeyHotkey(hotKey);
      if (isHot(event)) {
        event.preventDefault();
        const mark = HOTKEYS[hotKey];
        this.toggleMark(mark);
      }
    }
  }

  ngOnInit() {
    this.customElement.add([CustomLeafComponent, ...CustomComponents]);
  }

  toggleMark(format) {
    const isActive = this.isMarkActive(format);

    if (isActive) {
      Editor.removeMark(this.editor, format);
    } else {
      Editor.addMark(this.editor, format, true);
    }
  }

  isMarkActive(format) {
    const marks = Editor.marks(this.editor);
    return marks ? marks[format] === true : false;
  }

  toggleBlock(format) {
    const isActive = this.isBlockActive(format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(this.editor, {
      match: n =>
        LIST_TYPES.includes(
          !Editor.isEditor(n) && SlateElement.isElement(n) && (n as any).type
        ),
      split: true,
    });
    const newProperties: Partial<SlateElement & {type: any}> = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    };
    Transforms.setNodes(this.editor, newProperties);

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(this.editor, block);
    }
  }

  isBlockActive(format) {
    const [match] = Editor.nodes(this.editor, {
      match: n =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && (n as any).type === format,
    });

    return !!match;
  }
}
