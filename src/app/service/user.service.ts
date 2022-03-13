import { Injectable } from '@angular/core';
import {ConstService} from "./const.service";
import {HttpClient} from "@angular/common/http";
import {Property} from "../models/property";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "";
  constructor( private constService: ConstService, private http: HttpClient ) {
    this.url = `${this.constService.domain}/user`
  }

  add (user: User) {
    return this.http.post(`${this.url}/create/`,user);
  }
  addProperty (property: Property) {
    return this.http.post(`${this.url}/add-property/`,property);
  }

  update (user: User, id: number) {
    return this.http.put(`${this.url}/update/${id}/`, {...user, modified: new Date()});
  }

  get(id: number){
    return this.http.get<User>(`${this.url}/get/${id}/`);
  }
  getAll(){
    return this.http.get<any>(`${this.url}/all/`);
  }
  delete(user_id: string){
    return this.http.post(`${this.url}/remove/`,{custom_id: user_id});
  }
  deleteProperty(id: number | string){
    return this.http.post(`${this.url}/remove/property/`,{p_id: id});
  }
}
