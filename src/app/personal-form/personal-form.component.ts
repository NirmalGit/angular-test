import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {
  public registerAddress!: FormGroup;

  constructor() {
    this.registerAddress = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormArray([
        new FormGroup({
          cityName: new FormControl(''),
          stateName: new FormControl(''),
          streetName: new FormControl(''),
          landmark: new FormControl('')
        }),
      ]),
    })
  }

  ngOnInit(): void {
  }

}
