import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-tracing',
  templateUrl: './contact-tracing.component.html',
  styleUrls: ['./contact-tracing.component.scss']
})
export class ContactTracingComponent implements OnInit {

  contactTracingForm: FormGroup;

  submitted = false;


  @Output() changeTab = new EventEmitter<any>();
  @Output() childButtonEvent = new EventEmitter();


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactTracingForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      primaryPhoneNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      secondaryPhoneNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  get f() { return this.contactTracingForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.changeTab.emit(true);
  }

  clickHandler() {
    this.childButtonEvent.emit(this.contactTracingForm.valid);
  }

}
