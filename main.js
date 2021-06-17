(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/PDu":
/*!*************************************************************************!*\
  !*** ./src/app/examples/markdown-preview/markdown-preview.component.ts ***!
  \*************************************************************************/
/*! exports provided: MarkdownPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownPreviewComponent", function() { return MarkdownPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs */ "n5u1");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _markdown_leaf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown-leaf.component */ "uI5W");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");









class MarkdownPreviewComponent {
    constructor(customElementService) {
        this.customElementService = customElementService;
        this.initialValue = [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Slate is flexible enough to add **decorations** that can format text based on its content. For example, this editor has **Markdown** preview decorations on it, to make it _dead_ simple to make an editor with built-in Markdown previewing.',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [{ text: '## Try it out!' }],
            },
            {
                type: 'paragraph',
                children: [{ text: 'Try it out for yourself!' }],
            },
        ];
        this.editor = Object(slate_history__WEBPACK_IMPORTED_MODULE_2__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])()));
        this.decorate = ([node, path]) => {
            const ranges = [];
            if (!slate__WEBPACK_IMPORTED_MODULE_1__["Text"].isText(node)) {
                return ranges;
            }
            const getLength = token => {
                if (typeof token === 'string') {
                    return token.length;
                }
                else if (typeof token.content === 'string') {
                    return token.content.length;
                }
                else {
                    return token.content.reduce((l, t) => l + getLength(t), 0);
                }
            };
            const tokens = prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.tokenize(node.text, prismjs__WEBPACK_IMPORTED_MODULE_4___default.a.languages.markdown);
            let start = 0;
            for (const token of tokens) {
                const length = getLength(token);
                const end = start + length;
                if (typeof token !== 'string') {
                    ranges.push({
                        [token.type]: true,
                        anchor: { path, offset: start },
                        focus: { path, offset: end },
                    });
                }
                start = end;
            }
            return ranges;
        };
    }
    ngOnInit() {
        this.customElementService.add([_markdown_leaf_component__WEBPACK_IMPORTED_MODULE_5__["MarkdownLeafComponent"]]);
    }
}
MarkdownPreviewComponent.ɵfac = function MarkdownPreviewComponent_Factory(t) { return new (t || MarkdownPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"])); };
MarkdownPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkdownPreviewComponent, selectors: [["app-markdown-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"]])], decls: 1, vars: 3, consts: [["ns-editor", "", "placeholder", "Write some markdown...", 3, "editor", "value", "decorate"]], template: function MarkdownPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue)("decorate", ctx.decorate);
    } }, directives: [_slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_6__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvbWFya2Rvd24tcHJldmlldy9tYXJrZG93bi1wcmV2aWV3LmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-markdown-preview',
                templateUrl: './markdown-preview.component.html',
                styleUrls: ['./markdown-preview.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"] }]; }, null); })();


/***/ }),

/***/ "/vnT":
/*!*********************************************************************!*\
  !*** ./src/app/examples/editable-voids/editable-voids.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditableVoidsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableVoidsComponent", function() { return EditableVoidsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _editable_void_editable_void_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editable-void/editable-void.component */ "gcCw");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _insert_editable_void_button_insert_editable_void_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insert-editable-void-button/insert-editable-void-button.component */ "9pG+");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");










const withEditableVoids = editor => {
    const { isVoid } = editor;
    editor.isVoid = element => {
        return element.type === 'editable-void' ? true : isVoid(element);
    };
    return editor;
};
class EditableVoidsComponent {
    constructor(custom) {
        this.custom = custom;
        this.initialValue = [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'In addition to nodes that contain editable text, you can insert void nodes, which can also contain editable elements, inputs, or an entire other Slate editor.',
                    },
                ],
            },
            {
                type: 'editable-void',
                children: [{ text: '' }],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: '',
                    },
                ],
            },
        ];
        this.editor = withEditableVoids(Object(slate_history__WEBPACK_IMPORTED_MODULE_2__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])())));
    }
    ngOnInit() {
        this.custom.add([_editable_void_editable_void_component__WEBPACK_IMPORTED_MODULE_4__["EditableVoidComponent"]]);
    }
}
EditableVoidsComponent.ɵfac = function EditableVoidsComponent_Factory(t) { return new (t || EditableVoidsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"])); };
EditableVoidsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditableVoidsComponent, selectors: [["app-editable-voids"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"]])], decls: 3, vars: 2, consts: [["ns-editor", "", "placeholder", "Enter some text...", 3, "editor", "value"]], template: function EditableVoidsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-insert-editable-void-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue);
    } }, directives: [_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _insert_editable_void_button_insert_editable_void_button_component__WEBPACK_IMPORTED_MODULE_6__["InsertEditableVoidButtonComponent"], _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_7__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvZWRpdGFibGUtdm9pZHMvZWRpdGFibGUtdm9pZHMuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableVoidsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editable-voids',
                templateUrl: './editable-voids.component.html',
                styleUrls: ['./editable-voids.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/slate-ng/slate-ng/projects/demo/src/main.ts */"zUnb");


/***/ }),

/***/ "05Xa":
/*!*************************************************************************!*\
  !*** ./src/app/examples/hovering-toolbar/hovering-toolbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: HoveringToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveringToolbarComponent", function() { return HoveringToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rich-text/custom-leaf/custom-leaf.component */ "s4bw");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");
/* harmony import */ var _portal_portal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portal/portal.component */ "iWd5");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "HYj3");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");











const _c0 = ["nsEditor"];
const EDITOR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('editor_token');
class HoveringToolbarComponent {
    constructor(editorService, registryNsElement, overlay, cdr, injector) {
        this.editorService = editorService;
        this.registryNsElement = registryNsElement;
        this.overlay = overlay;
        this.cdr = cdr;
        this.injector = injector;
        this.initialValue = [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'This example shows how you can make a hovering menu appear above your content, which you can use to make text '
                    },
                    { text: 'bold', bold: true },
                    { text: ', ' },
                    { text: 'italic', italic: true },
                    { text: ', or anything else you might want to do!' }
                ]
            },
            {
                type: 'paragraph',
                children: [
                    { text: 'Try it out yourself! Just ' },
                    { text: 'select any piece of text and the menu will appear', bold: true },
                    { text: '.' }
                ]
            }
        ];
        this.editor = Object(slate_history__WEBPACK_IMPORTED_MODULE_4__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])()));
        this.handleOnBeforeInput = (event) => {
            event.preventDefault();
            switch (event.inputType) {
                case 'formatBold':
                    return this.toggleFormat('bold');
                case 'formatItalic':
                    return this.toggleFormat('italic');
                case 'formatUnderline':
                    return this.toggleFormat('underlined');
            }
        };
        this.show = ($event) => {
            const domSelection = window.getSelection();
            if (domSelection.isCollapsed) {
                this.hide();
                return;
            }
            this.hide();
            this.showToolbar();
        };
    }
    ngOnInit() {
        this.registryNsElement.add([_rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_3__["CustomLeafComponent"]]);
    }
    hide() {
        var _a;
        if ((_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.hasAttached()) {
            this.overlayRef.detach();
            this.overlayRef.dispose();
        }
    }
    showToolbar() {
        const overlayRef = this.overlay.create({ positionStrategy: this.getPosition(), hasBackdrop: false });
        this.overlayRef = overlayRef;
        const comPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["ComponentPortal"](_portal_portal_component__WEBPACK_IMPORTED_MODULE_6__["PortalComponent"], null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create([], this.injector));
        overlayRef.attach(comPortal);
    }
    getPosition() {
        const domSelection = window.getSelection();
        const domRange = domSelection.getRangeAt(0);
        const rect = domRange.getBoundingClientRect();
        return this.overlay.position()
            .connectedTo(this.nsEditor, { originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            .withOffsetX(rect.x)
            .withOffsetY(rect.y);
    }
    toggleFormat(format) {
        const isActive = this.isFormatActive(this.editorService.editor, format);
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(this.editorService.editor, { [format]: isActive ? null : true }, { match: slate__WEBPACK_IMPORTED_MODULE_1__["Text"].isText, split: true });
    }
    isFormatActive(editor, format) {
        const [match] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].nodes(editor, {
            match: n => n[format] === true,
            mode: 'all'
        });
        return !!match;
    }
}
HoveringToolbarComponent.ɵfac = function HoveringToolbarComponent_Factory(t) { return new (t || HoveringToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
HoveringToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HoveringToolbarComponent, selectors: [["app-hovering-toolbar"]], viewQuery: function HoveringToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nsEditor = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"]])], decls: 2, vars: 3, consts: [["ns-editor", "", "placeholder", "Enter some text...", 3, "editor", "value", "nsOnBeforeInput", "click", "blur"], ["nsEditor", ""]], template: function HoveringToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HoveringToolbarComponent_Template_div_click_0_listener($event) { return ctx.show($event); })("blur", function HoveringToolbarComponent_Template_div_blur_0_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue)("nsOnBeforeInput", ctx.handleOnBeforeInput);
    } }, directives: [_slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_8__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvaG92ZXJpbmctdG9vbGJhci9ob3ZlcmluZy10b29sYmFyLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoveringToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hovering-toolbar',
                templateUrl: './hovering-toolbar.component.html',
                styleUrls: ['./hovering-toolbar.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { nsEditor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nsEditor', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



const _c0 = ["*"];
class MenuComponent {
    constructor() {
        this._classMap = {};
    }
    ngOnInit() {
        this._classMap = {
            [this.className]: true,
        };
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { className: "className", customStyle: "customStyle" }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [[1, "menu", 3, "ngClass"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.customStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx._classMap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".menu[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.menu[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NsYXRlLW5nL3NsYXRlLW5nL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FDQUo7QURHRTtFQUNFLGlCQUFBO0FDREoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAmID4gKiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgJiA+ICogKyAqIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxufVxuIiwiLm1lbnUgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1lbnUgPiAqICsgKiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.less']
            }]
    }], function () { return []; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "1BCH":
/*!******************************************************************!*\
  !*** ./src/app/examples/embeds/url-input/url-input.component.ts ***!
  \******************************************************************/
/*! exports provided: UrlInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlInputComponent", function() { return UrlInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");



class UrlInputComponent {
    constructor() {
        this.urlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    handleChange($event) {
        this.urlChange.emit($event);
    }
}
UrlInputComponent.ɵfac = function UrlInputComponent_Factory(t) { return new (t || UrlInputComponent)(); };
UrlInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UrlInputComponent, selectors: [["app-url-input"]], inputs: { url: "url" }, outputs: { urlChange: "urlChange" }, decls: 1, vars: 1, consts: [[1, "url-input", 3, "ngModel", "ngModelChange", "click"]], template: function UrlInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UrlInputComponent_Template_input_ngModelChange_0_listener($event) { return ctx.handleChange($event); })("click", function UrlInputComponent_Template_input_click_0_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.url);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".url-input[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NsYXRlLW5nL3NsYXRlLW5nL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9leGFtcGxlcy9lbWJlZHMvdXJsLWlucHV0L3VybC1pbnB1dC5jb21wb25lbnQubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9leGFtcGxlcy9lbWJlZHMvdXJsLWlucHV0L3VybC1pbnB1dC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9leGFtcGxlcy9lbWJlZHMvdXJsLWlucHV0L3VybC1pbnB1dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cmwtaW5wdXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iLCIudXJsLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-url-input',
                templateUrl: './url-input.component.html',
                styleUrls: ['./url-input.component.less']
            }]
    }], function () { return []; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], urlChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "2af/":
/*!**************************************************************************************!*\
  !*** ../slate-ng-view/src/components/text/placeholder/base-placeholder.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BasePlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePlaceholderComponent", function() { return BasePlaceholderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class BasePlaceholderComponent {
    constructor() {
        this.dataSlatePlaceholder = true;
        this.contentEditable = false;
        this.styleDisplay = 'block';
        this.stylePointerEvent = 'none';
        this.styleUserSelect = 'none';
        this.styleTextDecoration = 'none';
        this.stylePosition = 'absolute';
        this.styleWidth = '100%';
        this.styleMaxWidth = '100%';
        this.styleOpacity = 0.333;
        this.styleTop = 0;
    }
}
BasePlaceholderComponent.ɵfac = function BasePlaceholderComponent_Factory(t) { return new (t || BasePlaceholderComponent)(); };
BasePlaceholderComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BasePlaceholderComponent, hostVars: 20, hostBindings: function BasePlaceholderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slate-placeholder", ctx.dataSlatePlaceholder)("contentEditable", ctx.contentEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.styleDisplay)("pointer-events", ctx.stylePointerEvent)("user-select", ctx.styleUserSelect)("text-decoration", ctx.styleTextDecoration)("position", ctx.stylePosition)("width", ctx.styleWidth)("max-width", ctx.styleMaxWidth)("opacity", ctx.styleOpacity)("top", ctx.styleTop);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasePlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], null, { dataSlatePlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.data-slate-placeholder']
        }], contentEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.contentEditable']
        }], styleDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
        }], stylePointerEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.pointer-events']
        }], styleUserSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.user-select']
        }], styleTextDecoration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.text-decoration']
        }], stylePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.position']
        }], styleWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], styleMaxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.max-width']
        }], styleOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.opacity']
        }], styleTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.top']
        }] }); })();


/***/ }),

/***/ "6Rj7":
/*!*******************************************************************!*\
  !*** ../slate-ng-view/src/components/text/leaf/leaf.component.ts ***!
  \*******************************************************************/
/*! exports provided: LeafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafComponent", function() { return LeafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _element_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element/token */ "CS3F");
/* harmony import */ var _base_leaf_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-leaf.component */ "FGma");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");





const _c0 = ["ns-leaf", ""];
function LeafComponent_ng_template_0_Template(rf, ctx) { }
class LeafComponent extends _base_leaf_component__WEBPACK_IMPORTED_MODULE_2__["BaseLeafComponent"] {
    constructor(leafChild) {
        super();
        this.leafChild = leafChild;
    }
}
LeafComponent.ɵfac = function LeafComponent_Factory(t) { return new (t || LeafComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_element_token__WEBPACK_IMPORTED_MODULE_1__["LEAF_CHILD_PORTAL_TOKEN"])); };
LeafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeafComponent, selectors: [["span", "ns-leaf", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 1, vars: 1, consts: [[3, "cdkPortalOutlet"]], template: function LeafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeafComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx.leafChild);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zbGF0ZS1uZy12aWV3L3NyYy9jb21wb25lbnRzL3RleHQvbGVhZi9sZWFmLmNvbXBvbmVudC5jc3MifQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'span[ns-leaf]',
                templateUrl: './leaf.component.html',
                styleUrls: ['./leaf.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_element_token__WEBPACK_IMPORTED_MODULE_1__["LEAF_CHILD_PORTAL_TOKEN"]]
            }] }]; }, null); })();


/***/ }),

/***/ "77C4":
/*!**********************************************************************************!*\
  !*** ./src/app/examples/check-list/check-list-item/check-list-item.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CheckListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckListItemComponent", function() { return CheckListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _slate_ng_view_src_components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../slate-ng-view/src/components/portal-entry/portal-entry.component */ "Nr9U");







const _c0 = ["check-list-item", ""];
const _c1 = function (a0, a1) { return { opacity: a0, "text-decoration": a1 }; };
class CheckListItemComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef, cdr) {
        super(key, deps, editorService, elementRef, cdr);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.init();
        this.watchDeps();
    }
    handleCheckboxChange($event) {
        var _a;
        const path = slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["AngularEditor"].findPath(this.editorService.editor, this.cNode);
        const newProperties = {
            checked: (_a = $event.target) === null || _a === void 0 ? void 0 : _a.checked
        };
        slate__WEBPACK_IMPORTED_MODULE_2__["Transforms"].setNodes(this.editorService.editor, newProperties, { at: path });
    }
}
CheckListItemComponent.type = 'check-list-item';
CheckListItemComponent.ɵfac = function CheckListItemComponent_Factory(t) { return new (t || CheckListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CheckListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckListItemComponent, selectors: [["div", "check-list-item", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 4, vars: 8, consts: [[1, "checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "child", 3, "ngStyle"], [3, "portals"]], template: function CheckListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckListItemComponent_Template_input_change_1_listener($event) { return ctx.handleCheckboxChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ns-portal-entry", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("contenteditable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.cNode == null ? null : ctx.cNode.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, (ctx.cNode == null ? null : ctx.cNode.checked) ? 0.666 : 1, (ctx.cNode == null ? null : ctx.cNode.checked) ? "none" : "line-through"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("contenteditable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("portals", ctx.portals);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _slate_ng_view_src_components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_4__["PortalEntryComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n[_nghost-%COMP%]    + -shadowcsshost {\n  margin-top: 0;\n}\n.checkbox[_ngcontent-%COMP%] {\n  margin-right: 0.75em;\n  display: inline-block;\n  width: 20px;\n  vertical-align: text-top;\n}\n.child[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.child[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NsYXRlLW5nL3NsYXRlLW5nL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9leGFtcGxlcy9jaGVjay1saXN0L2NoZWNrLWxpc3QtaXRlbS9jaGVjay1saXN0LWl0ZW0uY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvY2hlY2stbGlzdC9jaGVjay1saXN0LWl0ZW0vY2hlY2stbGlzdC1pdGVtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FER0E7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FDREY7QURLQTtFQUNFLE9BQUE7QUNIRjtBREtFO0VBQ0UsYUFBQTtBQ0hKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9leGFtcGxlcy9jaGVjay1saXN0L2NoZWNrLWxpc3QtaXRlbS9jaGVjay1saXN0LWl0ZW0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiArICYge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cblxuLmNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn1cblxuXG4uY2hpbGQge1xuICBmbGV4OiAxO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0ICsgOmhvc3Qge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn1cbi5jaGlsZCB7XG4gIGZsZXg6IDE7XG59XG4uY2hpbGQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "div[check-list-item]",
                templateUrl: "./check-list-item.component.html",
                styleUrls: ["./check-list-item.component.less"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "7MeF":
/*!*****************************************************************************!*\
  !*** ./src/app/examples/custom-placeholder/custom-placeholder.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomPlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPlaceholderComponent", function() { return CustomPlaceholderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _custom_placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-placeholder */ "Jecd");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");








class CustomPlaceholderComponent {
    constructor(customElement) {
        this.customElement = customElement;
        this.initialValue = [
            {
                type: 'paragraph',
                children: [{ text: '' }],
            },
        ];
        this.editor = Object(slate_history__WEBPACK_IMPORTED_MODULE_1__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_3__["createEditor"])()));
    }
    ngOnInit() {
        this.customElement.add([_custom_placeholder__WEBPACK_IMPORTED_MODULE_4__["CustomPlaceholder"]]);
    }
}
CustomPlaceholderComponent.ɵfac = function CustomPlaceholderComponent_Factory(t) { return new (t || CustomPlaceholderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"])); };
CustomPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomPlaceholderComponent, selectors: [["app-custom-placeholder"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"]])], decls: 1, vars: 2, consts: [["ns-editor", "", "placeholder", "Type something", 3, "editor", "value"]], template: function CustomPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue);
    } }, directives: [_slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_5__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvY3VzdG9tLXBsYWNlaG9sZGVyL2N1c3RvbS1wbGFjZWhvbGRlci5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomPlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-placeholder',
                templateUrl: './custom-placeholder.component.html',
                styleUrls: ['./custom-placeholder.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"] }]; }, null); })();


/***/ }),

/***/ "7psr":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



const _c0 = function (a1) { return { cursor: "pointer", color: a1 }; };
const _c1 = ["*"];
class ButtonComponent {
    constructor() {
        this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get color() {
        return this.reversed
            ? this.active
                ? 'white'
                : '#aaa'
            : this.active
                ? 'black'
                : '#ccc';
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { className: "className", reversed: "reversed", active: "active" }, outputs: { onMouseDown: "onMouseDown" }, ngContentSelectors: _c1, decls: 2, vars: 4, consts: [[3, "ngClass", "ngStyle", "mousedown"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ButtonComponent_Template_span_mousedown_0_listener($event) { return ctx.onMouseDown.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.className)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.color));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.less']
            }]
    }], function () { return []; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reversed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "8YsP":
/*!*****************************************************!*\
  !*** ./src/app/examples/embeds/embeds.component.ts ***!
  \*****************************************************/
/*! exports provided: EmbedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedsComponent", function() { return EmbedsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _video_element_video_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-element/video-element.component */ "Pnv0");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");







const withEmbeds = editor => {
    const { isVoid } = editor;
    editor.isVoid = element => (element.type === 'video' ? true : isVoid(element));
    return editor;
};
class EmbedsComponent {
    constructor(customElement) {
        this.customElement = customElement;
        this.initialValue = [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'In addition to simple image nodes, you can actually create complex embedded nodes. For example, this one contains an input element that lets you change the video being rendered!',
                    },
                ],
            },
            {
                type: 'video',
                url: 'https://player.vimeo.com/video/26689853?title=0&byline=0&portrait=0',
                children: [{ text: '' }],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Try it out! This editor is built to handle Vimeo embeds, but you could handle any type.',
                    },
                ],
            },
        ];
        this.editor = withEmbeds(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_2__["createEditor"])()));
    }
    ngOnInit() {
        this.customElement.add([_video_element_video_element_component__WEBPACK_IMPORTED_MODULE_3__["VideoElementComponent"]]);
    }
}
EmbedsComponent.ɵfac = function EmbedsComponent_Factory(t) { return new (t || EmbedsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"])); };
EmbedsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmbedsComponent, selectors: [["app-embeds"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]])], decls: 1, vars: 2, consts: [["ns-editor", "", "placeholder", "Enter some text...", 3, "editor", "value"]], template: function EmbedsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue);
    } }, directives: [_slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvZW1iZWRzL2VtYmVkcy5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmbedsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-embeds',
                templateUrl: './embeds.component.html',
                styleUrls: ['./embeds.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"] }]; }, null); })();


/***/ }),

/***/ "8n6Q":
/*!*********************************************************************************!*\
  !*** ../slate-ng-view/src/polyfills/before-input/fallback-composition-state.ts ***!
  \*********************************************************************************/
/*! exports provided: initialize, reset, getData, getText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getText", function() { return getText; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * These variables store information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 */
let root = null;
let startText = null;
let fallbackText = null;
function initialize(nativeEventTarget) {
    root = nativeEventTarget;
    startText = getText();
    return true;
}
function reset() {
    root = null;
    startText = null;
    fallbackText = null;
}
function getData() {
    if (fallbackText) {
        return fallbackText;
    }
    let start;
    const startValue = startText;
    const startLength = startValue.length;
    let end;
    const endValue = getText();
    const endLength = endValue.length;
    for (start = 0; start < startLength; start++) {
        if (startValue[start] !== endValue[start]) {
            break;
        }
    }
    const minEnd = startLength - start;
    for (end = 1; end <= minEnd; end++) {
        if (startValue[startLength - end] !== endValue[endLength - end]) {
            break;
        }
    }
    const sliceTail = end > 1 ? 1 - end : undefined;
    fallbackText = endValue.slice(start, sliceTail);
    return fallbackText;
}
function getText() {
    if ('value' in root) {
        return root.value;
    }
    return root.textContent;
}


/***/ }),

/***/ "9pG+":
/*!**************************************************************************************************************!*\
  !*** ./src/app/examples/editable-voids/insert-editable-void-button/insert-editable-void-button.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: InsertEditableVoidButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertEditableVoidButtonComponent", function() { return InsertEditableVoidButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/button/button.component */ "7psr");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/icon/icon.component */ "WaCx");






class InsertEditableVoidButtonComponent {
    constructor(editor) {
        this.editor = editor;
    }
    ngOnInit() {
    }
    handleKeyDown($event) {
        $event.preventDefault();
        this.insertEditableVoid();
    }
    insertEditableVoid() {
        const text = { text: '' };
        const voidNode = {
            type: 'editable-void',
            children: [text],
        };
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertNodes(this.editor.editor, voidNode);
    }
}
InsertEditableVoidButtonComponent.ɵfac = function InsertEditableVoidButtonComponent_Factory(t) { return new (t || InsertEditableVoidButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"])); };
InsertEditableVoidButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsertEditableVoidButtonComponent, selectors: [["app-insert-editable-void-button"]], decls: 3, vars: 0, consts: [[3, "onMouseDown"]], template: function InsertEditableVoidButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function InsertEditableVoidButtonComponent_Template_app_button_onMouseDown_0_listener($event) { return ctx.handleKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvZWRpdGFibGUtdm9pZHMvaW5zZXJ0LWVkaXRhYmxlLXZvaWQtYnV0dG9uL2luc2VydC1lZGl0YWJsZS12b2lkLWJ1dHRvbi5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsertEditableVoidButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-insert-editable-void-button',
                templateUrl: './insert-editable-void-button.component.html',
                styleUrls: ['./insert-editable-void-button.component.less']
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"] }]; }, null); })();


/***/ }),

/***/ "AHga":
/*!*******************************************************************!*\
  !*** ./src/app/components/editor-value/editor-value.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditorValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorValueComponent", function() { return EditorValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



const _c0 = function () { return { margin: "30px -20px 0" }; };
const _c1 = function () { return { fontSize: "14px", padding: "5px 20px", color: "#404040", borderTop: "2px solid #eeeeee", background: "#f8f8f8" }; };
class EditorValueComponent {
    constructor() { }
    get textLines() {
        return this.value.document.nodes
            .map(node => node.text)
            .toArray()
            .join('\n');
    }
    ngOnInit() {
    }
}
EditorValueComponent.ɵfac = function EditorValueComponent_Factory(t) { return new (t || EditorValueComponent)(); };
EditorValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorValueComponent, selectors: [["app-editor-value"]], inputs: { className: "className", value: "value" }, decls: 5, vars: 6, consts: [[3, "className", "ngStyle"], [3, "ngStyle"], [1, "txtline"]], template: function EditorValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Slate's value as text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.className)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textLines);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".txtline[_ngcontent-%COMP%] {\n  color: #404040;\n  font: 12px monospace;\n  white-space: pre-wrap;\n  padding: 10px 20px;\n}\n.txtline[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 0 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NsYXRlLW5nL3NsYXRlLW5nL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci12YWx1ZS9lZGl0b3ItdmFsdWUuY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0b3ItdmFsdWUvZWRpdG9yLXZhbHVlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FETEE7RUFPSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci12YWx1ZS9lZGl0b3ItdmFsdWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHh0bGluZSB7XG4gIGNvbG9yOiAjNDA0MDQwO1xuICBmb250OiAxMnB4IG1vbm9zcGFjZTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cbiAgZGl2IHtcbiAgICBtYXJnaW46IDAgMCAwLjVlbTtcbiAgfVxufVxuIiwiLnR4dGxpbmUge1xuICBjb2xvcjogIzQwNDA0MDtcbiAgZm9udDogMTJweCBtb25vc3BhY2U7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLnR4dGxpbmUgZGl2IHtcbiAgbWFyZ2luOiAwIDAgMC41ZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editor-value',
                templateUrl: './editor-value.component.html',
                styleUrls: ['./editor-value.component.less']
            }]
    }], function () { return []; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BBgI":
/*!***********************************************!*\
  !*** ./src/app/examples/rich-text/element.ts ***!
  \***********************************************/
/*! exports provided: BlockQuoteComponent, BulletedListComponent, HeadingOneComponent, HeadingTwoComponent, HeadingThreeComponent, HeadingFourComponent, HeadingFiveComponent, HeadingSixComponent, ListItemComponent, NumberedListComponent, CustomComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockQuoteComponent", function() { return BlockQuoteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletedListComponent", function() { return BulletedListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingOneComponent", function() { return HeadingOneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingTwoComponent", function() { return HeadingTwoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingThreeComponent", function() { return HeadingThreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingFourComponent", function() { return HeadingFourComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingFiveComponent", function() { return HeadingFiveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingSixComponent", function() { return HeadingSixComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberedListComponent", function() { return NumberedListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponents", function() { return CustomComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/alert */ "FP8e");







