import {Component, OnInit} from '@angular/core';
import {createEditor} from 'slate';
import {withHistory} from 'slate-history';
import {NsDepsService, NsEditorService, RegistryNsElement, withAngular} from 'slate-ng';
import {CustomLeafComponent} from '../rich-text/custom-leaf/custom-leaf.component';
import {
  SlateNgElementTable,
  SlateNgElementTableCell,
  SlateNgElementTableRow,
  withTables
} from 'slate-ng-element-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  providers: [NsEditorService, NsDepsService, RegistryNsElement]
})
export class TableComponent implements OnInit {
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text:
            'Since the editor is based on a recursive tree model, similar to an HTML document, you can create complex nested structures, like tables:'
        }
      ]
    },
    {
      type: 'table',
      children: [
        {
          type: 'table-row',
          children: [
            {
              type: 'table-cell',
              children: [{text: ''}]
            },
            {
              type: 'table-cell',
              children: [{text: 'Human', bold: true}]
            },
            {
              type: 'table-cell',
              children: [{text: 'Dog', bold: true}]
            },
            {
              type: 'table-cell',
              children: [{text: 'Cat', bold: true}]
            }
          ]
        },
        {
          type: 'table-row',
          children: [
            {
              type: 'table-cell',
              children: [{text: '# of Feet', bold: true}]
            },
            {
              type: 'table-cell',
              children: [{text: '2'}]
            },
            {
              type: 'table-cell',
              children: [{text: '4'}]
            },
            {
              type: 'table-cell',
              children: [{text: '4'}]
            }
          ]
        },
        {
          type: 'table-row',
          children: [
            {
              type: 'table-cell',
              children: [{text: '# of Lives', bold: true}]
            },
            {
              type: 'table-cell',
              children: [{text: '1'}]
            },
            {
              type: 'table-cell',
              children: [{text: '1'}]
            },
            {
              type: 'table-cell',
              children: [{text: '9'}]
            }
          ]
        }
      ]
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'This table is just a basic example of rendering a table, and it doesn\'t have fancy functionality. But you could augment it to add support for navigating with arrow keys, displaying table headers, adding column and rows, or even formulas if you wanted to get really crazy!'
        }
      ]
    }
  ];
  editor = withTables(withHistory(withAngular(createEditor())));

  constructor(
    private registryNsElement: RegistryNsElement,
  ) {
  }

  ngOnInit(): void {
    this.registryNsElement.add([
      SlateNgElementTable,
      SlateNgElementTableCell,
      SlateNgElementTableRow,
      CustomLeafComponent
    ]);
  }

}
