import { ChangeDetectorRef, Component, ElementRef, Inject, OnInit } from '@angular/core';
import { createEditor, Descendant, Element as SlateElement, Node, Transforms } from 'slate';
import { ParagraphElement, TitleElement } from '../../../../custom-types';
import { withHistory } from 'slate-history';
import {
  RegistryNsElement,
  NsEditorService,
  withAngular,
  NsDepsService,
  BaseElementComponent,
  KEY_TOKEN, Key
} from 'slate-ng-view';

const withLayout = editor => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      if (editor.children.length < 1) {
        const title: TitleElement = {
          type: 'title',
          children: [{ text: 'Untitled' }],
        };
        Transforms.insertNodes(editor, title, { at: path.concat(0) });
      }

      if (editor.children.length < 2) {
        const paragraph: ParagraphElement = {
          type: 'paragraph',
          children: [{ text: '' }],
        };
        Transforms.insertNodes(editor, paragraph, { at: path.concat(1) });
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        const type = childPath[0] === 0 ? 'title' : 'paragraph';

        if (SlateElement.isElement(child) && (child as any).type !== type) {
          const newProperties: Partial<SlateElement & {type: any}> = { type };
          Transforms.setNodes(editor, newProperties, { at: childPath });
        }
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};

@Component({
  selector: 'app-forced-layout',
  templateUrl: './forced-layout.component.html',
  styleUrls: ['./forced-layout.component.less'],
  providers: [NsEditorService, NsDepsService, RegistryNsElement]
})
export class ForcedLayoutComponent implements OnInit {
  editor = withLayout(withHistory(withAngular(createEditor())));
  initialValue: any[] = [
    {
      type: 'title',
      children: [{ text: 'Enforce Your Layout!' }],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'This example shows how to enforce your layout with domain-specific constraints. This document will always have a title block at the top and at least one paragraph in the body. Try deleting them and see what happens!',
        },
      ],
    },
  ];
  constructor(
    private registry: RegistryNsElement
  ) { }

  ngOnInit(): void {
    this.registry.add([ForcedLayoutTitleElement]);
  }
}

@Component({
  selector: 'h2[forced-layout-title]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class ForcedLayoutTitleElement extends BaseElementComponent {
  static type = 'title';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}
