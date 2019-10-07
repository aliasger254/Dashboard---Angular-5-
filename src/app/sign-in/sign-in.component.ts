import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @Input() public isUserLoggedIn: boolean  = false;

  constructor(private appRoutes: Router) { 
    
  }
  onLoginClick(){
    this.appRoutes.navigate(['./Dashboard']);    
  }

  ngOnInit() {
    
  }

 

}
 