import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestUserService } from '../restUser/rest-user.service';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestReservationService {
    public uri;
    public token;
    public user;
  
    private extractData(res:Response){
      let body = res;
      return body || [] || {}
    }


    constructor(private http:HttpClient, private restUser:RestUserService) { 
        this.uri = CONNECTION.URI;
    }

    listReservation(){
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.restUser.getToken()
        })
        return this.http.get(this.uri+'getUsers', {headers: headers})
        .pipe(map(this.extractData))
      }

      listReservationDisp(){
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.restUser.getToken()
        })
        return this.http.get(this.uri+'listReservationDisp', {headers: headers})
        .pipe(map(this.extractData))
      }

      listReservationNoDisp(){
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.restUser.getToken()
        })
        return this.http.get(this.uri+'listReservationNoDisp', {headers: headers})
        .pipe(map(this.extractData))
      }

    removeReservation(idUser, idReservation){
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.restUser.getToken()
        })
        return this.http.put(this.uri+idUser+'/removeReservation/'+idReservation, null, {headers: headers})
        .pipe(map(this.extractData))
      }

      findReservationBynameUser(idUser){
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.restUser.getToken()
        })
        return this.http.get(this.uri+idUser+'findReservationBynameUser', {headers: headers})
        .pipe(map(this.extractData))
      }
}