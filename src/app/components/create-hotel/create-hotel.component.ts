import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';

@Component({
  selector: 'create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {
  public hotel:Hotel;

  constructor(private hotelService : RestHotelService) { 
    this.hotel = new Hotel('','','','','','','',null,'','',[],[]);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }
}
