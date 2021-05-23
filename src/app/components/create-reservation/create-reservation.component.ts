import { Component, OnInit } from '@angular/core';
import { Reservation } from "../../models/reservation";
import { RestReservationService } from '../../services/restReservation/rest-reservation.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {
  public reservation: Reservation;
  public checkIn: Date;
  public checkOut: Date;

  constructor(private restReservation:RestReservationService) { 
    this.reservation = new Reservation(null,this.checkIn,this.checkOut,[],[],[]);
  }

  ngOnInit(): void {
  }

  onSubmit(statusForm){
    this.restReservation.createReservation().subscribe((res:any) => {
      if(res.createReservation){
        alert(res.message);
        this.reservation = new Reservation(null,this.checkIn,this.checkOut,[],[],[]);
        statusForm.reset();
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message));
  }

}



