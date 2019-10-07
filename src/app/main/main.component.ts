import { Component, OnInit } from '@angular/core';
import { Events } from '../Event';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Allevents = Events;
  constructor() { }

  ngOnInit() {
  }

}
  