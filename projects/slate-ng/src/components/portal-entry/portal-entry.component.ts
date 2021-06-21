import { Component, Input, OnInit } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { KEY_TOKEN } from '../element/token';
import { Key } from '../../utils/key';

@Component({
  selector: 'ns-portal-entry',
  templateUrl: './portal-entry.component.html',
  styleUrls: ['./portal-entry.component.css']
})
export class PortalEntryComponent implements OnInit {
  @Input() portals: Portal<any>[];

  constructor() { }

  ngOnInit(): void {
  }

  trackBy(index, item: ComponentPortal<any>) {
    return (item.injector.get(KEY_TOKEN) as Key)?.id || index;
  }

}
