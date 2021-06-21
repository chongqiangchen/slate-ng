import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlateNgElementTable} from './table';
import {PortalModule} from '@angular/cdk/portal';
import {SlateNgModule} from 'slate-ng';
import {SlateNgElementTableRow} from './table-row';
import {SlateNgElementTableCell} from './table-cell';

@NgModule({
  declarations: [
    SlateNgElementTable,
    SlateNgElementTableRow,
    SlateNgElementTableCell
  ],
  imports: [
    CommonModule,
    PortalModule,
    SlateNgModule,
  ],
  exports: [
    SlateNgElementTable,
    SlateNgElementTableRow,
    SlateNgElementTableCell
  ]
})
export class NsElementTableModule {
}
