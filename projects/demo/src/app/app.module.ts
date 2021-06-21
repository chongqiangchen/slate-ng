import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PortalModule} from '@angular/cdk/portal';
import {PlaceholderComponent} from './placeholder/placeholder.component';
import {CheckListComponent} from './examples/check-list/check-list.component';
import {RichTextComponent} from './examples/rich-text/rich-text.component';
import {ButtonComponent} from './components/button/button.component';
import {EditorValueComponent} from './components/editor-value/editor-value.component';
import {IconComponent} from './components/icon/icon.component';
import {InstructionComponent} from './components/instruction/instruction.component';
import {MenuComponent} from './components/menu/menu.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {IconButtonComponent} from './examples/rich-text/icon-button/icon-button.component';
import {CustomLeafComponent} from './examples/rich-text/custom-leaf/custom-leaf.component';
import {LeafItemComponent} from './examples/rich-text/custom-leaf/leaf-item/leaf-item.component';
import {CustomComponents} from './examples/rich-text/element';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckListItemComponent} from './examples/check-list/check-list-item/check-list-item.component';
import {CodeHighlightingComponent} from './examples/code-highlighting/code-highlighting.component';
import {FormsModule} from '@angular/forms';
import {LeafComponent} from './examples/code-highlighting/custom-leaf/custom-leaf.component';
import {EditableVoidsComponent} from './examples/editable-voids/editable-voids.component';
import {InsertEditableVoidButtonComponent} from './examples/editable-voids/insert-editable-void-button/insert-editable-void-button.component';
import {EditableVoidComponent} from './examples/editable-voids/editable-void/editable-void.component';
import {MarkdownPreviewComponent} from './examples/markdown-preview/markdown-preview.component';
import {MarkdownLeafComponent} from './examples/markdown-preview/markdown-leaf.component';
import {CustomPlaceholderComponent} from './examples/custom-placeholder/custom-placeholder.component';
import {EmbedsComponent} from './examples/embeds/embeds.component';
import {UrlInputComponent} from './examples/embeds/url-input/url-input.component';
import {VideoElementComponent} from './examples/embeds/video-element/video-element.component';
import {SafeUrlPipe} from './examples/embeds/safe-url.pipe';
import {ForcedLayoutComponent, ForcedLayoutTitleElement} from './examples/forced-layout/forced-layout.component';
import {HugeDocumentComponent} from './examples/huge-document/huge-document.component';
import {HugeDocumentH1} from './examples/huge-document/huge-document-h1';
import {HoveringToolbarComponent} from './examples/hovering-toolbar/hovering-toolbar.component';
import {PortalComponent} from './examples/hovering-toolbar/portal/portal.component';
import {FormatButtonComponent} from './examples/hovering-toolbar/format-button/format-button.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {IframeComponent} from './examples/iframe/iframe.component';
import {IframeContainerComponent} from './examples/iframe/iframe-container/iframe-container.component';
import {TableComponent} from './examples/table/table.component';
import {CustomTableElements} from './examples/table/element';
import {MarkdownShortcutsComponent} from './examples/markdown-shortcuts/markdown-shortcuts.component';
import {SlateNgModule} from 'slate-ng';


@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
    CheckListComponent,
    RichTextComponent,
    ButtonComponent,
    EditorValueComponent,
    IconComponent,
    InstructionComponent,
    MenuComponent,
    ToolbarComponent,
    IconButtonComponent,
    CustomLeafComponent,
    LeafItemComponent,
    ...CustomComponents,
    CheckListItemComponent,
    CodeHighlightingComponent,
    LeafComponent,
    EditableVoidsComponent,
    InsertEditableVoidButtonComponent,
    EditableVoidComponent,
    MarkdownPreviewComponent,
    MarkdownLeafComponent,
    CustomPlaceholderComponent,
    EmbedsComponent,
    UrlInputComponent,
    VideoElementComponent,
    SafeUrlPipe,
    ForcedLayoutComponent,
    ForcedLayoutTitleElement,
    HugeDocumentComponent,
    HugeDocumentH1,
    HoveringToolbarComponent,
    PortalComponent,
    FormatButtonComponent,
    IframeComponent,
    IframeContainerComponent,
    TableComponent,
    ...CustomTableElements,
    MarkdownShortcutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlateNgModule,
    PortalModule,
    NzAlertModule,
    BrowserAnimationsModule,
    FormsModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
