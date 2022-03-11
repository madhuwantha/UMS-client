import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, FormArray, FormBuilder, AbstractControl} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  userForm = this.fb.group({
    user_name: new FormControl(''),
    email: new FormControl(''),
    device_token: new FormControl(''),
    is_premium_user: new FormControl(''),
    did_accept_to_sand_privacy_policy: new FormControl(''),
    date_accepted_to_sand_privacy_policy: new FormControl(''),
    fire_monitoring_is_on: new FormControl(''),
    weather_monitoring_is_on: new FormControl(''),
    properties: this.fb.array([])
  });

  get properties() {
    return this.userForm.controls["properties"] as FormArray;
  }

  add() {
    const propertyForm = this.fb.group({
      radius: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl(''),
      property_name: new FormControl(''),
      property_address: new FormControl(''),
    });
    this.properties.push(propertyForm);
  }
  delete(index: number) {
    this.properties.removeAt(index);
  }
  getFormGroup(control: AbstractControl) { return control as FormGroup; }



  ngOnInit(): void {
  }

  submit() {
    console.log(this.userForm.value)
    this.userService.add(this.userForm.value).subscribe(r => {
      console.log(r)
    })
  }

}
