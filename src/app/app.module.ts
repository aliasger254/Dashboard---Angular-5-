import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms' ;
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { SettingComponent } from './setting/setting.component';
import { RecordComponent } from './record/record.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { MainComponent } from './main/main.component';
import { EventComponent } from './event/event.component';
import { BookingComponent } from './booking/booking.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'AllEvents', component: AllEventsComponent},
  { path: 'AddEvents', component: AddEventsComponent},
  { path: 'Setting', component: SettingComponent},
  { path: 'Records', component: RecordComponent},
  { path: 'SignIn', component: SignInComponent},
  { path: 'SingleEvent', component: EventComponent},
  { path: 'Main', component: MainComponent},
  { path: 'Booking', component: BookingComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarNavComponent,
    AllEventsComponent,
    AddEventsComponent,
    SettingComponent,
    RecordComponent,
    DashboardComponent,
    SignInComponent,
    EventDashboardComponent,
    MainComponent,
    EventComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
