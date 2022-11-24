
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'expansion-panel';

  panelOpenState = false;

  panels:any[] = [];

  tabs:any[]=[];

  selectedIndex: number;

  panelStem:any[] = [];

  msgOnButtonClick: boolean;

  constructor() {}

  ngOnInit() {
    this.panels = [
      { id: 1, naming: 'Pax 1', selectedIndex:0, doc_valid:false, emer_valid:false, trace_valid:false},
      { id: 2, naming: 'Pax 2', selectedIndex:0, doc_valid:false, emer_valid:false, trace_valid:false},
      { id: 3, naming: 'Pax 3', selectedIndex:0, doc_valid:false, emer_valid:false, trace_valid:false},
      { id: 4, naming: 'Pax 4', selectedIndex:0, doc_valid:false, emer_valid:false, trace_valid:false},
      { id: 5, naming: 'Pax 5', selectedIndex:0, doc_valid:false, emer_valid:false, trace_valid:false},
      { id: 6, naming: 'Pax 6', selectedIndex:0, doc_valid:false, emer_valid:false, trace_valid:false},
      { id: 7, naming: 'Pax 7', selectedIndex:0, doc_valid:false, emer_valid:false, trace_valid:false}
    ];

    this.panelStem=this.panels;
  }

  changeTab(id: any) {
    this.panelStem.forEach(eledata=>{
      if(eledata.id===id){
        eledata.selectedIndex=1;
      }
    });
  }

  changeTabEmergency(id: any) {
    this.panelStem.forEach(eledata=>{
      if(eledata.id===id){
        eledata.selectedIndex=2;
      }
    });
  }

  changeTabContact(id: any) {
    this.panelStem.forEach(eledata=>{
      if(eledata.id===id){
        eledata.selectedIndex=0;
      }
    });
  }

 receivedMessageHandler(p: any,id:any) {
  this.msgOnButtonClick = p;
  if(this.msgOnButtonClick){
    this.panelStem.forEach(eledata=>{
      if(eledata.id===id){
        eledata.doc_valid=true;
      }
    });
  }
}

 receivedEmergencyHandler(p: any,id:any) {
  this.msgOnButtonClick = p;
  if(this.msgOnButtonClick){
    this.panelStem.forEach(eledata=>{
      if(eledata.id===id){
        eledata.emer_valid=true;
      }
    });
   }
  }

  receivedTracingHandler(p: any,id:any) {
    this.msgOnButtonClick = p;
    if(this.msgOnButtonClick){
      this.panelStem.forEach(eledata=>{
        if(eledata.id===id){
          eledata.trace_valid=true;
        }
      });
     }
    }
}
