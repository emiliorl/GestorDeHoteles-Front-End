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
  public httpOptionAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  };

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

  //function getUsers
  getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user != undefined || user != null){
      this.user = user;
    }else{
      this.user = null;
    }
    return this.user;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != undefined || token != null){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

  saveUser(user){
    let params = JSON.stringify(user);
    return this.http.post(this.uri+'signIn', params, this.httpOptions)
    .pipe(map(this.extractData));
  }

  updateUser(userToUpdate){
    let params = JSON.stringify(userToUpdate);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.put(this.uri+'updateUser/'+userToUpdate._id, params, {headers: headers})
    .pipe(map(this.extractData));
  }
}
