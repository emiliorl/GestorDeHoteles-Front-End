import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CONNECTION } from '../global';
import { map } from "rxjs/operators";
import { RestUserService } from '../restUser/rest-user.service';

@Injectable({
  providedIn: 'root'
})
export class RestHotelService {
  public uri;
  public user;

  constructor(private http:HttpClient, private restUser:RestUserService) {
    this.uri = CONNECTION.URI;
  }  

  public httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  public HttpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
  }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  getHotelsAdmin(idUser){
    return this.http.get(this.uri+'getHotelsAdmin/'+idUser, this.HttpOptionsAuth)
    .pipe(map(this.extractData));
  }

}
