import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {User} from "../../models/user";
import {ConfirmationDialogService} from "../../service/confirmation-dialog.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private router: Router,
              private userService: UserService, private fb: FormBuilder,
              private confirmationDialogService: ConfirmationDialogService) { }
  public user!: User;
  public userForm: FormGroup = this.fb.group({
    custom_id: new FormControl(''),
    user_name: new FormControl(''),
    email: new FormControl(''),
    device_token: new FormControl(''),
    is_premium_user: new FormControl(),
    did_accept_to_sand_privacy_policy: new FormControl(''),
    date_accepted_to_sand_privacy_policy: new FormControl(''),
    fire_monitoring_is_on: new FormControl(''),
    weather_monitoring_is_on: new FormControl(''),
  });
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      this.userService.get(s["id"]).subscribe(u => {
        this.user = u;
        this.userForm.patchValue(this.user);
        // @ts-ignore
        this.userForm.get('date_accepted_to_sand_privacy_policy').patchValue(this.formatDate(this.user.date_accepted_to_sand_privacy_policy));
      })
    });
  }

  private formatDate(date: string | number | Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  submit() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to save ?')
      .then((confirmed) => {
        if (confirmed){
          this.userService.update(this.userForm.value, this.user.id).subscribe(r => {
            console.log(r)
          })
        }
      })
      .catch(() => {
        console.log("err")
      });

  }
}
