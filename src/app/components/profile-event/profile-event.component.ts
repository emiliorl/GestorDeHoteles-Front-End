import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { RestEventService } from 'src/app/services/restEvent/rest-event.service';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-profile-event',
  templateUrl: './profile-event.component.html',
  styleUrls: ['./profile-event.component.css']
})
export class ProfileEventComponent implements OnInit {
  public possiblePass;
  public token;
  public eventSelected : Event;
  public event;
  public user;
  public hotel;
  constructor(private restEvent : RestEventService, private restHotel : RestHotelService, private restUser : RestUserService) {
    this.possiblePass = '';
    this.token = this.restUser.getToken();
    
   }

  ngOnInit(): void {
    this.event = this.restEvent.getLocalStorageEvent();
    this.hotel = this.restHotel.getHotel();
    this.eventSelected = new Event('','','',null, '',[]);
    console.log(this.eventSelected);
  }

  onSubmit(){
    
  }
}

