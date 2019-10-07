import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {
  name : string;
  ShowBooking : boolean =false;
  addnewticket : boolean =false;
  tickets = [
    {
      "name" : "Standard",
      "price" : "500",
      "spaces" : "10",
      "least" : "15",
      "most" : "1",
      "from" : "31/08/18",
      "at" : "09:00",
      "until" : "10/09/18",
      "until at" : "01:00",
      "booked" : "0",
      "for" : ["Everyone", "Guest User","Log in User"]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  addTicket(){
    this.addnewticket = !this.addnewticket;
  }

}
