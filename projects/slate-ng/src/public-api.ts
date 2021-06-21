/*
 * Public API Surface of slate-ng
 */

export * from './slate-ng.module';

// component
export * from './components/editable/editable.component';
export * from './components/element/base-element';
export * from './components/text/leaf/base-leaf.component';
export * from './components/text/placeholder/base-placeholder.component';
export * from './components/portal-entry/portal-entry.component';

// slate plugin
export * from './plugins/with-angular';
export * from './plugins/angular-editor';

// service
export * from './services/ns-deps.service';
export * from './services/ns-editor.service';
export * from './services/registry-ns-element.service';

// directive
export * from './directives/element-attrs.directive';
export * from './directives/leaf-attrs.directive';
export * from './directives/placeholder-attrs.directive';

// common
export * from './components/element/token';
export * from './utils/key';
