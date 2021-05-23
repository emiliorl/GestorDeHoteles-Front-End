import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestReservationService {
  public uri;
  public token;

  public httpOptionAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res:Response){
    let body = res;
    return body || [] || {}
  }



  constructor(private http:HttpClient) { 
      this.uri = CONNECTION.URI;
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

  createReservation(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri+'createReservation', {headers: headers})
    .pipe(map(this.extractData))

  }

  updateReservation(idUser){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri+idUser+'updateReservation', {headers: headers})
    .pipe(map(this.extractData))
    
  }

  listReservation(){
      return this.http.get(this.uri+'listReservation', this.httpOptionAuth)
      .pipe(map(this.extractData))
    }

  listAvailableRooms(){
    return this.http.get(this.uri+'listAvailableRooms', this.httpOptionAuth)
    .pipe(map(this.extractData))
  }

  listNotAvailableRooms(){
    return this.http.get(this.uri+'listNotAvailableRooms', this.httpOptionAuth)
    .pipe(map(this.extractData))
  }

removeReservation(idUser, idReservation){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.getToken()
  });
    return this.http.put(this.uri+idUser+'/removeReservation/'+idReservation, null, {headers: headers})
    .pipe(map(this.extractData))
  }

  findReservationBynameUser(idUser){

    return this.http.get(this.uri+idUser+'findReservationBynameUser',this.httpOptionAuth)
    .pipe(map(this.extractData))
  }
}