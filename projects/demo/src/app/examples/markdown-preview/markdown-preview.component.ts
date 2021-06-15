import { Component, OnInit } from '@angular/core';
import { createEditor, Descendant, Text } from 'slate';
import { withHistory } from 'slate-history';
import { RegistryNsElement, NsEditorService, withAngular, NsDepsService } from 'slate-ng-view';
import Prism from 'prismjs';
import { MarkdownLeafComponent } from './markdown-leaf.component';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.less'],
  providers: [NsEditorService, NsDepsService, RegistryNsElement]
})
export class MarkdownPreviewComponent implements OnInit {
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text:
            'Slate is flexible enough to add **decorations** that can format text based on its content. For example, this editor has **Markdown** preview decorations on it, to make it _dead_ simple to make an editor with built-in Markdown previewing.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [{ text: '## Try it out!' }],
    },
    {
      type: 'paragraph',
      children: [{ text: 'Try it out for yourself!' }],
    },
  ];
  editor = withHistory(withAngular(createEditor()));
  decorate = ([node, path]) => {
    const ranges = [];

    if (!Text.isText(node)) {
      return ranges;
    }

    const getLength = token => {
      if (typeof token === 'string') {
        return token.length;
      } else if (typeof token.content === 'string') {
        return token.content.length;
      } else {
        return token.content.reduce((l, t) => l + getLength(t), 0);
      }
    };

    const tokens = Prism.tokenize(node.text, Prism.languages.markdown);
    let start = 0;

    for (const token of tokens) {
      const length = getLength(token);
      const end = start + length;

      if (typeof token !== 'string') {
        ranges.push({
          [token.type]: true,
          anchor: { path, offset: start },
          focus: { path, offset: end },
        });
      }

      start = end;
    }

    return ranges;
  }

  constructor(
    private customElementService: RegistryNsElement
  ) { }

  ngOnInit(): void {
    this.customElementService.add([MarkdownLeafComponent]);
  }

}
