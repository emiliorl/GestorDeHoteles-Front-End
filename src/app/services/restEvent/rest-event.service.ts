import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from "@angular/common/http";
import { CONNECTION } from '../global';
import { map } from "rxjs/operators";
import { RestUserService } from '../restUser/rest-user.service';

@Injectable({
  providedIn: 'root'
})
export class RestEventService {

  public event;
  public uri;
  public user;
  constructor(private http:HttpClient, private restUser:RestUserService){ 
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

  /* Guia para crear el event
  createHotel(hotel, idAdmin){
    let params = JSON.stringify(hotel);
    return this.http.post(this.uri+'/'+idAdmin+'/createHotel', params, this.HttpOptionsAuth)
    .pipe(map(this.extractData));
  }
  */

  createEvent(idUser, idHotel, parametro){
    let params = JSON.stringify(parametro);
    return this.http.post(this.uri+'/'+idUser+'/createEvent/'+ idHotel, params, this.HttpOptionsAuth)
    .pipe(map(this.extractData));
  }

  listEvent(idHotel){
    return this.http.get(this.uri+'/'+idHotel+'/listEvent').pipe(map(this.extractData));
  }

  getEvent(idHotel, event){
    let params = JSON.stringify(event);
    return this.http.post(this.uri+'/'+idHotel+'/getEvent', params)
    .pipe(map(this.extractData));
  }

  getLocalStorageEvent(){
    let event = JSON.parse(localStorage.getItem('event'));
    if(event != undefined || event!= null){
      this.event = event;
    }else{
      this.event == null;
    }
    return this.event;
  }
}

