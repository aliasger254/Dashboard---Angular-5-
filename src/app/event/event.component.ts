import { Component, OnInit } from '@angular/core';
import {SingleEvents} from '../singleviewevent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  viewEvent = SingleEvents;
  constructor() { }

  ngOnInit() {
  }

}
