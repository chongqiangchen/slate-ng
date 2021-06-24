# SlateNgElementTable


### Quick start

Use with slate-ng

``` 
 /// module.ts
 import {NsElementTableModule} from 'slate-ng-element-table';

 /// component.ts
 // registry element
 this.registryNsElement.add([
      SlateNgElementTable,
      SlateNgElementTableCell,
      SlateNgElementTableRow,
 ]);
 
 // use withTables
 editor = withTables(withAngular(createEditor()));

 
 // value
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
  }
 
  // import css
  @import "~slate-ng-element-table/table.css";
```
