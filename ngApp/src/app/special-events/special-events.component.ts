import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrl: './special-events.component.css',
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: any = [];

  constructor(private _eventService: EventService) {}
  ngOnInit(): void {
    this._eventService.getSpecialEvents().subscribe((res) => {
      this.specialEvents = res;
      console.log('specialEvents::', this.specialEvents);
      (err: any) => console.log(err);
    });
  }
}
