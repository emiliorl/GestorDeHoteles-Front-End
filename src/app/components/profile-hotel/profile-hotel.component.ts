import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Hotel } from '../../models/hotel';
import { User } from 'src/app/models/user';

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
  
  constructor(private restHotel: RestHotelService, private restUser: RestUserService) {
    this.possiblePass = '';
    this.hotel = this.restHotel.getHotel();
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
