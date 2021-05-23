import { Component, OnInit } from '@angular/core';
import { Reservation } from "../../models/reservation";
import { RestReservationService } from '../../services/restReservation/rest-reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
  
    public reservation: Reservation;
    
    constructor(private restReservation:RestReservationService) { }
  
    ngOnInit(): void {
      this.listReservation();
    }
  
    listReservation(){
      this.restReservation.listReservation().subscribe((res:any) => {
        if(res.reservation){
          this.reservation = res.reservation;
          console.log('Estas son las reservaciones que se han hecho!');
        }else{
          alert(res.message)
        }
      },
      error => alert(error.error.message));
    }

    listAvailableRooms(){
        this.restReservation.listAvailableRooms().subscribe((res:any) => {
          if(res.reservation){
            this.reservation = res.reservation;
            console.log('Estas son las habitaciones disponibles');
          }else{
            alert(res.message)
          }
        },
        error => alert(error.error.message));
      }

      listNotAvailableRooms(){
        this.restReservation.listNotAvailableRooms().subscribe((res:any) => {
          if(res.reservation){
            this.reservation = res.reservation;
            console.log('Estas son las habitaciones que no están disponibles');
          }else{
            alert(res.message)
          }
        },
        error => alert(error.error.message));
      }
    
}
