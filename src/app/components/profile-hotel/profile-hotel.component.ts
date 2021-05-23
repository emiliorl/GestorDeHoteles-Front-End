import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Hotel } from '../../models/hotel';
import { User } from 'src/app/models/user';
import { Service } from 'src/app/models/service';
import { Router } from '@angular/router';
import { RestServiceService } from 'src/app/services/restService/rest-service.service';

@Component({
  selector: 'profile-hotel',
  templateUrl: './profile-hotel.component.html',
  styleUrls: ['./profile-hotel.component.css']
})
export class ProfileHotelComponent implements OnInit {
  public hotel: Hotel;
  public user: User;
  public possiblePass;
  public uri: string;  
  public token;
  services: [];
  serviceSelect: Service;
  
  constructor(private route:Router, private restService:RestServiceService ,private restHotel: RestHotelService, private restUser: RestUserService) {
    this.possiblePass = '';
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();        
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.serviceSelect = new Service('','',null);    
    this.hotel = this.restHotel.getHotel();
    this.listHotels();
  }

  onSubmit(){
    
  }

  listHotels(){
    this.restService.listServices(this.hotel._id).subscribe((res:any) => {
      if(res.resultSearch){
        this.services = res.resultSearch;
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }

  obtenerData(service){
    this.serviceSelect = service;
    localStorage.setItem('service', JSON.stringify(this.serviceSelect))
    this.route.navigateByUrl('profileService');
  }

}
