import { Component, Inject, OnInit } from '@angular/core';
import {BasePlaceholderComponent, PLACEHOLDER_CHILDREN_TOKEN} from 'slate-ng';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.less']
})
export class PlaceholderComponent extends BasePlaceholderComponent implements OnInit {
  static type = 'placeholder';

  constructor(
    @Inject(PLACEHOLDER_CHILDREN_TOKEN) readonly children: any
  ) {
    super();
  }

  ngOnInit(): void {
  }

}
