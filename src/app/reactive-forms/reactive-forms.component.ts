import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  email: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(private service:MyServiceService) { }

  ngOnInit() {
  }

  login(){
    console.warn(this.email);
    console.warn(this.password);
   // this.email.setValue("email@mail.com");

    this.email.setValidators([Validators.required]);
    this.email.updateValueAndValidity();

    this.service.postData();

  }

}
