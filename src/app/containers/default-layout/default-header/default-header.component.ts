import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private router: Router) {
    super();
  }

  logout(){
    console.log("log out")
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    this.router.navigate(['/login'])
  }
}
