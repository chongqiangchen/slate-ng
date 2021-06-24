import { AfterViewInit, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseLeafComponent } from 'slate-ng';
import { LEAF_CHILD_PORTAL_TOKEN, LEAF_TOKEN } from 'slate-ng/components/element/token';
import { ComponentPortal } from '@angular/cdk/portal';

export class Node {
  type: any;
  next: any;
  portal: any;

  constructor(type, portal?: any) {
    this.type = type;
    this.portal = portal;
  }
}

@Component({
  selector: 'app-custom-leaf',
  templateUrl: './custom-leaf.component.html',
  styleUrls: ['./custom-leaf.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CustomLeafComponent extends BaseLeafComponent implements OnInit {
  static type = 'leaf';
  root: Node;

  constructor(
    @Inject(LEAF_CHILD_PORTAL_TOKEN) readonly leafChild: ComponentPortal<any>,
    @Inject(LEAF_TOKEN) readonly leaf: any
  ) {
    super();
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
