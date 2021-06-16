import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
  StaticProvider,
  ViewEncapsulation
} from '@angular/core';
import { BaseElementComponent } from '../element/base-element';
import {
  CHILD_PORTALS_TOKEN,
  CURRENT_NODE_TOKEN,
  DECORATIONS_TOKEN,
  IS_LAST_TOKEN,
  KEY_TOKEN,
  LEAF_CHILD_PORTAL_TOKEN,
  LEAF_TOKEN,
  PARENT_NODE_TOKEN
} from '../element/token';
import { ComponentPortal } from '@angular/cdk/portal';
import { Key } from '../../utils/key';
import { BaseRange, Element, Text as SlateText, Text } from 'slate';
import { LeafComponent } from './leaf/leaf.component';
import { LeafChildComponent } from './leaf-child/leaf-child.component';
import { BaseTextComponent } from './base-text';
import { NsDepsService } from '../../services/ns-deps.service';
import { RegistryNsElement } from '../../services/registry-ns-element.service';

@Component({
  selector: 'span[ns-text]',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  host: {
    'data-slate-node': 'text'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TextComponent extends BaseTextComponent implements OnInit, AfterViewInit, OnDestroy {
  static type = 'text';
  leaves: SlateText[] = [];
  leafPortals = [];

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public elementRef: ElementRef,
    public cdr: ChangeDetectorRef,
    private customService: RegistryNsElement,
    private injector: Injector
  ) {
    super(key, deps, elementRef, cdr);
  }

  ngOnInit(): void {
    this.leaves = SlateText.decorations(this.cNode, this.decorations);
    this.getLeafPortals();
  }

  getLeafPortals() {
    this.leaves.forEach(leaf => {
      this.leafPortals.push(this.getLeafPortal(leaf));
    });
  }

  getLeafPortal(leaf: Text) {
    const providers: StaticProvider[] = [
      {
        provide: IS_LAST_TOKEN,
        useValue: this.isLast
      },
      {
        provide: CURRENT_NODE_TOKEN,
        useValue: this.cNode
      },
      {
        provide: PARENT_NODE_TOKEN,
        useValue: this.pNode
      },
      {
        provide: LEAF_TOKEN,
        useValue: leaf
      }
    ];
    const leafChildPortal = this.customService.getComponentPortal('leaf-child', providers, this.injector, LeafChildComponent);
    const leafProviders: StaticProvider[] = providers.concat({
      provide: LEAF_CHILD_PORTAL_TOKEN,
      useValue: leafChildPortal
    });
    return this.customService.getComponentPortal('leaf', leafProviders, this.injector, LeafComponent);
  }

  ngAfterViewInit() {
    this.init(this.elementRef);
  }

  ngOnDestroy() {
    this.destroy();
  }
}
