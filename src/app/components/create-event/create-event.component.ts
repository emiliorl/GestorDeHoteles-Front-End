import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public event : Event;
  constructor() {
    this.event = new Event('','','',null,'',[]); //preguntar
   }

  ngOnInit(): void {
  }

}
