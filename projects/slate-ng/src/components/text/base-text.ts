import {
  AfterViewChecked,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  CHILD_PORTALS_TOKEN,
  CURRENT_NODE_TOKEN,
  DECORATIONS_TOKEN,
  IS_LAST_TOKEN,
  KEY_TOKEN, LEAF_TOKEN,
  PARENT_NODE_TOKEN
} from '../element/token';
import { ComponentPortal } from '@angular/cdk/portal';
import { Key } from '../../utils/key';
import { ELEMENT_TO_NODE, KEY_TO_ELEMENT, NODE_TO_ELEMENT } from '../../utils/weak-maps';
import { NsDepsService } from '../../services/ns-deps.service';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class BaseTextComponent implements AfterViewChecked ,OnDestroy {
  @ViewChild('text') textRef: ElementRef;

  get depInjector() {
    return this.deps.get(this.key).injector;
  }

  get cNode() {
    return this.depInjector.get(CURRENT_NODE_TOKEN);
  }

  get decorations() {
    return this.depInjector.get(DECORATIONS_TOKEN);
  }

  get isLast() {
    return this.depInjector.get(IS_LAST_TOKEN);
  }

  get pNode() {
    return this.depInjector.get(PARENT_NODE_TOKEN);
  }

  get portals() {
    return this.depInjector.get(CHILD_PORTALS_TOKEN);
  }

  protected constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    protected deps: NsDepsService,
    protected elementRef: ElementRef,
    protected cdr?: ChangeDetectorRef,
  ) {
  }

  /**
   * 初始化组件
   * @param el 该组件ElementRef
   */
  init() {
    const nativeElement = this.textRef.nativeElement || this.elementRef.nativeElement;
    KEY_TO_ELEMENT.set(this.key, nativeElement);
    NODE_TO_ELEMENT.set(this.cNode, nativeElement);
    ELEMENT_TO_NODE.set(nativeElement, this.cNode);
  }

  /**
   * 组件销毁处理
   */
  destroy() {
    KEY_TO_ELEMENT.delete(this.key);
    NODE_TO_ELEMENT.delete(this.cNode);
  }

  trackBy(index, item: ComponentPortal<any>) {
    return index;
  }

  ngAfterViewChecked() {
    this.init();
  }

  ngOnDestroy() {
    this.destroy();
  }
}
