import { Injectable } from '@angular/core';
import {ConstService} from "./const.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "";
  constructor( private constService: ConstService, private http: HttpClient ) {
    this.url = `${this.constService.auth_domain}/api/token`
  }

  login(username: string, password: string){
    return this.http.post<{access: string, refresh: string}>(`${this.url}/`, {
      username: username,
      password: password
    })
  }

  refresh(){
    return this.http.post<{access: string}>(`${this.url}/refresh/`, {
      refresh: localStorage.getItem("refresh")
    }).subscribe(r => {
      localStorage.setItem("access", r["access"])
    })
  }

}