const _c0 = ["block-quote", ""];
function BlockQuoteComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function BlockQuoteComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockQuoteComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
const _c1 = ["bulleted-list", ""];
function BulletedListComponent_ng_template_1_ng_container_0_ng_template_1_Template(rf, ctx) { }
function BulletedListComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BulletedListComponent_ng_template_1_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r3);
} }
function BulletedListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BulletedListComponent_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.portals)("ngForTrackBy", ctx_r1.trackBy);
} }
const _c2 = ["heading-one", ""];
function HeadingOneComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function HeadingOneComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeadingOneComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
const _c3 = ["heading-two", ""];
function HeadingTwoComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function HeadingTwoComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeadingTwoComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
function HeadingThreeComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function HeadingThreeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeadingThreeComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
function HeadingFourComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function HeadingFourComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeadingFourComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
function HeadingFiveComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function HeadingFiveComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeadingFiveComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
function HeadingSixComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function HeadingSixComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeadingSixComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
const _c4 = ["list-item", ""];
function ListItemComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function ListItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListItemComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
const _c5 = ["numbered-list", ""];
function NumberedListComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NumberedListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberedListComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
class BlockQuoteComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
BlockQuoteComponent.type = "block-quote";
BlockQuoteComponent.ɵfac = function BlockQuoteComponent_Factory(t) { return new (t || BlockQuoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BlockQuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockQuoteComponent, selectors: [["blockquote", "block-quote", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function BlockQuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockQuoteComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockQuoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "blockquote[block-quote]",
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class BulletedListComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
BulletedListComponent.type = "bulleted-list";
BulletedListComponent.ɵfac = function BulletedListComponent_Factory(t) { return new (t || BulletedListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BulletedListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BulletedListComponent, selectors: [["ul", "bulleted-list", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c1, decls: 3, vars: 1, consts: [["nzType", "success", 3, "nzMessage"], ["message", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function BulletedListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BulletedListComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", _r0);
    } }, directives: [ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_4__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BulletedListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ul[bulleted-list]",
                template: `
    <nz-alert nzType="success" [nzMessage]="message"></nz-alert>
    <ng-template #message>
      <ng-container *ngFor="let portal of portals; trackBy: trackBy">
        <ng-template [cdkPortalOutlet]="portal"></ng-template>
      </ng-container>
    </ng-template>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class HeadingOneComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
HeadingOneComponent.type = "heading-one";
HeadingOneComponent.ɵfac = function HeadingOneComponent_Factory(t) { return new (t || HeadingOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HeadingOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingOneComponent, selectors: [["h1", "heading-one", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c2, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function HeadingOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeadingOneComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadingOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "h1[heading-one]",
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class HeadingTwoComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
HeadingTwoComponent.type = "heading-two";
HeadingTwoComponent.ɵfac = function HeadingTwoComponent_Factory(t) { return new (t || HeadingTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HeadingTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingTwoComponent, selectors: [["h2", "heading-two", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c3, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function HeadingTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeadingTwoComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadingTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "h2[heading-two]",
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class HeadingThreeComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
HeadingThreeComponent.type = "heading-three";
HeadingThreeComponent.ɵfac = function HeadingThreeComponent_Factory(t) { return new (t || HeadingThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HeadingThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingThreeComponent, selectors: [["h3", "heading-two", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c3, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function HeadingThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeadingThreeComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadingThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "h3[heading-two]",
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class HeadingFourComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
HeadingFourComponent.type = "heading-four";
HeadingFourComponent.ɵfac = function HeadingFourComponent_Factory(t) { return new (t || HeadingFourComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HeadingFourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingFourComponent, selectors: [["h4", "heading-two", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c3, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function HeadingFourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeadingFourComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadingFourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "h4[heading-two]",
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class HeadingFiveComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
HeadingFiveComponent.type = "heading-five";
HeadingFiveComponent.ɵfac = function HeadingFiveComponent_Factory(t) { return new (t || HeadingFiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HeadingFiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingFiveComponent, selectors: [["h5", "heading-two", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c3, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function HeadingFiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeadingFiveComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadingFiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "h5[heading-two]",
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class HeadingSixComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
HeadingSixComponent.type = "heading-six";
HeadingSixComponent.ɵfac = function HeadingSixComponent_Factory(t) { return new (t || HeadingSixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HeadingSixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingSixComponent, selectors: [["h6", "heading-two", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c3, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function HeadingSixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeadingSixComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadingSixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "h6[heading-two]",
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class ListItemComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
ListItemComponent.type = "list-item";
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["li", "list-item", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c4, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "li[list-item]",
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class NumberedListComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
        this.useHostBinding = false;
    }
}
NumberedListComponent.type = "numbered-list";
NumberedListComponent.ɵfac = function NumberedListComponent_Factory(t) { return new (t || NumberedListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NumberedListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberedListComponent, selectors: [["ol", "numbered-list", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c5, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function NumberedListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NumberedListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberedListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ol[numbered-list]",
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
const CustomComponents = [
    NumberedListComponent,
    ListItemComponent,
    HeadingOneComponent,
    HeadingTwoComponent,
    HeadingThreeComponent,
    HeadingFourComponent,
    HeadingFiveComponent,
    HeadingSixComponent,
    BulletedListComponent,
    BlockQuoteComponent
];


/***/ }),

/***/ "BnbQ":
/*!*********************************************************************************!*\
  !*** ./src/app/examples/code-highlighting/custom-leaf/custom-leaf.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LeafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafComponent", function() { return LeafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _slate_ng_view_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../slate-ng-view/src */ "QB+8");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");




const _c0 = ["app-custom-leaf", ""];
function LeafComponent_ng_template_0_Template(rf, ctx) { }
class LeafComponent extends _slate_ng_view_src__WEBPACK_IMPORTED_MODULE_1__["BaseLeafComponent"] {
    constructor(leafChild, leaf) {
        super();
        this.leafChild = leafChild;
        this.leaf = leaf;
    }
    get color() {
        const leaf = this.leaf;
        if (leaf === null || leaf === void 0 ? void 0 : leaf.comment) {
            return 'slategray';
        }
        if ((leaf === null || leaf === void 0 ? void 0 : leaf.operator) || leaf.url) {
            return '#9a6e3a';
        }
        if (leaf === null || leaf === void 0 ? void 0 : leaf.keyword) {
            return '#07a';
        }
        if ((leaf === null || leaf === void 0 ? void 0 : leaf.variable) || (leaf === null || leaf === void 0 ? void 0 : leaf.regex)) {
            return '#e90';
        }
        if (leaf.number ||
            leaf.boolean ||
            leaf.tag ||
            leaf.constant ||
            leaf.symbol ||
            leaf['attr-name'] ||
            leaf.selector) {
            return '#905';
        }
        if (leaf.punctuation) {
            return '#999';
        }
        if (leaf.string || leaf.char) {
            return '#690';
        }
        if (leaf.function || leaf['class-name']) {
            return '#dd4a68';
        }
    }
    ;
    ngOnInit() {
    }
}
LeafComponent.type = "leaf";
LeafComponent.ɵfac = function LeafComponent_Factory(t) { return new (t || LeafComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_slate_ng_view_src__WEBPACK_IMPORTED_MODULE_1__["LEAF_CHILD_PORTAL_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_slate_ng_view_src__WEBPACK_IMPORTED_MODULE_1__["LEAF_TOKEN"])); };
LeafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeafComponent, selectors: [["span", "app-custom-leaf", ""]], hostVars: 2, hostBindings: function LeafComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 1, vars: 1, consts: [[3, "cdkPortalOutlet"]], template: function LeafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeafComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx.leafChild);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]], styles: ["[_nghost-%COMP%] {\n      font-family: monospace;\n      background: hsla(0, 0%, 100%, .5);\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'span[app-custom-leaf]',
                template: `
    <ng-template [cdkPortalOutlet]="leafChild"></ng-template>
  `,
                styles: [`
    :host {
      font-family: monospace;
      background: hsla(0, 0%, 100%, .5);
    }
  `]
            }]
    }], function () { return [{ type: _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_slate_ng_view_src__WEBPACK_IMPORTED_MODULE_1__["LEAF_CHILD_PORTAL_TOKEN"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_slate_ng_view_src__WEBPACK_IMPORTED_MODULE_1__["LEAF_TOKEN"]]
            }] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.color']
        }] }); })();


/***/ }),

/***/ "CS3F":
/*!********************************************************!*\
  !*** ../slate-ng-view/src/components/element/token.ts ***!
  \********************************************************/
/*! exports provided: CHILD_PORTALS_TOKEN, PARENT_NODE_TOKEN, CURRENT_NODE_TOKEN, NODE_INDEX_TOKEN, IS_LAST_TOKEN, KEY_TOKEN, DECORATIONS_TOKEN, SELECTION_TOKEN, LEAF_TOKEN, LEAF_CHILD_PORTAL_TOKEN, PLACEHOLDER_CHILDREN_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHILD_PORTALS_TOKEN", function() { return CHILD_PORTALS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARENT_NODE_TOKEN", function() { return PARENT_NODE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_NODE_TOKEN", function() { return CURRENT_NODE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_INDEX_TOKEN", function() { return NODE_INDEX_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_LAST_TOKEN", function() { return IS_LAST_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_TOKEN", function() { return KEY_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECORATIONS_TOKEN", function() { return DECORATIONS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_TOKEN", function() { return SELECTION_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEAF_TOKEN", function() { return LEAF_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEAF_CHILD_PORTAL_TOKEN", function() { return LEAF_CHILD_PORTAL_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER_CHILDREN_TOKEN", function() { return PLACEHOLDER_CHILDREN_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");

const CHILD_PORTALS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("child_portals_token");
const PARENT_NODE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("parent_node_token");
const CURRENT_NODE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("current_node_token");
const NODE_INDEX_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("node_index_token");
const IS_LAST_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("is_last_token");
const KEY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("key_token");
const DECORATIONS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("decorations_token");
const SELECTION_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("selection_token");
const LEAF_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("leaf_token");
const LEAF_CHILD_PORTAL_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("leaf_child_portal_token");
const PLACEHOLDER_CHILDREN_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("placeholder_children_token");


/***/ }),

/***/ "D1+F":
/*!*****************************************!*\
  !*** ../slate-ng-view/src/utils/dom.ts ***!
  \*****************************************/
/*! exports provided: DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange, getDefaultView, isDOMComment, isDOMElement, isDOMNode, isDOMSelection, isDOMText, isPlainTextOnlyPaste, normalizeDOMPoint, hasShadowRoot, getEditableChildAndIndex, getEditableChild, getPlainText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMNode", function() { return DOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMComment", function() { return DOMComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMElement", function() { return DOMElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMText", function() { return DOMText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMRange", function() { return DOMRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMSelection", function() { return DOMSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMStaticRange", function() { return DOMStaticRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultView", function() { return getDefaultView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMComment", function() { return isDOMComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMElement", function() { return isDOMElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMNode", function() { return isDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMSelection", function() { return isDOMSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMText", function() { return isDOMText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainTextOnlyPaste", function() { return isPlainTextOnlyPaste; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDOMPoint", function() { return normalizeDOMPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasShadowRoot", function() { return hasShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditableChildAndIndex", function() { return getEditableChildAndIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditableChild", function() { return getEditableChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlainText", function() { return getPlainText; });
/**
 * Types.
 */
// COMPAT: This is required to prevent TypeScript aliases from doing some very
// weird things for Slate's types with the same name as globals. (2019/11/27)
// https://github.com/microsoft/TypeScript/issues/35002
var DOMNode = globalThis.Node;
var DOMComment = globalThis.Comment;
var DOMElement = globalThis.Element;
var DOMText = globalThis.Text;
var DOMRange = globalThis.Range;
var DOMSelection = globalThis.Selection;
var DOMStaticRange = globalThis.StaticRange;

/**
 * Returns the host window of a DOM node
 */
const getDefaultView = (value) => {
    return ((value && value.ownerDocument && value.ownerDocument.defaultView) || null);
};
/**
 * Check if a DOM node is a comment node.
 */
const isDOMComment = (value) => {
    return isDOMNode(value) && value.nodeType === 8;
};
/**
 * Check if a DOM node is an element node.
 */
const isDOMElement = (value) => {
    return isDOMNode(value) && value.nodeType === 1;
};
/**
 * Check if a value is a DOM node.
 */
const isDOMNode = (value) => {
    // todo: 临时用于解决内嵌iframe editor造成value instanceof window.Node为false
    return value instanceof globalThis.Node;
};
/**
 * Check if a value is a DOM selection.
 */
const isDOMSelection = (value) => {
    const window = value && value.anchorNode && getDefaultView(value.anchorNode);
    return !!window && value instanceof window.Selection;
};
/**
 * Check if a DOM node is an element node.
 */
const isDOMText = (value) => {
    return isDOMNode(value) && value.nodeType === 3;
};
/**
 * Checks whether a paste event is a plaintext-only event.
 */
const isPlainTextOnlyPaste = (event) => {
    return (event.clipboardData &&
        event.clipboardData.getData('text/plain') !== '' &&
        event.clipboardData.types.length === 1);
};
/**
 * Normalize a DOM point so that it always refers to a text node.
 */
const normalizeDOMPoint = (domPoint) => {
    let [node, offset] = domPoint;
    // If it's an element node, its offset refers to the index of its children
    // including comment nodes, so try to find the right text child node.
    if (isDOMElement(node) && node.childNodes.length) {
        let isLast = offset === node.childNodes.length;
        let index = isLast ? offset - 1 : offset;
        const editableChildAndIndex = getEditableChildAndIndex(node, index, isLast ? 'backward' : 'forward');
        node = editableChildAndIndex[0];
        index = editableChildAndIndex[1];
        // If the editable child found is in front of input offset, we instead seek to its end
        isLast = index < offset;
        // If the node has children, traverse until we have a leaf node. Leaf nodes
        // can be either text nodes, or other void DOM nodes.
        while (isDOMElement(node) && node.childNodes.length) {
            const i = isLast ? node.childNodes.length - 1 : 0;
            node = getEditableChild(node, i, isLast ? 'backward' : 'forward');
        }
        // Determine the new offset inside the text node.
        offset = isLast && node.textContent != null ? node.textContent.length : 0;
    }
    // Return the node and offset.
    return [node, offset];
};
/**
 * Determines wether the active element is nested within a shadowRoot
 */
const hasShadowRoot = () => {
    return !!(window.document.activeElement && window.document.activeElement.shadowRoot);
};
/**
 * Get the nearest editable child and index at `index` in a `parent`, preferring
 * `direction`.
 */
const getEditableChildAndIndex = (parent, index, direction) => {
    const { childNodes } = parent;
    let child = childNodes[index];
    let i = index;
    let triedForward = false;
    let triedBackward = false;
    // While the child is a comment node, or an element node with no children,
    // keep iterating to find a sibling non-void, non-comment node.
    while (isDOMComment(child) ||
        (isDOMElement(child) && child.childNodes.length === 0) ||
        (isDOMElement(child) && child.getAttribute('contenteditable') === 'false')) {
        if (triedForward && triedBackward) {
            break;
        }
        if (i >= childNodes.length) {
            triedForward = true;
            i = index - 1;
            direction = 'backward';
            continue;
        }
        if (i < 0) {
            triedBackward = true;
            i = index + 1;
            direction = 'forward';
            continue;
        }
        child = childNodes[i];
        index = i;
        i += direction === 'forward' ? 1 : -1;
    }
    return [child, index];
};
/**
 * Get the nearest editable child at `index` in a `parent`, preferring
 * `direction`.
 */
const getEditableChild = (parent, index, direction) => {
    const [child] = getEditableChildAndIndex(parent, index, direction);
    return child;
};
/**
 * Get a plaintext representation of the content of a node, accounting for block
 * elements which get a newline appended.
 *
 * The domNode must be attached to the DOM.
 */
const getPlainText = (domNode) => {
    let text = '';
    if (isDOMText(domNode) && domNode.nodeValue) {
        return domNode.nodeValue;
    }
    if (isDOMElement(domNode)) {
        for (const childNode of Array.from(domNode.childNodes)) {
            text += getPlainText(childNode);
        }
        const display = getComputedStyle(domNode).getPropertyValue('display');
        if (display === 'block' || display === 'list' || domNode.tagName === 'BR') {
            text += '\n';
        }
    }
    return text;
};


/***/ }),

/***/ "D1Mv":
/*!************************************************************************************!*\
  !*** ./src/app/examples/hovering-toolbar/format-button/format-button.component.ts ***!
  \************************************************************************************/
/*! exports provided: FormatButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatButtonComponent", function() { return FormatButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/button/button.component */ "7psr");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/icon/icon.component */ "WaCx");






class FormatButtonComponent {
    constructor(editorService) {
        this.editorService = editorService;
        this.format = '';
        this.icon = '';
    }
    ngOnInit() {
    }
    handle($event) {
        $event.preventDefault();
        this.toggleFormat();
    }
    toggleFormat() {
        const isActive = this.isFormatActive();
        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(this.editorService.editor, { [this.format]: isActive ? null : true }, { match: slate__WEBPACK_IMPORTED_MODULE_1__["Text"].isText, split: true });
    }
    isFormatActive() {
        const editor = this.editorService.editor;
        const [match] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].nodes(editor, {
            match: n => n[this.format] === true,
            mode: 'all',
        });
        return !!match;
    }
}
FormatButtonComponent.ɵfac = function FormatButtonComponent_Factory(t) { return new (t || FormatButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"])); };
FormatButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormatButtonComponent, selectors: [["app-format-button"]], inputs: { format: "format", icon: "icon" }, decls: 3, vars: 2, consts: [["reversed", "", 3, "active", "onMouseDown"]], template: function FormatButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function FormatButtonComponent_Template_app_button_onMouseDown_0_listener($event) { return ctx.handle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.isFormatActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon);
    } }, directives: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvaG92ZXJpbmctdG9vbGJhci9mb3JtYXQtYnV0dG9uL2Zvcm1hdC1idXR0b24uY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-format-button',
                templateUrl: './format-button.component.html',
                styleUrls: ['./format-button.component.less']
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"] }]; }, { format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "DZr1":
/*!********************************************************************************!*\
  !*** ../slate-ng-view/src/polyfills/before-input/dom-top-level-event-types.ts ***!
  \********************************************************************************/
/*! exports provided: TOP_BLUR, TOP_COMPOSITION_END, TOP_COMPOSITION_START, TOP_COMPOSITION_UPDATE, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN, TOP_MOUSE_MOVE, TOP_MOUSE_OUT, TOP_TEXT_INPUT, TOP_PASTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_BLUR", function() { return TOP_BLUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_COMPOSITION_END", function() { return TOP_COMPOSITION_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_COMPOSITION_START", function() { return TOP_COMPOSITION_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_COMPOSITION_UPDATE", function() { return TOP_COMPOSITION_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_KEY_DOWN", function() { return TOP_KEY_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_KEY_PRESS", function() { return TOP_KEY_PRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_KEY_UP", function() { return TOP_KEY_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_MOUSE_DOWN", function() { return TOP_MOUSE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_MOUSE_MOVE", function() { return TOP_MOUSE_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_MOUSE_OUT", function() { return TOP_MOUSE_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_TEXT_INPUT", function() { return TOP_TEXT_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP_PASTE", function() { return TOP_PASTE; });
const TOP_BLUR = 'blur';
const TOP_COMPOSITION_END = 'compositionend';
const TOP_COMPOSITION_START = 'compositionstart';
const TOP_COMPOSITION_UPDATE = 'compositionupdate';
const TOP_KEY_DOWN = 'keydown';
const TOP_KEY_PRESS = 'keypress';
const TOP_KEY_UP = 'keyup';
const TOP_MOUSE_DOWN = 'mousedown';
const TOP_MOUSE_MOVE = 'mousemove';
const TOP_MOUSE_OUT = 'mouseout';
const TOP_TEXT_INPUT = 'textInput';
const TOP_PASTE = 'paste';


/***/ }),

/***/ "Du7K":
/*!*************************************************!*\
  !*** ../slate-ng-view/src/utils/environment.ts ***!
  \*************************************************/
/*! exports provided: IS_IOS, IS_APPLE, IS_FIREFOX, IS_SAFARI, IS_EDGE_LEGACY, IS_CHROME, IS_CHROME_LEGACY, IS_FIREFOX_LEGACY, CAN_USE_DOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_IOS", function() { return IS_IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_APPLE", function() { return IS_APPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_FIREFOX", function() { return IS_FIREFOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_SAFARI", function() { return IS_SAFARI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_EDGE_LEGACY", function() { return IS_EDGE_LEGACY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_CHROME", function() { return IS_CHROME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_CHROME_LEGACY", function() { return IS_CHROME_LEGACY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_FIREFOX_LEGACY", function() { return IS_FIREFOX_LEGACY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAN_USE_DOM", function() { return CAN_USE_DOM; });
const IS_IOS = typeof navigator !== 'undefined' &&
    typeof window !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !window.MSStream;
const IS_APPLE = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent);
const IS_FIREFOX = typeof navigator !== 'undefined' &&
    /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
const IS_SAFARI = typeof navigator !== 'undefined' &&
    /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
// "modern" Edge was released at 79.x
const IS_EDGE_LEGACY = typeof navigator !== 'undefined' &&
    /Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(navigator.userAgent);
const IS_CHROME = typeof navigator !== 'undefined' && /Chrome/i.test(navigator.userAgent);
// Native `beforeInput` events don't work well with react on Chrome 75
// and older, Chrome 76+ can use `beforeInput` though.
const IS_CHROME_LEGACY = typeof navigator !== 'undefined' &&
    /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent);
// Firefox did not support `beforeInput` until `v87`.
const IS_FIREFOX_LEGACY = typeof navigator !== 'undefined' &&
    /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])).*/i.test(navigator.userAgent);
// Check if DOM is available as React does internally.
// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const CAN_USE_DOM = !!(typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined');


/***/ }),

/***/ "EFKx":
/*!***********************************************************!*\
  !*** ./src/app/examples/rich-text/rich-text.component.ts ***!
  \***********************************************************/
/*! exports provided: RichTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextComponent", function() { return RichTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var _custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-leaf/custom-leaf.component */ "s4bw");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-hotkey */ "yoaI");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element */ "BBgI");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/debounce */ "RNvQ");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon-button/icon-button.component */ "vraZ");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");







// @ts-ignore






const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code'
};
const LIST_TYPES = ['numbered-list', 'bulleted-list'];
class RichTextComponent {
    constructor(customElement, cdr) {
        this.customElement = customElement;
        this.cdr = cdr;
        this.initialValue = [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Since it\'s rich text, you can do things like turn a selection of text '
                    },
                    { text: 'bold', bold: true },
                    {
                        text: ', or add a semantically rendered block quote in the middle of the page, like this:'
                    }
                ]
            },
            {
                type: 'block-quote',
                children: [{ text: 'A wise quote.' }]
            },
            {
                type: 'paragraph',
                children: [{ text: 'Try it out for yourself!' }]
            }
        ];
        this.editor = Object(slate_history__WEBPACK_IMPORTED_MODULE_3__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_2__["createEditor"])()));
        this.selectChange = lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default()(() => {
            this.cdr.detectChanges();
        }, 300);
        this.onKeyDown = (event) => {
            for (const hotKey in HOTKEYS) {
                const isHot = Object(is_hotkey__WEBPACK_IMPORTED_MODULE_5__["isKeyHotkey"])(hotKey);
                if (isHot(event)) {
                    event.preventDefault();
                    const mark = HOTKEYS[hotKey];
                    this.toggleMark(mark);
                }
            }
        };
    }
    ngOnInit() {
        this.customElement.add([_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_4__["CustomLeafComponent"], ..._element__WEBPACK_IMPORTED_MODULE_6__["CustomComponents"]]);
    }
    toggleMark(format) {
        const isActive = this.isMarkActive(format);
        if (isActive) {
            slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].removeMark(this.editor, format);
        }
        else {
            slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].addMark(this.editor, format, true);
        }
    }
    isMarkActive(format) {
        const marks = slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].marks(this.editor);
        return marks ? marks[format] === true : false;
    }
    toggleBlock(format) {
        const isActive = this.isBlockActive(format);
        const isList = LIST_TYPES.includes(format);
        slate__WEBPACK_IMPORTED_MODULE_2__["Transforms"].unwrapNodes(this.editor, {
            match: n => LIST_TYPES.includes(!slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_2__["Element"].isElement(n) && n.type),
            split: true,
        });
        const newProperties = {
            type: isActive ? 'paragraph' : isList ? 'list-item' : format,
        };
        slate__WEBPACK_IMPORTED_MODULE_2__["Transforms"].setNodes(this.editor, newProperties);
        if (!isActive && isList) {
            const block = { type: format, children: [] };
            slate__WEBPACK_IMPORTED_MODULE_2__["Transforms"].wrapNodes(this.editor, block);
        }
    }
    isBlockActive(format) {
        const [match] = slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].nodes(this.editor, {
            match: n => !slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].isEditor(n) && slate__WEBPACK_IMPORTED_MODULE_2__["Element"].isElement(n) && n.type === format,
        });
        return !!match;
    }
}
RichTextComponent.ɵfac = function RichTextComponent_Factory(t) { return new (t || RichTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RichTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RichTextComponent, selectors: [["app-rich-text"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]])], decls: 12, vars: 13, consts: [["icon", "format_bold", 3, "isActive", "onMouseDown"], ["icon", "format_italic", 3, "isActive", "onMouseDown"], ["icon", "format_underline", 3, "isActive", "onMouseDown"], ["icon", "format_code", 3, "isActive", "onMouseDown"], ["icon", "looks_one", 3, "isActive", "onMouseDown"], ["icon", "looks_two", 3, "isActive", "onMouseDown"], ["icon", "format_quote", 3, "isActive", "onMouseDown"], ["icon", "format_list_numbered", 3, "isActive", "onMouseDown"], ["icon", "format_list_bulleted", 3, "isActive", "onMouseDown"], ["ns-editor", "", "spellCheck", "", "autoFocus", "", "placeholder", "Enter some rich text...", 3, "editor", "value", "nsOnKeyDown", "nsSelectionChange"]], template: function RichTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-icon-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function RichTextComponent_Template_app_icon_button_onMouseDown_2_listener() { return ctx.toggleMark("bold"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-icon-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function RichTextComponent_Template_app_icon_button_onMouseDown_3_listener() { return ctx.toggleMark("italic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-icon-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function RichTextComponent_Template_app_icon_button_onMouseDown_4_listener() { return ctx.toggleMark("underline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-icon-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function RichTextComponent_Template_app_icon_button_onMouseDown_5_listener() { return ctx.toggleMark("code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-icon-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function RichTextComponent_Template_app_icon_button_onMouseDown_6_listener() { return ctx.toggleBlock("heading-one"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-icon-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function RichTextComponent_Template_app_icon_button_onMouseDown_7_listener() { return ctx.toggleBlock("heading-two"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-icon-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function RichTextComponent_Template_app_icon_button_onMouseDown_8_listener() { return ctx.toggleBlock("block-quote"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-icon-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function RichTextComponent_Template_app_icon_button_onMouseDown_9_listener() { return ctx.toggleBlock("numbered-list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-icon-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function RichTextComponent_Template_app_icon_button_onMouseDown_10_listener() { return ctx.toggleBlock("bulleted-list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isMarkActive("bold"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isMarkActive("italic"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isMarkActive("underline"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isMarkActive("code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isBlockActive("heading-one"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isBlockActive("heading-two"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isBlockActive("block-quote"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isBlockActive("numbered-list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isBlockActive("bulleted-list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue)("nsOnKeyDown", ctx.onKeyDown)("nsSelectionChange", ctx.selectChange);
    } }, directives: [_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"], _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_9__["IconButtonComponent"], _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_10__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvcmljaC10ZXh0L3JpY2gtdGV4dC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RichTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rich-text',
                templateUrl: './rich-text.component.html',
                styleUrls: ['./rich-text.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "EfAC":
/*!***************************************************************************!*\
  !*** ./src/app/examples/code-highlighting/code-highlighting.component.ts ***!
  \***************************************************************************/
/*! exports provided: CodeHighlightingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlightingComponent", function() { return CodeHighlightingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "n5u1");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-python */ "XmX7");
/* harmony import */ var prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-php */ "DmZe");
/* harmony import */ var prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_php__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-sql */ "RmLS");
/* harmony import */ var prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-java */ "WkYg");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-leaf/custom-leaf.component */ "BnbQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");














const _c0 = function () { return { position: "relative", top: "5px", right: "5px" }; };
const _c1 = function () { return { float: "right" }; };
class CodeHighlightingComponent {
    constructor(deps, editorService, elementRef, cdr, customElementService) {
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.customElementService = customElementService;
        this.initialValue = [
            {
                type: 'paragraph',
                children: [
                    {
                        text: '<h1>Hi!</h1>'
                    }
                ]
            }
        ];
        this.language = 'html';
        this.editor = Object(slate_history__WEBPACK_IMPORTED_MODULE_7__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_6__["createEditor"])()));
        this.decorate = this._decorate.bind(this);
    }
    ngOnInit() {
        this.customElementService.add([_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_9__["LeafComponent"]]);
    }
    _decorate([node, path]) {
        const ranges = [];
        if (!slate__WEBPACK_IMPORTED_MODULE_6__["Text"].isText(node)) {
            return ranges;
        }
        const tokens = prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.tokenize(node.text, prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages[this.language]);
        let start = 0;
        for (const token of tokens) {
            const length = getLength(token);
            const end = start + length;
            if (typeof token !== 'string') {
                ranges.push({
                    [token.type]: true,
                    anchor: { path, offset: start },
                    focus: { path, offset: end }
                });
            }
            start = end;
        }
        return ranges;
    }
    handle($event) {
        this.decorate = this._decorate.bind(this);
        this.editor.onChange();
    }
}
CodeHighlightingComponent.ɵfac = function CodeHighlightingComponent_Factory(t) { return new (t || CodeHighlightingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["RegistryNsElement"])); };
CodeHighlightingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeHighlightingComponent, selectors: [["app-code-highlighting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["NsDepsService"]])], decls: 19, vars: 11, consts: [[3, "ngModel", "ngModelChange"], ["value", "js"], ["value", "css"], ["value", "html"], ["value", "python"], ["value", "sql"], ["value", "java"], ["value", "php"], ["ns-editor", "", "placeholder", "Write some code...", 3, "editor", "decorate", "value"]], template: function CodeHighlightingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select a language ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CodeHighlightingComponent_Template_select_ngModelChange_3_listener($event) { return ctx.language = $event; })("ngModelChange", function CodeHighlightingComponent_Template_select_ngModelChange_3_listener($event) { return ctx.handle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("contentEditable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("decorate", ctx.decorate)("value", ctx.initialValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_11__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvY29kZS1oaWdobGlnaHRpbmcvY29kZS1oaWdobGlnaHRpbmcuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeHighlightingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-code-highlighting',
                templateUrl: './code-highlighting.component.html',
                styleUrls: ['./code-highlighting.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["NsDepsService"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_8__["RegistryNsElement"] }]; }, null); })();
const getLength = token => {
    if (typeof token === 'string') {
        return token.length;
    }
    else if (typeof token.content === 'string') {
        return token.content.length;
    }
    else {
        return token.content.reduce((l, t) => l + getLength(t), 0);
    }
};
// modifications and additions to prism library
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.python = prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.extend('python', {});
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.insertBefore('python', 'prolog', {
    comment: { pattern: /##[^\n]*/, alias: 'comment' }
});
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.javascript = prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.extend('javascript', {});
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.insertBefore('javascript', 'prolog', {
    comment: { pattern: /\/\/[^\n]*/, alias: 'comment' }
});
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.html = prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.extend('html', {});
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.insertBefore('html', 'prolog', {
    comment: { pattern: /<!--[^\n]*-->/, alias: 'comment' }
});
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.markdown = prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.extend('markup', {});
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.insertBefore('markdown', 'prolog', {
    blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
    code: [
        { pattern: /^(?: {4}|\t).+/m, alias: 'keyword' },
        { pattern: /``.+?``|`[^`\n]+`/, alias: 'keyword' }
    ],
    title: [
        {
            pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
            alias: 'important',
            inside: { punctuation: /==+$|--+$/ }
        },
        {
            pattern: /(^\s*)#+.+/m,
            lookbehind: !0,
            alias: 'important',
            inside: { punctuation: /^#+|#+$/ }
        }
    ],
    hr: {
        pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: 'punctuation'
    },
    list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: 'punctuation'
    },
    'url-reference': {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
            variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
        },
        alias: 'url'
    },
    bold: {
        pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: !0,
        inside: { punctuation: /^\*\*|^__|\*\*$|__$/ }
    },
    italic: {
        pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: !0,
        inside: { punctuation: /^[*_]|[*_]$/ }
    },
    url: {
        pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
        inside: {
            variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
            string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ }
        }
    }
});
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.markdown.bold.inside.url = prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.markdown.url);
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.markdown.italic.inside.url = prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.markdown.url);
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.markdown.bold.inside.italic = prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.markdown.italic);
prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.markdown.italic.inside.bold = prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.util.clone(prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.languages.markdown.bold); // prettier-ignore


/***/ }),

/***/ "FGma":
/*!************************************************************************!*\
  !*** ../slate-ng-view/src/components/text/leaf/base-leaf.component.ts ***!
  \************************************************************************/
/*! exports provided: BaseLeafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLeafComponent", function() { return BaseLeafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class BaseLeafComponent {
    constructor() {
        this.dataSlateLeaf = true;
    }
}
BaseLeafComponent.ɵfac = function BaseLeafComponent_Factory(t) { return new (t || BaseLeafComponent)(); };
BaseLeafComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseLeafComponent, hostVars: 1, hostBindings: function BaseLeafComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slate-leaf", ctx.dataSlateLeaf);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseLeafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], null, { dataSlateLeaf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.data-slate-leaf']
        }] }); })();


/***/ }),

/***/ "G7gg":
/*!************************************************************!*\
  !*** ./src/app/examples/huge-document/huge-document-h1.ts ***!
  \************************************************************/
/*! exports provided: HugeDocumentH1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HugeDocumentH1", function() { return HugeDocumentH1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");






const _c0 = ["huge-document-h1", ""];
function HugeDocumentH1_ng_container_0_ng_template_1_Template(rf, ctx) { }
function HugeDocumentH1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HugeDocumentH1_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
class HugeDocumentH1 extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
HugeDocumentH1.type = 'heading';
HugeDocumentH1.ɵfac = function HugeDocumentH1_Factory(t) { return new (t || HugeDocumentH1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HugeDocumentH1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HugeDocumentH1, selectors: [["h1", "huge-document-h1", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function HugeDocumentH1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HugeDocumentH1_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HugeDocumentH1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'h1[huge-document-h1]',
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "JE8C":
/*!*******************************************************************************!*\
  !*** ../slate-ng-view/src/components/text/leaf-child/leaf-child.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LeafChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafChildComponent", function() { return LeafChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _utils_weak_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/weak-maps */ "nYjg");
/* harmony import */ var _element_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../element/token */ "CS3F");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../placeholder/placeholder.component */ "R/AY");
/* harmony import */ var _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../plugins/angular-editor */ "b2nx");
/* harmony import */ var _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/registry-ns-element.service */ "Xqrq");
/* harmony import */ var _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/ns-editor.service */ "wpMU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");












const _c0 = ["ZeroWidthString"];
const _c1 = ["TextString"];
function LeafChildComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function LeafChildComponent_1_ng_template_0_Template(rf, ctx) { }
function LeafChildComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeafChildComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx_r1.placeholderPortal);
} }
function LeafChildComponent_ng_template_2_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function LeafChildComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeafChildComponent_ng_template_2_br_2_Template, 1, 0, "br", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const length_r7 = ctx.length;
    const isLineBreak_r8 = ctx.isLineBreak;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slate-zero-width", isLineBreak_r8 ? "n" : "z")("data-slate-length", length_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", "\uFEFF", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLineBreak_r8);
} }
function LeafChildComponent_ng_template_4_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function LeafChildComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeafChildComponent_ng_template_4_br_2_Template, 1, 0, "br", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const text_r10 = ctx.text;
    const isTrailing_r11 = ctx.isTrailing;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](text_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isTrailing_r11);
} }
class LeafChildComponent {
    constructor(isLast, cNode, pNode, leaf, customService, injector, editorService, cdr) {
        this.isLast = isLast;
        this.cNode = cNode;
        this.pNode = pNode;
        this.leaf = leaf;
        this.customService = customService;
        this.injector = injector;
        this.editorService = editorService;
        this.cdr = cdr;
        this.placeholderPortal = null;
    }
    get hasPlaceholder() {
        return this.leaf[_utils_weak_maps__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_SYMBOL"]];
    }
    ngOnInit() {
        if (this.hasPlaceholder) {
            this.placeholderPortal =
                this.customService.getComponentPortal('placeholder', [{
                        provide: _element_token__WEBPACK_IMPORTED_MODULE_2__["PLACEHOLDER_CHILDREN_TOKEN"],
                        useValue: this.leaf.placeholder
                    }], this.injector, _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_4__["PlaceholderComponent"]);
        }
    }
    ngAfterViewInit() {
        this.generateStringData();
        this.cdr.detectChanges();
        // todo: 可以重构，使用editorService
        const editorEl = this.editorEl = document.querySelector('[data-slate-ng-editor="true"]');
        const placeholderEl = document.querySelector('[data-slate-placeholder="true"]');
        if (!placeholderEl || !editorEl) {
            return;
        }
        editorEl.style.minHeight = `${placeholderEl.clientHeight}px`;
    }
    ngOnDestroy() {
        this.editorEl && (this.editorEl.style.minHeight = 'auto');
    }
    generateStringData() {
        const editor = this.editorService.editor;
        const path = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditor"].findPath(editor, this.cNode);
        const parentPath = slate__WEBPACK_IMPORTED_MODULE_3__["Path"].parent(path);
        if (editor.isVoid(this.pNode)) {
            this.template = this.ZeroWidthStringTmpl;
            this.context = {
                length: slate__WEBPACK_IMPORTED_MODULE_3__["Node"].string(this.pNode).length,
                isLineBreak: false
            };
        }
        if (this.leaf.text === '' &&
            this.pNode.children[this.pNode.children.length - 1] === this.cNode &&
            !editor.isInline(this.pNode) &&
            slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].string(editor, parentPath) === '') {
            this.template = this.ZeroWidthStringTmpl;
            this.context = {
                length: 0,
                isLineBreak: true
            };
        }
        if (this.leaf.text === '') {
            this.template = this.ZeroWidthStringTmpl;
            this.context = {
                length: 0,
                isLineBreak: false
            };
        }
        if (this.isLast && this.leaf.text.slice(-1) === '\n') {
            this.template = this.TextStringTmpl;
            this.context = {
                isTrailing: true,
                text: this.leaf.text
            };
        }
        if (!this.template) {
            this.template = this.TextStringTmpl;
            this.context = {
                isTrailing: false,
                text: this.leaf.text
            };
        }
    }
}
LeafChildComponent.ɵfac = function LeafChildComponent_Factory(t) { return new (t || LeafChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_element_token__WEBPACK_IMPORTED_MODULE_2__["IS_LAST_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_element_token__WEBPACK_IMPORTED_MODULE_2__["CURRENT_NODE_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_element_token__WEBPACK_IMPORTED_MODULE_2__["PARENT_NODE_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_element_token__WEBPACK_IMPORTED_MODULE_2__["LEAF_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_6__["RegistryNsElement"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_editor_service__WEBPACK_IMPORTED_MODULE_7__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
LeafChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeafChildComponent, selectors: [["ns-leaf-child"]], viewQuery: function LeafChildComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ZeroWidthStringTmpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.TextStringTmpl = _t.first);
    } }, decls: 6, vars: 3, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["ZeroWidthString", ""], ["TextString", ""], [3, "cdkPortalOutlet"], [3, "innerHTML"], ["data-slate-string", ""]], template: function LeafChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeafChildComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeafChildComponent_1_Template, 1, 1, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeafChildComponent_ng_template_2_Template, 3, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LeafChildComponent_ng_template_4_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ctx.context);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasPlaceholder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["CdkPortalOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zbGF0ZS1uZy12aWV3L3NyYy9jb21wb25lbnRzL3RleHQvbGVhZi1jaGlsZC9sZWFmLWNoaWxkLmNvbXBvbmVudC5jc3MifQ== */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-leaf-child',
                templateUrl: './leaf-child.component.html',
                styleUrls: ['./leaf-child.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_element_token__WEBPACK_IMPORTED_MODULE_2__["IS_LAST_TOKEN"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_element_token__WEBPACK_IMPORTED_MODULE_2__["CURRENT_NODE_TOKEN"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_element_token__WEBPACK_IMPORTED_MODULE_2__["PARENT_NODE_TOKEN"]]
            }] }, { type: slate__WEBPACK_IMPORTED_MODULE_3__["Text"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_element_token__WEBPACK_IMPORTED_MODULE_2__["LEAF_TOKEN"]]
            }] }, { type: _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_6__["RegistryNsElement"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_7__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { ZeroWidthStringTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ZeroWidthString']
        }], TextStringTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['TextString']
        }] }); })();


