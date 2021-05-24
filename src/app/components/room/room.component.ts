import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
/*import { RestServiceService } from 'src/app/services/restService/rest-service.service';*/

@Component({
  selector: 'app-rooms',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms: [];
  hotel;
  roomSelect: Room;

  constructor() { }

  ngOnInit(): void {
    this.roomSelect = new Room('','',null,'','',null);
    this.rooms = this.hotel.rooms;
    console.log(this.rooms);
  }

}
