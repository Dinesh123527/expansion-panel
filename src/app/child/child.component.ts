import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {


  //@Output() parentFunction = new EventEmitter<string>();

  //message: string = "Hello!"

  @Input() msgFromParent1: any[];

  currentMsgToParent = '';
  msgFromChild :any[]= [];

  constructor() { }

  ngOnInit() {
  }

  sendData(){
    this.msgFromChild.push(this.currentMsgToParent);
  }

}
