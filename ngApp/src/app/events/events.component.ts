import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent implements OnInit {
  events: any = [];
  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this._eventService.getEvents().subscribe((res) => {
      this.events = res;
      console.log('events::', this.events);
      (err: any) => console.log(err);
    });
  }

  // buyTicket(event: any) {
  //   // console.log('Clicked Event:', event);
  //   console.log('Clicked Event:');
  // }
}
