import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";//peticiones ajax y metadata
import { CONNECTION } from "../global";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestUserService {

  public uri:string;
  public httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  /*
  public httpOptionAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  };
  */
  public user;
  public token;

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http:HttpClient) {
    this.uri = CONNECTION.URI;
  }
  
  //function HTTTP Login
  login(user, token){
    user.gettoken = token;
    let params = JSON.stringify(user);
    return this.http.post(this.uri+'logIn', params, this.httpOptions)
    .pipe(map(this.extractData));
  }
}
