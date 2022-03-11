import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstService {


  private _domain: string = "http://143.198.96.209:8000/api/v1"
  private _auth_domain: string = "http://143.198.96.209:8000"
  constructor() { }

  get auth_domain(): string {
    return this._auth_domain;
  }

  get domain(): string {
    return this._domain;
  }}
