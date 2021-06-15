import { Component, OnInit } from '@angular/core';
import { NsEditorService } from "slate-ng-view";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.less']
})
export class PortalComponent implements OnInit {
  menuStyle = {
    padding: '8px 7px 6px',
    'background-color': '#222',
    'border-radius': '4px',
    transition: 'opacity 0.75s',
    width: 'max-content'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
