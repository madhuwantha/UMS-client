import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "@coreui/angular";
import { UserEditComponent } from './user-edit/user-edit.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';



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
  },
  {
    path: 'edit/:id',
    component:  UserEditComponent
  }
]

@NgModule({
  declarations: [
    UserAddComponent,
    UserListComponent,
    UserViewComponent,
    UserEditComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    DropdownModule
  ]
})
export class UserModule { }
