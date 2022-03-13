import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../models/user";
import {ConfirmationDialogService} from "../../service/confirmation-dialog.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: User[] = [];

  constructor(private userService: UserService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(us => {
      this.userList = us
    })
  }

  delete(event: any) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete ?')
      .then((confirmed) => {
        if (confirmed){
          this.userService.delete(event.target.value).subscribe(r => {
            this.userService.getAll().subscribe(us => {
              this.userList = us
            })
          })
        }
      })
      .catch(() => {
        console.log("err")
      });
  }
}
