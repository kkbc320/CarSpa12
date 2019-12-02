import { Component, OnInit } from '@angular/core';
import { BookingService } from './nearestbooking.service';

@Component({
  selector: 'app-nearestbooking',
  templateUrl: './nearestbooking.component.html',
  styleUrls: ['./nearestbooking.component.css'],
  providers: [BookingService]

})
export class NearestbookingComponent  {

 

  constructor(private bc1:BookingService){}
    public bookingInfo:any

    public GetbookingInfo(){
        this.bc1.BookingUser().subscribe(
            res=>{this.bookingInfo=res},
            err=>{this.bookingInfo=err}
        )
        alert(JSON.stringify(this.bookingInfo))
    }

}
