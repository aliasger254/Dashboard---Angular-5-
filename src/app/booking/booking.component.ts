import { Component, OnInit } from '@angular/core';
import { Events } from '../Event';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings = Events;
  constructor() { }

  ngOnInit() {
  }

}
 