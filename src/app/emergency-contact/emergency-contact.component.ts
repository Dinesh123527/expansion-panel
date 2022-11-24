import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.scss']
})
export class EmergencyContactComponent implements OnInit {

  emergencyContactForm: FormGroup;

  submitted = false;

  @Output() changeTab = new EventEmitter<any>();
  @Output() childButtonEvent = new EventEmitter();


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emergencyContactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      country: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      phoneNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  get f() { return this.emergencyContactForm.controls; }

  onSubmit(){
    this.submitted = true;
    this.changeTab.emit(true)
 }

 clickHandler() {
  this.childButtonEvent.emit(this.emergencyContactForm.valid);
}

}
