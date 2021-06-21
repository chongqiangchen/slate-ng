import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { AngularEditor, NsDepsService, NsEditorService, RegistryNsElement, withAngular } from 'slate-ng';
import { withHistory } from 'slate-history';
import { createEditor, Editor } from 'slate';
import { CustomLeafComponent } from '../rich-text/custom-leaf/custom-leaf.component';
import { isKeyHotkey } from 'is-hotkey';
// @ts-ignore
import _debounce from 'lodash/debounce';
import { IframeContainerComponent } from './iframe-container/iframe-container.component';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.less'],
  providers: [RegistryNsElement, NsDepsService, NsEditorService]
})
export class IframeComponent implements OnInit {
  editor = withHistory(withAngular(createEditor()));
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text: 'In this example, the document gets rendered into a controlled ',
        },
        { text: '<iframe>', code: true },
        {
          text: '. This is ',
        },
        {
          text: 'particularly',
          italic: true,
        },
        {
          text:
            ' useful, when you need to separate the styles for your editor contents from the ones addressing your UI.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: 'This also the only reliable method to preview any ',
        },
        {
          text: 'media queries',
          bold: true,
        },
        {
          text: ' in your CSS.',
        },
      ],
    },
  ];
  selectionChange = _debounce(() => {
    this.cdr.detectChanges();
  }, 300);
  tmplContext = {editor: this.editor};

  @ViewChild(IframeContainerComponent) iframeCom: IframeContainerComponent;

  constructor(
    private registryNsElement: RegistryNsElement,
    private cdr: ChangeDetectorRef,
    public viewContainerRef: ViewContainerRef,
  ) { }

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

  ngOnInit(): void {
    this.registryNsElement.add([CustomLeafComponent]);
  }

  handleBlur($event: FocusEvent) {
    AngularEditor.deselect(this.editor);
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
}
