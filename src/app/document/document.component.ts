import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  documentForm: FormGroup;
  submitted = false;

  @Output() changeTab = new EventEmitter<any>();
  @Output() childButtonEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.documentForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      documentNo: ['', Validators.required]
    });
  }

  get f() { return this.documentForm.controls; }

  onSubmit(){
     this.submitted = true;
     this.changeTab.emit(true)
  }


  clickHandler() {
    this.childButtonEvent.emit(this.documentForm.valid);
  }

}


