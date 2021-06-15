import { Component, OnInit } from '@angular/core';
import { NsDepsService, NsEditorService, RegistryNsElement, withAngular } from 'slate-ng-view';
import { HugeDocumentH1 } from './huge-document-h1';
import { createEditor, Descendant } from 'slate';
import faker from 'faker';

const HEADINGS = 100;
const PARAGRAPHS = 7;
const initialValue: any[] = [];

for (let h = 0; h < HEADINGS; h++) {
  initialValue.push({
    type: 'heading',
    children: [{ text: faker.lorem.sentence() }],
  });

  for (let p = 0; p < PARAGRAPHS; p++) {
    initialValue.push({
      type: 'paragraph',
      children: [{ text: faker.lorem.paragraph() }],
    });
  }
}


@Component({
  selector: 'app-huge-document',
  templateUrl: './huge-document.component.html',
  styleUrls: ['./huge-document.component.less'],
  providers: [NsEditorService, NsDepsService, RegistryNsElement]
})
export class HugeDocumentComponent implements OnInit {
  editor = withAngular(createEditor());
  initialValue = initialValue;

  constructor(
    private registry: RegistryNsElement,
  ) { }

  ngOnInit(): void {
    this.registry.add([HugeDocumentH1]);
  }

}
