import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../models/user";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Property} from "../../models/property";
import {ConfirmationDialogService} from "../../service/confirmation-dialog.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  constructor(
    private confirmationDialogService: ConfirmationDialogService,
    private activatedRoute: ActivatedRoute,private router: Router, private userService: UserService, private fb: FormBuilder) { }


  public user!: User;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      this.userService.get(s["id"]).subscribe(u => {
        this.user = u;
      })
    });
  }
  userForm = this.fb.group({
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


  submit() {
    const properties: Property[] = this.userForm.value.properties
    properties.forEach(p => {
      this.userService.addProperty({...p, user_id: this.user.custom_id}).subscribe(r => {
        this.activatedRoute.params.subscribe(s => {
          this.userService.get(s["id"]).subscribe(u => {
            this.user = u;
            this.userForm.reset();
          })
        });
      })
    })
  }

  removeProperty(property: Property) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete ?')
      .then((confirmed) => {
        if (confirmed){
          this.userService.deleteProperty(property.id).subscribe(r => {
            this.activatedRoute.params.subscribe(s => {
              this.userService.get(s["id"]).subscribe(u => {
                this.user = u;
              })
            });
            console.log(r)
          })
        }
      })
      .catch(() => {
        console.log("err")
      });
  }
}
