import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  email: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log(this.email.value);
    console.log(this.password.value);
  }

}
