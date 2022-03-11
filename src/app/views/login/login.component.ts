import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Route, Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls:['login.css']
})
export class LoginComponent implements OnInit{

  public fought: boolean = false;

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }
  loginForm = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.email, Validators.required])),
      password: new FormControl(''),
      rememberMe: new FormControl('')
  });


  login() {
    if (this.loginForm.value.rememberMe){
          localStorage.setItem("username", this.loginForm.value.username);
          localStorage.setItem("password", this.loginForm.value.password);
    }
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((r => {
        localStorage.setItem("access", r["access"]);
        localStorage.setItem("refresh", r["refresh"]);
        this.router.navigate(['/user/list'])
    }))
  }




  ngOnInit(): void {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if (username != null || username != undefined) {
      // @ts-ignore
      this.authService.login(username, password).subscribe((r => {
        localStorage.setItem("access", r["access"]);
        localStorage.setItem("refresh", r["refresh"]);
        this.router.navigate(['/user/list'])
      }))
    }
  }
}