/***/ }),

/***/ "Jecd":
/*!*******************************************************************!*\
  !*** ./src/app/examples/custom-placeholder/custom-placeholder.ts ***!
  \*******************************************************************/
/*! exports provided: CustomPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPlaceholder", function() { return CustomPlaceholder; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");



const _c0 = ["custom-placeholder", ""];
class CustomPlaceholder extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BasePlaceholderComponent"] {
    constructor(children) {
        super();
        this.children = children;
    }
}
CustomPlaceholder.type = 'placeholder';
CustomPlaceholder.ɵfac = function CustomPlaceholder_Factory(t) { return new (t || CustomPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_CHILDREN_TOKEN"])); };
CustomPlaceholder.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomPlaceholder, selectors: [["div", "custom-placeholder", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 4, vars: 1, template: function CustomPlaceholder_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Use the renderPlaceholder prop to customize rendering of the placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.children);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'div[custom-placeholder]',
                template: `
      <p>{{children}}</p>
      <pre>Use the renderPlaceholder prop to customize rendering of the placeholder</pre>
    `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_CHILDREN_TOKEN"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Kgum":
/*!**********************************************************************!*\
  !*** ../slate-ng-view/src/components/children/children.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChildrenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenComponent", function() { return ChildrenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _element_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element/element.component */ "OOKi");
/* harmony import */ var _text_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/text.component */ "O3V3");
/* harmony import */ var _element_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../element/token */ "CS3F");
/* harmony import */ var _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../plugins/angular-editor */ "b2nx");
/* harmony import */ var _utils_weak_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/weak-maps */ "nYjg");
/* harmony import */ var _utils_range_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/range-list */ "Tmwx");
/* harmony import */ var _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/registry-ns-element.service */ "Xqrq");
/* harmony import */ var _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/ns-editor.service */ "wpMU");
/* harmony import */ var _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/ns-deps.service */ "yiMJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");














function ChildrenComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function ChildrenComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChildrenComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
class ChildrenComponent {
    constructor(customElementService, editorService, injector, cdr, deps) {
        this.customElementService = customElementService;
        this.editorService = editorService;
        this.injector = injector;
        this.cdr = cdr;
        this.deps = deps;
        this.showPortals = [];
    }
    ngOnInit() {
        const editor = this.editorService.editor;
        this.getDecorations(editor);
        this.showPortals = this.resolvePortals(editor);
        const onChange = _utils_weak_maps__WEBPACK_IMPORTED_MODULE_6__["EDITOR_TO_ON_CHANGE"].get(editor);
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_6__["EDITOR_TO_ON_CHANGE"].set(editor, () => {
            this.getDecorations(editor);
            this.showPortals = this.resolvePortals(editor);
            this.cdr.detectChanges();
            // 需在resolvePortals结束后进行触发toNativeSelection事件，不然会造成得到的KEY_TO_ELEMENT错误
            onChange();
        });
    }
    computedPortal(providers, cNode, key) {
        let portal = null;
        this.deps.set(key, this.customElementService.getInjector(providers, this.injector));
        if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(cNode)) {
            portal = this.customElementService.getComponentPortal(cNode.type, [{
                    provide: _element_token__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"],
                    useValue: key
                }], this.injector, _element_element_component__WEBPACK_IMPORTED_MODULE_2__["ElementComponent"]);
        }
        else {
            portal = this.customElementService.getComponentPortal('text', [{
                    provide: _element_token__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"],
                    useValue: key
                }], this.injector, _text_text_component__WEBPACK_IMPORTED_MODULE_3__["TextComponent"]);
        }
        return portal;
    }
    resolvePortals(pNode) {
        const children = [];
        const editor = this.editorService.editor;
        const path = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditor"].findPath(editor, pNode);
        const selection = editor.selection;
        const isLeafBlock = slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(pNode) &&
            !editor.isInline(pNode) &&
            slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].hasInlines(editor, pNode);
        for (let i = 0; i < pNode.children.length; i++) {
            const cNode = pNode.children[i];
            const idx = i;
            const p = path.concat(idx);
            const hasKey = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditor"].hasKey(cNode);
            const key = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditor"].findKey(editor, cNode);
            const isLast = isLeafBlock && idx === pNode.children.length - 1;
            const range = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].range(editor, p);
            const sel = selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].intersection(range, selection);
            const ds = this.decorate([cNode, p]);
            for (const dec of this.decorations) {
                const d = slate__WEBPACK_IMPORTED_MODULE_1__["Range"].intersection(dec, range);
                if (d) {
                    ds.push(d);
                }
            }
            let childPortals = [];
            let portal = null;
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_6__["NODE_TO_INDEX"].set(cNode, idx);
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_6__["NODE_TO_PARENT"].set(cNode, pNode);
            if (cNode.children) {
                childPortals = this.resolvePortals(cNode);
            }
            const providers = [
                {
                    provide: _element_token__WEBPACK_IMPORTED_MODULE_4__["CHILD_PORTALS_TOKEN"],
                    useValue: childPortals
                },
                {
                    provide: _element_token__WEBPACK_IMPORTED_MODULE_4__["PARENT_NODE_TOKEN"],
                    useValue: pNode
                },
                {
                    provide: _element_token__WEBPACK_IMPORTED_MODULE_4__["CURRENT_NODE_TOKEN"],
                    useValue: cNode
                },
                {
                    provide: _element_token__WEBPACK_IMPORTED_MODULE_4__["NODE_INDEX_TOKEN"],
                    useValue: idx
                },
                {
                    provide: _element_token__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"],
                    useValue: key
                },
                {
                    provide: _element_token__WEBPACK_IMPORTED_MODULE_4__["DECORATIONS_TOKEN"],
                    useValue: ds || []
                },
                {
                    provide: _element_token__WEBPACK_IMPORTED_MODULE_4__["IS_LAST_TOKEN"],
                    useValue: isLast
                },
                {
                    provide: _element_token__WEBPACK_IMPORTED_MODULE_4__["SELECTION_TOKEN"],
                    useValue: sel
                }
            ];
            const prePortal = _utils_weak_maps__WEBPACK_IMPORTED_MODULE_6__["KEY_TO_PORTAL"].get(key);
            const preDeps = this.deps.get(key);
            // 减少重新创建portal
            if (hasKey && prePortal && preDeps) {
                const preNode = preDeps.injector.get(_element_token__WEBPACK_IMPORTED_MODULE_4__["CURRENT_NODE_TOKEN"]);
                const preDecorations = preDeps.injector.get(_element_token__WEBPACK_IMPORTED_MODULE_4__["DECORATIONS_TOKEN"]);
                if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(cNode)) {
                    if (preNode === cNode &&
                        Object(_utils_range_list__WEBPACK_IMPORTED_MODULE_7__["isDecoratorRangeListEqual"])(preDecorations, ds)) {
                        children.push(prePortal);
                        continue;
                    }
                    else if (preNode.type === cNode.type &&
                        this.customElementService.get(cNode.type) &&
                        prePortal.component === this.customElementService.get(cNode.type).comp) {
                        this.deps.set(key, this.customElementService.getInjector(providers, this.injector));
                        children.push(prePortal);
                        continue;
                    }
                }
                else {
                    const preParentNode = preDeps.injector.get(_element_token__WEBPACK_IMPORTED_MODULE_4__["PARENT_NODE_TOKEN"]);
                    const preIsLast = preDeps.injector.get(_element_token__WEBPACK_IMPORTED_MODULE_4__["IS_LAST_TOKEN"]);
                    if (preParentNode === pNode &&
                        preIsLast === isLast &&
                        preNode === cNode &&
                        Object(_utils_range_list__WEBPACK_IMPORTED_MODULE_7__["isDecoratorRangeListEqual"])(preDecorations, ds)) {
                        children.push(prePortal);
                        continue;
                    }
                    else if (preNode.type === cNode.type &&
                        this.customElementService.get(cNode.type) &&
                        prePortal.component === this.customElementService.get(cNode.type).comp) {
                        this.deps.set(key, this.customElementService.getInjector(providers, this.injector));
                        children.push(prePortal);
                        continue;
                    }
                }
            }
            portal = this.computedPortal(providers, cNode, key);
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_6__["KEY_TO_PORTAL"].set(key, portal);
            children.push(portal);
        }
        return children;
    }
    getDecorations(editor) {
        this.decorations = this.decorate([editor, []]);
        if (this.placeholder &&
            editor.children.length === 1 &&
            Array.from(slate__WEBPACK_IMPORTED_MODULE_1__["Node"].texts(editor)).length === 1 &&
            slate__WEBPACK_IMPORTED_MODULE_1__["Node"].string(editor) === '') {
            const start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, []);
            this.decorations.push({
                [_utils_weak_maps__WEBPACK_IMPORTED_MODULE_6__["PLACEHOLDER_SYMBOL"]]: true,
                placeholder: this.placeholder,
                anchor: start,
                focus: start
            });
        }
    }
    trackBy(index, item) {
        return item.injector.get(_element_token__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]).id || index;
    }
}
ChildrenComponent.ɵfac = function ChildrenComponent_Factory(t) { return new (t || ChildrenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_8__["RegistryNsElement"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_editor_service__WEBPACK_IMPORTED_MODULE_9__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_deps_service__WEBPACK_IMPORTED_MODULE_10__["NsDepsService"])); };
ChildrenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildrenComponent, selectors: [["ns-children"]], inputs: { placeholder: "placeholder", decorate: "decorate" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "cdkPortalOutlet"]], template: function ChildrenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChildrenComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.showPortals);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__["CdkPortalOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zbGF0ZS1uZy12aWV3L3NyYy9jb21wb25lbnRzL2NoaWxkcmVuL2NoaWxkcmVuLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildrenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-children',
                templateUrl: './children.component.html',
                styleUrls: ['./children.component.css']
            }]
    }], function () { return [{ type: _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_8__["RegistryNsElement"] }, { type: _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_9__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_10__["NsDepsService"] }]; }, { placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], decorate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Nr9U":
/*!******************************************************************************!*\
  !*** ../slate-ng-view/src/components/portal-entry/portal-entry.component.ts ***!
  \******************************************************************************/
/*! exports provided: PortalEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalEntryComponent", function() { return PortalEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _element_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element/token */ "CS3F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");





function PortalEntryComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function PortalEntryComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortalEntryComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
class PortalEntryComponent {
    constructor() { }
    ngOnInit() {
    }
    /**
     * componentPortal 循环渲染优化
     * @param index
     * @param item
     */
    trackBy(index, item) {
        var _a;
        return ((_a = item.injector.get(_element_token__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"])) === null || _a === void 0 ? void 0 : _a.id) || index;
    }
}
PortalEntryComponent.ɵfac = function PortalEntryComponent_Factory(t) { return new (t || PortalEntryComponent)(); };
PortalEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortalEntryComponent, selectors: [["ns-portal-entry"]], inputs: { portals: "portals" }, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function PortalEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PortalEntryComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zbGF0ZS1uZy12aWV3L3NyYy9jb21wb25lbnRzL3BvcnRhbC1lbnRyeS9wb3J0YWwtZW50cnkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-portal-entry',
                templateUrl: './portal-entry.component.html',
                styleUrls: ['./portal-entry.component.css']
            }]
    }], function () { return []; }, { portals: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "O3V3":
/*!**************************************************************!*\
  !*** ../slate-ng-view/src/components/text/text.component.ts ***!
  \**************************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _element_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element/token */ "CS3F");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _leaf_leaf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaf/leaf.component */ "6Rj7");
/* harmony import */ var _leaf_child_leaf_child_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaf-child/leaf-child.component */ "JE8C");
/* harmony import */ var _base_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base-text */ "u0dV");
/* harmony import */ var _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ns-deps.service */ "yiMJ");
/* harmony import */ var _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/registry-ns-element.service */ "Xqrq");
/* harmony import */ var _utils_key__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/key */ "VFa8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");












const _c0 = ["ns-text", ""];
function TextComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function TextComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const leafPortal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", leafPortal_r1);
} }
class TextComponent extends _base_text__WEBPACK_IMPORTED_MODULE_5__["BaseTextComponent"] {
    constructor(key, deps, elementRef, cdr, customService, injector) {
        super(key, deps, elementRef, cdr);
        this.key = key;
        this.deps = deps;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.customService = customService;
        this.injector = injector;
        this.leaves = [];
        this.leafPortals = [];
    }
    ngOnInit() {
        this.leaves = slate__WEBPACK_IMPORTED_MODULE_2__["Text"].decorations(this.cNode, this.decorations);
        this.getLeafPortals();
    }
    getLeafPortals() {
        this.leaves.forEach(leaf => {
            this.leafPortals.push(this.getLeafPortal(leaf));
        });
    }
    getLeafPortal(leaf) {
        const providers = [
            {
                provide: _element_token__WEBPACK_IMPORTED_MODULE_1__["IS_LAST_TOKEN"],
                useValue: this.isLast
            },
            {
                provide: _element_token__WEBPACK_IMPORTED_MODULE_1__["CURRENT_NODE_TOKEN"],
                useValue: this.cNode
            },
            {
                provide: _element_token__WEBPACK_IMPORTED_MODULE_1__["PARENT_NODE_TOKEN"],
                useValue: this.pNode
            },
            {
                provide: _element_token__WEBPACK_IMPORTED_MODULE_1__["LEAF_TOKEN"],
                useValue: leaf
            }
        ];
        const leafChildPortal = this.customService.getComponentPortal('leaf-child', providers, this.injector, _leaf_child_leaf_child_component__WEBPACK_IMPORTED_MODULE_4__["LeafChildComponent"]);
        const leafProviders = providers.concat({
            provide: _element_token__WEBPACK_IMPORTED_MODULE_1__["LEAF_CHILD_PORTAL_TOKEN"],
            useValue: leafChildPortal
        });
        return this.customService.getComponentPortal('leaf', leafProviders, this.injector, _leaf_leaf_component__WEBPACK_IMPORTED_MODULE_3__["LeafComponent"]);
    }
    ngAfterViewInit() {
        this.init(this.elementRef);
    }
    ngOnDestroy() {
        this.destroy();
    }
}
TextComponent.type = 'text';
TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_element_token__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_deps_service__WEBPACK_IMPORTED_MODULE_6__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_7__["RegistryNsElement"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextComponent, selectors: [["span", "ns-text", ""]], hostAttrs: ["data-slate-node", "text"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "cdkPortalOutlet"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TextComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.leafPortals);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["CdkPortalOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zbGF0ZS1uZy12aWV3L3NyYy9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQuY3NzIn0= */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'span[ns-text]',
                templateUrl: './text.component.html',
                styleUrls: ['./text.component.css'],
                host: {
                    'data-slate-node': 'text'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _utils_key__WEBPACK_IMPORTED_MODULE_8__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_element_token__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_6__["NsDepsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_7__["RegistryNsElement"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "OOKi":
/*!********************************************************************!*\
  !*** ../slate-ng-view/src/components/element/element.component.ts ***!
  \********************************************************************/
/*! exports provided: ElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementComponent", function() { return ElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-element */ "ZHd+");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ "CS3F");
/* harmony import */ var _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ns-deps.service */ "yiMJ");
/* harmony import */ var _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ns-editor.service */ "wpMU");
/* harmony import */ var _utils_key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/key */ "VFa8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");









const _c0 = ["ns-element", ""];
function ElementComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function ElementComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElementComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
class ElementComponent extends _base_element__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef, cdr) {
        super(key, deps, editorService, elementRef, cdr);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
        this.cdr = cdr;
    }
}
ElementComponent.type = "default";
ElementComponent.ɵfac = function ElementComponent_Factory(t) { return new (t || ElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_token__WEBPACK_IMPORTED_MODULE_2__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_deps_service__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_editor_service__WEBPACK_IMPORTED_MODULE_4__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ElementComponent, selectors: [["div", "ns-element", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function ElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ElementComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["CdkPortalOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zbGF0ZS1uZy12aWV3L3NyYy9jb21wb25lbnRzL2VsZW1lbnQvZWxlbWVudC5jb21wb25lbnQuY3NzIn0= */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "div[ns-element]",
                templateUrl: "./element.component.html",
                styleUrls: ["./element.component.css"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _utils_key__WEBPACK_IMPORTED_MODULE_5__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_token__WEBPACK_IMPORTED_MODULE_2__["KEY_TOKEN"]]
            }] }, { type: _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"] }, { type: _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_4__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "PAYk":
/*!*******************************************************************!*\
  !*** ./src/app/examples/huge-document/huge-document.component.ts ***!
  \*******************************************************************/
/*! exports provided: HugeDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HugeDocumentComponent", function() { return HugeDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _huge_document_h1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./huge-document-h1 */ "G7gg");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! faker */ "Mrh4");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");








class HugeDocumentComponent {
    constructor(registry) {
        this.registry = registry;
        this.editor = Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_3__["createEditor"])());
        this.initialValue = [];
    }
    ngOnInit() {
        this.create();
        this.registry.add([_huge_document_h1__WEBPACK_IMPORTED_MODULE_2__["HugeDocumentH1"]]);
    }
    create() {
        const HEADINGS = 100;
        const PARAGRAPHS = 7;
        for (let h = 0; h < HEADINGS; h++) {
            this.initialValue.push({
                type: 'heading',
                children: [{ text: faker__WEBPACK_IMPORTED_MODULE_4___default.a.lorem.sentence() }],
            });
            for (let p = 0; p < PARAGRAPHS; p++) {
                this.initialValue.push({
                    type: 'paragraph',
                    children: [{ text: faker__WEBPACK_IMPORTED_MODULE_4___default.a.lorem.paragraph() }],
                });
            }
        }
    }
}
HugeDocumentComponent.ɵfac = function HugeDocumentComponent_Factory(t) { return new (t || HugeDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"])); };
HugeDocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HugeDocumentComponent, selectors: [["app-huge-document"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"]])], decls: 1, vars: 2, consts: [["ns-editor", "", "spellCheck", "", "autoFocus", "", 3, "editor", "value"]], template: function HugeDocumentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue);
    } }, directives: [_slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_5__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvaHVnZS1kb2N1bWVudC9odWdlLWRvY3VtZW50LmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HugeDocumentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-huge-document',
                templateUrl: './huge-document.component.html',
                styleUrls: ['./huge-document.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"] }]; }, null); })();


/***/ }),

/***/ "PCm2":
/*!*****************************************************!*\
  !*** ./src/app/examples/iframe/iframe.component.ts ***!
  \*****************************************************/
/*! exports provided: IframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeComponent", function() { return IframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rich-text/custom-leaf/custom-leaf.component */ "s4bw");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-hotkey */ "yoaI");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/debounce */ "RNvQ");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iframe_container_iframe_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iframe-container/iframe-container.component */ "mIbE");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _rich_text_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rich-text/icon-button/icon-button.component */ "vraZ");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");






// @ts-ignore








function IframeComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx_r1.editor)("value", ctx_r1.initialValue)("nsOnKeyDown", ctx_r1.onKeyDown)("nsSelectionChange", ctx_r1.selectionChange);
} }
const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
};
class IframeComponent {
    constructor(registryNsElement, cdr, viewContainerRef) {
        this.registryNsElement = registryNsElement;
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.editor = Object(slate_history__WEBPACK_IMPORTED_MODULE_2__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_3__["createEditor"])()));
        this.initialValue = [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'In this example, the document gets rendered into a controlled ',
                    },
                    { text: '<iframe>', code: true },
                    {
                        text: '. This is ',
                    },
                    {
                        text: 'particularly',
                        italic: true,
                    },
                    {
                        text: ' useful, when you need to separate the styles for your editor contents from the ones addressing your UI.',
                    },
                ],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'This also the only reliable method to preview any ',
                    },
                    {
                        text: 'media queries',
                        bold: true,
                    },
                    {
                        text: ' in your CSS.',
                    },
                ],
            },
        ];
        this.selectionChange = lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(() => {
            this.cdr.detectChanges();
        }, 300);
        this.tmplContext = { editor: this.editor };
        this.onKeyDown = (event) => {
            for (const hotKey in HOTKEYS) {
                const isHot = Object(is_hotkey__WEBPACK_IMPORTED_MODULE_5__["isKeyHotkey"])(hotKey);
                if (isHot(event)) {
                    event.preventDefault();
                    const mark = HOTKEYS[hotKey];
                    this.toggleMark(mark);
                }
            }
        };
    }
    ngOnInit() {
        this.registryNsElement.add([_rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_4__["CustomLeafComponent"]]);
    }
    handleBlur($event) {
        slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["AngularEditor"].deselect(this.editor);
    }
    toggleMark(format) {
        const isActive = this.isMarkActive(format);
        if (isActive) {
            slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].removeMark(this.editor, format);
        }
        else {
            slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].addMark(this.editor, format, true);
        }
    }
    isMarkActive(format) {
        const marks = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].marks(this.editor);
        return marks ? marks[format] === true : false;
    }
}
IframeComponent.ɵfac = function IframeComponent_Factory(t) { return new (t || IframeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
IframeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IframeComponent, selectors: [["app-iframe"]], viewQuery: function IframeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_iframe_container_iframe_container_component__WEBPACK_IMPORTED_MODULE_7__["IframeContainerComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iframeCom = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]])], decls: 9, vars: 7, consts: [["icon", "format_bold", 3, "isActive", "onMouseDown"], ["icon", "format_italic", 3, "isActive", "onMouseDown"], ["icon", "format_underline", 3, "isActive", "onMouseDown"], ["icon", "format_code", 3, "isActive", "onMouseDown"], [3, "containerRef", "templateRef", "tmplContext", "onBlur"], ["editorTmpl", ""], ["ns-editor", "", "spellCheck", "", "autoFocus", "", "placeholder", "Enter some rich text...", 3, "editor", "value", "nsOnKeyDown", "nsSelectionChange"]], template: function IframeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-icon-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function IframeComponent_Template_app_icon_button_onMouseDown_2_listener() { return ctx.toggleMark("bold"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-icon-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function IframeComponent_Template_app_icon_button_onMouseDown_3_listener() { return ctx.toggleMark("italic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-icon-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function IframeComponent_Template_app_icon_button_onMouseDown_4_listener() { return ctx.toggleMark("underline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-icon-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function IframeComponent_Template_app_icon_button_onMouseDown_5_listener() { return ctx.toggleMark("code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-iframe-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBlur", function IframeComponent_Template_app_iframe_container_onBlur_6_listener($event) { return ctx.handleBlur($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IframeComponent_ng_template_7_Template, 1, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isMarkActive("bold"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isMarkActive("italic"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isMarkActive("underline"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActive", ctx.isMarkActive("code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerRef", ctx.viewContainerRef)("templateRef", _r0)("tmplContext", ctx.tmplContext);
    } }, directives: [_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"], _rich_text_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_9__["IconButtonComponent"], _iframe_container_iframe_container_component__WEBPACK_IMPORTED_MODULE_7__["IframeContainerComponent"], _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_10__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvaWZyYW1lL2lmcmFtZS5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IframeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iframe',
                templateUrl: './iframe.component.html',
                styleUrls: ['./iframe.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["RegistryNsElement"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { iframeCom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_iframe_container_iframe_container_component__WEBPACK_IMPORTED_MODULE_7__["IframeContainerComponent"]]
        }] }); })();


/***/ }),

/***/ "Pnv0":
/*!**************************************************************************!*\
  !*** ./src/app/examples/embeds/video-element/video-element.component.ts ***!
  \**************************************************************************/
/*! exports provided: VideoElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoElementComponent", function() { return VideoElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _url_input_url_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../url-input/url-input.component */ "1BCH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../safe-url.pipe */ "syHi");










const _c0 = ["app-video-element", ""];
function VideoElementComponent_ng_container_5_ng_template_1_Template(rf, ctx) { }
function VideoElementComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoElementComponent_ng_container_5_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
const _c1 = function () { return { "padding": "75% 0 0 0", position: "relative" }; };
const _c2 = function () { return { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }; };
class VideoElementComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, sanitizer, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.sanitizer = sanitizer;
        this.elementRef = elementRef;
    }
    get url() {
        return this.cNode.url;
    }
    handleUrlChange(val) {
        const path = slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["AngularEditor"].findPath(this.editorService.editor, this.cNode);
        const newProperties = {
            url: val,
        };
        slate__WEBPACK_IMPORTED_MODULE_2__["Transforms"].setNodes(this.editorService.editor, newProperties, { at: path });
    }
}
VideoElementComponent.type = 'video';
VideoElementComponent.ɵfac = function VideoElementComponent_Factory(t) { return new (t || VideoElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
VideoElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoElementComponent, selectors: [["div", "app-video-element", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 6, vars: 13, consts: [["frameBorder", "0", 3, "src"], [3, "url", "urlChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function VideoElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeUrl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-url-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("urlChange", function VideoElementComponent_Template_app_url_input_urlChange_4_listener($event) { return ctx.handleUrlChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VideoElementComponent_ng_container_5_Template, 2, 1, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("contenteditable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, ctx.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_url_input_url_input_component__WEBPACK_IMPORTED_MODULE_4__["UrlInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["CdkPortalOutlet"]], pipes: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_7__["SafeUrlPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvZW1iZWRzL3ZpZGVvLWVsZW1lbnQvdmlkZW8tZWxlbWVudC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'div[app-video-element]',
                templateUrl: './video-element.component.html',
                styleUrls: ['./video-element.component.less']
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "PqmR":
/*!******************************************************************************!*\
  !*** ../slate-ng-view/src/polyfills/composition/composition-event-plugin.ts ***!
  \******************************************************************************/
/*! exports provided: COMPOSITION_EVENTS, CompositionEventPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_EVENTS", function() { return COMPOSITION_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositionEventPlugin", function() { return CompositionEventPlugin; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _before_input_extract_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../before-input/extract-event */ "qRi5");





const COMPOSITION_EVENTS = [
    { name: "focusout" },
    { name: "keydown" },
    { name: "keypress" },
    { name: "keyup" },
    { name: "mousedown" }
];
class CompositionEventPlugin extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_platform_browser_platform_browser_g"] {
    constructor(doc) {
        super(doc);
        this.COMPOSITION_START = "composition_start";
        this.COMPOSITION_UPDATE = "composition_update";
        this.COMPOSITION_END = "composition_end";
    }
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    supports(eventName) {
        return eventName === this.COMPOSITION_START
            || eventName === this.COMPOSITION_UPDATE
            || eventName === this.COMPOSITION_END;
    }
    addEventListener(element, eventName, handler) {
        const mulListeners = [];
        if (_before_input_extract_event__WEBPACK_IMPORTED_MODULE_3__["canUseCompositionEvent"]) {
            element.addEventListener(eventName, handler, false);
            mulListeners.push({ eventName, handler: handler });
        }
        else {
            COMPOSITION_EVENTS.forEach(event => {
                const eventHandler = (e) => {
                    const compositionEvent = Object(_before_input_extract_event__WEBPACK_IMPORTED_MODULE_3__["extractCompositionEvent"])(e.type, null, e, e.target);
                    if (compositionEvent) {
                        handler(compositionEvent);
                    }
                };
                element.addEventListener(event.name, eventHandler, false);
                mulListeners.push({ eventName: event.name, handler: eventHandler });
            });
        }
        return () => {
            mulListeners.forEach(listener => {
                this.removeEventListener(element, listener.eventName, listener.handler);
            });
        };
    }
    removeEventListener(target, eventName, callback) {
        return target.removeEventListener(eventName, callback);
    }
}
CompositionEventPlugin.ɵfac = function CompositionEventPlugin_Factory(t) { return new (t || CompositionEventPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
CompositionEventPlugin.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompositionEventPlugin, factory: CompositionEventPlugin.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompositionEventPlugin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "QB+8":
/*!*************************************!*\
  !*** ../slate-ng-view/src/index.ts ***!
  \*************************************/
/*! exports provided: SlateNgModule, EditableComponent, BaseElementComponent, BaseLeafComponent, BasePlaceholderComponent, PortalEntryComponent, withAngular, AngularEditor, NsDepsService, NsEditorService, RegistryNsElement, ElementAttrsDirective, LeafAttrsDirective, PlaceholderAttrsDirective, CHILD_PORTALS_TOKEN, PARENT_NODE_TOKEN, CURRENT_NODE_TOKEN, NODE_INDEX_TOKEN, IS_LAST_TOKEN, KEY_TOKEN, DECORATIONS_TOKEN, SELECTION_TOKEN, LEAF_TOKEN, LEAF_CHILD_PORTAL_TOKEN, PLACEHOLDER_CHILDREN_TOKEN, Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "j5IH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlateNgModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SlateNgModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["EditableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElementComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BaseElementComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLeafComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BaseLeafComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePlaceholderComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BasePlaceholderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalEntryComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PortalEntryComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAngular", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["withAngular"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularEditor", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NsDepsService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NsDepsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NsEditorService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NsEditorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistryNsElement", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RegistryNsElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementAttrsDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ElementAttrsDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafAttrsDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LeafAttrsDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaceholderAttrsDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PlaceholderAttrsDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHILD_PORTALS_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CHILD_PORTALS_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARENT_NODE_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PARENT_NODE_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CURRENT_NODE_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CURRENT_NODE_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_INDEX_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NODE_INDEX_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IS_LAST_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["IS_LAST_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["KEY_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DECORATIONS_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DECORATIONS_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SELECTION_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LEAF_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LEAF_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LEAF_CHILD_PORTAL_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LEAF_CHILD_PORTAL_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER_CHILDREN_TOKEN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PLACEHOLDER_CHILDREN_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Key"]; });




/***/ }),

/***/ "Qy9G":
/*!***********************************************!*\
  !*** ../slate-ng-view/src/slate-ng.module.ts ***!
  \***********************************************/
/*! exports provided: SlateNgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlateNgModule", function() { return SlateNgModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _polyfills_before_input_before_input_event_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyfills/before-input/before-input-event-plugin */ "qHjF");
/* harmony import */ var _components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/editable/editable.component */ "lP+h");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");
/* harmony import */ var _components_children_children_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/children/children.component */ "Kgum");
/* harmony import */ var _components_element_element_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/element/element.component */ "OOKi");
/* harmony import */ var _components_text_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/text/text.component */ "O3V3");
/* harmony import */ var _polyfills_composition_composition_event_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./polyfills/composition/composition-event-plugin */ "PqmR");
/* harmony import */ var _components_text_leaf_leaf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/text/leaf/leaf.component */ "6Rj7");
/* harmony import */ var _components_text_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/text/placeholder/placeholder.component */ "R/AY");
/* harmony import */ var _components_text_leaf_child_leaf_child_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/text/leaf-child/leaf-child.component */ "JE8C");
/* harmony import */ var _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/registry-ns-element.service */ "Xqrq");
/* harmony import */ var _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/ns-editor.service */ "wpMU");
/* harmony import */ var _directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/element-attrs.directive */ "zTG3");
/* harmony import */ var _directives_leaf_attrs_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/leaf-attrs.directive */ "xewl");
/* harmony import */ var _directives_placeholder_attrs_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/placeholder-attrs.directive */ "ZB6i");
/* harmony import */ var _components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/portal-entry/portal-entry.component */ "Nr9U");






















