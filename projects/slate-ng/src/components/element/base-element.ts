import {
  AfterContentChecked, AfterViewInit,
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  OnDestroy, OnInit, ViewChild,
  ViewChildren
} from "@angular/core";
import { CHILD_PORTALS_TOKEN, CURRENT_NODE_TOKEN, KEY_TOKEN } from "./token";
import { ComponentPortal } from '@angular/cdk/portal';
import { Key } from "../../utils/key";
import { ELEMENT_TO_NODE, KEY_TO_ELEMENT, NODE_TO_ELEMENT } from "../../utils/weak-maps";
import { Editor, Node } from "slate";
import getDirection from "direction";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { NsDepsService } from "../../services/ns-deps.service";
import { NsEditorService } from "../../services/ns-editor.service";

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class BaseElementComponent implements OnInit, OnDestroy {
  destroy$$ = new Subject();

  @HostBinding("attr.data-slate-node") dataSlateNode = undefined;
  @HostBinding("attr.data-slate-void")  dataSlateVoid = undefined;
  @HostBinding("attr.data-slate-inline") dataSlateInline = undefined;
  @HostBinding("attr.contenteditable") contentEditable = undefined;
  @HostBinding("attr.dir")  dir = undefined;

  get injector() {
    return this.deps.get(this.key)?.injector;
  }

  get cNode() {
    return this.injector.get(CURRENT_NODE_TOKEN);
  }

  get portals() {
    return this.injector.get(CHILD_PORTALS_TOKEN);
  }

  protected constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    protected deps: NsDepsService,
    protected editorService: NsEditorService,
    protected elementRef?: ElementRef,
    protected cdr?: ChangeDetectorRef,
  ) {
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
  init(options?: {useHostAttrs?: boolean, el?: ElementRef}) {
    const {el, useHostAttrs = true} = options || {};
    const nativeElement = el?.nativeElement || this.elementRef.nativeElement;
    KEY_TO_ELEMENT.set(this.key, nativeElement);
    NODE_TO_ELEMENT.set(this.cNode, nativeElement);
    ELEMENT_TO_NODE.set(nativeElement, this.cNode);
    useHostAttrs && this.updateAttrs();
  }

  /**
   * 组件销毁处理
   */
  destroy() {
    KEY_TO_ELEMENT.delete(this.key);
    NODE_TO_ELEMENT.delete(this.cNode);
  }

  /**
   * componentPortal 循环渲染优化
   * @param index
   * @param item
   */
  trackBy(index, item: ComponentPortal<any>) {
    return (item.injector.get(KEY_TOKEN) as Key)?.id || index;
  }

  /**
   * watch deps change
   */
  watchDeps() {
    this.deps.watch(this.key).pipe(takeUntil(this.destroy$$)).subscribe(e => {
      this.cdr.markForCheck();
    })
  }

  /**
   * watch deps callback
   */
  watchDepsCallback() {}

  /**
   * update host attrs
   */
  updateAttrs() {
    this.dataSlateNode = 'element';
    const editor = this.editorService.editor;
    const isInline = editor.isInline(this.cNode);
    isInline && (this.dataSlateInline = true);

    if (!isInline && Editor.hasInlines(editor, this.cNode)) {
      const text = Node.string(this.cNode);
      const dir = getDirection(text);

      if (dir === "rtl") {
        this.dir = dir;
      }
    }
    if (Editor.isVoid(editor, this.cNode)) {
      this.dataSlateVoid = true;

      if (isInline) {
        this.contentEditable = false;
      }
    }
  }
}
