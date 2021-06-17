import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EVENT_MANAGER_PLUGINS} from '@angular/platform-browser';
import {BeforeInputEventPlugin} from './polyfills/before-input/before-input-event-plugin';
import {EditableComponent} from './components/editable/editable.component';
import {PortalModule} from '@angular/cdk/portal';
import {ChildrenComponent} from './components/children/children.component';
import {ElementComponent} from './components/element/element.component';
import {TextComponent} from './components/text/text.component';
import {CompositionEventPlugin} from './polyfills/composition/composition-event-plugin';
import {LeafComponent} from './components/text/leaf/leaf.component';
import {PlaceholderComponent} from './components/text/placeholder/placeholder.component';
import {LeafChildComponent} from './components/text/leaf-child/leaf-child.component';
import {RegistryNsElement} from './services/registry-ns-element.service';
import {NsEditorService} from './services/ns-editor.service';
import {ElementAttrsDirective} from './directives/element-attrs.directive';
import {LeafAttrsDirective} from './directives/leaf-attrs.directive';
import {PlaceholderAttrsDirective} from './directives/placeholder-attrs.directive';
import {PortalEntryComponent} from './components/portal-entry/portal-entry.component';

@NgModule({
  declarations: [
    EditableComponent,
    ChildrenComponent,
    ElementComponent,
    TextComponent,
    LeafComponent,
    PlaceholderComponent,
    LeafChildComponent,
    PortalEntryComponent,
    ElementAttrsDirective,
    LeafAttrsDirective,
    PlaceholderAttrsDirective,
  ],
  imports: [
    CommonModule,
    PortalModule
  ],
  providers: [
    {
      provide: EVENT_MANAGER_PLUGINS,
      useClass: CompositionEventPlugin,
      multi: true
    },
    {
      provide: EVENT_MANAGER_PLUGINS,
      useClass: BeforeInputEventPlugin,
      multi: true
    },
    NsEditorService,
    RegistryNsElement
  ],
  exports: [
    EditableComponent,
    ElementAttrsDirective,
    LeafAttrsDirective,
    PlaceholderAttrsDirective,
    PortalEntryComponent
  ]
})
export class SlateNgModule {
}