class SlateNgModule {
}
SlateNgModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SlateNgModule });
SlateNgModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SlateNgModule_Factory(t) { return new (t || SlateNgModule)(); }, providers: [
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EVENT_MANAGER_PLUGINS"],
            useClass: _polyfills_composition_composition_event_plugin__WEBPACK_IMPORTED_MODULE_9__["CompositionEventPlugin"],
            multi: true
        },
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EVENT_MANAGER_PLUGINS"],
            useClass: _polyfills_before_input_before_input_event_plugin__WEBPACK_IMPORTED_MODULE_3__["BeforeInputEventPlugin"],
            multi: true
        },
        _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_14__["NsEditorService"],
        _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_13__["RegistryNsElement"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlateNgModule, { declarations: [_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__["EditableComponent"],
        _components_children_children_component__WEBPACK_IMPORTED_MODULE_6__["ChildrenComponent"],
        _components_element_element_component__WEBPACK_IMPORTED_MODULE_7__["ElementComponent"],
        _components_text_text_component__WEBPACK_IMPORTED_MODULE_8__["TextComponent"],
        _components_text_leaf_leaf_component__WEBPACK_IMPORTED_MODULE_10__["LeafComponent"],
        _components_text_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_11__["PlaceholderComponent"],
        _components_text_leaf_child_leaf_child_component__WEBPACK_IMPORTED_MODULE_12__["LeafChildComponent"],
        _components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_18__["PortalEntryComponent"],
        _directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_15__["ElementAttrsDirective"],
        _directives_leaf_attrs_directive__WEBPACK_IMPORTED_MODULE_16__["LeafAttrsDirective"],
        _directives_placeholder_attrs_directive__WEBPACK_IMPORTED_MODULE_17__["PlaceholderAttrsDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"]], exports: [_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__["EditableComponent"],
        _directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_15__["ElementAttrsDirective"],
        _directives_leaf_attrs_directive__WEBPACK_IMPORTED_MODULE_16__["LeafAttrsDirective"],
        _directives_placeholder_attrs_directive__WEBPACK_IMPORTED_MODULE_17__["PlaceholderAttrsDirective"],
        _components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_18__["PortalEntryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlateNgModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__["EditableComponent"],
                    _components_children_children_component__WEBPACK_IMPORTED_MODULE_6__["ChildrenComponent"],
                    _components_element_element_component__WEBPACK_IMPORTED_MODULE_7__["ElementComponent"],
                    _components_text_text_component__WEBPACK_IMPORTED_MODULE_8__["TextComponent"],
                    _components_text_leaf_leaf_component__WEBPACK_IMPORTED_MODULE_10__["LeafComponent"],
                    _components_text_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_11__["PlaceholderComponent"],
                    _components_text_leaf_child_leaf_child_component__WEBPACK_IMPORTED_MODULE_12__["LeafChildComponent"],
                    _components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_18__["PortalEntryComponent"],
                    _directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_15__["ElementAttrsDirective"],
                    _directives_leaf_attrs_directive__WEBPACK_IMPORTED_MODULE_16__["LeafAttrsDirective"],
                    _directives_placeholder_attrs_directive__WEBPACK_IMPORTED_MODULE_17__["PlaceholderAttrsDirective"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"]
                ],
                providers: [
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EVENT_MANAGER_PLUGINS"],
                        useClass: _polyfills_composition_composition_event_plugin__WEBPACK_IMPORTED_MODULE_9__["CompositionEventPlugin"],
                        multi: true
                    },
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EVENT_MANAGER_PLUGINS"],
                        useClass: _polyfills_before_input_before_input_event_plugin__WEBPACK_IMPORTED_MODULE_3__["BeforeInputEventPlugin"],
                        multi: true
                    },
                    _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_14__["NsEditorService"],
                    _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_13__["RegistryNsElement"]
                ],
                exports: [
                    _components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__["EditableComponent"],
                    _directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_15__["ElementAttrsDirective"],
                    _directives_leaf_attrs_directive__WEBPACK_IMPORTED_MODULE_16__["LeafAttrsDirective"],
                    _directives_placeholder_attrs_directive__WEBPACK_IMPORTED_MODULE_17__["PlaceholderAttrsDirective"],
                    _components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_18__["PortalEntryComponent"]
                ]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__["EditableComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["CdkPortal"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["CdkPortalOutlet"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["TemplatePortalDirective"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalHostDirective"], _components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__["EditableComponent"],
    _components_children_children_component__WEBPACK_IMPORTED_MODULE_6__["ChildrenComponent"],
    _components_element_element_component__WEBPACK_IMPORTED_MODULE_7__["ElementComponent"],
    _components_text_text_component__WEBPACK_IMPORTED_MODULE_8__["TextComponent"],
    _components_text_leaf_leaf_component__WEBPACK_IMPORTED_MODULE_10__["LeafComponent"],
    _components_text_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_11__["PlaceholderComponent"],
    _components_text_leaf_child_leaf_child_component__WEBPACK_IMPORTED_MODULE_12__["LeafChildComponent"],
    _components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_18__["PortalEntryComponent"],
    _directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_15__["ElementAttrsDirective"],
    _directives_leaf_attrs_directive__WEBPACK_IMPORTED_MODULE_16__["LeafAttrsDirective"],
    _directives_placeholder_attrs_directive__WEBPACK_IMPORTED_MODULE_17__["PlaceholderAttrsDirective"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);


/***/ }),

/***/ "R/AY":
/*!*********************************************************************************!*\
  !*** ../slate-ng-view/src/components/text/placeholder/placeholder.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderComponent", function() { return PlaceholderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _element_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element/token */ "CS3F");
/* harmony import */ var _base_placeholder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-placeholder.component */ "2af/");




const _c0 = ["ns-placeholder", ""];
class PlaceholderComponent extends _base_placeholder_component__WEBPACK_IMPORTED_MODULE_2__["BasePlaceholderComponent"] {
    constructor(children) {
        super();
        this.children = children;
    }
}
PlaceholderComponent.ɵfac = function PlaceholderComponent_Factory(t) { return new (t || PlaceholderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_element_token__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_CHILDREN_TOKEN"])); };
PlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaceholderComponent, selectors: [["span", "ns-placeholder", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 1, vars: 1, template: function PlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.children, " ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "span[ns-placeholder]",
                template: `
    {{children}}
  `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_element_token__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_CHILDREN_TOKEN"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");





function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const route_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", route_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r1.path);
} }
class AppComponent {
    constructor() {
        this.title = 'demo';
        this.routeList = _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["routes"];
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "menu"], [4, "ngFor", "ngForOf"], [1, "editor-container"], ["routerLinkActive", "active", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.routeList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".menu[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px 10px;\n  \n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  height: 20px;\n  border: 1px solid #bfbfbf;\n  padding: 10px 10px;\n  color: black;\n  border-radius: 4px;\n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: white;\n  background: #1890ff;\n}\n.editor-container[_ngcontent-%COMP%] {\n  width: 60vw;\n  margin: auto;\n  padding: 20px;\n  background: white;\n  border-radius: 5px;\n  min-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NsYXRlLW5nL3NsYXRlLW5nL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VDQ0EsZUFBZTtBQUNqQjtBREpBO0VBTUksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEZkE7RUFpQlksMEJBQUE7QUNDWjtBRGxCQTtFQW9CSSxpQkFBQTtBQ0NKO0FEckJBO0VBd0JJLFlBQUE7RUFDQSxtQkFBQTtBQ0FKO0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNGRiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG5cbiAgLyoqIOmHjee9ruaWh+acrOagvOW8j+WFg+e0oCAqKi9cbiAgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJmYmY7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuICBhICsgYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogIzE4OTBmZjtcbiAgfVxufVxuXG4uZWRpdG9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MHZ3O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4iLCIubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgLyoqIOmHjee9ruaWh+acrOagvOW8j+WFg+e0oCAqKi9cbn1cbi5tZW51IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiZmJmO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm1lbnUgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLm1lbnUgYSArIGEge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5tZW51IC5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMxODkwZmY7XG59XG4uZWRpdG9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MHZ3O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Tmwx":
/*!************************************************!*\
  !*** ../slate-ng-view/src/utils/range-list.ts ***!
  \************************************************/
/*! exports provided: shallowCompare, isDecoratorRangeListEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return shallowCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDecoratorRangeListEqual", function() { return isDecoratorRangeListEqual; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _weak_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weak-maps */ "nYjg");



const shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
/**
 * Check if a list of decorator ranges are equal to another.
 *
 * PERF: this requires the two lists to also have the ranges inside them in the
 * same order, but this is an okay constraint for us since decorations are
 * kept in order, and the odd case where they aren't is okay to re-render for.
 */
const isDecoratorRangeListEqual = (list, another) => {
    if (list.length !== another.length) {
        return false;
    }
    for (let i = 0; i < list.length; i++) {
        const range = list[i];
        const other = another[i];
        const { anchor: rangeAnchor, focus: rangeFocus } = range, rangeOwnProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(range, ["anchor", "focus"]);
        const { anchor: otherAnchor, focus: otherFocus } = other, otherOwnProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(other, ["anchor", "focus"]);
        if (!slate__WEBPACK_IMPORTED_MODULE_1__["Range"].equals(range, other) ||
            range[_weak_maps__WEBPACK_IMPORTED_MODULE_2__["PLACEHOLDER_SYMBOL"]] !== other[_weak_maps__WEBPACK_IMPORTED_MODULE_2__["PLACEHOLDER_SYMBOL"]] ||
            !shallowCompare(rangeOwnProps, otherOwnProps)) {
            return false;
        }
    }
    return true;
};


/***/ }),

/***/ "UMz0":
/*!*********************************************!*\
  !*** ../slate-ng-view/src/utils/convert.ts ***!
  \*********************************************/
/*! exports provided: toBoolean, toNumber, toCssPixel, valueFunctionProp, InputBoolean, InputCssPixel, InputNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCssPixel", function() { return toCssPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFunctionProp", function() { return valueFunctionProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBoolean", function() { return InputBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCssPixel", function() { return InputCssPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumber", function() { return InputNumber; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

function toBoolean(value) {
    return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
}
function toNumber(value, fallbackValue = 0) {
    return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["_isNumberValue"])(value) ? Number(value) : fallbackValue;
}
function toCssPixel(value) {
    return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(value);
}
// tslint:disable no-invalid-this
/**
 * Get the function-property type's value
 */
