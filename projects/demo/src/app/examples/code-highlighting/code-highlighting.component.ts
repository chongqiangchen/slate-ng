import { ChangeDetectorRef, Component, ElementRef, Inject, OnInit } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-java';
import { Text, createEditor, Element as SlateElement, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { RegistryNsElement, NsEditorService, withAngular, NsDepsService } from 'slate-ng-view';
import { LeafComponent } from './custom-leaf/custom-leaf.component';

@Component({
  selector: 'app-code-highlighting',
  templateUrl: './code-highlighting.component.html',
  styleUrls: ['./code-highlighting.component.less'],
  providers: [NsEditorService, RegistryNsElement, NsDepsService]
})
export class CodeHighlightingComponent implements OnInit {
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text: '<h1>Hi!</h1>'
        }
      ]
    }
  ];
  language = 'html';
  editor = withHistory(withAngular(createEditor()));
  decorate = this._decorate.bind(this);

  constructor(
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
    public cdr: ChangeDetectorRef,
    private customElementService: RegistryNsElement,
  ) {
  }

  ngOnInit(): void {
    this.customElementService.add([LeafComponent]);
  }

  private _decorate([node, path]) {
    const ranges = [];
    if (!Text.isText(node)) {
      return ranges;
    }
    const tokens = Prism.tokenize(node.text, Prism.languages[this.language]);
    let start = 0;

    for (const token of tokens) {
      const length = getLength(token);
      const end = start + length;

      if (typeof token !== 'string') {
        ranges.push({
          [token.type]: true,
          anchor: { path, offset: start },
          focus: { path, offset: end }
        });
      }

      start = end;
    }

    return ranges;
  }

  handle($event: any) {
    this.decorate = this._decorate.bind(this);
    this.editor.onChange();
  }
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

// modifications and additions to prism library

Prism.languages.python = Prism.languages.extend('python', {});
Prism.languages.insertBefore('python', 'prolog', {
  comment: { pattern: /##[^\n]*/, alias: 'comment' }
});
Prism.languages.javascript = Prism.languages.extend('javascript', {});
Prism.languages.insertBefore('javascript', 'prolog', {
  comment: { pattern: /\/\/[^\n]*/, alias: 'comment' }
});
Prism.languages.html = Prism.languages.extend('html', {});
Prism.languages.insertBefore('html', 'prolog', {
  comment: { pattern: /<!--[^\n]*-->/, alias: 'comment' }
});
Prism.languages.markdown = Prism.languages.extend('markup', {});
Prism.languages.insertBefore('markdown', 'prolog', {
  blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
  code: [
    { pattern: /^(?: {4}|\t).+/m, alias: 'keyword' },
    { pattern: /``.+?``|`[^`\n]+`/, alias: 'keyword' }
  ],
  title: [
    {
      pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
      alias: 'important',
      inside: { punctuation: /==+$|--+$/ }
    },
    {
      pattern: /(^\s*)#+.+/m,
      lookbehind: !0,
      alias: 'important',
      inside: { punctuation: /^#+|#+$/ }
    }
  ],
  hr: {
    pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
    lookbehind: !0,
    alias: 'punctuation'
  },
  list: {
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
    lookbehind: !0,
    alias: 'punctuation'
  },
  'url-reference': {
    pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
      string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[\[\]!:]|[<>]/
    },
    alias: 'url'
  },
  bold: {
    pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^\*\*|^__|\*\*$|__$/ }
  },
  italic: {
    pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^[*_]|[*_]$/ }
  },
  url: {
    pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
    inside: {
      variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
      string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ }
    }
  }
});
Prism.languages.markdown.bold.inside.url = Prism.util.clone(
  Prism.languages.markdown.url
);
Prism.languages.markdown.italic.inside.url = Prism.util.clone(
  Prism.languages.markdown.url
);
Prism.languages.markdown.bold.inside.italic = Prism.util.clone(
  Prism.languages.markdown.italic
);
Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold); // prettier-ignore
