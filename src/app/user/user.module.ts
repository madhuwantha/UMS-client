import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "@coreui/angular";



export const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'add',
    component:  UserAddComponent
  },
  {
    path: 'view/:id',
    component:  UserViewComponent
  }
]

@NgModule({
  declarations: [
    UserAddComponent,
    UserListComponent,
    UserViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    DropdownModule
  ]
})
export class UserModule { }