function valueFunctionProp(prop, ...args) {
    return typeof prop === 'function' ? prop(...args) : prop;
}
function propDecoratorFactory(name, fallback) {
    function propDecorator(target, propName, originalDescriptor) {
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        return {
            get() {
                return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
            },
            set(value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(fallback(value));
                }
                this[privatePropName] = fallback(value);
            }
        };
    }
    return propDecorator;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using @InputBoolean alone without @Input? AOT needs @Input to be visible
 *
 * @howToUse
 * ```
 * @Input() @InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // @Input()
 * // get visible() { return this.__visible; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 */
function InputBoolean() {
    return propDecoratorFactory('InputBoolean', toBoolean);
}
function InputCssPixel() {
    return propDecoratorFactory('InputCssPixel', toCssPixel);
}
function InputNumber(fallbackValue) {
    return propDecoratorFactory('InputNumber', (value) => toNumber(value, fallbackValue));
}


/***/ }),

/***/ "VFa8":
/*!*****************************************!*\
  !*** ../slate-ng-view/src/utils/key.ts ***!
  \*****************************************/
/*! exports provided: Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
/**
 * An auto-incrementing identifier for keys.
 */
let n = 0;
/**
 * A class that keeps track of a key string. We use a full class here because we
 * want to be able to use them as keys in `WeakMap` objects.
 */
class Key {
    constructor() {
        this.id = `${n++}`;
    }
}


/***/ }),

/***/ "WaCx":
/*!***************************************************!*\
  !*** ./src/app/components/icon/icon.component.ts ***!
  \***************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



const _c0 = function () { return { "font-size": "18px", "vertical-align": "text-bottom" }; };
const _c1 = ["*"];
class IconComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { className: "className" }, ngContentSelectors: _c1, decls: 2, vars: 3, consts: [[1, "material-icons", 3, "ngClass", "ngStyle"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.className)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvY29tcG9uZW50cy9pY29uL2ljb24uY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.less']
            }]
    }], function () { return []; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Xqrq":
/*!********************************************************************!*\
  !*** ../slate-ng-view/src/services/registry-ns-element.service.ts ***!
  \********************************************************************/
/*! exports provided: RegistryNsElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryNsElement", function() { return RegistryNsElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _utils_object_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object-set */ "jPLl");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");




class RegistryNsElement {
    constructor() {
        this.elements = new _utils_object_set__WEBPACK_IMPORTED_MODULE_1__["ObjectSet"]('type');
    }
    add(components) {
        components.forEach(comp => {
            const content = {};
            content.type = comp.type;
            content.comp = comp;
            this.elements.add(content);
        });
    }
    get(type) {
        return this.elements.get(type);
    }
    getComponentPortal(type, providers, parentInjector, defaultComp) {
        var _a;
        const component = ((_a = this.get(type)) === null || _a === void 0 ? void 0 : _a.comp) || defaultComp;
        if (!component) {
            throw Error(`Not found ${type} Component`);
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](component, null, this.getInjector(providers, parentInjector));
    }
    getInjector(providers, parentInjector) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create(providers, parentInjector);
    }
}
RegistryNsElement.ɵfac = function RegistryNsElement_Factory(t) { return new (t || RegistryNsElement)(); };
RegistryNsElement.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegistryNsElement, factory: RegistryNsElement.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistryNsElement, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeholder/placeholder.component */ "f1Z7");
/* harmony import */ var _examples_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/check-list/check-list.component */ "qAQs");
/* harmony import */ var _examples_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/rich-text/rich-text.component */ "EFKx");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/button/button.component */ "7psr");
/* harmony import */ var _components_editor_value_editor_value_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/editor-value/editor-value.component */ "AHga");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/icon/icon.component */ "WaCx");
/* harmony import */ var _components_instruction_instruction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/instruction/instruction.component */ "dClj");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _examples_rich_text_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/rich-text/icon-button/icon-button.component */ "vraZ");
/* harmony import */ var _examples_rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/rich-text/custom-leaf/custom-leaf.component */ "s4bw");
/* harmony import */ var _examples_rich_text_custom_leaf_leaf_item_leaf_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/rich-text/custom-leaf/leaf-item/leaf-item.component */ "oLQs");
/* harmony import */ var _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/rich-text/element */ "BBgI");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/alert */ "FP8e");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var _examples_check_list_check_list_item_check_list_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/check-list/check-list-item/check-list-item.component */ "77C4");
/* harmony import */ var _examples_code_highlighting_code_highlighting_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/code-highlighting/code-highlighting.component */ "EfAC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _examples_code_highlighting_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./examples/code-highlighting/custom-leaf/custom-leaf.component */ "BnbQ");
/* harmony import */ var _examples_editable_voids_editable_voids_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./examples/editable-voids/editable-voids.component */ "/vnT");
/* harmony import */ var _examples_editable_voids_insert_editable_void_button_insert_editable_void_button_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./examples/editable-voids/insert-editable-void-button/insert-editable-void-button.component */ "9pG+");
/* harmony import */ var _examples_editable_voids_editable_void_editable_void_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./examples/editable-voids/editable-void/editable-void.component */ "gcCw");
/* harmony import */ var _examples_markdown_preview_markdown_preview_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./examples/markdown-preview/markdown-preview.component */ "/PDu");
/* harmony import */ var _examples_markdown_preview_markdown_leaf_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./examples/markdown-preview/markdown-leaf.component */ "uI5W");
/* harmony import */ var _examples_custom_placeholder_custom_placeholder_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./examples/custom-placeholder/custom-placeholder.component */ "7MeF");
/* harmony import */ var _examples_embeds_embeds_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./examples/embeds/embeds.component */ "8YsP");
/* harmony import */ var _examples_embeds_url_input_url_input_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./examples/embeds/url-input/url-input.component */ "1BCH");
/* harmony import */ var _examples_embeds_video_element_video_element_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./examples/embeds/video-element/video-element.component */ "Pnv0");
/* harmony import */ var _examples_embeds_safe_url_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./examples/embeds/safe-url.pipe */ "syHi");
/* harmony import */ var _examples_forced_layout_forced_layout_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./examples/forced-layout/forced-layout.component */ "hDCA");
/* harmony import */ var _examples_huge_document_huge_document_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./examples/huge-document/huge-document.component */ "PAYk");
/* harmony import */ var _examples_huge_document_huge_document_h1__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./examples/huge-document/huge-document-h1 */ "G7gg");
/* harmony import */ var _examples_hovering_toolbar_hovering_toolbar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./examples/hovering-toolbar/hovering-toolbar.component */ "05Xa");
/* harmony import */ var _examples_hovering_toolbar_portal_portal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./examples/hovering-toolbar/portal/portal.component */ "iWd5");
/* harmony import */ var _examples_hovering_toolbar_format_button_format_button_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./examples/hovering-toolbar/format-button/format-button.component */ "D1Mv");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/overlay */ "HYj3");
/* harmony import */ var _examples_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./examples/iframe/iframe.component */ "PCm2");
/* harmony import */ var _examples_iframe_iframe_container_iframe_container_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./examples/iframe/iframe-container/iframe-container.component */ "mIbE");
/* harmony import */ var _examples_table_table_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./examples/table/table.component */ "o2Bh");
/* harmony import */ var _examples_table_element__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./examples/table/element */ "r1Pz");
/* harmony import */ var _examples_markdown_shortcuts_markdown_shortcuts_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./examples/markdown-shortcuts/markdown-shortcuts.component */ "hYZM");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");
/* harmony import */ var _slate_ng_view_src_directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../slate-ng-view/src/directives/element-attrs.directive */ "zTG3");
/* harmony import */ var _slate_ng_view_src_directives_leaf_attrs_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../slate-ng-view/src/directives/leaf-attrs.directive */ "xewl");
/* harmony import */ var _slate_ng_view_src_directives_placeholder_attrs_directive__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../slate-ng-view/src/directives/placeholder-attrs.directive */ "ZB6i");
/* harmony import */ var _slate_ng_view_src_components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../../slate-ng-view/src/components/portal-entry/portal-entry.component */ "Nr9U");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/cdk/bidi */ "E5oP");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");































































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            slate_ng_view__WEBPACK_IMPORTED_MODULE_46__["SlateNgModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_18__["NzAlertModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["OverlayModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_5__["PlaceholderComponent"],
        _examples_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_6__["CheckListComponent"],
        _examples_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_7__["RichTextComponent"],
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"],
        _components_editor_value_editor_value_component__WEBPACK_IMPORTED_MODULE_9__["EditorValueComponent"],
        _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"],
        _components_instruction_instruction_component__WEBPACK_IMPORTED_MODULE_11__["InstructionComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
        _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"],
        _examples_rich_text_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_14__["IconButtonComponent"],
        _examples_rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_15__["CustomLeafComponent"],
        _examples_rich_text_custom_leaf_leaf_item_leaf_item_component__WEBPACK_IMPORTED_MODULE_16__["LeafItemComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["NumberedListComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["ListItemComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingOneComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingTwoComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingThreeComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingFourComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingFiveComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingSixComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["BulletedListComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["BlockQuoteComponent"], _examples_check_list_check_list_item_check_list_item_component__WEBPACK_IMPORTED_MODULE_20__["CheckListItemComponent"],
        _examples_code_highlighting_code_highlighting_component__WEBPACK_IMPORTED_MODULE_21__["CodeHighlightingComponent"],
        _examples_code_highlighting_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_23__["LeafComponent"],
        _examples_editable_voids_editable_voids_component__WEBPACK_IMPORTED_MODULE_24__["EditableVoidsComponent"],
        _examples_editable_voids_insert_editable_void_button_insert_editable_void_button_component__WEBPACK_IMPORTED_MODULE_25__["InsertEditableVoidButtonComponent"],
        _examples_editable_voids_editable_void_editable_void_component__WEBPACK_IMPORTED_MODULE_26__["EditableVoidComponent"],
        _examples_markdown_preview_markdown_preview_component__WEBPACK_IMPORTED_MODULE_27__["MarkdownPreviewComponent"],
        _examples_markdown_preview_markdown_leaf_component__WEBPACK_IMPORTED_MODULE_28__["MarkdownLeafComponent"],
        _examples_custom_placeholder_custom_placeholder_component__WEBPACK_IMPORTED_MODULE_29__["CustomPlaceholderComponent"],
        _examples_embeds_embeds_component__WEBPACK_IMPORTED_MODULE_30__["EmbedsComponent"],
        _examples_embeds_url_input_url_input_component__WEBPACK_IMPORTED_MODULE_31__["UrlInputComponent"],
        _examples_embeds_video_element_video_element_component__WEBPACK_IMPORTED_MODULE_32__["VideoElementComponent"],
        _examples_embeds_safe_url_pipe__WEBPACK_IMPORTED_MODULE_33__["SafeUrlPipe"],
        _examples_forced_layout_forced_layout_component__WEBPACK_IMPORTED_MODULE_34__["ForcedLayoutComponent"],
        _examples_forced_layout_forced_layout_component__WEBPACK_IMPORTED_MODULE_34__["ForcedLayoutTitleElement"],
        _examples_huge_document_huge_document_component__WEBPACK_IMPORTED_MODULE_35__["HugeDocumentComponent"],
        _examples_huge_document_huge_document_h1__WEBPACK_IMPORTED_MODULE_36__["HugeDocumentH1"],
        _examples_hovering_toolbar_hovering_toolbar_component__WEBPACK_IMPORTED_MODULE_37__["HoveringToolbarComponent"],
        _examples_hovering_toolbar_portal_portal_component__WEBPACK_IMPORTED_MODULE_38__["PortalComponent"],
        _examples_hovering_toolbar_format_button_format_button_component__WEBPACK_IMPORTED_MODULE_39__["FormatButtonComponent"],
        _examples_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_41__["IframeComponent"],
        _examples_iframe_iframe_container_iframe_container_component__WEBPACK_IMPORTED_MODULE_42__["IframeContainerComponent"],
        _examples_table_table_component__WEBPACK_IMPORTED_MODULE_43__["TableComponent"], _examples_table_element__WEBPACK_IMPORTED_MODULE_44__["CustomTable"], _examples_table_element__WEBPACK_IMPORTED_MODULE_44__["CustomTableRow"], _examples_table_element__WEBPACK_IMPORTED_MODULE_44__["CustomTableCell"], _examples_markdown_shortcuts_markdown_shortcuts_component__WEBPACK_IMPORTED_MODULE_45__["MarkdownShortcutsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        slate_ng_view__WEBPACK_IMPORTED_MODULE_46__["SlateNgModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_18__["NzAlertModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["OverlayModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_5__["PlaceholderComponent"],
                    _examples_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_6__["CheckListComponent"],
                    _examples_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_7__["RichTextComponent"],
                    _components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"],
                    _components_editor_value_editor_value_component__WEBPACK_IMPORTED_MODULE_9__["EditorValueComponent"],
                    _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"],
                    _components_instruction_instruction_component__WEBPACK_IMPORTED_MODULE_11__["InstructionComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                    _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"],
                    _examples_rich_text_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_14__["IconButtonComponent"],
                    _examples_rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_15__["CustomLeafComponent"],
                    _examples_rich_text_custom_leaf_leaf_item_leaf_item_component__WEBPACK_IMPORTED_MODULE_16__["LeafItemComponent"],
                    ..._examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["CustomComponents"],
                    _examples_check_list_check_list_item_check_list_item_component__WEBPACK_IMPORTED_MODULE_20__["CheckListItemComponent"],
                    _examples_code_highlighting_code_highlighting_component__WEBPACK_IMPORTED_MODULE_21__["CodeHighlightingComponent"],
                    _examples_code_highlighting_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_23__["LeafComponent"],
                    _examples_editable_voids_editable_voids_component__WEBPACK_IMPORTED_MODULE_24__["EditableVoidsComponent"],
                    _examples_editable_voids_insert_editable_void_button_insert_editable_void_button_component__WEBPACK_IMPORTED_MODULE_25__["InsertEditableVoidButtonComponent"],
                    _examples_editable_voids_editable_void_editable_void_component__WEBPACK_IMPORTED_MODULE_26__["EditableVoidComponent"],
                    _examples_markdown_preview_markdown_preview_component__WEBPACK_IMPORTED_MODULE_27__["MarkdownPreviewComponent"],
                    _examples_markdown_preview_markdown_leaf_component__WEBPACK_IMPORTED_MODULE_28__["MarkdownLeafComponent"],
                    _examples_custom_placeholder_custom_placeholder_component__WEBPACK_IMPORTED_MODULE_29__["CustomPlaceholderComponent"],
                    _examples_embeds_embeds_component__WEBPACK_IMPORTED_MODULE_30__["EmbedsComponent"],
                    _examples_embeds_url_input_url_input_component__WEBPACK_IMPORTED_MODULE_31__["UrlInputComponent"],
                    _examples_embeds_video_element_video_element_component__WEBPACK_IMPORTED_MODULE_32__["VideoElementComponent"],
                    _examples_embeds_safe_url_pipe__WEBPACK_IMPORTED_MODULE_33__["SafeUrlPipe"],
                    _examples_forced_layout_forced_layout_component__WEBPACK_IMPORTED_MODULE_34__["ForcedLayoutComponent"],
                    _examples_forced_layout_forced_layout_component__WEBPACK_IMPORTED_MODULE_34__["ForcedLayoutTitleElement"],
                    _examples_huge_document_huge_document_component__WEBPACK_IMPORTED_MODULE_35__["HugeDocumentComponent"],
                    _examples_huge_document_huge_document_h1__WEBPACK_IMPORTED_MODULE_36__["HugeDocumentH1"],
                    _examples_hovering_toolbar_hovering_toolbar_component__WEBPACK_IMPORTED_MODULE_37__["HoveringToolbarComponent"],
                    _examples_hovering_toolbar_portal_portal_component__WEBPACK_IMPORTED_MODULE_38__["PortalComponent"],
                    _examples_hovering_toolbar_format_button_format_button_component__WEBPACK_IMPORTED_MODULE_39__["FormatButtonComponent"],
                    _examples_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_41__["IframeComponent"],
                    _examples_iframe_iframe_container_iframe_container_component__WEBPACK_IMPORTED_MODULE_42__["IframeContainerComponent"],
                    _examples_table_table_component__WEBPACK_IMPORTED_MODULE_43__["TableComponent"],
                    ..._examples_table_element__WEBPACK_IMPORTED_MODULE_44__["CustomTableElements"],
                    _examples_markdown_shortcuts_markdown_shortcuts_component__WEBPACK_IMPORTED_MODULE_45__["MarkdownShortcutsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    slate_ng_view__WEBPACK_IMPORTED_MODULE_46__["SlateNgModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_18__["NzAlertModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["OverlayModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_examples_rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_15__["CustomLeafComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_47__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["ɵangular_packages_router_router_l"], _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_49__["EditableComponent"], _slate_ng_view_src_directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_50__["ElementAttrsDirective"], _slate_ng_view_src_directives_leaf_attrs_directive__WEBPACK_IMPORTED_MODULE_51__["LeafAttrsDirective"], _slate_ng_view_src_directives_placeholder_attrs_directive__WEBPACK_IMPORTED_MODULE_52__["PlaceholderAttrsDirective"], _slate_ng_view_src_components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_53__["PortalEntryComponent"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortal"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortalDirective"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalHostDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_18__["NzAlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgForm"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["CdkConnectedOverlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_40__["CdkOverlayOrigin"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_54__["Dir"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_55__["CdkScrollable"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_55__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_55__["CdkVirtualForOf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_55__["CdkVirtualScrollViewport"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
    _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_5__["PlaceholderComponent"],
    _examples_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_6__["CheckListComponent"],
    _examples_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_7__["RichTextComponent"],
    _components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"],
    _components_editor_value_editor_value_component__WEBPACK_IMPORTED_MODULE_9__["EditorValueComponent"],
    _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"],
    _components_instruction_instruction_component__WEBPACK_IMPORTED_MODULE_11__["InstructionComponent"],
    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
    _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"],
    _examples_rich_text_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_14__["IconButtonComponent"],
    _examples_rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_15__["CustomLeafComponent"],
    _examples_rich_text_custom_leaf_leaf_item_leaf_item_component__WEBPACK_IMPORTED_MODULE_16__["LeafItemComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["NumberedListComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["ListItemComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingOneComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingTwoComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingThreeComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingFourComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingFiveComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["HeadingSixComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["BulletedListComponent"], _examples_rich_text_element__WEBPACK_IMPORTED_MODULE_17__["BlockQuoteComponent"], _examples_check_list_check_list_item_check_list_item_component__WEBPACK_IMPORTED_MODULE_20__["CheckListItemComponent"],
    _examples_code_highlighting_code_highlighting_component__WEBPACK_IMPORTED_MODULE_21__["CodeHighlightingComponent"],
    _examples_code_highlighting_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_23__["LeafComponent"],
    _examples_editable_voids_editable_voids_component__WEBPACK_IMPORTED_MODULE_24__["EditableVoidsComponent"],
    _examples_editable_voids_insert_editable_void_button_insert_editable_void_button_component__WEBPACK_IMPORTED_MODULE_25__["InsertEditableVoidButtonComponent"],
    _examples_editable_voids_editable_void_editable_void_component__WEBPACK_IMPORTED_MODULE_26__["EditableVoidComponent"],
    _examples_markdown_preview_markdown_preview_component__WEBPACK_IMPORTED_MODULE_27__["MarkdownPreviewComponent"],
    _examples_markdown_preview_markdown_leaf_component__WEBPACK_IMPORTED_MODULE_28__["MarkdownLeafComponent"],
    _examples_custom_placeholder_custom_placeholder_component__WEBPACK_IMPORTED_MODULE_29__["CustomPlaceholderComponent"],
    _examples_embeds_embeds_component__WEBPACK_IMPORTED_MODULE_30__["EmbedsComponent"],
    _examples_embeds_url_input_url_input_component__WEBPACK_IMPORTED_MODULE_31__["UrlInputComponent"],
    _examples_embeds_video_element_video_element_component__WEBPACK_IMPORTED_MODULE_32__["VideoElementComponent"],
    _examples_forced_layout_forced_layout_component__WEBPACK_IMPORTED_MODULE_34__["ForcedLayoutComponent"],
    _examples_forced_layout_forced_layout_component__WEBPACK_IMPORTED_MODULE_34__["ForcedLayoutTitleElement"],
    _examples_huge_document_huge_document_component__WEBPACK_IMPORTED_MODULE_35__["HugeDocumentComponent"],
    _examples_huge_document_huge_document_h1__WEBPACK_IMPORTED_MODULE_36__["HugeDocumentH1"],
    _examples_hovering_toolbar_hovering_toolbar_component__WEBPACK_IMPORTED_MODULE_37__["HoveringToolbarComponent"],
    _examples_hovering_toolbar_portal_portal_component__WEBPACK_IMPORTED_MODULE_38__["PortalComponent"],
    _examples_hovering_toolbar_format_button_format_button_component__WEBPACK_IMPORTED_MODULE_39__["FormatButtonComponent"],
    _examples_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_41__["IframeComponent"],
    _examples_iframe_iframe_container_iframe_container_component__WEBPACK_IMPORTED_MODULE_42__["IframeContainerComponent"],
    _examples_table_table_component__WEBPACK_IMPORTED_MODULE_43__["TableComponent"], _examples_table_element__WEBPACK_IMPORTED_MODULE_44__["CustomTable"], _examples_table_element__WEBPACK_IMPORTED_MODULE_44__["CustomTableRow"], _examples_table_element__WEBPACK_IMPORTED_MODULE_44__["CustomTableCell"], _examples_markdown_shortcuts_markdown_shortcuts_component__WEBPACK_IMPORTED_MODULE_45__["MarkdownShortcutsComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_47__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["KeyValuePipe"], _examples_embeds_safe_url_pipe__WEBPACK_IMPORTED_MODULE_33__["SafeUrlPipe"]]);


/***/ }),

/***/ "ZB6i":
/*!**********************************************************************!*\
  !*** ../slate-ng-view/src/directives/placeholder-attrs.directive.ts ***!
  \**********************************************************************/
/*! exports provided: PlaceholderAttrsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderAttrsDirective", function() { return PlaceholderAttrsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class PlaceholderAttrsDirective {
    constructor() {
        this.dataSlatePlaceholder = true;
        this.contentEditable = false;
        this.styleDisplay = 'block';
        this.stylePointerEvent = 'none';
        this.styleUserSelect = 'none';
        this.styleTextDecoration = 'none';
        this.stylePosition = 'absolute';
        this.styleWidth = '100%';
        this.styleMaxWidth = '100%';
        this.styleOpacity = 0.333;
        this.styleTop = 0;
    }
}
PlaceholderAttrsDirective.ɵfac = function PlaceholderAttrsDirective_Factory(t) { return new (t || PlaceholderAttrsDirective)(); };
PlaceholderAttrsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PlaceholderAttrsDirective, selectors: [["", "nsPlaceholderAttrs", ""]], hostVars: 20, hostBindings: function PlaceholderAttrsDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slate-placeholder", ctx.dataSlatePlaceholder)("contentEditable", ctx.contentEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.styleDisplay)("pointer-events", ctx.stylePointerEvent)("user-select", ctx.styleUserSelect)("text-decoration", ctx.styleTextDecoration)("position", ctx.stylePosition)("width", ctx.styleWidth)("max-width", ctx.styleMaxWidth)("opacity", ctx.styleOpacity)("top", ctx.styleTop);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceholderAttrsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nsPlaceholderAttrs]'
            }]
    }], function () { return []; }, { dataSlatePlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.data-slate-placeholder']
        }], contentEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.contentEditable']
        }], styleDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
        }], stylePointerEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.pointer-events']
        }], styleUserSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.user-select']
        }], styleTextDecoration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.text-decoration']
        }], stylePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.position']
        }], styleWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], styleMaxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.max-width']
        }], styleOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.opacity']
        }], styleTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.top']
        }] }); })();


/***/ }),

/***/ "ZHd+":
/*!***************************************************************!*\
  !*** ../slate-ng-view/src/components/element/base-element.ts ***!
  \***************************************************************/
/*! exports provided: BaseElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseElementComponent", function() { return BaseElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ "CS3F");
/* harmony import */ var _utils_weak_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/weak-maps */ "nYjg");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! direction */ "Zva+");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(direction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/ns-deps.service */ "yiMJ");
/* harmony import */ var _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/ns-editor.service */ "wpMU");
/* harmony import */ var _utils_key__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/key */ "VFa8");











// tslint:disable-next-line:directive-class-suffix
class BaseElementComponent {
    constructor(key, deps, editorService, elementRef, cdr) {
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dataSlateNode = undefined;
        this.dataSlateVoid = undefined;
        this.dataSlateInline = undefined;
        this.contentEditable = undefined;
        this.dir = undefined;
    }
    get injector() {
        var _a;
        return (_a = this.deps.get(this.key)) === null || _a === void 0 ? void 0 : _a.injector;
    }
    get cNode() {
        return this.injector.get(_token__WEBPACK_IMPORTED_MODULE_1__["CURRENT_NODE_TOKEN"]);
    }
    get portals() {
        return this.injector.get(_token__WEBPACK_IMPORTED_MODULE_1__["CHILD_PORTALS_TOKEN"]);
    }
    ngOnInit() {
        // 若需要传入对应的init options 只需覆写ngOnInit即可
        this.init();
    }
    ngOnDestroy() {
        this.destroy();
        this.destroy$$.next();
        this.destroy$$.complete();
    }
    /**
     * 初始化组件
     * @param options
     */
    init(options) {
        const { el, useHostAttrs = true } = options || {};
        const nativeElement = (el === null || el === void 0 ? void 0 : el.nativeElement) || this.elementRef.nativeElement;
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_2__["KEY_TO_ELEMENT"].set(this.key, nativeElement);
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_2__["NODE_TO_ELEMENT"].set(this.cNode, nativeElement);
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_TO_NODE"].set(nativeElement, this.cNode);
        useHostAttrs && this.updateAttrs();
    }
    /**
     * 组件销毁处理
     */
    destroy() {
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_2__["KEY_TO_ELEMENT"].delete(this.key);
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_2__["NODE_TO_ELEMENT"].delete(this.cNode);
    }
    /**
     * componentPortal 循环渲染优化
     * @param index
     * @param item
     */
    trackBy(index, item) {
        var _a;
        return ((_a = item.injector.get(_token__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"])) === null || _a === void 0 ? void 0 : _a.id) || index;
    }
    /**
     * watch deps change
     */
    watchDeps() {
        this.deps.watch(this.key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$$)).subscribe(e => {
            this.cdr.markForCheck();
        });
    }
    /**
     * watch deps callback
     */
    watchDepsCallback() { }
    /**
     * update host attrs
     */
    updateAttrs() {
        this.dataSlateNode = 'element';
        const editor = this.editorService.editor;
        const isInline = editor.isInline(this.cNode);
        isInline && (this.dataSlateInline = true);
        if (!isInline && slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].hasInlines(editor, this.cNode)) {
            const text = slate__WEBPACK_IMPORTED_MODULE_3__["Node"].string(this.cNode);
            const dir = direction__WEBPACK_IMPORTED_MODULE_4___default()(text);
            if (dir === "rtl") {
                this.dir = dir;
            }
        }
        if (slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].isVoid(editor, this.cNode)) {
            this.dataSlateVoid = true;
            if (isInline) {
                this.contentEditable = false;
            }
        }
    }
}
BaseElementComponent.ɵfac = function BaseElementComponent_Factory(t) { return new (t || BaseElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_token__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_deps_service__WEBPACK_IMPORTED_MODULE_7__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_editor_service__WEBPACK_IMPORTED_MODULE_8__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BaseElementComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseElementComponent, hostVars: 5, hostBindings: function BaseElementComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slate-node", ctx.dataSlateNode)("data-slate-void", ctx.dataSlateVoid)("data-slate-inline", ctx.dataSlateInline)("contenteditable", ctx.contentEditable)("dir", ctx.dir);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: _utils_key__WEBPACK_IMPORTED_MODULE_9__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_token__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_7__["NsDepsService"] }, { type: _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_8__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { dataSlateNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.data-slate-node"]
        }], dataSlateVoid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.data-slate-void"]
        }], dataSlateInline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.data-slate-inline"]
        }], contentEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.contenteditable"]
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.dir"]
        }] }); })();


/***/ }),

/***/ "b2nx":
/*!******************************************************!*\
  !*** ../slate-ng-view/src/plugins/angular-editor.ts ***!
  \******************************************************/
/*! exports provided: AngularEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditor", function() { return AngularEditor; });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "D1+F");
/* harmony import */ var _utils_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/key */ "VFa8");
/* harmony import */ var _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/weak-maps */ "nYjg");
/* harmony import */ var _utils_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/environment */ "Du7K");





const AngularEditor = Object.assign(Object.assign({}, slate__WEBPACK_IMPORTED_MODULE_0__["Editor"]), { 
    /**
     * Return the host window of the current editor.
     */
    getWindow(editor) {
        const window = _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["EDITOR_TO_WINDOW"].get(editor);
        if (!window) {
            throw new Error('Unable to find a host window element for this editor');
        }
        return window;
    },
    /**
     * Find the path of Slate node.
     */
    findPath(editor, node) {
        const path = [];
        let child = node;
        while (true) {
            const parent = _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["NODE_TO_PARENT"].get(child);
            if (parent == null) {
                if (slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].isEditor(child)) {
                    return path;
                }
                else {
                    break;
                }
            }
            const i = _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["NODE_TO_INDEX"].get(child);
            if (i == null) {
                break;
            }
            path.unshift(i);
            child = parent;
        }
        throw new Error(`Unable to find the path for Slate node: ${JSON.stringify(node)}`);
    },
    /**
     * Insert data from a `DataTransfer` into the editor.
     */
    insertData(editor, data) {
        editor.insertData(data);
    },
    /**
     * Sets data from the currently selected fragment on a `DataTransfer`.
     */
    setFragmentData(editor, data) {
        editor.setFragmentData(data);
    },
    /**
     * Check if a DOM node is within the editor.
     */
    hasDOMNode(editor, target, options = {}) {
        const { editable = false } = options;
        const editorEl = AngularEditor.toDOMNode(editor, editor);
        let targetEl;
        // COMPAT: In Firefox, reading `target.nodeType` will throw an error if
        // target is originating from an internal "restricted" element (e.g. a
        // stepper arrow on a number input). (2018/05/04)
        // https://github.com/ianstormtaylor/slate/issues/1819
        try {
            targetEl = (Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["isDOMElement"])(target)
                ? target
                : target.parentElement);
        }
        catch (err) {
            if (!err.message.includes('Permission denied to access property "nodeType"')) {
                throw err;
            }
        }
        if (!targetEl) {
            return false;
        }
        return (targetEl.closest(`[data-slate-ng-editor]`) === editorEl &&
            (!editable ||
                targetEl.isContentEditable ||
                !!targetEl.getAttribute('data-slate-zero-width')));
    },
    /**
     * Find the native DOM element from a Slate node.
     */
    toDOMNode(editor, node) {
        const domNode = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].isEditor(node)
            ? _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["EDITOR_TO_ELEMENT"].get(editor)
            : _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["KEY_TO_ELEMENT"].get(AngularEditor.findKey(editor, node));
        if (!domNode) {
            throw new Error(`Cannot resolve a DOM node from Slate node: ${JSON.stringify(node)}`);
        }
        return domNode;
    },
    /**
     * Find a key for a Slate node.
     */
    findKey(editor, node) {
        let key = _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["NODE_TO_KEY"].get(node);
        if (!key) {
            key = new _utils_key__WEBPACK_IMPORTED_MODULE_2__["Key"]();
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["NODE_TO_KEY"].set(node, key);
        }
        return key;
    },
    /**
     *
     */
    findKeyNoSet(editor, node) {
        let key = _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["NODE_TO_KEY"].get(node);
        if (!key) {
            key = new _utils_key__WEBPACK_IMPORTED_MODULE_2__["Key"]();
        }
        return key;
    },
    /**
     * has a key
     */
    hasKey(node) {
        return !!_utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["NODE_TO_KEY"].get(node);
    },
    /**
     * Find a Slate range from a DOM range or selection.
     */
    toSlateRange(editor, domRange, options) {
        const { exactMatch } = options;
        const el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["isDOMSelection"])(domRange)
            ? domRange.anchorNode
            : domRange.startContainer;
        let anchorNode;
        let anchorOffset;
        let focusNode;
        let focusOffset;
        let isCollapsed;
        if (el) {
            if (Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["isDOMSelection"])(domRange)) {
                anchorNode = domRange.anchorNode;
                anchorOffset = domRange.anchorOffset;
                focusNode = domRange.focusNode;
                focusOffset = domRange.focusOffset;
                // COMPAT: There's a bug in chrome that always returns `true` for
                // `isCollapsed` for a Selection that comes from a ShadowRoot.
                // (2020/08/08)
                // https://bugs.chromium.org/p/chromium/issues/detail?id=447523
                if (_utils_environment__WEBPACK_IMPORTED_MODULE_4__["IS_CHROME"] && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["hasShadowRoot"])()) {
                    isCollapsed =
                        domRange.anchorNode === domRange.focusNode &&
                            domRange.anchorOffset === domRange.focusOffset;
                }
                else {
                    isCollapsed = domRange.isCollapsed;
                }
            }
            else {
                anchorNode = domRange.startContainer;
                anchorOffset = domRange.startOffset;
                focusNode = domRange.endContainer;
                focusOffset = domRange.endOffset;
                isCollapsed = domRange.collapsed;
            }
        }
        if (anchorNode == null ||
            focusNode == null ||
            anchorOffset == null ||
            focusOffset == null) {
            throw new Error(`Cannot resolve a Slate range from DOM range: ${domRange}`);
        }
        const anchor = AngularEditor.toSlatePoint(editor, [anchorNode, anchorOffset], exactMatch);
        if (!anchor) {
            return null;
        }
        const focus = isCollapsed
            ? anchor
            : AngularEditor.toSlatePoint(editor, [focusNode, focusOffset], exactMatch);
        if (!focus) {
            return null;
        }
        return { anchor, focus };
    },
    /**
     * Find a Slate point from a DOM selection's `domNode` and `domOffset`.
     */
    toSlatePoint(editor, domPoint, extractMatch) {
        const [nearestNode, nearestOffset] = extractMatch
            ? domPoint
            : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["normalizeDOMPoint"])(domPoint);
        const parentNode = nearestNode.parentNode;
        let textNode = null;
        let offset = 0;
        if (parentNode) {
            const voidNode = parentNode.closest('[data-slate-void="true"]');
            let leafNode = parentNode.closest('[data-slate-leaf]');
            let domNode = null;
            // Calculate how far into the text node the `nearestNode` is, so that we
            // can determine what the offset relative to the text node is.
            if (leafNode) {
                textNode = leafNode.closest('[data-slate-node="text"]');
                const window = AngularEditor.getWindow(editor);
                const range = window.document.createRange();
                range.setStart(textNode, 0);
                range.setEnd(nearestNode, nearestOffset);
                const contents = range.cloneContents();
                const removals = [
                    ...Array.prototype.slice.call(contents.querySelectorAll('[data-slate-zero-width]')),
                    ...Array.prototype.slice.call(contents.querySelectorAll('[contenteditable=false]'))
                ];
                removals.forEach(el => {
                    el.parentNode.removeChild(el);
                });
                // COMPAT: Edge has a bug where Range.prototype.toString() will
                // convert \n into \r\n. The bug causes a loop when slate-react
                // attempts to reposition its cursor to match the native position. Use
                // textContent.length instead.
                // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10291116/
                offset = contents.textContent.length;
                domNode = textNode;
            }
            else if (voidNode) {
                // For void nodes, the element with the offset key will be a cousin, not an
                // ancestor, so find it by going down from the nearest void parent.
                leafNode = voidNode.querySelector('[data-slate-leaf]');
                // COMPAT: In read-only editors the leaf is not rendered.
                if (!leafNode) {
                    offset = 1;
                }
                else {
                    // 暂时保持和上面一直处理逻辑
                    textNode = leafNode.closest('[data-slate-node="text"]');
                    const window = AngularEditor.getWindow(editor);
                    const range = window.document.createRange();
                    range.setStart(textNode, 0);
                    range.setEnd(nearestNode, nearestOffset);
                    const contents = range.cloneContents();
                    const removals = [
                        ...Array.prototype.slice.call(contents.querySelectorAll('[data-slate-zero-width]')),
                        ...Array.prototype.slice.call(contents.querySelectorAll('[contenteditable=false]'))
                    ];
                    removals.forEach(el => {
                        el.parentNode.removeChild(el);
                    });
                    // COMPAT: Edge has a bug where Range.prototype.toString() will
                    // convert \n into \r\n. The bug causes a loop when slate-react
                    // attempts to reposition its cursor to match the native position. Use
                    // textContent.length instead.
                    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10291116/
                    offset = contents.textContent.length;
                    domNode = textNode;
                }
            }
            // COMPAT: If the parent node is a Slate zero-width space, editor is
            // because the text node should have no characters. However, during IME
            // composition the ASCII characters will be prepended to the zero-width
            // space, so subtract 1 from the offset to account for the zero-width
            // space character.
            if (domNode &&
                offset === domNode.textContent.length &&
                parentNode.hasAttribute('data-slate-zero-width')) {
                offset--;
            }
        }
        if (!textNode) {
            if (extractMatch) {
                return null;
            }
            throw new Error(`Cannot resolve a Slate point from DOM point: ${domPoint}`);
        }
        // COMPAT: If someone is clicking from one Slate editor into another,
        // the select event fires twice, once for the old editor's `element`
        // first, and then afterwards for the correct `element`. (2017/03/03)
        const slateNode = AngularEditor.toSlateNode(editor, textNode);
        const path = AngularEditor.findPath(editor, slateNode);
        return { path, offset };
    },
    /**
     * Find a Slate node from a native DOM `element`.
     */
    toSlateNode(editor, domNode) {
        let domEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["isDOMElement"])(domNode) ? domNode : domNode.parentElement;
        if (domEl && !domEl.hasAttribute('data-slate-node')) {
            domEl = domEl.closest(`[data-slate-node]`);
        }
        const node = domEl ? _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["ELEMENT_TO_NODE"].get(domEl) : null;
        if (!node) {
            throw new Error(`Cannot resolve a Slate node from DOM node: ${domEl}`);
        }
        return node;
    },
    /**
     * Get the target range from a DOM `event`.
     */
    findEventRange(editor, event) {
        if ('nativeEvent' in event) {
            event = event.nativeEvent;
        }
        const { clientX: x, clientY: y, target } = event;
        if (x == null || y == null) {
            throw new Error(`Cannot resolve a Slate range from a DOM event: ${event}`);
        }
        const node = AngularEditor.toSlateNode(editor, event.target);
        const path = AngularEditor.findPath(editor, node);
        // If the drop target is inside a void node, move it into either the
        // next or previous node, depending on which side the `x` and `y`
        // coordinates are closest to.
        if (slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].isVoid(editor, node)) {
            const rect = target.getBoundingClientRect();
            const isPrev = editor.isInline(node)
                ? x - rect.left < rect.left + rect.width - x
                : y - rect.top < rect.top + rect.height - y;
            const edge = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].point(editor, path, {
                edge: isPrev ? 'start' : 'end'
            });
            const point = isPrev
                ? slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].before(editor, edge)
                : slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].after(editor, edge);
            if (point) {
                const range = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].range(editor, point);
                return range;
            }
        }
        // Else resolve a range from the caret position where the drop occured.
        let domRange;
        const { document } = window;
        // COMPAT: In Firefox, `caretRangeFromPoint` doesn't exist. (2016/07/25)
        if (document.caretRangeFromPoint) {
            domRange = document.caretRangeFromPoint(x, y);
        }
        else {
            const position = document.caretPositionFromPoint(x, y);
            if (position) {
                domRange = document.createRange();
                domRange.setStart(position.offsetNode, position.offset);
                domRange.setEnd(position.offsetNode, position.offset);
            }
        }
        if (!domRange) {
            throw new Error(`Cannot resolve a Slate range from a DOM event: ${event}`);
        }
        // Resolve a Slate range from the DOM range.
        const range = AngularEditor.toSlateRange(editor, domRange, {
            exactMatch: false
        });
        return range;
    },
    /**
     * Find the DOM node that implements DocumentOrShadowRoot for the editor.
     */
    findDocumentOrShadowRoot(editor) {
        const el = AngularEditor.toDOMNode(editor, editor);
        const root = el.getRootNode();
        // The below exception will always be thrown for iframes because the document inside an iframe
        // does not inherit it's prototype from the parent document, therefore we return early
        if (el.ownerDocument !== document) {
            return el.ownerDocument;
        }
        if (!(root instanceof Document || root instanceof ShadowRoot)) {
            throw new Error(`Unable to find DocumentOrShadowRoot for editor element: ${el}`);
        }
        // COMPAT: Only Chrome implements the DocumentOrShadowRoot mixin for
        // ShadowRoot; other browsers still implement it on the Document
        // interface. (2020/08/08)
        // https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot#Properties
        if (root.getSelection === undefined && el.ownerDocument !== null) {
            return el.ownerDocument;
        }
        return root;
    },
    /**
     * Check if the editor is focused.
     */
    isFocused(editor) {
        return !!_utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["IS_FOCUSED"].get(editor);
    },
    /**
     * Check if the editor is in read-only mode.
     */
    isReadOnly(editor) {
        return !!_utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["IS_READ_ONLY"].get(editor);
    },
    /**
     * Blur the editor.
     */
    blur(editor) {
        const el = AngularEditor.toDOMNode(editor, editor);
        const root = AngularEditor.findDocumentOrShadowRoot(editor);
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["IS_FOCUSED"].set(editor, false);
        if (root.activeElement === el) {
            el.blur();
        }
    },
    /**
     * Focus the editor.
     */
    focus(editor) {
        const el = AngularEditor.toDOMNode(editor, editor);
        const root = AngularEditor.findDocumentOrShadowRoot(editor);
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["IS_FOCUSED"].set(editor, true);
        if (root.activeElement !== el) {
            el.focus({ preventScroll: true });
        }
    },
    /**
     * Deselect the editor.
     */
    deselect(editor) {
        const el = AngularEditor.toDOMNode(editor, editor);
        const { selection } = editor;
        const root = AngularEditor.findDocumentOrShadowRoot(editor);
        const domSelection = root.getSelection();
        if (domSelection && domSelection.rangeCount > 0) {
            domSelection.removeAllRanges();
        }
        if (selection) {
            slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].deselect(editor);
        }
    },
    /**
     * Find a native DOM range from a Slate `range`.
     *
     * Notice: the returned range will always be ordinal regardless of the direction of Slate `range` due to DOM API limit.
     *
     * there is no way to create a reverse DOM Range using Range.setStart/setEnd
     * according to https://dom.spec.whatwg.org/#concept-range-bp-set.
     */
    toDOMRange(editor, range) {
        const { anchor, focus } = range;
        const isBackward = slate__WEBPACK_IMPORTED_MODULE_0__["Range"].isBackward(range);
        const domAnchor = AngularEditor.toDOMPoint(editor, anchor);
        const domFocus = slate__WEBPACK_IMPORTED_MODULE_0__["Range"].isCollapsed(range)
            ? domAnchor
            : AngularEditor.toDOMPoint(editor, focus);
        const window = AngularEditor.getWindow(editor);
        const domRange = window.document.createRange();
        const [startNode, startOffset] = isBackward ? domFocus : domAnchor;
        const [endNode, endOffset] = isBackward ? domAnchor : domFocus;
        // A slate Point at zero-width Leaf always has an offset of 0 but a native DOM selection at
        // zero-width node has an offset of 1 so we have to check if we are in a zero-width node and
        // adjust the offset accordingly.
        const startEl = (Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["isDOMElement"])(startNode)
            ? startNode
            : startNode.parentElement);
        const isStartAtZeroWidth = !!startEl.getAttribute('data-slate-zero-width');
        const endEl = (Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["isDOMElement"])(endNode)
            ? endNode
            : endNode.parentElement);
        const isEndAtZeroWidth = !!endEl.getAttribute('data-slate-zero-width');
        domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
        domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
        return domRange;
    },
    /**
     * Find a native DOM selection point from a Slate point.
     */
    toDOMPoint(editor, point) {
        const [node] = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].node(editor, point.path);
        const el = AngularEditor.toDOMNode(editor, node);
        let domPoint;
        // If we're inside a void node, force the offset to 0, otherwise the zero
        // width spacing character will result in an incorrect offset of 1
        if (slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].void(editor, { at: point })) {
            point = { path: point.path, offset: 0 };
        }
        // For each leaf, we need to isolate its content, which means filtering
        // to its direct text and zero-width spans. (We have to filter out any
        // other siblings that may have been rendered alongside them.)
        const selector = `[data-slate-string], [data-slate-zero-width]`;
        const texts = Array.from(el.querySelectorAll(selector));
        let start = 0;
        for (const text of texts) {
            const domNode = text.childNodes[0];
            if (domNode == null || domNode.textContent == null) {
                continue;
            }
            const { length } = domNode.textContent;
            const attr = text.getAttribute('data-slate-length');
            const trueLength = attr == null ? length : parseInt(attr, 10);
            const end = start + trueLength;
            if (point.offset <= end) {
                const offset = Math.min(length, Math.max(0, point.offset - start));
                domPoint = [domNode, offset];
                break;
            }
            start = end;
        }
        if (!domPoint) {
            throw new Error(`Cannot resolve a DOM point from Slate point: ${JSON.stringify(point)}`);
        }
        return domPoint;
    },
    hasRange(editor, range) {
        const { anchor, focus } = range;
        return (slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].hasPath(editor, anchor.path) && slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].hasPath(editor, focus.path));
    } });


/***/ }),

/***/ "dClj":
/*!*****************************************************************!*\
  !*** ./src/app/components/instruction/instruction.component.ts ***!
  \*****************************************************************/
/*! exports provided: InstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionComponent", function() { return InstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");



const _c0 = function () { return { whiteSpace: "pre-wrap", margin: "0 -20px 10px", padding: "10px 20px", fontSize: "14px", background: "#f8f8f8" }; };
class InstructionComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstructionComponent.ɵfac = function InstructionComponent_Factory(t) { return new (t || InstructionComponent)(); };
InstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructionComponent, selectors: [["app-instruction"]], inputs: { className: "className" }, decls: 1, vars: 3, consts: [[3, "className", "ngStyle"]], template: function InstructionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.className)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvY29tcG9uZW50cy9pbnN0cnVjdGlvbi9pbnN0cnVjdGlvbi5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instruction',
                templateUrl: './instruction.component.html',
                styleUrls: ['./instruction.component.less']
            }]
    }], function () { return []; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "dRXW":
/*!*********************************************!*\
  !*** ../slate-ng-view/src/utils/hotkeys.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-hotkey */ "yoaI");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ "Du7K");


/**
 * Hotkey mappings for each platform.
 */
const HOTKEYS = {
    bold: 'mod+b',
    compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
    moveBackward: 'left',
    moveForward: 'right',
    moveWordBackward: 'ctrl+left',
    moveWordForward: 'ctrl+right',
    deleteBackward: 'shift?+backspace',
    deleteForward: 'shift?+delete',
    extendBackward: 'shift+left',
    extendForward: 'shift+right',
    italic: 'mod+i',
    splitBlock: 'shift?+enter',
    undo: 'mod+z',
};
const APPLE_HOTKEYS = {
    moveLineBackward: 'opt+up',
    moveLineForward: 'opt+down',
    moveWordBackward: 'opt+left',
    moveWordForward: 'opt+right',
    deleteBackward: ['ctrl+backspace', 'ctrl+h'],
    deleteForward: ['ctrl+delete', 'ctrl+d'],
    deleteLineBackward: 'cmd+shift?+backspace',
    deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
    deleteWordBackward: 'opt+shift?+backspace',
    deleteWordForward: 'opt+shift?+delete',
    extendLineBackward: 'opt+shift+up',
    extendLineForward: 'opt+shift+down',
    redo: 'cmd+shift+z',
    transposeCharacter: 'ctrl+t',
};
const WINDOWS_HOTKEYS = {
    deleteWordBackward: 'ctrl+shift?+backspace',
    deleteWordForward: 'ctrl+shift?+delete',
    redo: ['ctrl+y', 'ctrl+shift+z'],
};
/**
 * Create a platform-aware hotkey checker.
 */
const create = (key) => {
    const generic = HOTKEYS[key];
    const apple = APPLE_HOTKEYS[key];
    const windows = WINDOWS_HOTKEYS[key];
    const isGeneric = generic && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_0__["isKeyHotkey"])(generic);
    const isApple = apple && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_0__["isKeyHotkey"])(apple);
    const isWindows = windows && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_0__["isKeyHotkey"])(windows);
    return (event) => {
        if (isGeneric && isGeneric(event)) {
            return true;
        }
        if (_environment__WEBPACK_IMPORTED_MODULE_1__["IS_APPLE"] && isApple && isApple(event)) {
            return true;
        }
        if (!_environment__WEBPACK_IMPORTED_MODULE_1__["IS_APPLE"] && isWindows && isWindows(event)) {
            return true;
        }
        return false;
    };
};
/**
 * Hotkeys.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    isBold: create('bold'),
    isCompose: create('compose'),
    isMoveBackward: create('moveBackward'),
    isMoveForward: create('moveForward'),
    isDeleteBackward: create('deleteBackward'),
    isDeleteForward: create('deleteForward'),
    isDeleteLineBackward: create('deleteLineBackward'),
    isDeleteLineForward: create('deleteLineForward'),
    isDeleteWordBackward: create('deleteWordBackward'),
    isDeleteWordForward: create('deleteWordForward'),
    isExtendBackward: create('extendBackward'),
    isExtendForward: create('extendForward'),
    isExtendLineBackward: create('extendLineBackward'),
    isExtendLineForward: create('extendLineForward'),
    isItalic: create('italic'),
    isMoveLineBackward: create('moveLineBackward'),
    isMoveLineForward: create('moveLineForward'),
    isMoveWordBackward: create('moveWordBackward'),
    isMoveWordForward: create('moveWordForward'),
    isRedo: create('redo'),
    isSplitBlock: create('splitBlock'),
    isTransposeCharacter: create('transposeCharacter'),
    isUndo: create('undo'),
});


/***/ }),

/***/ "f1Z7":
/*!******************************************************!*\
  !*** ./src/app/placeholder/placeholder.component.ts ***!
  \******************************************************/
/*! exports provided: PlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderComponent", function() { return PlaceholderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var slate_ng_view_components_element_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-ng-view/components/element/token */ "CS3F");




class PlaceholderComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BasePlaceholderComponent"] {
    constructor(children) {
        super();
        this.children = children;
    }
    ngOnInit() {
    }
}
PlaceholderComponent.type = 'placeholder';
PlaceholderComponent.ɵfac = function PlaceholderComponent_Factory(t) { return new (t || PlaceholderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view_components_element_token__WEBPACK_IMPORTED_MODULE_2__["PLACEHOLDER_CHILDREN_TOKEN"])); };
PlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaceholderComponent, selectors: [["app-placeholder"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, template: function PlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.children, "\n");
    } }, styles: ["[_nghost-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NsYXRlLW5nL3NsYXRlLW5nL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-placeholder',
                templateUrl: './placeholder.component.html',
                styleUrls: ['./placeholder.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view_components_element_token__WEBPACK_IMPORTED_MODULE_2__["PLACEHOLDER_CHILDREN_TOKEN"]]
            }] }]; }, null); })();


/***/ }),

/***/ "gcCw":
/*!**********************************************************************************!*\
  !*** ./src/app/examples/editable-voids/editable-void/editable-void.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditableVoidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableVoidComponent", function() { return EditableVoidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rich-text/rich-text.component */ "EFKx");
/* harmony import */ var _slate_ng_view_src_components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../slate-ng-view/src/components/portal-entry/portal-entry.component */ "Nr9U");







const _c0 = ["app-editable-void", ""];
const _c1 = function () { return { margin: "8px 0" }; };
const _c2 = function () { return { width: "unset" }; };
const _c3 = function () { return { padding: "20px", border: "2px solid #ddd" }; };
class EditableVoidComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
        this.contentEditable = false;
        this.name = '';
    }
}
EditableVoidComponent.type = 'editable-void';
EditableVoidComponent.ɵfac = function EditableVoidComponent_Factory(t) { return new (t || EditableVoidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
EditableVoidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditableVoidComponent, selectors: [["div", "app-editable-void", ""]], hostVars: 1, hostBindings: function EditableVoidComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("contenteditable", ctx.contentEditable);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 17, vars: 14, consts: [[1, "void-box"], ["type", "text", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "handedness", "value", "left"], ["type", "radio", "name", "handedness", "value", "right"], [3, "portals"]], template: function EditableVoidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditableVoidComponent_Template_input_ngModelChange_3_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Left or Right handed: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tell us about u:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-rich-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ns-portal-entry", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("portals", ctx.portals);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_3__["RichTextComponent"], _slate_ng_view_src_components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_4__["PortalEntryComponent"]], styles: [".void-box[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px #ddd;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NsYXRlLW5nL3NsYXRlLW5nL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9leGFtcGxlcy9lZGl0YWJsZS12b2lkcy9lZGl0YWJsZS12b2lkL2VkaXRhYmxlLXZvaWQuY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvZWRpdGFibGUtdm9pZHMvZWRpdGFibGUtdm9pZC9lZGl0YWJsZS12b2lkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2V4YW1wbGVzL2VkaXRhYmxlLXZvaWRzL2VkaXRhYmxlLXZvaWQvZWRpdGFibGUtdm9pZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi52b2lkLWJveCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG59XG4iLCIudm9pZC1ib3gge1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggI2RkZDtcbiAgcGFkZGluZzogOHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableVoidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'div[app-editable-void]',
                templateUrl: './editable-void.component.html',
                styleUrls: ['./editable-void.component.less']
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { contentEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.contenteditable']
        }] }); })();


/***/ }),

/***/ "hDCA":
/*!*******************************************************************!*\
  !*** ./src/app/examples/forced-layout/forced-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForcedLayoutComponent, ForcedLayoutTitleElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForcedLayoutComponent", function() { return ForcedLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForcedLayoutTitleElement", function() { return ForcedLayoutTitleElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");









const _c0 = ["forced-layout-title", ""];
function ForcedLayoutTitleElement_ng_container_0_ng_template_1_Template(rf, ctx) { }
function ForcedLayoutTitleElement_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForcedLayoutTitleElement_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
const withLayout = editor => {
    const { normalizeNode } = editor;
    editor.normalizeNode = ([node, path]) => {
        if (path.length === 0) {
            if (editor.children.length < 1) {
                const title = {
                    type: 'title',
                    children: [{ text: 'Untitled' }],
                };
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertNodes(editor, title, { at: path.concat(0) });
            }
            if (editor.children.length < 2) {
                const paragraph = {
                    type: 'paragraph',
                    children: [{ text: '' }],
                };
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].insertNodes(editor, paragraph, { at: path.concat(1) });
            }
            for (const [child, childPath] of slate__WEBPACK_IMPORTED_MODULE_1__["Node"].children(editor, path)) {
                const type = childPath[0] === 0 ? 'title' : 'paragraph';
                if (slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(child) && child.type !== type) {
                    const newProperties = { type };
                    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(editor, newProperties, { at: childPath });
                }
            }
        }
        return normalizeNode([node, path]);
    };
    return editor;
};
class ForcedLayoutComponent {
    constructor(registry) {
        this.registry = registry;
        this.editor = withLayout(Object(slate_history__WEBPACK_IMPORTED_MODULE_2__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])())));
        this.initialValue = [
            {
                type: 'title',
                children: [{ text: 'Enforce Your Layout!' }],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'This example shows how to enforce your layout with domain-specific constraints. This document will always have a title block at the top and at least one paragraph in the body. Try deleting them and see what happens!',
                    },
                ],
            },
        ];
    }
    ngOnInit() {
        this.registry.add([ForcedLayoutTitleElement]);
    }
}
ForcedLayoutComponent.ɵfac = function ForcedLayoutComponent_Factory(t) { return new (t || ForcedLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"])); };
ForcedLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForcedLayoutComponent, selectors: [["app-forced-layout"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"]])], decls: 1, vars: 2, consts: [["ns-editor", "", "placeholder", "Enter a title\u2026", "spellCheck", "", "autoFocus", "", 3, "editor", "value"]], template: function ForcedLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue);
    } }, directives: [_slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_4__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvZm9yY2VkLWxheW91dC9mb3JjZWQtbGF5b3V0LmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForcedLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forced-layout',
                templateUrl: './forced-layout.component.html',
                styleUrls: ['./forced-layout.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"] }]; }, null); })();
class ForcedLayoutTitleElement extends slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef) {
        super(key, deps, editorService, elementRef);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
    }
}
ForcedLayoutTitleElement.type = 'title';
ForcedLayoutTitleElement.ɵfac = function ForcedLayoutTitleElement_Factory(t) { return new (t || ForcedLayoutTitleElement)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ForcedLayoutTitleElement.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForcedLayoutTitleElement, selectors: [["h2", "forced-layout-title", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function ForcedLayoutTitleElement_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForcedLayoutTitleElement_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForcedLayoutTitleElement, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'h2[forced-layout-title]',
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "hYZM":
/*!*****************************************************************************!*\
  !*** ./src/app/examples/markdown-shortcuts/markdown-shortcuts.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MarkdownShortcutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownShortcutsComponent", function() { return MarkdownShortcutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _rich_text_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rich-text/element */ "BBgI");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");








const SHORTCUTS = {
    '*': 'list-item',
    '-': 'list-item',
    '+': 'list-item',
    '>': 'block-quote',
    '#': 'heading-one',
    '##': 'heading-two',
    '###': 'heading-three',
    '####': 'heading-four',
    '#####': 'heading-five',
    '######': 'heading-six',
};
const withShortcuts = editor => {
    const { deleteBackward, insertText } = editor;
    editor.insertText = text => {
        const { selection } = editor;
        if (text === ' ' && selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
            const { anchor } = selection;
            const block = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].above(editor, {
                match: n => slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isBlock(editor, n),
            });
            const path = block ? block[1] : [];
            const start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, path);
            const range = { anchor, focus: start };
            const beforeText = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].string(editor, range);
            const type = SHORTCUTS[beforeText];
            if (type) {
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].select(editor, range);
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].delete(editor);
                const newProperties = {
                    type,
                };
                slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(editor, newProperties, {
                    match: n => slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isBlock(editor, n),
                });
                if (type === 'list-item') {
                    const list = {
                        type: 'bulleted-list',
                        children: [],
                    };
                    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].wrapNodes(editor, list, {
                        match: n => !slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(n) &&
                            slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(n) &&
                            n.type === 'list-item',
                    });
                }
                return;
            }
        }
        insertText(text);
    };
    editor.deleteBackward = (...args) => {
        const { selection } = editor;
        if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
            const match = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].above(editor, {
                match: n => slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isBlock(editor, n),
            });
            if (match) {
                const [block, path] = match;
                const start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, path);
                if (!slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(block) &&
                    slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(block) &&
                    block.type !== 'paragraph' &&
                    slate__WEBPACK_IMPORTED_MODULE_1__["Point"].equals(selection.anchor, start)) {
                    const newProperties = {
                        type: 'paragraph',
                    };
                    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(editor, newProperties);
                    if (block.type === 'list-item') {
                        slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].unwrapNodes(editor, {
                            match: n => !slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(n) &&
                                slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(n) &&
                                n.type === 'bulleted-list',
                            split: true,
                        });
                    }
                    return;
                }
            }
            deleteBackward(...args);
        }
    };
    return editor;
};
class MarkdownShortcutsComponent {
    constructor(registryNsElement) {
        this.registryNsElement = registryNsElement;
        this.initialValue = [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'The editor gives you full control over the logic you can add. For example, it\'s fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with "> " you get a blockquote that looks like this:',
                    },
                ],
            },
            {
                type: 'block-quote',
                children: [{ text: 'A wise quote.' }],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Order when you start a line with "## " you get a level-two heading, like this:',
                    },
                ],
            },
            {
                type: 'heading-two',
                children: [{ text: 'Try it out!' }],
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Try it out for yourself! Try starting a new line with ">", "-", or "#"s.',
                    },
                ],
            },
        ];
        this.editor = withShortcuts(Object(slate_history__WEBPACK_IMPORTED_MODULE_2__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])())));
    }
    ngOnInit() {
        this.registryNsElement.add([..._rich_text_element__WEBPACK_IMPORTED_MODULE_4__["CustomComponents"]]);
    }
}
MarkdownShortcutsComponent.ɵfac = function MarkdownShortcutsComponent_Factory(t) { return new (t || MarkdownShortcutsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"])); };
MarkdownShortcutsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkdownShortcutsComponent, selectors: [["app-markdown-shortcuts"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"]])], decls: 1, vars: 2, consts: [["ns-editor", "", "spellCheck", "", "autoFocus", "", "placeholder", "Write some markdown", 3, "editor", "value"]], template: function MarkdownShortcutsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue);
    } }, directives: [_slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_5__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvbWFya2Rvd24tc2hvcnRjdXRzL21hcmtkb3duLXNob3J0Y3V0cy5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownShortcutsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-markdown-shortcuts',
                templateUrl: './markdown-shortcuts.component.html',
                styleUrls: ['./markdown-shortcuts.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"] }]; }, null); })();


/***/ }),

/***/ "iWd5":
/*!**********************************************************************!*\
  !*** ./src/app/examples/hovering-toolbar/portal/portal.component.ts ***!
  \**********************************************************************/
/*! exports provided: PortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalComponent", function() { return PortalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _format_button_format_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../format-button/format-button.component */ "D1Mv");




class PortalComponent {
    constructor() {
        this.menuStyle = {
            padding: '8px 7px 6px',
            'background-color': '#222',
            'border-radius': '4px',
            transition: 'opacity 0.75s',
            width: 'max-content'
        };
    }
    ngOnInit() {
    }
}
PortalComponent.ɵfac = function PortalComponent_Factory(t) { return new (t || PortalComponent)(); };
PortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortalComponent, selectors: [["app-portal"]], decls: 4, vars: 1, consts: [[3, "customStyle"], ["format", "bold", "icon", "format_bold"], ["format", "italic", "icon", "format_italic"], ["format", "underline", "icon", "format_underline"]], template: function PortalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-format-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-format-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-format-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customStyle", ctx.menuStyle);
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _format_button_format_button_component__WEBPACK_IMPORTED_MODULE_2__["FormatButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvaG92ZXJpbmctdG9vbGJhci9wb3J0YWwvcG9ydGFsLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portal',
                templateUrl: './portal.component.html',
                styleUrls: ['./portal.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j5IH":
/*!******************************************!*\
  !*** ../slate-ng-view/src/public-api.ts ***!
  \******************************************/
/*! exports provided: SlateNgModule, EditableComponent, BaseElementComponent, BaseLeafComponent, BasePlaceholderComponent, PortalEntryComponent, withAngular, AngularEditor, NsDepsService, NsEditorService, RegistryNsElement, ElementAttrsDirective, LeafAttrsDirective, PlaceholderAttrsDirective, CHILD_PORTALS_TOKEN, PARENT_NODE_TOKEN, CURRENT_NODE_TOKEN, NODE_INDEX_TOKEN, IS_LAST_TOKEN, KEY_TOKEN, DECORATIONS_TOKEN, SELECTION_TOKEN, LEAF_TOKEN, LEAF_CHILD_PORTAL_TOKEN, PLACEHOLDER_CHILDREN_TOKEN, Key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slate_ng_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slate-ng.module */ "Qy9G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlateNgModule", function() { return _slate_ng_module__WEBPACK_IMPORTED_MODULE_0__["SlateNgModule"]; });

/* harmony import */ var _components_editable_editable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/editable/editable.component */ "lP+h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableComponent", function() { return _components_editable_editable_component__WEBPACK_IMPORTED_MODULE_1__["EditableComponent"]; });

/* harmony import */ var _components_element_base_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/element/base-element */ "ZHd+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElementComponent", function() { return _components_element_base_element__WEBPACK_IMPORTED_MODULE_2__["BaseElementComponent"]; });

/* harmony import */ var _components_text_leaf_base_leaf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/text/leaf/base-leaf.component */ "FGma");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLeafComponent", function() { return _components_text_leaf_base_leaf_component__WEBPACK_IMPORTED_MODULE_3__["BaseLeafComponent"]; });

/* harmony import */ var _components_text_placeholder_base_placeholder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/text/placeholder/base-placeholder.component */ "2af/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePlaceholderComponent", function() { return _components_text_placeholder_base_placeholder_component__WEBPACK_IMPORTED_MODULE_4__["BasePlaceholderComponent"]; });

/* harmony import */ var _components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/portal-entry/portal-entry.component */ "Nr9U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalEntryComponent", function() { return _components_portal_entry_portal_entry_component__WEBPACK_IMPORTED_MODULE_5__["PortalEntryComponent"]; });

/* harmony import */ var _plugins_with_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/with-angular */ "oUFv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAngular", function() { return _plugins_with_angular__WEBPACK_IMPORTED_MODULE_6__["withAngular"]; });

/* harmony import */ var _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/angular-editor */ "b2nx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularEditor", function() { return _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditor"]; });

/* harmony import */ var _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/ns-deps.service */ "yiMJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NsDepsService", function() { return _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_8__["NsDepsService"]; });

/* harmony import */ var _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/ns-editor.service */ "wpMU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NsEditorService", function() { return _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_9__["NsEditorService"]; });

/* harmony import */ var _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/registry-ns-element.service */ "Xqrq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistryNsElement", function() { return _services_registry_ns_element_service__WEBPACK_IMPORTED_MODULE_10__["RegistryNsElement"]; });

/* harmony import */ var _directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/element-attrs.directive */ "zTG3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementAttrsDirective", function() { return _directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_11__["ElementAttrsDirective"]; });

/* harmony import */ var _directives_leaf_attrs_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/leaf-attrs.directive */ "xewl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafAttrsDirective", function() { return _directives_leaf_attrs_directive__WEBPACK_IMPORTED_MODULE_12__["LeafAttrsDirective"]; });

/* harmony import */ var _directives_placeholder_attrs_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/placeholder-attrs.directive */ "ZB6i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaceholderAttrsDirective", function() { return _directives_placeholder_attrs_directive__WEBPACK_IMPORTED_MODULE_13__["PlaceholderAttrsDirective"]; });

/* harmony import */ var _components_element_token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/element/token */ "CS3F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHILD_PORTALS_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["CHILD_PORTALS_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARENT_NODE_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["PARENT_NODE_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CURRENT_NODE_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["CURRENT_NODE_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_INDEX_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["NODE_INDEX_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IS_LAST_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["IS_LAST_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["KEY_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DECORATIONS_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["DECORATIONS_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTION_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["SELECTION_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LEAF_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["LEAF_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LEAF_CHILD_PORTAL_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["LEAF_CHILD_PORTAL_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER_CHILDREN_TOKEN", function() { return _components_element_token__WEBPACK_IMPORTED_MODULE_14__["PLACEHOLDER_CHILDREN_TOKEN"]; });

/* harmony import */ var _utils_key__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/key */ "VFa8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return _utils_key__WEBPACK_IMPORTED_MODULE_15__["Key"]; });

/*
 * Public API Surface of slate-ng-view
 */

// component





// slate plugin


// service



// directive



// common




/***/ }),

/***/ "jIIh":
/*!********************************************!*\
  !*** ../slate-ng-view/src/utils/common.ts ***!
  \********************************************/
/*! exports provided: hasTarget, isEventHandled, isTargetInsideVoid, isDOMEventHandled, hasEditableTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTarget", function() { return hasTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventHandled", function() { return isEventHandled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTargetInsideVoid", function() { return isTargetInsideVoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMEventHandled", function() { return isDOMEventHandled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEditableTarget", function() { return hasEditableTarget; });
/* harmony import */ var _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/angular-editor */ "b2nx");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "D1+F");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "/UNx");



/**
 * Check if the target is in the editor.
 */
const hasTarget = (editor, target) => {
    return Object(_dom__WEBPACK_IMPORTED_MODULE_1__["isDOMNode"])(target) && _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_0__["AngularEditor"].hasDOMNode(editor, target);
};
/**
 * Check if an event is overrided by a handler.
 */
const isEventHandled = (event, handler) => {
    if (!handler) {
        return false;
    }
    handler(event);
    return event.defaultPrevented;
};
/**
 * Check if the target is inside void and in the editor.
 */
const isTargetInsideVoid = (editor, target) => {
    const slateNode = hasTarget(editor, target) && _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_0__["AngularEditor"].toSlateNode(editor, target);
    return slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].isVoid(editor, slateNode);
};
/**
 * Check if a DOM event is overrided by a handler.
 */
const isDOMEventHandled = (event, handler) => {
    if (!handler) {
        return false;
    }
    handler(event);
    return event.defaultPrevented;
};
/**
 * Check if the target is editable and in the editor.
 */
const hasEditableTarget = (editor, target) => {
    return (Object(_dom__WEBPACK_IMPORTED_MODULE_1__["isDOMNode"])(target) &&
        _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_0__["AngularEditor"].hasDOMNode(editor, target, { editable: true }));
};


/***/ }),

/***/ "jPLl":
/*!************************************************!*\
  !*** ../slate-ng-view/src/utils/object-set.ts ***!
  \************************************************/
/*! exports provided: ObjectSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectSet", function() { return ObjectSet; });
class ObjectSet {
    constructor(keyName) {
        this.store = {};
        this.keyName = '';
        this.keyName = keyName;
        return this;
    }
    gets() {
        return Object.values(this.store);
    }
    get(valueKey) {
        return this.store[valueKey];
    }
    add(value) {
        this.store[value[this.keyName]] = value;
    }
    remove(value) {
        delete this.store[value[this.keyName]];
    }
    has(value) {
        return !!this.store[value[this.keyName]];
    }
    forEach(callback) {
        for (let i = 0; i < this.gets().length; i++) {
            callback(this.gets()[i], i, this);
        }
    }
}


/***/ }),

/***/ "lP+h":
/*!**********************************************************************!*\
  !*** ../slate-ng-view/src/components/editable/editable.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableComponent", function() { return EditableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plugins/angular-editor */ "b2nx");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _utils_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/convert */ "UMz0");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ "xzqx");
/* harmony import */ var _polyfills_before_input_before_input_event_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../polyfills/before-input/before-input-event-plugin */ "qHjF");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/dom */ "D1+F");
/* harmony import */ var _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/weak-maps */ "nYjg");
/* harmony import */ var scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! scroll-into-view-if-needed */ "uaeE");
/* harmony import */ var _utils_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/environment */ "Du7K");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/common */ "jIIh");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! direction */ "Zva+");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(direction__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/hotkeys */ "dRXW");
/* harmony import */ var _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/ns-editor.service */ "wpMU");


















const _c0 = ["ns-editor", ""];
const _c1 = ["*"];
/**
 * A default memoized decorate function.
 */
const defaultDecorate = () => [];
// In Internet Explorer, contenteditable cannot be applied to
// the <table>, <col>, <colgroup>, <tbody>, <td>, <tfoot>, <th>, <thead>, and <tr> elements directly.
// A content editable <span> or <div> element can be
// placed inside the individual table cells.
let EditableComponent = class EditableComponent {
    constructor(editorService, elementRef, renderer2, cdr, ngZone) {
        this.editorService = editorService;
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.readonly = false;
        this.decorate = defaultDecorate;
        //#region DOM attr
        this.spellCheck = false;
        this.autoCorrect = false;
        this.autoCapitalize = false;
        this.autoFocus = false;
        // output event
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isComposing = false;
        this.manualListeners = [];
        this.isUpdatingSelection = false;
        this.latestElement = null;
        this.destroy$$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
    }
    get hasBeforeInputSupport() {
        return _polyfills_before_input_before_input_event_plugin__WEBPACK_IMPORTED_MODULE_6__["HAS_BEFORE_INPUT_SUPPORT"];
    }
    ngOnInit() {
        this.editor = this.editorService.init(this.editor, this.value);
        this.updateWeakMap();
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["EDITOR_TO_ON_CHANGE"].set(this.editor, () => {
            this.valueChange.emit(this.editor.children);
            this.toNativeSelection();
        });
        this.ngZone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(_utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["EDITOR_TO_WINDOW"].get(this.editor).document, 'selectionchange')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["throttle"])((value) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["interval"])(100);
            }, { trailing: true, leading: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$$))
                .subscribe(event => {
                this.toSlateSelection();
                this.nsSelectionChange && this.nsSelectionChange(event);
            });
            const fn = () => {
                _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["IS_FOCUSED"].set(this.editor, _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].isFocused(this.editor));
            };
            this.addEventListener('focus', fn, document);
            this.addEventListener('blur', fn, document);
            this.addEventListener('beforeinput', (event) => this.onDOMBeforeInput(event));
            this.addEventListener('click', (event) => this.onDOMClick(event));
            // 修复中文输入法输入造成的一些错误
            this.addEventListener('compositionstart', (event) => this.onDOMCompositionStart(event));
            this.addEventListener('compositionupdate', (event) => this.onDOMCompositionUpdate(event));
            this.addEventListener('compositionend', (event) => this.onDOMCompositionEnd(event));
            // other
            this.addEventListener('blur', (event) => this.onDOMBlur(event));
            this.addEventListener('copy', (event) => this.onDOMCopy(event));
            this.addEventListener('cut', (event) => this.onDOMCut(event));
            this.addEventListener('dragover', (event) => this.onDOMDragOver(event));
            this.addEventListener('dragstart', (event) => this.onDOMDragStart(event));
            this.addEventListener('drop', (event) => this.onDOMDrop(event));
            this.addEventListener('focus', (event) => this.onDOMFocus(event));
            this.addEventListener('keydown', (event) => this.onDOMKeyDown(event));
            this.addEventListener('paste', (event) => this.onDOMPaste(event));
        });
    }
    ngOnDestroy() {
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["NODE_TO_ELEMENT"].delete(this.editor);
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["EDITOR_TO_ON_CHANGE"].delete(this.editor);
        this.manualListeners.forEach(manualListener => manualListener());
        this.destroy$$.next();
        this.destroy$$.complete();
    }
    ngOnChanges(changes) {
        var _a, _b;
        // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
        // needs to be manually focused.
        if (((_a = changes.autoFocus) === null || _a === void 0 ? void 0 : _a.currentValue) !== ((_b = changes.autoFocus) === null || _b === void 0 ? void 0 : _b.previousValue)) {
            this.elementRef.nativeElement.focus();
        }
    }
    ngAfterContentChecked() {
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["IS_READ_ONLY"].set(this.editor, this.readonly);
    }
    toNativeSelection() {
        const editor = this.editor;
        const { selection } = editor;
        const root = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].findDocumentOrShadowRoot(editor);
        const domSelection = root.getSelection();
        if (this.isComposing || !domSelection || !_plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].isFocused(editor)) {
            return;
        }
        const hasDomSelection = domSelection.type !== 'None';
        // If the DOM selection is properly unset, we're done.
        if (!selection && !hasDomSelection) {
            return;
        }
        // verify that the dom selection is in the editor
        const editorElement = _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["EDITOR_TO_ELEMENT"].get(editor);
        let hasDomSelectionInEditor = false;
        if (editorElement.contains(domSelection.anchorNode) &&
            editorElement.contains(domSelection.focusNode)) {
            hasDomSelectionInEditor = true;
        }
        // If the DOM selection is in the editor and the editor selection is already correct, we're done.
        if (hasDomSelection && hasDomSelectionInEditor && selection) {
            const slateRange = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toSlateRange(editor, domSelection, {
                exactMatch: true,
            });
            if (slateRange && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].equals(slateRange, selection)) {
                return;
            }
        }
        // when <Editable/> is being controlled through external value
        // then its children might just change - DOM responds to it on its own
        // but Slate's value is not being updated through any operation
        // and thus it doesn't transform selection on its own
        if (selection && !_plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].hasRange(editor, selection)) {
            editor.selection = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toSlateRange(editor, domSelection, {
                exactMatch: false
            });
            return;
        }
        // Otherwise the DOM selection is out of sync, so update it.
        const el = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toDOMNode(editor, editor);
        this.isUpdatingSelection = true;
        const newDomRange = selection && _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toDOMRange(editor, selection);
        if (newDomRange) {
            if (slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isBackward(selection)) {
                domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
            }
            else {
                domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
            }
            const leafEl = newDomRange.startContainer.parentElement;
            leafEl.getBoundingClientRect = newDomRange.getBoundingClientRect.bind(newDomRange);
            Object(scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_9__["default"])(leafEl, {
                scrollMode: 'if-needed',
                boundary: el
            });
            // @ts-ignore
            delete leafEl.getBoundingClientRect;
        }
        else {
            domSelection.removeAllRanges();
        }
        setTimeout(() => {
            // COMPAT: In Firefox, it's not enough to create a range, you also need
            // to focus the contenteditable element too. (2016/11/16)
            if (newDomRange && _utils_environment__WEBPACK_IMPORTED_MODULE_10__["IS_FIREFOX"]) {
                el.focus();
            }
            this.isUpdatingSelection = false;
        });
    }
    toSlateSelection() {
        if (!this.readonly && !this.isComposing && !this.isUpdatingSelection) {
            const editor = this.editor;
            const root = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].findDocumentOrShadowRoot(editor);
            const { activeElement } = root;
            const el = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toDOMNode(editor, editor);
            const domSelection = root.getSelection();
            if (activeElement === el) {
                this.latestElement = activeElement;
                _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["IS_FOCUSED"].set(editor, true);
            }
            else {
                _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["IS_FOCUSED"].delete(editor);
            }
            if (!domSelection) {
                return slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].deselect(editor);
            }
            const { anchorNode, focusNode } = domSelection;
            const anchorNodeSelectable = Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(editor, anchorNode) ||
                Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isTargetInsideVoid"])(editor, anchorNode);
            const focusNodeSelectable = Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(editor, focusNode) ||
                Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isTargetInsideVoid"])(editor, focusNode);
            if (anchorNodeSelectable && focusNodeSelectable) {
                const range = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toSlateRange(editor, domSelection, {
                    exactMatch: false
                });
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].select(editor, range);
            }
            else {
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].deselect(editor);
            }
        }
    }
    updateWeakMap() {
        let window;
        const nativeEl = this.elementRef.nativeElement;
        const editor = this.editor;
        if (nativeEl && (window = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["getDefaultView"])(nativeEl))) {
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["EDITOR_TO_WINDOW"].set(editor, window);
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["EDITOR_TO_ELEMENT"].set(editor, nativeEl);
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["NODE_TO_ELEMENT"].set(editor, nativeEl);
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["ELEMENT_TO_NODE"].set(nativeEl, editor);
        }
        else {
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["NODE_TO_ELEMENT"].delete(editor);
        }
    }
    onDOMBeforeInput(event) {
        if (this.readonly ||
            Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnBeforeInput) ||
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(this.editor, event.target)) {
            return;
        }
        if (!_polyfills_before_input_before_input_event_plugin__WEBPACK_IMPORTED_MODULE_6__["HAS_BEFORE_INPUT_SUPPORT"]) {
            // COMPAT: Certain browsers don't support the `beforeinput` event, so we
            // fall back to React's leaky polyfill instead just for it. It
            // only works for the `insertText` input type.
            event.preventDefault();
            if (!this.isComposing) {
                const text = event.data;
                slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].insertText(this.editor, text);
            }
        }
        else if (_polyfills_before_input_before_input_event_plugin__WEBPACK_IMPORTED_MODULE_6__["HAS_BEFORE_INPUT_SUPPORT"]) {
            const editor = this.editor;
            const { selection } = editor;
            const { inputType: type } = event;
            const data = event.dataTransfer || event.data || undefined;
            // These two types occur while a user is composing text and can't be
            // cancelled. Let them through and wait for the composition to end.
            if (type === 'insertCompositionText' ||
                type === 'deleteCompositionText') {
                return;
            }
            event.preventDefault();
            // COMPAT: For the deleting forward/backward input types we don't want
            // to change the selection because it is the range that will be deleted,
            // and those commands determine that for themselves.
            if (!type.startsWith('delete') || type.startsWith('deleteBy')) {
                const [targetRange] = event.getTargetRanges();
                if (targetRange) {
                    const range = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toSlateRange(editor, targetRange, {
                        exactMatch: false
                    });
                    if (!selection || !slate__WEBPACK_IMPORTED_MODULE_3__["Range"].equals(selection, range)) {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].select(editor, range);
                    }
                }
            }
            // COMPAT: If the selection is expanded, even if the command seems like
            // a delete forward/backward command it should delete the selection.
            if (selection &&
                slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection) &&
                type.startsWith('delete')) {
                const direction = type.endsWith('Backward') ? 'backward' : 'forward';
                slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteFragment(editor, { direction });
                return;
            }
            switch (type) {
                case 'deleteByComposition':
                case 'deleteByCut':
                case 'deleteByDrag': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteFragment(editor);
                    break;
                }
                case 'deleteContent':
                case 'deleteContentForward': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteForward(editor);
                    break;
                }
                case 'deleteContentBackward': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteBackward(editor);
                    break;
                }
                case 'deleteEntireSoftLine': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteBackward(editor, { unit: 'line' });
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteForward(editor, { unit: 'line' });
                    break;
                }
                case 'deleteHardLineBackward': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteBackward(editor, { unit: 'block' });
                    break;
                }
                case 'deleteSoftLineBackward': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteBackward(editor, { unit: 'line' });
                    break;
                }
                case 'deleteHardLineForward': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteForward(editor, { unit: 'block' });
                    break;
                }
                case 'deleteSoftLineForward': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteForward(editor, { unit: 'line' });
                    break;
                }
                case 'deleteWordBackward': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteBackward(editor, { unit: 'word' });
                    break;
                }
                case 'deleteWordForward': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteForward(editor, { unit: 'word' });
                    break;
                }
                case 'insertLineBreak':
                case 'insertParagraph': {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].insertBreak(editor);
                    break;
                }
                case 'insertFromComposition':
                case 'insertFromDrop':
                case 'insertFromPaste':
                case 'insertFromYank':
                case 'insertReplacementText':
                case 'insertText': {
                    if (type === 'insertFromComposition') {
                        // COMPAT: in Safari, `compositionend` is dispatched after the
                        // `beforeinput` for "insertFromComposition". But if we wait for it
                        // then we will abort because we're still composing and the selection
                        // won't be updated properly.
                        // https://www.w3.org/TR/input-events-2/
                        this.isComposing = false;
                    }
                    const window = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].getWindow(editor);
                    if (data instanceof window.DataTransfer) {
                        _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].insertData(editor, data);
                    }
                    else if (typeof data === 'string') {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].insertText(editor, data);
                    }
                    break;
                }
            }
        }
    }
    onDOMClick(event) {
        if (!this.readonly &&
            Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasTarget"])(this.editor, event.target) &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnClick) &&
            Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["isDOMNode"])(event.target)) {
            const node = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toSlateNode(this.editor, event.target);
            const path = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].findPath(this.editor, node);
            const start = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].start(this.editor, path);
            const end = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].end(this.editor, path);
            const startVoid = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].void(this.editor, { at: start });
            const endVoid = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].void(this.editor, { at: end });
            if (startVoid &&
                endVoid &&
                slate__WEBPACK_IMPORTED_MODULE_3__["Path"].equals(startVoid[1], endVoid[1])) {
                const range = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].range(this.editor, start);
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].select(this.editor, range);
            }
        }
    }
    onDOMCompositionStart(event) {
        if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(this.editor, event.target) &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnCompositionStart)) {
            const { selection } = this.editor;
            if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection)) {
                slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteFragment(this.editor);
            }
        }
    }
    onDOMCompositionUpdate(event) {
        if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(this.editor, event.target) &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnCompositionUpdate)) {
            this.isComposing = true;
            // this.placeholder = '';
        }
    }
    onDOMCompositionEnd(event) {
        if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(this.editor, event.target) &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnCompositionEnd)) {
            this.isComposing = false;
            // COMPAT: In Chrome, `beforeinput` events for compositions
            // aren't correct and never fire the "insertFromComposition"
            // type that we need. So instead, insert whenever a composition
            // ends since it will already have been committed to the DOM.
            if (!_utils_environment__WEBPACK_IMPORTED_MODULE_10__["IS_SAFARI"] && !_utils_environment__WEBPACK_IMPORTED_MODULE_10__["IS_FIREFOX"] && event.data) {
                slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].insertText(this.editor, event.data);
            }
        }
    }
    onDOMBlur(event) {
        if (this.readonly ||
            this.isUpdatingSelection ||
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(this.editor, event.target) ||
            Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnBlur)) {
            return;
        }
        // COMPAT: If the current `activeElement` is still the previous
        // one, this is due to the window being blurred when the tab
        // itself becomes unfocused, so we want to abort early to allow to
        // editor to stay focused when the tab becomes focused again.
        const root = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].findDocumentOrShadowRoot(this.editor);
        if (this.latestElement === root.activeElement) {
            return;
        }
        const { relatedTarget } = event;
        const el = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toDOMNode(this.editor, this.editor);
        // COMPAT: The event should be ignored if the focus is returning
        // to the editor from an embedded editable element (eg. an <input>
        // element inside a void node).
        if (relatedTarget === el) {
            return;
        }
        // COMPAT: The event should be ignored if the focus is moving from
        // the editor to inside a void node's spacer element.
        // if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
        //   return;
        // }
        // COMPAT: The event should be ignored if the focus is moving to a
        // non- editable section of an element that isn't a void node (eg.
        // a list item of the check list example).
        if (relatedTarget != null &&
            Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["isDOMNode"])(relatedTarget) &&
            _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].hasDOMNode(this.editor, relatedTarget)) {
            const node = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toSlateNode(this.editor, relatedTarget);
            if (slate__WEBPACK_IMPORTED_MODULE_3__["Element"].isElement(node) && !this.editor.isVoid(node)) {
                return;
            }
        }
        // COMPAT: Safari doesn't always remove the selection even if the content-
        // editable element no longer has focus. Refer to:
        // https://stackoverflow.com/questions/12353247/force-contenteditable-div-to-stop-accepting-input-after-it-loses-focus-under-web
        if (_utils_environment__WEBPACK_IMPORTED_MODULE_10__["IS_SAFARI"]) {
            const domSelection = root.getSelection();
            domSelection === null || domSelection === void 0 ? void 0 : domSelection.removeAllRanges();
        }
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["IS_FOCUSED"].delete(this.editor);
    }
    onDOMCopy(event) {
        if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(this.editor, event.target) && !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnCopy)) {
            event.preventDefault();
            _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].setFragmentData(this.editor, event.clipboardData);
        }
    }
    onDOMCut(event) {
        if (!this.readonly &&
            Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(this.editor, event.target) &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnCut)) {
            event.preventDefault();
            _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].setFragmentData(this.editor, event.clipboardData);
            const { selection } = this.editor;
            if (selection) {
                if (slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection)) {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteFragment(this.editor);
                }
                else {
                    const node = slate__WEBPACK_IMPORTED_MODULE_3__["Node"].parent(this.editor, selection.anchor.path);
                    if (slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].isVoid(this.editor, node)) {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].delete(this.editor);
                    }
                }
            }
        }
    }
    onDOMDragOver(event) {
        if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasTarget"])(this.editor, event.target) &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnDragOver)) {
            const node = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toSlateNode(this.editor, event.target);
            if (slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].isVoid(this.editor, node)) {
                event.preventDefault();
            }
        }
    }
    onDOMDragStart(event) {
        if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasTarget"])(this.editor, event.target) &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnDragStart)) {
            const node = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toSlateNode(this.editor, event.target);
            const path = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].findPath(this.editor, node);
            const voidMatch = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].void(this.editor, { at: path });
            // If starting a drag on a void node, make sure it is selected
            // so that it shows up in the selection's fragment.
            if (voidMatch) {
                const range = slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].range(this.editor, path);
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].select(this.editor, range);
            }
            _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].setFragmentData(this.editor, event.dataTransfer);
        }
    }
    onDOMDrop(event) {
        if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasTarget"])(this.editor, event.target) &&
            !this.readonly &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnDrop)) {
            // COMPAT: Certain browsers don't fire `beforeinput` events at all, and
            // Chromium browsers don't properly fire them for files being
            // dropped into a `contenteditable`. (2019/11/26)
            // https://bugs.chromium.org/p/chromium/issues/detail?id=1028668
            if (!_polyfills_before_input_before_input_event_plugin__WEBPACK_IMPORTED_MODULE_6__["HAS_BEFORE_INPUT_SUPPORT"] ||
                (!_utils_environment__WEBPACK_IMPORTED_MODULE_10__["IS_SAFARI"] && event.dataTransfer.files.length > 0)) {
                event.preventDefault();
                const range = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].findEventRange(this.editor, event);
                const data = event.dataTransfer;
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].select(this.editor, range);
                _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].insertData(this.editor, data);
            }
        }
    }
    onDOMFocus(event) {
        if (!this.readonly &&
            !this.isUpdatingSelection &&
            Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(this.editor, event.target) &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnFocus)) {
            const el = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].toDOMNode(this.editor, this.editor);
            const root = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].findDocumentOrShadowRoot(this.editor);
            this.latestElement = root.activeElement;
            if (_utils_environment__WEBPACK_IMPORTED_MODULE_10__["IS_FIREFOX"] && event.target !== el) {
                el.focus();
                return;
            }
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_8__["IS_FOCUSED"].set(this.editor, true);
        }
    }
    onDOMKeyDown(event) {
        const editor = this.editor;
        if (!this.readonly &&
            Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(editor, event.target) &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnKeyDown)) {
            const nativeEvent = event;
            const { selection } = editor;
            const element = editor.children[selection !== null ? selection.focus.path[0] : 0];
            const isRTL = direction__WEBPACK_IMPORTED_MODULE_14___default()(slate__WEBPACK_IMPORTED_MODULE_3__["Node"].string(element)) === 'rtl';
            // COMPAT: Since we prevent the default behavior on
            // `beforeinput` events, the browser doesn't think there's ever
            // any history stack to undo or redo, so we have to manage these
            // hotkeys ourselves. (2019/11/06)
            if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isRedo(nativeEvent)) {
                event.preventDefault();
                const maybeHistoryEditor = editor;
                if (typeof maybeHistoryEditor.redo === 'function') {
                    maybeHistoryEditor.redo();
                }
                return;
            }
            if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isUndo(nativeEvent)) {
                event.preventDefault();
                const maybeHistoryEditor = editor;
                if (typeof maybeHistoryEditor.undo === 'function') {
                    maybeHistoryEditor.undo();
                }
                return;
            }
            // COMPAT: Certain browsers don't handle the selection updates
            // properly. In Chrome, the selection isn't properly extended.
            // And in Firefox, the selection isn't properly collapsed.
            // (2017/10/17)
            if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isMoveLineBackward(nativeEvent)) {
                event.preventDefault();
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].move(editor, { unit: 'line', reverse: true });
                return;
            }
            if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isMoveLineForward(nativeEvent)) {
                event.preventDefault();
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].move(editor, { unit: 'line' });
                return;
            }
            if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isExtendLineBackward(nativeEvent)) {
                event.preventDefault();
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].move(editor, {
                    unit: 'line',
                    edge: 'focus',
                    reverse: true,
                });
                return;
            }
            if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isExtendLineForward(nativeEvent)) {
                event.preventDefault();
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].move(editor, { unit: 'line', edge: 'focus' });
                return;
            }
            // COMPAT: If a void node is selected, or a zero-width text node
            // adjacent to an inline is selected, we need to handle these
            // hotkeys manually because browsers won't be able to skip over
            // the void node with the zero-width space not being an empty
            // string.
            if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isMoveBackward(nativeEvent)) {
                event.preventDefault();
                if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isCollapsed(selection)) {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].move(editor, { reverse: !isRTL });
                }
                else {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].collapse(editor, { edge: 'start' });
                }
                return;
            }
            if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isMoveForward(nativeEvent)) {
                event.preventDefault();
                if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isCollapsed(selection)) {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].move(editor, { reverse: isRTL });
                }
                else {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].collapse(editor, { edge: 'end' });
                }
                return;
            }
            if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isMoveWordBackward(nativeEvent)) {
                event.preventDefault();
                if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection)) {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].collapse(editor, { edge: 'focus' });
                }
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].move(editor, { unit: 'word', reverse: !isRTL });
                return;
            }
            if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isMoveWordForward(nativeEvent)) {
                event.preventDefault();
                if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection)) {
                    slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].collapse(editor, { edge: 'focus' });
                }
                slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].move(editor, { unit: 'word', reverse: isRTL });
                return;
            }
            // COMPAT: Certain browsers don't support the `beforeinput` event, so we
            // fall back to guessing at the input intention for hotkeys.
            // COMPAT: In iOS, some of these hotkeys are handled in the
            if (!_polyfills_before_input_before_input_event_plugin__WEBPACK_IMPORTED_MODULE_6__["HAS_BEFORE_INPUT_SUPPORT"]) {
                // We don't have a core behavior for these, but they change the
                // DOM if we don't prevent them, so we have to.
                if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isBold(nativeEvent) ||
                    _utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isItalic(nativeEvent) ||
                    _utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isTransposeCharacter(nativeEvent)) {
                    event.preventDefault();
                    return;
                }
                if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isSplitBlock(nativeEvent)) {
                    event.preventDefault();
                    slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].insertBreak(editor);
                    return;
                }
                if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isDeleteBackward(nativeEvent)) {
                    event.preventDefault();
                    if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection)) {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteFragment(editor, { direction: 'backward' });
                    }
                    else {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteBackward(editor);
                    }
                    return;
                }
                if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isDeleteForward(nativeEvent)) {
                    event.preventDefault();
                    if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection)) {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteFragment(editor, { direction: 'forward' });
                    }
                    else {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteForward(editor);
                    }
                    return;
                }
                if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isDeleteLineBackward(nativeEvent)) {
                    event.preventDefault();
                    if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection)) {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteFragment(editor, { direction: 'backward' });
                    }
                    else {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteBackward(editor, { unit: 'line' });
                    }
                    return;
                }
                if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isDeleteLineForward(nativeEvent)) {
                    event.preventDefault();
                    if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection)) {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteFragment(editor, { direction: 'forward' });
                    }
                    else {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteForward(editor, { unit: 'line' });
                    }
                    return;
                }
                if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isDeleteWordBackward(nativeEvent)) {
                    event.preventDefault();
                    if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection)) {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteFragment(editor, { direction: 'backward' });
                    }
                    else {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteBackward(editor, { unit: 'word' });
                    }
                    return;
                }
                if (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isDeleteWordForward(nativeEvent)) {
                    event.preventDefault();
                    if (selection && slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isExpanded(selection)) {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteFragment(editor, { direction: 'forward' });
                    }
                    else {
                        slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].deleteForward(editor, { unit: 'word' });
                    }
                    return;
                }
            }
            else {
                if (_utils_environment__WEBPACK_IMPORTED_MODULE_10__["IS_CHROME"] || _utils_environment__WEBPACK_IMPORTED_MODULE_10__["IS_SAFARI"]) {
                    // COMPAT: Chrome and Safari support `beforeinput` event but do not fire
                    // an event when deleting backwards in a selected void inline node
                    if (selection &&
                        (_utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isDeleteBackward(nativeEvent) ||
                            _utils_hotkeys__WEBPACK_IMPORTED_MODULE_15__["default"].isDeleteForward(nativeEvent)) &&
                        slate__WEBPACK_IMPORTED_MODULE_3__["Range"].isCollapsed(selection)) {
                        const currentNode = slate__WEBPACK_IMPORTED_MODULE_3__["Node"].parent(editor, selection.anchor.path);
                        if (slate__WEBPACK_IMPORTED_MODULE_3__["Element"].isElement(currentNode) &&
                            slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].isVoid(editor, currentNode) &&
                            slate__WEBPACK_IMPORTED_MODULE_3__["Editor"].isInline(editor, currentNode)) {
                            event.preventDefault();
                            slate__WEBPACK_IMPORTED_MODULE_3__["Transforms"].delete(editor, { unit: 'block' });
                            return;
                        }
                    }
                }
            }
        }
    }
    onDOMPaste(event) {
        if (!this.readonly &&
            Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["hasEditableTarget"])(this.editor, event.target) &&
            !Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["isEventHandled"])(event, this.nsOnPaste)) {
            // COMPAT: Certain browsers don't support the `beforeinput` event, so we
            // fall back to React's `onPaste` here instead.
            // COMPAT: Firefox, Chrome and Safari don't emit `beforeinput` events
            // when "paste without formatting" is used, so fallback. (2020/02/20)
            if (!_polyfills_before_input_before_input_event_plugin__WEBPACK_IMPORTED_MODULE_6__["HAS_BEFORE_INPUT_SUPPORT"] ||
                Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["isPlainTextOnlyPaste"])(event)) {
                event.preventDefault();
                _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_2__["AngularEditor"].insertData(this.editor, event.clipboardData);
            }
        }
    }
    addEventListener(eventName, handler, target = this.elementRef.nativeElement) {
        this.manualListeners.push(this.renderer2.listen(target, eventName, handler));
    }
};
EditableComponent.ɵfac = function EditableComponent_Factory(t) { return new (t || EditableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ns_editor_service__WEBPACK_IMPORTED_MODULE_16__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
EditableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditableComponent, selectors: [["div", "ns-editor", ""], ["span", "ns-editor", ""]], hostVars: 8, hostBindings: function EditableComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("contenteditable", !ctx.readonly)("data-slate-ng-editor", true)("data-slate-node", "value")("data-gramm", false)("spellCheck", !ctx.hasBeforeInputSupport ? undefined : ctx.spellCheck)("autoCorrect", !ctx.hasBeforeInputSupport ? undefined : ctx.autoCorrect)("autoCapitalize", !ctx.hasBeforeInputSupport ? undefined : ctx.autoCapitalize)("suppressContentEditableWarning", true);
    } }, inputs: { readonly: "readonly", editor: "editor", value: "value", decorate: "decorate", nsBeforeInput: "nsBeforeInput", nsOnClick: "nsOnClick", nsOnCompositionStart: "nsOnCompositionStart", nsOnCompositionUpdate: "nsOnCompositionUpdate", nsOnCompositionEnd: "nsOnCompositionEnd", nsOnBlur: "nsOnBlur", nsOnCopy: "nsOnCopy", nsOnCut: "nsOnCut", nsOnDragOver: "nsOnDragOver", nsOnDragStart: "nsOnDragStart", nsOnDrop: "nsOnDrop", nsOnFocus: "nsOnFocus", nsOnKeyDown: "nsOnKeyDown", nsOnPaste: "nsOnPaste", nsOnBeforeInput: "nsOnBeforeInput", nsSelectionChange: "nsSelectionChange", spellCheck: "spellCheck", autoCorrect: "autoCorrect", autoCapitalize: "autoCapitalize", autoFocus: "autoFocus", placeholder: "placeholder" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[3, "placeholder", "decorate"]], template: function EditableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ns-children", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholder)("decorate", ctx.decorate);
    } }, styles: ["[_nghost-%COMP%] {position: relative; outline: none; white-space: pre-wrap; word-wrap: break-word;}"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_utils_convert__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])()
], EditableComponent.prototype, "readonly", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_utils_convert__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])()
], EditableComponent.prototype, "spellCheck", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_utils_convert__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])()
], EditableComponent.prototype, "autoCorrect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_utils_convert__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])()
], EditableComponent.prototype, "autoCapitalize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_utils_convert__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])()
], EditableComponent.prototype, "autoFocus", void 0);
EditableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__["UntilDestroy"])({ checkProperties: true })
], EditableComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'div[ns-editor], span[ns-editor]',
                host: {
                    '[attr.contenteditable]': '!readonly',
                    '[attr.data-slate-ng-editor]': 'true',
                    '[attr.data-slate-node]': '\'value\'',
                    '[attr.data-gramm]': 'false',
                    '[attr.spellCheck]': `!hasBeforeInputSupport ? undefined : spellCheck`,
                    '[attr.autoCorrect]': `!hasBeforeInputSupport ? undefined : autoCorrect`,
                    '[attr.autoCapitalize]': `!hasBeforeInputSupport ? undefined : autoCapitalize`,
                    '[attr.suppressContentEditableWarning]': 'true'
                },
                template: `
    <ns-children [placeholder]="placeholder" [decorate]="decorate"></ns-children>
    <ng-content></ng-content>
  `,
                styles: [':host {position: relative; outline: none; white-space: pre-wrap; word-wrap: break-word;}']
            }]
    }], function () { return [{ type: _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_16__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], editor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], decorate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsBeforeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnCompositionStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnCompositionUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnCompositionEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnCopy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnCut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsOnBeforeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nsSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], spellCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoCorrect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoCapitalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "mIbE":
/*!********************************************************************************!*\
  !*** ./src/app/examples/iframe/iframe-container/iframe-container.component.ts ***!
  \********************************************************************************/
/*! exports provided: IframeContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeContainerComponent", function() { return IframeContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");



const _c0 = ["iframe"];
class IframeContainerComponent {
    constructor(_componentFactoryResolver, _appRef, injector, viewContainerRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this.injector = injector;
        this.viewContainerRef = viewContainerRef;
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.portalOutlet = null;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.show();
    }
    hide() {
        this.portalOutlet.detach();
    }
    show() {
        const body = this.iframeRef.nativeElement.contentDocument.body;
        const portalOutlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["DomPortalOutlet"](body, this._componentFactoryResolver, this._appRef, this.injector, document);
        this.portalOutlet = portalOutlet;
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this.templateRef, this.viewContainerRef, this.tmplContext);
        portalOutlet.attachTemplatePortal(portal);
    }
}
IframeContainerComponent.ɵfac = function IframeContainerComponent_Factory(t) { return new (t || IframeContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
IframeContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IframeContainerComponent, selectors: [["app-iframe-container"]], viewQuery: function IframeContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iframeRef = _t.first);
    } }, inputs: { templateRef: "templateRef", containerRef: "containerRef", tmplContext: "tmplContext" }, outputs: { onBlur: "onBlur" }, decls: 2, vars: 0, consts: [[3, "blur"], ["iframe", ""]], template: function IframeContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "iframe", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IframeContainerComponent_Template_iframe_blur_0_listener($event) { return ctx.onBlur.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvaWZyYW1lL2lmcmFtZS1jb250YWluZXIvaWZyYW1lLWNvbnRhaW5lci5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IframeContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iframe-container',
                templateUrl: './iframe-container.component.html',
                styleUrls: ['./iframe-container.component.less']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tmplContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], iframeRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['iframe']
        }] }); })();


/***/ }),

/***/ "nYjg":
/*!***********************************************!*\
  !*** ../slate-ng-view/src/utils/weak-maps.ts ***!
  \***********************************************/
/*! exports provided: NODE_TO_INDEX, NODE_TO_PARENT, EDITOR_TO_WINDOW, EDITOR_TO_ELEMENT, EDITOR_TO_PLACEHOLDER, ELEMENT_TO_NODE, KEY_TO_ELEMENT, NODE_TO_ELEMENT, NODE_TO_KEY, IS_READ_ONLY, IS_FOCUSED, IS_DRAGGING, IS_CLICKING, EDITOR_TO_ON_CHANGE, PLACEHOLDER_SYMBOL, KEY_TO_PORTAL, NODE_TO_PORTAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_TO_INDEX", function() { return NODE_TO_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_TO_PARENT", function() { return NODE_TO_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_TO_WINDOW", function() { return EDITOR_TO_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_TO_ELEMENT", function() { return EDITOR_TO_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_TO_PLACEHOLDER", function() { return EDITOR_TO_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_TO_NODE", function() { return ELEMENT_TO_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_TO_ELEMENT", function() { return KEY_TO_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_TO_ELEMENT", function() { return NODE_TO_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_TO_KEY", function() { return NODE_TO_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_READ_ONLY", function() { return IS_READ_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_FOCUSED", function() { return IS_FOCUSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DRAGGING", function() { return IS_DRAGGING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_CLICKING", function() { return IS_CLICKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_TO_ON_CHANGE", function() { return EDITOR_TO_ON_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER_SYMBOL", function() { return PLACEHOLDER_SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_TO_PORTAL", function() { return KEY_TO_PORTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_TO_PORTAL", function() { return NODE_TO_PORTAL; });
/**
 * Two weak maps that allow us rebuild a path given a node. They are populated
 * at render time such that after a render occurs we can always backtrack.
 */
const NODE_TO_INDEX = new WeakMap();
const NODE_TO_PARENT = new WeakMap();
/**
 * Weak maps that allow us to go between Slate nodes and DOM nodes. These
 * are used to resolve DOM event-related logic into Slate actions.
 */
const EDITOR_TO_WINDOW = new WeakMap();
const EDITOR_TO_ELEMENT = new WeakMap();
const EDITOR_TO_PLACEHOLDER = new WeakMap();
const ELEMENT_TO_NODE = new WeakMap();
const KEY_TO_ELEMENT = new WeakMap();
const NODE_TO_ELEMENT = new WeakMap();
const NODE_TO_KEY = new WeakMap();
/**
 * Weak maps for storing editor-related state.
 */
const IS_READ_ONLY = new WeakMap();
const IS_FOCUSED = new WeakMap();
const IS_DRAGGING = new WeakMap();
const IS_CLICKING = new WeakMap();
/**
 * Weak map for associating the context `onChange` context with the plugin.
 */
const EDITOR_TO_ON_CHANGE = new WeakMap();
/**
 * Symbols.
 */
const PLACEHOLDER_SYMBOL = Symbol('placeholder');
/**
 * Portal
 */
const KEY_TO_PORTAL = new WeakMap();
const NODE_TO_PORTAL = new WeakMap();


/***/ }),

/***/ "np0s":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "0oYm");



const _c0 = ["*"];
class ToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], inputs: { className: "className" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "toolbar", 3, "className"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.className);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1px 18px 17px;\n  margin: 0 -20px;\n  border-bottom: 2px solid #eee;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NsYXRlLW5nL3NsYXRlLW5nL3Byb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxcHggMThweCAxN3B4O1xuICBtYXJnaW46IDAgLTIwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWVlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIiwiLnRvb2xiYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDFweCAxOHB4IDE3cHg7XG4gIG1hcmdpbjogMCAtMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZWU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.less']
            }]
    }], function () { return []; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "o2Bh":
/*!***************************************************!*\
  !*** ./src/app/examples/table/table.component.ts ***!
  \***************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element */ "r1Pz");
/* harmony import */ var _rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rich-text/custom-leaf/custom-leaf.component */ "s4bw");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");









const withTables = editor => {
    const { deleteBackward, deleteForward, insertBreak } = editor;
    editor.deleteBackward = unit => {
        const { selection } = editor;
        if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
            const [cell] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].nodes(editor, {
                match: n => !slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(n) &&
                    slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(n) &&
                    n.type === 'table-cell'
            });
            if (cell) {
                const [, cellPath] = cell;
                const start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, cellPath);
                if (slate__WEBPACK_IMPORTED_MODULE_1__["Point"].equals(selection.anchor, start)) {
                    return;
                }
            }
        }
        deleteBackward(unit);
    };
    editor.deleteForward = unit => {
        const { selection } = editor;
        if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
            const [cell] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].nodes(editor, {
                match: (n) => !slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(n) &&
                    slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(n) &&
                    n.type === 'table-cell'
            });
            if (cell) {
                const [, cellPath] = cell;
                const end = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].end(editor, cellPath);
                if (slate__WEBPACK_IMPORTED_MODULE_1__["Point"].equals(selection.anchor, end)) {
                    return;
                }
            }
        }
        deleteForward(unit);
    };
    editor.insertBreak = () => {
        const { selection } = editor;
        if (selection) {
            const [table] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].nodes(editor, {
                match: (n) => !slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(n) &&
                    slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(n) &&
                    n.type === 'table'
            });
            if (table) {
                return;
            }
        }
        insertBreak();
    };
    return editor;
};
class TableComponent {
    constructor(registryNsElement) {
        this.registryNsElement = registryNsElement;
        this.initialValue = [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'Since the editor is based on a recursive tree model, similar to an HTML document, you can create complex nested structures, like tables:'
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
                                children: [{ text: '' }]
                            },
                            {
                                type: 'table-cell',
                                children: [{ text: 'Human', bold: true }]
                            },
                            {
                                type: 'table-cell',
                                children: [{ text: 'Dog', bold: true }]
                            },
                            {
                                type: 'table-cell',
                                children: [{ text: 'Cat', bold: true }]
                            }
                        ]
                    },
                    {
                        type: 'table-row',
                        children: [
                            {
                                type: 'table-cell',
                                children: [{ text: '# of Feet', bold: true }]
                            },
                            {
                                type: 'table-cell',
                                children: [{ text: '2' }]
                            },
                            {
                                type: 'table-cell',
                                children: [{ text: '4' }]
                            },
                            {
                                type: 'table-cell',
                                children: [{ text: '4' }]
                            }
                        ]
                    },
                    {
                        type: 'table-row',
                        children: [
                            {
                                type: 'table-cell',
                                children: [{ text: '# of Lives', bold: true }]
                            },
                            {
                                type: 'table-cell',
                                children: [{ text: '1' }]
                            },
                            {
                                type: 'table-cell',
                                children: [{ text: '1' }]
                            },
                            {
                                type: 'table-cell',
                                children: [{ text: '9' }]
                            }
                        ]
                    }
                ]
            },
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'This table is just a basic example of rendering a table, and it doesn\'t have fancy functionality. But you could augment it to add support for navigating with arrow keys, displaying table headers, adding column and rows, or even formulas if you wanted to get really crazy!'
                    }
                ]
            }
        ];
        this.editor = withTables(Object(slate_history__WEBPACK_IMPORTED_MODULE_2__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])())));
    }
    ngOnInit() {
        this.registryNsElement.add([..._element__WEBPACK_IMPORTED_MODULE_4__["CustomTableElements"], _rich_text_custom_leaf_custom_leaf_component__WEBPACK_IMPORTED_MODULE_5__["CustomLeafComponent"]]);
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"]])], decls: 1, vars: 2, consts: [["ns-editor", "", 3, "editor", "value"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue);
    } }, directives: [_slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_6__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvdGFibGUvdGFibGUuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsEditorService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_3__["RegistryNsElement"] }]; }, null); })();


/***/ }),

/***/ "oLQs":
/*!*********************************************************************************!*\
  !*** ./src/app/examples/rich-text/custom-leaf/leaf-item/leaf-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LeafItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafItemComponent", function() { return LeafItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");




const _c0 = ["leaf-item", ""];
function LeafItemComponent_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("leaf-item", ctx_r1.node.next);
} }
function LeafItemComponent_ng_container_0_strong_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "strong", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("leaf-item", ctx_r2.node.next);
} }
function LeafItemComponent_ng_container_0_code_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "code", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("leaf-item", ctx_r3.node.next);
} }
function LeafItemComponent_ng_container_0_em_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "em", 4);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("leaf-item", ctx_r4.node.next);
} }
function LeafItemComponent_ng_container_0_u_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "u", 4);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("leaf-item", ctx_r5.node.next);
} }
function LeafItemComponent_ng_container_0_ng_template_6_Template(rf, ctx) { }
function LeafItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeafItemComponent_ng_container_0_span_1_Template, 1, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeafItemComponent_ng_container_0_strong_2_Template, 1, 1, "strong", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LeafItemComponent_ng_container_0_code_3_Template, 1, 1, "code", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LeafItemComponent_ng_container_0_em_4_Template, 1, 1, "em", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeafItemComponent_ng_container_0_u_5_Template, 1, 1, "u", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LeafItemComponent_ng_container_0_ng_template_6_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.node.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "bold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "italic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "underline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx_r0.node.portal);
} }
class LeafItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
LeafItemComponent.ɵfac = function LeafItemComponent_Factory(t) { return new (t || LeafItemComponent)(); };
LeafItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeafItemComponent, selectors: [["", "leaf-item", ""]], inputs: { node: ["leaf-item", "node"] }, attrs: _c0, decls: 1, vars: 1, consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [3, "leaf-item", 4, "ngSwitchCase"], ["ngSwitchDefault", "", 3, "cdkPortalOutlet"], [3, "leaf-item"]], template: function LeafItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeafItemComponent_ng_container_0_Template, 7, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.node);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], LeafItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvcmljaC10ZXh0L2N1c3RvbS1sZWFmL2xlYWYtaXRlbS9sZWFmLWl0ZW0uY29tcG9uZW50Lmxlc3MifQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[leaf-item]',
                templateUrl: './leaf-item.component.html',
                styleUrls: ['./leaf-item.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leaf-item']
        }] }); })();


/***/ }),

/***/ "oUFv":
/*!****************************************************!*\
  !*** ../slate-ng-view/src/plugins/with-angular.ts ***!
  \****************************************************/
/*! exports provided: withAngular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAngular", function() { return withAngular; });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _angular_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-editor */ "b2nx");
/* harmony import */ var _utils_weak_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/weak-maps */ "nYjg");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom */ "D1+F");
/* harmony import */ var _utils_lines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/lines */ "qR/0");





const withAngular = (editor) => {
    const e = editor;
    const { apply, onChange, deleteBackward } = e;
    e.onChange = () => {
        const onContextChange = _utils_weak_maps__WEBPACK_IMPORTED_MODULE_2__["EDITOR_TO_ON_CHANGE"].get(e);
        if (onContextChange) {
            onContextChange();
        }
        onChange();
    };
    e.insertData = (data) => {
        const fragment = data.getData(`application/x-slate-fragment`);
        if (fragment) {
            const decoded = decodeURIComponent(window.atob(fragment));
            const parsed = JSON.parse(decoded);
            e.insertFragment(parsed);
            return;
        }
        const text = data.getData('text/plain');
        if (text) {
            const lines = text.split(/\r\n|\r|\n/);
            let split = false;
            for (const line of lines) {
                if (split) {
                    slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].splitNodes(e, { always: true });
                }
                e.insertText(line);
                split = true;
            }
        }
    };
    e.apply = (op) => {
        const matches = [];
        switch (op.type) {
            case 'insert_text':
            case 'remove_text':
            case 'set_node': {
                for (const [node, path] of slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].levels(e, { at: op.path })) {
                    const key = _angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditor"].findKey(e, node);
                    matches.push([path, key]);
                }
                break;
            }
            case 'insert_node':
            case 'remove_node':
            case 'merge_node':
            case 'split_node': {
                for (const [node, path] of slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].levels(e, {
                    at: slate__WEBPACK_IMPORTED_MODULE_0__["Path"].parent(op.path)
                })) {
                    const key = _angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditor"].findKey(e, node);
                    matches.push([path, key]);
                }
                break;
            }
            case 'move_node': {
                for (const [node, path] of slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].levels(e, {
                    at: slate__WEBPACK_IMPORTED_MODULE_0__["Path"].common(slate__WEBPACK_IMPORTED_MODULE_0__["Path"].parent(op.path), slate__WEBPACK_IMPORTED_MODULE_0__["Path"].parent(op.newPath))
                })) {
                    const key = _angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditor"].findKey(e, node);
                    matches.push([path, key]);
                }
                break;
            }
        }
        apply(op);
        for (const [path, key] of matches) {
            const [node] = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].node(e, path);
            _utils_weak_maps__WEBPACK_IMPORTED_MODULE_2__["NODE_TO_KEY"].set(node, key);
        }
    };
    e.deleteBackward = unit => {
        if (unit !== 'line') {
            return deleteBackward(unit);
        }
        if (editor.selection && slate__WEBPACK_IMPORTED_MODULE_0__["Range"].isCollapsed(editor.selection)) {
            const parentBlockEntry = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].above(editor, {
                match: n => slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].isBlock(editor, n),
                at: editor.selection,
            });
            if (parentBlockEntry) {
                const [, parentBlockPath] = parentBlockEntry;
                const parentElementRange = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].range(editor, parentBlockPath, editor.selection.anchor);
                const currentLineRange = Object(_utils_lines__WEBPACK_IMPORTED_MODULE_4__["findCurrentLineRange"])(e, parentElementRange);
                if (!slate__WEBPACK_IMPORTED_MODULE_0__["Range"].isCollapsed(currentLineRange)) {
                    slate__WEBPACK_IMPORTED_MODULE_0__["Transforms"].delete(editor, { at: currentLineRange });
                }
            }
        }
    };
    e.setFragmentData = (data) => {
        const { selection } = e;
        if (!selection) {
            return;
        }
        const [start, end] = slate__WEBPACK_IMPORTED_MODULE_0__["Range"].edges(selection);
        const startVoid = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].void(e, { at: start.path });
        const endVoid = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].void(e, { at: end.path });
        if (slate__WEBPACK_IMPORTED_MODULE_0__["Range"].isCollapsed(selection) && !startVoid) {
            return;
        }
        // Create a fake selection so that we can add a Base64-encoded copy of the
        // fragment to the HTML, to decode on future pastes.
        const domRange = _angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditor"].toDOMRange(e, selection);
        let contents = domRange.cloneContents();
        let attach = contents.childNodes[0];
        // Make sure attach is non-empty, since empty nodes will not get copied.
        contents.childNodes.forEach(node => {
            if (node.textContent && node.textContent.trim() !== '') {
                attach = node;
            }
        });
        // COMPAT: If the end node is a void node, we need to move the end of the
        // range from the void node's spacer span, to the end of the void node's
        // content, since the spacer is before void's content in the DOM.
        if (endVoid) {
            const [voidNode] = endVoid;
            const r = domRange.cloneRange();
            const domNode = _angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditor"].toDOMNode(e, voidNode);
            r.setEndAfter(domNode);
            contents = r.cloneContents();
        }
        // COMPAT: If the start node is a void node, we need to attach the encoded
        // fragment to the void node's content node instead of the spacer, because
        // attaching it to empty `<div>/<span>` nodes will end up having it erased by
        // most browsers. (2018/04/27)
        if (startVoid) {
            attach = contents.querySelector('[data-slate-spacer]');
        }
        // Remove any zero-width space spans from the cloned DOM so that they don't
        // show up elsewhere when pasted.
        Array.from(contents.querySelectorAll('[data-slate-zero-width]')).forEach(zw => {
            const isNewline = zw.getAttribute('data-slate-zero-width') === 'n';
            zw.textContent = isNewline ? '\n' : '';
        });
        // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
        // in the HTML, and can be used for intra-Slate pasting. If it's a text
        // node, wrap it in a `<span>` so we have something to set an attribute on.
        if (Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["isDOMText"])(attach)) {
            const span = document.createElement('span');
            // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
            // then leading and trailing spaces will be ignored. (2017/09/21)
            span.style.whiteSpace = 'pre';
            span.appendChild(attach);
            contents.appendChild(span);
            attach = span;
        }
        const fragment = e.getFragment();
        const string = JSON.stringify(fragment);
        const encoded = window.btoa(encodeURIComponent(string));
        attach.setAttribute('data-slate-fragment', encoded);
        data.setData('application/x-slate-fragment', encoded);
        // Add the content to a <div> so that we can get its inner HTML.
        const div = document.createElement('div');
        div.appendChild(contents);
        div.setAttribute('hidden', 'true');
        document.body.appendChild(div);
        data.setData('text/html', div.innerHTML);
        data.setData('text/plain', Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getPlainText"])(div));
        document.body.removeChild(div);
        return data;
    };
    return e;
};


/***/ }),

/***/ "qAQs":
/*!*************************************************************!*\
  !*** ./src/app/examples/check-list/check-list.component.ts ***!
  \*************************************************************/
/*! exports provided: CheckListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckListComponent", function() { return CheckListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-history */ "gYXQ");
/* harmony import */ var _check_list_item_check_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-list-item/check-list-item.component */ "77C4");
/* harmony import */ var _slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/components/editable/editable.component */ "lP+h");








const withChecklists = editor => {
    const { deleteBackward } = editor;
    editor.deleteBackward = (...args) => {
        const { selection } = editor;
        if (selection && slate__WEBPACK_IMPORTED_MODULE_1__["Range"].isCollapsed(selection)) {
            const [match] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].nodes(editor, {
                match: n => !slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(n) &&
                    slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(n) &&
                    n.type === 'check-list-item'
            });
            if (match) {
                const [, path] = match;
                const start = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].start(editor, path);
                if (slate__WEBPACK_IMPORTED_MODULE_1__["Point"].equals(selection.anchor, start)) {
                    const newProperties = {
                        type: 'paragraph'
                    };
                    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(editor, newProperties, {
                        match: n => !slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isEditor(n) &&
                            slate__WEBPACK_IMPORTED_MODULE_1__["Element"].isElement(n) &&
                            n.type === 'check-list-item'
                    });
                    return;
                }
            }
        }
        deleteBackward(...args);
    };
    return editor;
};
class CheckListComponent {
    constructor(customElementService) {
        this.customElementService = customElementService;
        this.initialValue = [
            {
                type: 'paragraph',
                children: [
                    {
                        text: 'With Slate you can build complex block types that have their own embedded content and behaviors, like rendering checkboxes inside check list items!'
                    }
                ]
            },
            {
                type: 'check-list-item',
                checked: true,
                children: [{ text: 'Slide to the left.' }]
            },
            {
                type: 'check-list-item',
                checked: true,
                children: [{ text: 'Slide to the right.' }]
            },
            {
                type: 'check-list-item',
                checked: false,
                children: [{ text: 'Criss-cross.' }]
            },
            {
                type: 'check-list-item',
                checked: true,
                children: [{ text: 'Criss-cross!' }]
            },
            {
                type: 'check-list-item',
                checked: false,
                children: [{ text: 'Cha cha real smooth…' }]
            },
            {
                type: 'check-list-item',
                checked: false,
                children: [{ text: 'Let\'s go to work!' }]
            },
            {
                type: 'paragraph',
                children: [{ text: 'Try it out for yourself!' }]
            }
        ];
        this.editor = withChecklists(Object(slate_history__WEBPACK_IMPORTED_MODULE_3__["withHistory"])(Object(slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["withAngular"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])())));
    }
    ngOnInit() {
        this.customElementService.add([_check_list_item_check_list_item_component__WEBPACK_IMPORTED_MODULE_4__["CheckListItemComponent"]]);
    }
}
CheckListComponent.ɵfac = function CheckListComponent_Factory(t) { return new (t || CheckListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"])); };
CheckListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckListComponent, selectors: [["app-check-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"]])], decls: 1, vars: 2, consts: [["ns-editor", "", "placeholder", "Get to work\u2026", "spellCheck", "", "autoFocus", "", 3, "editor", "value"]], template: function CheckListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("value", ctx.initialValue);
    } }, directives: [_slate_ng_view_src_components_editable_editable_component__WEBPACK_IMPORTED_MODULE_5__["EditableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvY2hlY2stbGlzdC9jaGVjay1saXN0LmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-list',
                templateUrl: './check-list.component.html',
                styleUrls: ['./check-list.component.less'],
                providers: [slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsDepsService"], slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["NsEditorService"]]
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_2__["RegistryNsElement"] }]; }, null); })();


/***/ }),

/***/ "qHjF":
/*!********************************************************************************!*\
  !*** ../slate-ng-view/src/polyfills/before-input/before-input-event-plugin.ts ***!
  \********************************************************************************/
/*! exports provided: HAS_BEFORE_INPUT_SUPPORT, BEFORE_INPUT_EVENTS, BeforeInputEventPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_BEFORE_INPUT_SUPPORT", function() { return HAS_BEFORE_INPUT_SUPPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORE_INPUT_EVENTS", function() { return BEFORE_INPUT_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeInputEventPlugin", function() { return BeforeInputEventPlugin; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _utils_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/environment */ "Du7K");
/* harmony import */ var _extract_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extract-event */ "qRi5");






// COMPAT: Firefox/Edge Legacy don't support the `beforeinput` event
// Chrome Legacy doesn't support `beforeinput` correctly
const HAS_BEFORE_INPUT_SUPPORT = !_utils_environment__WEBPACK_IMPORTED_MODULE_3__["IS_CHROME_LEGACY"] &&
    !_utils_environment__WEBPACK_IMPORTED_MODULE_3__["IS_EDGE_LEGACY"] &&
    globalThis.InputEvent &&
    // @ts-ignore The `getTargetRanges` property isn't recognized.
    typeof globalThis.InputEvent.prototype.getTargetRanges === "function";
const BEFORE_INPUT_EVENTS = [
    // { name: 'blur', handler: 'onBlur', isTriggerBeforeInput: true },
    // { name: 'compositionstart', handler: 'onCompositionStart', isTriggerBeforeInput: true },
    { name: "compositionupdate", handler: null, isTriggerBeforeInput: true },
    // { name: 'compositionend', handler: 'onCompositionEnd', isTriggerBeforeInput: false },
    // { name: 'keydown', handler: 'onKeyDown', isTriggerBeforeInput: true },
    { name: "keypress", handler: null, isTriggerBeforeInput: true },
    { name: "keyup", handler: "onKeyUp", isTriggerBeforeInput: true },
    { name: "mousedown", handler: "onMouseDown", isTriggerBeforeInput: true },
    { name: "textInput", handler: null, isTriggerBeforeInput: true }
    // { name: 'paste', handler: 'onPaste', isTriggerBeforeInput: true }
];
class BeforeInputEventPlugin extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_platform_browser_platform_browser_g"] {
    constructor(doc) {
        super(doc);
        this.EVENT_NAME = "beforeinput";
    }
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    supports(eventName) {
        return eventName === this.EVENT_NAME;
    }
    addEventListener(element, eventName, handler) {
        const mulListeners = [];
        if (HAS_BEFORE_INPUT_SUPPORT) {
            element.addEventListener(eventName, handler, false);
            mulListeners.push({ eventName, handler: handler });
        }
        else {
            BEFORE_INPUT_EVENTS.forEach(event => {
                const eventHandler = (e) => {
                    const beforeInputEvent = Object(_extract_event__WEBPACK_IMPORTED_MODULE_4__["extractBeforeInputEvent"])(e.type, null, e, e.target);
                    if (beforeInputEvent) {
                        handler(beforeInputEvent);
                    }
                };
                element.addEventListener(event.name, eventHandler, false);
                mulListeners.push({ eventName: event.name, handler: eventHandler });
            });
        }
        return () => {
            mulListeners.forEach(listener => {
                this.removeEventListener(element, listener.eventName, listener.handler);
            });
        };
    }
    removeEventListener(target, eventName, callback) {
        return target.removeEventListener(eventName, callback);
    }
}
BeforeInputEventPlugin.ɵfac = function BeforeInputEventPlugin_Factory(t) { return new (t || BeforeInputEventPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
BeforeInputEventPlugin.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BeforeInputEventPlugin, factory: BeforeInputEventPlugin.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BeforeInputEventPlugin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "qR/0":
/*!*******************************************!*\
  !*** ../slate-ng-view/src/utils/lines.ts ***!
  \*******************************************/
/*! exports provided: findCurrentLineRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCurrentLineRange", function() { return findCurrentLineRange; });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugins/angular-editor */ "b2nx");
/**
 * Utilities for single-line deletion
 */


const doRectsIntersect = (rect, compareRect) => {
    const middle = (compareRect.top + compareRect.bottom) / 2;
    return rect.top <= middle && rect.bottom >= middle;
};
const areRangesSameLine = (editor, range1, range2) => {
    const rect1 = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditor"].toDOMRange(editor, range1).getBoundingClientRect();
    const rect2 = _plugins_angular_editor__WEBPACK_IMPORTED_MODULE_1__["AngularEditor"].toDOMRange(editor, range2).getBoundingClientRect();
    return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
};
/**
 * A helper utility that returns the end portion of a `Range`
 * which is located on a single line.
 *
 * @param {Editor} editor The editor object to compare against
 * @param {Range} parentRange The parent range to compare against
 * @returns {Range} A valid portion of the parentRange which is one a single line
 */
const findCurrentLineRange = (editor, parentRange) => {
    const parentRangeBoundary = slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].range(editor, slate__WEBPACK_IMPORTED_MODULE_0__["Range"].end(parentRange));
    const positions = Array.from(slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].positions(editor, { at: parentRange }));
    let left = 0;
    let right = positions.length;
    let middle = Math.floor(right / 2);
    if (areRangesSameLine(editor, slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].range(editor, positions[left]), parentRangeBoundary)) {
        return slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].range(editor, positions[left], parentRangeBoundary);
    }
    if (positions.length < 2) {
        return slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].range(editor, positions[positions.length - 1], parentRangeBoundary);
    }
    while (middle !== positions.length && middle !== left) {
        if (areRangesSameLine(editor, slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].range(editor, positions[middle]), parentRangeBoundary)) {
            right = middle;
        }
        else {
            left = middle;
        }
        middle = Math.floor((left + right) / 2);
    }
    return slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].range(editor, positions[right], parentRangeBoundary);
};


/***/ }),

/***/ "qRi5":
/*!********************************************************************!*\
  !*** ../slate-ng-view/src/polyfills/before-input/extract-event.ts ***!
  \********************************************************************/
/*! exports provided: canUseCompositionEvent, extractBeforeInputEvent, extractCompositionEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseCompositionEvent", function() { return canUseCompositionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractBeforeInputEvent", function() { return extractBeforeInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractCompositionEvent", function() { return extractCompositionEvent; });
/* harmony import */ var _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-top-level-event-types */ "DZr1");
/* harmony import */ var _fallback_composition_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fallback-composition-state */ "8n6Q");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const canUseDOM = !!(typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined");
const END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
const START_KEYCODE = 229;
const canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
let documentMode = null;
if (canUseDOM && "documentMode" in document) {
    documentMode = document.documentMode;
}
// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
const canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
const useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || (documentMode && documentMode > 8 && documentMode <= 11));
const SPACEBAR_CODE = 32;
const SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
// Track whether we've ever handled a keypress on the space key.
let hasSpaceKeypress = false;
/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function isKeypressCommand(nativeEvent) {
    return ((nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
        // ctrlKey && altKey is equivalent to AltGr, and is not a command.
        !(nativeEvent.ctrlKey && nativeEvent.altKey));
}
/**
 * Does our fallback mode think that this event is the end of composition?
 *
 */
function isFallbackCompositionEnd(topLevelType, nativeEvent) {
    switch (topLevelType) {
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_KEY_UP"]:
            // Command keys insert or clear IME input.
            return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_KEY_DOWN"]:
            // Expect IME keyCode on each keydown. If we get any other
            // code we must have exited earlier.
            return nativeEvent.keyCode !== START_KEYCODE;
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_KEY_PRESS"]:
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_MOUSE_DOWN"]:
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_BLUR"]:
            // Events are not possible without cancelling IME.
            return true;
        default:
            return false;
    }
}
/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 */
function getDataFromCustomEvent(nativeEvent) {
    const detail = nativeEvent.detail;
    if (typeof detail === "object" && "data" in detail) {
        return detail.data;
    }
    return null;
}
/**
 * Check if a composition event was triggered by Korean IME.
 * Our fallback mode does not work well with IE's Korean IME,
 * so just use native composition events when Korean IME is used.
 * Although CompositionEvent.locale property is deprecated,
 * it is available in IE, where our fallback mode is enabled.
 *
 */
function isUsingKoreanIME(nativeEvent) {
    return nativeEvent.locale === "ko";
}
// Track the current IME composition status, if any.
let isComposing = false;
function getNativeBeforeInputChars(topLevelType, nativeEvent) {
    switch (topLevelType) {
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_COMPOSITION_END"]:
            return getDataFromCustomEvent(nativeEvent);
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_KEY_PRESS"]:
            /**
             * If native `textInput` events are available, our goal is to make
             * use of them. However, there is a special case: the spacebar key.
             * In Webkit, preventing default on a spacebar `textInput` event
             * cancels character insertion, but it *also* causes the browser
             * to fall back to its default spacebar behavior of scrolling the
             * page.
             *
             * Tracking at:
             * https://code.google.com/p/chromium/issues/detail?id=355103
             *
             * To avoid this issue, use the keypress event as if no `textInput`
             * event is available.
             */
            const which = nativeEvent.which;
            if (which !== SPACEBAR_CODE) {
                return null;
            }
            hasSpaceKeypress = true;
            return SPACEBAR_CHAR;
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_TEXT_INPUT"]:
            // Record the characters to be added to the DOM.
            const chars = nativeEvent.data;
            // If it's a spacebar character, assume that we have already handled
            // it at the keypress level and bail immediately. Android Chrome
            // doesn't give us keycodes, so we need to ignore it.
            if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
                return null;
            }
            return chars;
        default:
            // For other native event types, do nothing.
            return null;
    }
}
/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 */
function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
    // If we are currently composing (IME) and using a fallback to do so,
    // try to extract the composed characters from the fallback object.
    // If composition event is available, we extract a string only at
    // compositionevent, otherwise extract it at fallback events.
    if (isComposing) {
        if (topLevelType === _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_COMPOSITION_END"] || (!canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent))) {
            const chars = Object(_fallback_composition_state__WEBPACK_IMPORTED_MODULE_1__["getData"])();
            Object(_fallback_composition_state__WEBPACK_IMPORTED_MODULE_1__["reset"])();
            isComposing = false;
            return chars;
        }
        return null;
    }
    switch (topLevelType) {
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_PASTE"]:
            // If a paste event occurs after a keypress, throw out the input
            // chars. Paste events should not lead to BeforeInput events.
            return null;
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_KEY_PRESS"]:
            /**
             * As of v27, Firefox may fire keypress events even when no character
             * will be inserted. A few possibilities:
             *
             * - `which` is `0`. Arrow keys, Esc key, etc.
             *
             * - `which` is the pressed key code, but no char is available.
             *   Ex: 'AltGr + d` in Polish. There is no modified character for
             *   this key combination and no character is inserted into the
             *   document, but FF fires the keypress for char code `100` anyway.
             *   No `input` event will occur.
             *
             * - `which` is the pressed key code, but a command combination is
             *   being used. Ex: `Cmd+C`. No character is inserted, and no
             *   `input` event will occur.
             */
            if (!isKeypressCommand(nativeEvent)) {
                // IE fires the `keypress` event when a user types an emoji via
                // Touch keyboard of Windows.  In such a case, the `char` property
                // holds an emoji character like `\uD83D\uDE0A`.  Because its length
                // is 2, the property `which` does not represent an emoji correctly.
                // In such a case, we directly return the `char` property instead of
                // using `which`.
                if (nativeEvent.char && nativeEvent.char.length > 1) {
                    return nativeEvent.char;
                }
                else if (nativeEvent.which) {
                    return String.fromCharCode(nativeEvent.which);
                }
            }
            return null;
        case _dom_top_level_event_types__WEBPACK_IMPORTED_MODULE_0__["TOP_COMPOSITION_END"]:
            return useFallbackCompositionData && !isUsingKoreanIME(nativeEvent) ? null : nativeEvent.data;
        default:
            return null;
    }
}
/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 */
function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    let chars;
    if (canUseTextInputEvent) {
        chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
    }
    else {
        chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
    }
    // If no characters are being inserted, no BeforeInput event should
    // be fired.
    if (!chars) {
        return null;
    }
    let beforeInputEvent = {};
    Object.defineProperty(nativeEvent, "data", {
        writable: true
    });
    beforeInputEvent = nativeEvent;
    beforeInputEvent.data = chars;
    return beforeInputEvent;
}
/**
 * Translate native top level events into event types.
 */
