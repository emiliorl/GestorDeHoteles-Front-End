import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { RestHotelService } from '../../services/restHotel/rest-hotel.service';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotels: [];
  user;
  hotelSelect: Hotel;

  constructor(private restUser: RestUserService, private restHotel:RestHotelService) { }

  ngOnInit(): void {
    this.hotelSelect = new Hotel('','','','','','','',null,'','',[],[]);
    this.user = this.restUser.getUser();
    this.listHotels();    
  }

  listHotels(){
    this.restHotel.getHotelsAdmin(this.user._id).subscribe((res:any) => {
      if(res.hotelsFind){
        this.hotels = res.hotelsFind;
        console.log('Hoteles encontrados');
        console.log(this.hotels)
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message)
    )
  }

}
