import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NearestBookingComponentComponent } from './nearest-booking-component/nearest-booking-component.component';
import { NearestbookingComponent } from './nearestbooking/nearestbooking.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    NearestbookingComponent,
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
