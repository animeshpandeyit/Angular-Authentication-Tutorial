import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private _eventService = 'http://localhost:3000/api/events';
  private _specialEventUrl = 'http://localhost:3000/api/special';

  constructor(private http: HttpClient, private router: Router) {}

  getEvents() {
    return this.http.get(this._eventService);
  }

  getSpecialEvents() {
    return this.http.get(this._specialEventUrl);
  }
}
