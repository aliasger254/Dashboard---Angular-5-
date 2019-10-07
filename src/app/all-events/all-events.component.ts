import { Component, OnInit } from '@angular/core';
import { Events } from '../Event';
import {SingleEvents} from '../singleviewevent';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  Allevents = Events;
  Event = SingleEvents;
   
  constructor() { }

  ngOnInit() {
  }
  view(Event){
    this.Event = this.Event.splice(Event);
    this.Event = SingleEvents;
    this.Event.push(Event);
  }
}
