import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {
  @Input() className: string;

  constructor() { }

  ngOnInit(): void {
  }

}
