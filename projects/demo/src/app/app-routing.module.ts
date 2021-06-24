import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckListComponent } from './examples/check-list/check-list.component';
import { RichTextComponent } from './examples/rich-text/rich-text.component';
import { CodeHighlightingComponent } from './examples/code-highlighting/code-highlighting.component';
import { EditableVoidsComponent } from './examples/editable-voids/editable-voids.component';
import { MarkdownPreviewComponent } from './examples/markdown-preview/markdown-preview.component';
import { CustomPlaceholderComponent } from './examples/custom-placeholder/custom-placeholder.component';
import { EmbedsComponent } from './examples/embeds/embeds.component';
import { ForcedLayoutComponent } from './examples/forced-layout/forced-layout.component';
import { HugeDocumentComponent } from './examples/huge-document/huge-document.component';
import { HoveringToolbarComponent } from './examples/hovering-toolbar/hovering-toolbar.component';
import { IframeComponent } from './examples/iframe/iframe.component';
import { TableComponent } from './examples/table/table.component';
import { MarkdownShortcutsComponent } from './examples/markdown-shortcuts/markdown-shortcuts.component';
import {ImagesComponent} from './examples/images/images.component';

export const routes: Routes = [
  {
    path: 'check-list',
    component: CheckListComponent,
  },
  {
    path: 'richtext',
    component: RichTextComponent,
  },
  {
    path: 'code-highlighting',
    component: CodeHighlightingComponent
  },
  {
    path: 'editable-voids',
    component: EditableVoidsComponent
  },
  {
    path: 'markdown-preview',
    component: MarkdownPreviewComponent
  },
  {
    path: 'custom-placeholder',
    component: CustomPlaceholderComponent
  },
  {
    path: 'embeds',
    component: EmbedsComponent
  },
  {
    path: 'forced-layout',
    component: ForcedLayoutComponent
  },
  {
    path: 'huge-document',
    component: HugeDocumentComponent
  },
  {
    path: 'hovering-toolbar',
    component: HoveringToolbarComponent
  },
  {
    path: 'iframe',
    component: IframeComponent
  },
  {
    path: 'tables',
    component: TableComponent
  },
  {
    path: 'markdown-shortcuts',
    component: MarkdownShortcutsComponent
  },
  {
    path: 'images',
    component: ImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
