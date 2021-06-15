import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.less']
})
export class InstructionComponent implements OnInit {
  @Input() className: string;

  constructor() { }

  ngOnInit(): void {
  }

}