function getCompositionEventType(domEventName) {
    switch (domEventName) {
        case "compositionstart":
            return "onCompositionStart";
        case "compositionend":
            return "onCompositionEnd";
        case "compositionupdate":
            return "onCompositionUpdate";
    }
}
/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 */
function isFallbackCompositionStart(domEventName, nativeEvent) {
    return domEventName === "keydown" && nativeEvent.keyCode === START_KEYCODE;
}
/**
 * @return {?object} A SyntheticCompositionEvent.
 */
function extractCompositionEvent(domEventName, targetInst, nativeEvent, nativeEventTarget) {
    let eventType;
    let fallbackData;
    if (canUseCompositionEvent) {
        eventType = domEventName;
    }
    else if (!isComposing) {
        if (isFallbackCompositionStart(domEventName, nativeEvent)) {
            eventType = "compositionstart";
        }
    }
    else if (isFallbackCompositionEnd(domEventName, nativeEvent)) {
        eventType = "compositionend";
    }
    if (!eventType) {
        return null;
    }
    if (useFallbackCompositionData && !isUsingKoreanIME(nativeEvent)) {
        // The current composition is stored statically and must not be
        // overwritten while composition continues.
        if (!isComposing && eventType === "compositionstart") {
            isComposing = Object(_fallback_composition_state__WEBPACK_IMPORTED_MODULE_1__["initialize"])(nativeEventTarget);
        }
        else if (eventType === "compositionend") {
            if (isComposing) {
                fallbackData = Object(_fallback_composition_state__WEBPACK_IMPORTED_MODULE_1__["getData"])();
            }
        }
    }
    let compositionEvent = {};
    Object.defineProperty(nativeEvent, "data", {
        writable: true
    });
    compositionEvent = nativeEvent;
    if (fallbackData) {
        // Inject data generated from fallback path into the synthetic event.
        // This matches the property of native CompositionEventInterface.
        compositionEvent.data = fallbackData;
    }
    else {
        const customData = getDataFromCustomEvent(nativeEvent);
        if (customData !== null) {
            compositionEvent.data = customData;
        }
    }
    return compositionEvent;
}


