import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Node } from '../custom-leaf.component';

@Component({
  selector: '[leaf-item]',
  templateUrl: './leaf-item.component.html',
  styleUrls: ['./leaf-item.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class LeafItemComponent implements OnInit {
  @Input('leaf-item') node: Node;

  constructor() { }

  ngOnInit(): void {
  }

}
