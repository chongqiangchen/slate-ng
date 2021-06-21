import { Component, OnInit } from '@angular/core';
import { withHistory } from 'slate-history';
import { RegistryNsElement, NsEditorService, withAngular, NsDepsService } from 'slate-ng';
import { createEditor, Descendant } from 'slate';
import { CustomPlaceholder } from './custom-placeholder';

@Component({
  selector: 'app-custom-placeholder',
  templateUrl: './custom-placeholder.component.html',
  styleUrls: ['./custom-placeholder.component.less'],
  providers: [NsDepsService, RegistryNsElement, NsEditorService]
})
export class CustomPlaceholderComponent implements OnInit {
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ];

  editor = withHistory(withAngular(createEditor()));

  constructor(
    private customElement: RegistryNsElement,
  ) { }

  ngOnInit(): void {
    this.customElement.add([CustomPlaceholder]);
  }

}