/***/ }),

/***/ "r1Pz":
/*!*******************************************!*\
  !*** ./src/app/examples/table/element.ts ***!
  \*******************************************/
/*! exports provided: CustomTable, CustomTableRow, CustomTableCell, CustomTableElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTable", function() { return CustomTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTableRow", function() { return CustomTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTableCell", function() { return CustomTableCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTableElements", function() { return CustomTableElements; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _slate_ng_view_src_directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../slate-ng-view/src/directives/element-attrs.directive */ "zTG3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");







const _c0 = ["custom-table", ""];
function CustomTable_ng_container_1_ng_template_1_Template(rf, ctx) { }
function CustomTable_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomTable_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
const _c1 = ["custom-table-row", ""];
function CustomTableRow_ng_container_0_ng_template_1_Template(rf, ctx) { }
function CustomTableRow_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomTableRow_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
const _c2 = ["custom-table-cell", ""];
function CustomTableCell_ng_container_0_ng_template_1_Template(rf, ctx) { }
function CustomTableCell_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomTableCell_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", portal_r1);
} }
class CustomTable extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef, cdr) {
        super(key, deps, editorService, elementRef, cdr);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.init({ useHostAttrs: false });
        this.watchDeps();
    }
}
CustomTable.type = 'table';
CustomTable.ɵfac = function CustomTable_Factory(t) { return new (t || CustomTable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CustomTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomTable, selectors: [["table", "custom-table", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 2, vars: 2, consts: [["nsElementAttrs", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function CustomTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomTable_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_slate_ng_view_src_directives_element_attrs_directive__WEBPACK_IMPORTED_MODULE_2__["ElementAttrsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'table[custom-table]',
                template: `
    <tbody nsElementAttrs>
      <ng-container *ngFor="let portal of portals; trackBy: trackBy">
        <ng-template [cdkPortalOutlet]="portal"></ng-template>
      </ng-container>
    </tbody>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();
class CustomTableRow extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef, cdr) {
        super(key, deps, editorService, elementRef, cdr);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.init();
        this.watchDeps();
    }
}
CustomTableRow.type = 'table-row';
CustomTableRow.ɵfac = function CustomTableRow_Factory(t) { return new (t || CustomTableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CustomTableRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomTableRow, selectors: [["tr", "custom-table-row", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c1, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function CustomTableRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomTableRow_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomTableRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tr[custom-table-row]',
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>

  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();
class CustomTableCell extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseElementComponent"] {
    constructor(key, deps, editorService, elementRef, cdr) {
        super(key, deps, editorService, elementRef, cdr);
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.elementRef = elementRef;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.init();
        this.watchDeps();
    }
}
CustomTableCell.type = 'table-cell';
CustomTableCell.ɵfac = function CustomTableCell_Factory(t) { return new (t || CustomTableCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CustomTableCell.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomTableCell, selectors: [["td", "custom-table-cell", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c2, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cdkPortalOutlet"]], template: function CustomTableCell_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomTableCell_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portals)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomTableCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'td[custom-table-cell]',
                template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsDepsService"] }, { type: slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["NsEditorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();
const CustomTableElements = [CustomTable, CustomTableRow, CustomTableCell];


/***/ }),

/***/ "s4bw":
/*!*************************************************************************!*\
  !*** ./src/app/examples/rich-text/custom-leaf/custom-leaf.component.ts ***!
  \*************************************************************************/
/*! exports provided: Node, CustomLeafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLeafComponent", function() { return CustomLeafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var slate_ng_view_components_element_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-ng-view/components/element/token */ "CS3F");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");





class Node {
    constructor(type, portal) {
        this.type = type;
        this.portal = portal;
    }
}
class CustomLeafComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseLeafComponent"] {
    constructor(leafChild, leaf) {
        super();
        this.leafChild = leafChild;
        this.leaf = leaf;
    }
    ngOnInit() {
        const root = this.root = new Node('container');
        let current = root;
        if (this.leaf.bold) {
            const node = new Node('bold');
            current.next = node;
            current = node;
        }
        if (this.leaf.code) {
            const node = new Node('code');
            current.next = node;
            current = node;
        }
        if (this.leaf.italic) {
            const node = new Node('italic');
            current.next = node;
            current = node;
        }
        if (this.leaf.underline) {
            const node = new Node('underline');
            current.next = node;
            current = node;
        }
        current.next = new Node('portal', this.leafChild);
    }
}
CustomLeafComponent.type = 'leaf';
CustomLeafComponent.ɵfac = function CustomLeafComponent_Factory(t) { return new (t || CustomLeafComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view_components_element_token__WEBPACK_IMPORTED_MODULE_2__["LEAF_CHILD_PORTAL_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view_components_element_token__WEBPACK_IMPORTED_MODULE_2__["LEAF_TOKEN"])); };
CustomLeafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomLeafComponent, selectors: [["app-custom-leaf"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "leaf-item"]], template: function CustomLeafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("leaf-item", ctx.root);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvcmljaC10ZXh0L2N1c3RvbS1sZWFmL2N1c3RvbS1sZWFmLmNvbXBvbmVudC5sZXNzIn0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomLeafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-leaf',
                templateUrl: './custom-leaf.component.html',
                styleUrls: ['./custom-leaf.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view_components_element_token__WEBPACK_IMPORTED_MODULE_2__["LEAF_CHILD_PORTAL_TOKEN"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view_components_element_token__WEBPACK_IMPORTED_MODULE_2__["LEAF_TOKEN"]]
            }] }]; }, null); })();


/***/ }),

/***/ "syHi":
/*!**************************************************!*\
  !*** ./src/app/examples/embeds/safe-url.pipe.ts ***!
  \**************************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");



class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeUrl',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "u0dV":
/*!*********************************************************!*\
  !*** ../slate-ng-view/src/components/text/base-text.ts ***!
  \*********************************************************/
/*! exports provided: BaseTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTextComponent", function() { return BaseTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _element_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element/token */ "CS3F");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");
/* harmony import */ var _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/weak-maps */ "nYjg");
/* harmony import */ var _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ns-deps.service */ "yiMJ");
/* harmony import */ var _utils_key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/key */ "VFa8");







// tslint:disable-next-line:directive-class-suffix
class BaseTextComponent {
    constructor(key, deps, elementRef, cdr) {
        this.key = key;
        this.deps = deps;
        this.elementRef = elementRef;
        this.cdr = cdr;
    }
    get depInjector() {
        return this.deps.get(this.key).injector;
    }
    get cNode() {
        return this.depInjector.get(_element_token__WEBPACK_IMPORTED_MODULE_1__["CURRENT_NODE_TOKEN"]);
    }
    get decorations() {
        return this.depInjector.get(_element_token__WEBPACK_IMPORTED_MODULE_1__["DECORATIONS_TOKEN"]);
    }
    get isLast() {
        return this.depInjector.get(_element_token__WEBPACK_IMPORTED_MODULE_1__["IS_LAST_TOKEN"]);
    }
    get pNode() {
        return this.depInjector.get(_element_token__WEBPACK_IMPORTED_MODULE_1__["PARENT_NODE_TOKEN"]);
    }
    get portals() {
        return this.depInjector.get(_element_token__WEBPACK_IMPORTED_MODULE_1__["CHILD_PORTALS_TOKEN"]);
    }
    /**
     * 初始化组件
     * @param el 该组件ElementRef
     */
    init(el) {
        const nativeElement = (el === null || el === void 0 ? void 0 : el.nativeElement) || this.elementRef.nativeElement;
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["KEY_TO_ELEMENT"].set(this.key, nativeElement);
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["NODE_TO_ELEMENT"].set(this.cNode, nativeElement);
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["ELEMENT_TO_NODE"].set(nativeElement, this.cNode);
    }
    /**
     * 组件销毁处理
     */
    destroy() {
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["KEY_TO_ELEMENT"].delete(this.key);
        _utils_weak_maps__WEBPACK_IMPORTED_MODULE_3__["NODE_TO_ELEMENT"].delete(this.cNode);
    }
    /**
     * componentPortal 循环渲染优化
     * @param index
     * @param item
     */
    trackBy(index, item) {
        var _a;
        return ((_a = this.key) === null || _a === void 0 ? void 0 : _a.id) || index;
    }
    ngOnDestroy() {
        this.destroy();
    }
}
BaseTextComponent.ɵfac = function BaseTextComponent_Factory(t) { return new (t || BaseTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_element_token__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_deps_service__WEBPACK_IMPORTED_MODULE_4__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BaseTextComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseTextComponent, viewQuery: function BaseTextComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slateChildrenOutlets = _t);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: _utils_key__WEBPACK_IMPORTED_MODULE_5__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_element_token__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_4__["NsDepsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { slateChildrenOutlets: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]]
        }] }); })();


/***/ }),

/***/ "uI5W":
/*!**********************************************************************!*\
  !*** ./src/app/examples/markdown-preview/markdown-leaf.component.ts ***!
  \**********************************************************************/
/*! exports provided: MarkdownLeafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownLeafComponent", function() { return MarkdownLeafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var slate_ng_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-ng-view */ "QB+8");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");




const _c0 = ["app-custom-leaf", ""];
function MarkdownLeafComponent_ng_template_0_Template(rf, ctx) { }
class MarkdownLeafComponent extends slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["BaseLeafComponent"] {
    constructor(leafChild, leaf) {
        super();
        this.leafChild = leafChild;
        this.leaf = leaf;
    }
    get customStyle() {
        let style = `
      font-weight: ${this.leaf.bold && 'bold'};
      font-style: ${this.leaf.italic && 'italic'};
      text-decoration: ${this.leaf.underlined && 'underline'};
    `;
        if (this.leaf.title) {
            style += `
         display: inline-block;
         font-weight: bold;
         font-size: 20px;
         margin: 20px 0 10px 0;
      `;
        }
        if (this.leaf.list) {
            style += `
         padding-left: 10px;
            font-size: 20px;
            line-height: 10px;
      `;
        }
        if (this.leaf.hr) {
            style += `
        display: block;
            text-align: center;
            border-bottom: 2px solid #ddd;
      `;
        }
        if (this.leaf.blockquote) {
            style += `
      display: inline-block;
            border-left: 2px solid #ddd;
            padding-left: 10px;
            color: #aaa;
            font-style: italic;
      `;
        }
        if (this.leaf.code) {
            style += `
       font-family: monospace;
            background-color: #eee;
            padding: 3px;
      `;
        }
        return style;
    }
    ngOnInit() {
    }
}
MarkdownLeafComponent.type = "leaf";
MarkdownLeafComponent.ɵfac = function MarkdownLeafComponent_Factory(t) { return new (t || MarkdownLeafComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["LEAF_CHILD_PORTAL_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["LEAF_TOKEN"])); };
MarkdownLeafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkdownLeafComponent, selectors: [["span", "app-custom-leaf", ""]], hostVars: 2, hostBindings: function MarkdownLeafComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.customStyle);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 1, vars: 1, consts: [[3, "cdkPortalOutlet"]], template: function MarkdownLeafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MarkdownLeafComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx.leafChild);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownLeafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'span[app-custom-leaf]',
                template: `
    <ng-template [cdkPortalOutlet]="leafChild"></ng-template>
  `
            }]
    }], function () { return [{ type: _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["LEAF_CHILD_PORTAL_TOKEN"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [slate_ng_view__WEBPACK_IMPORTED_MODULE_1__["LEAF_TOKEN"]]
            }] }]; }, { customStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _examples_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/check-list/check-list.component */ "qAQs");
/* harmony import */ var _examples_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/rich-text/rich-text.component */ "EFKx");
/* harmony import */ var _examples_code_highlighting_code_highlighting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/code-highlighting/code-highlighting.component */ "EfAC");
/* harmony import */ var _examples_editable_voids_editable_voids_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/editable-voids/editable-voids.component */ "/vnT");
/* harmony import */ var _examples_markdown_preview_markdown_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/markdown-preview/markdown-preview.component */ "/PDu");
/* harmony import */ var _examples_custom_placeholder_custom_placeholder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/custom-placeholder/custom-placeholder.component */ "7MeF");
/* harmony import */ var _examples_embeds_embeds_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/embeds/embeds.component */ "8YsP");
/* harmony import */ var _examples_forced_layout_forced_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/forced-layout/forced-layout.component */ "hDCA");
/* harmony import */ var _examples_huge_document_huge_document_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/huge-document/huge-document.component */ "PAYk");
/* harmony import */ var _examples_hovering_toolbar_hovering_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/hovering-toolbar/hovering-toolbar.component */ "05Xa");
/* harmony import */ var _examples_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/iframe/iframe.component */ "PCm2");
/* harmony import */ var _examples_table_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/table/table.component */ "o2Bh");
/* harmony import */ var _examples_markdown_shortcuts_markdown_shortcuts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/markdown-shortcuts/markdown-shortcuts.component */ "hYZM");

















const routes = [
    {
        path: 'check-list',
        component: _examples_check_list_check_list_component__WEBPACK_IMPORTED_MODULE_2__["CheckListComponent"],
    },
    {
        path: 'richtext',
        component: _examples_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_3__["RichTextComponent"],
    },
    {
        path: 'code-highlighting',
        component: _examples_code_highlighting_code_highlighting_component__WEBPACK_IMPORTED_MODULE_4__["CodeHighlightingComponent"]
    },
    {
        path: 'editable-voids',
        component: _examples_editable_voids_editable_voids_component__WEBPACK_IMPORTED_MODULE_5__["EditableVoidsComponent"]
    },
    {
        path: 'markdown-preview',
        component: _examples_markdown_preview_markdown_preview_component__WEBPACK_IMPORTED_MODULE_6__["MarkdownPreviewComponent"]
    },
    {
        path: 'custom-placeholder',
        component: _examples_custom_placeholder_custom_placeholder_component__WEBPACK_IMPORTED_MODULE_7__["CustomPlaceholderComponent"]
    },
    {
        path: 'embeds',
        component: _examples_embeds_embeds_component__WEBPACK_IMPORTED_MODULE_8__["EmbedsComponent"]
    },
    {
        path: 'forced-layout',
        component: _examples_forced_layout_forced_layout_component__WEBPACK_IMPORTED_MODULE_9__["ForcedLayoutComponent"]
    },
    {
        path: 'huge-document',
        component: _examples_huge_document_huge_document_component__WEBPACK_IMPORTED_MODULE_10__["HugeDocumentComponent"]
    },
    {
        path: 'hovering-toolbar',
        component: _examples_hovering_toolbar_hovering_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["HoveringToolbarComponent"]
    },
    {
        path: 'iframe',
        component: _examples_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_12__["IframeComponent"]
    },
    {
        path: 'tables',
        component: _examples_table_table_component__WEBPACK_IMPORTED_MODULE_13__["TableComponent"]
    },
    {
        path: 'markdown-shortcuts',
        component: _examples_markdown_shortcuts_markdown_shortcuts_component__WEBPACK_IMPORTED_MODULE_14__["MarkdownShortcutsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vraZ":
/*!*************************************************************************!*\
  !*** ./src/app/examples/rich-text/icon-button/icon-button.component.ts ***!
  \*************************************************************************/
/*! exports provided: IconButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButtonComponent", function() { return IconButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/button/button.component */ "7psr");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/icon/icon.component */ "WaCx");




class IconButtonComponent {
    constructor() {
        this.isActive = false;
        this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handle($event) {
        $event.preventDefault();
        this.onMouseDown.emit();
    }
}
IconButtonComponent.ɵfac = function IconButtonComponent_Factory(t) { return new (t || IconButtonComponent)(); };
IconButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconButtonComponent, selectors: [["app-icon-button"]], inputs: { icon: "icon", isActive: "isActive" }, outputs: { onMouseDown: "onMouseDown" }, decls: 3, vars: 2, consts: [[3, "active", "onMouseDown"]], template: function IconButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMouseDown", function IconButtonComponent_Template_app_button_onMouseDown_0_listener($event) { return ctx.handle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon);
    } }, directives: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZXhhbXBsZXMvcmljaC10ZXh0L2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon-button',
                templateUrl: './icon-button.component.html',
                styleUrls: ['./icon-button.component.less']
            }]
    }], null, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "wpMU":
/*!**********************************************************!*\
  !*** ../slate-ng-view/src/services/ns-editor.service.ts ***!
  \**********************************************************/
/*! exports provided: NsEditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NsEditorService", function() { return NsEditorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class NsEditorService {
    constructor() {
        this.defaultValue = [
            {
                type: "paragraph",
                children: [{ text: '' }],
            }
        ];
    }
    init(editor, value) {
        this.editor = editor;
        this.editor.children = value;
        return this.editor;
    }
}
NsEditorService.ɵfac = function NsEditorService_Factory(t) { return new (t || NsEditorService)(); };
NsEditorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NsEditorService, factory: NsEditorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NsEditorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xewl":
/*!***************************************************************!*\
  !*** ../slate-ng-view/src/directives/leaf-attrs.directive.ts ***!
  \***************************************************************/
/*! exports provided: LeafAttrsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafAttrsDirective", function() { return LeafAttrsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class LeafAttrsDirective {
    constructor() {
        this.dataSlateLeaf = true;
    }
}
LeafAttrsDirective.ɵfac = function LeafAttrsDirective_Factory(t) { return new (t || LeafAttrsDirective)(); };
LeafAttrsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LeafAttrsDirective, selectors: [["", "nsLeafAttrs", ""]], hostVars: 1, hostBindings: function LeafAttrsDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slate-leaf", ctx.dataSlateLeaf);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafAttrsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nsLeafAttrs]'
            }]
    }], function () { return []; }, { dataSlateLeaf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.data-slate-leaf']
        }] }); })();


/***/ }),

/***/ "yiMJ":
/*!********************************************************!*\
  !*** ../slate-ng-view/src/services/ns-deps.service.ts ***!
  \********************************************************/
/*! exports provided: NsDepsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NsDepsService", function() { return NsDepsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");




class NsDepsService {
    constructor() {
        this.deps = new WeakMap();
        this.change$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    watch(key) {
        return this.change$$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(k => k === key));
    }
    set(key, injector) {
        this.deps.set(key, {
            needUpdate: true,
            injector
        });
        this.change$$.next(key);
    }
    get(key) {
        return Object.assign(Object.assign({}, this.deps.get(key)), { dispose: () => {
                this.deps[key].needUpdate = false;
            } });
    }
}
NsDepsService.ɵfac = function NsDepsService_Factory(t) { return new (t || NsDepsService)(); };
NsDepsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NsDepsService, factory: NsDepsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NsDepsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "zTG3":
/*!******************************************************************!*\
  !*** ../slate-ng-view/src/directives/element-attrs.directive.ts ***!
  \******************************************************************/
/*! exports provided: ElementAttrsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementAttrsDirective", function() { return ElementAttrsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _components_element_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/element/token */ "CS3F");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "/UNx");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! direction */ "Zva+");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(direction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ns-deps.service */ "yiMJ");
/* harmony import */ var _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ns-editor.service */ "wpMU");
/* harmony import */ var _utils_key__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/key */ "VFa8");








class ElementAttrsDirective {
    constructor(key, deps, editorService) {
        this.key = key;
        this.deps = deps;
        this.editorService = editorService;
        this.dataSlateNode = "element";
        this.dataSlateVoid = undefined;
        this.dataSlateInline = undefined;
        this.contentEditable = undefined;
        this.dir = undefined;
    }
    get injector() {
        var _a;
        return (_a = this.deps.get(this.key)) === null || _a === void 0 ? void 0 : _a.injector;
    }
    get cNode() {
        return this.injector.get(_components_element_token__WEBPACK_IMPORTED_MODULE_1__["CURRENT_NODE_TOKEN"]);
    }
    ngOnInit() {
        const editor = this.editorService.editor;
        console.log(editor);
        const isInline = editor.isInline(this.cNode);
        isInline && (this.dataSlateInline = true);
        if (!isInline && slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].hasInlines(editor, this.cNode)) {
            const text = slate__WEBPACK_IMPORTED_MODULE_2__["Node"].string(this.cNode);
            const dir = direction__WEBPACK_IMPORTED_MODULE_3___default()(text);
            if (dir === "rtl") {
                this.dir = dir;
            }
        }
        if (slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].isVoid(editor, this.cNode)) {
            this.dataSlateVoid = true;
            if (isInline) {
                this.contentEditable = false;
            }
        }
    }
}
ElementAttrsDirective.ɵfac = function ElementAttrsDirective_Factory(t) { return new (t || ElementAttrsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_element_token__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_deps_service__WEBPACK_IMPORTED_MODULE_4__["NsDepsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ns_editor_service__WEBPACK_IMPORTED_MODULE_5__["NsEditorService"])); };
ElementAttrsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ElementAttrsDirective, selectors: [["", "nsElementAttrs", ""]], hostVars: 5, hostBindings: function ElementAttrsDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slate-node", ctx.dataSlateNode)("data-slate-void", ctx.dataSlateVoid)("data-slate-inline", ctx.dataSlateInline)("contenteditable", ctx.contentEditable)("dir", ctx.dir);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElementAttrsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nsElementAttrs]'
            }]
    }], function () { return [{ type: _utils_key__WEBPACK_IMPORTED_MODULE_6__["Key"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_components_element_token__WEBPACK_IMPORTED_MODULE_1__["KEY_TOKEN"]]
            }] }, { type: _services_ns_deps_service__WEBPACK_IMPORTED_MODULE_4__["NsDepsService"] }, { type: _services_ns_editor_service__WEBPACK_IMPORTED_MODULE_5__["NsEditorService"] }]; }, { dataSlateNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.data-slate-node"]
        }], dataSlateVoid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.data-slate-void"]
        }], dataSlateInline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.data-slate-inline"]
        }], contentEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.contenteditable"]
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.dir"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map