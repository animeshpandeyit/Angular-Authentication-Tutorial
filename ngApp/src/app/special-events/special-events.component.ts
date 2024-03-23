import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { compileNgModule } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrl: './special-events.component.css',
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: any = [];

  constructor(private _eventService: EventService, private _router: Router) {}
  ngOnInit() {
    this._eventService.getSpecialEvents().subscribe((res) => {
      this.specialEvents = res;
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      };
    });
  }
}
