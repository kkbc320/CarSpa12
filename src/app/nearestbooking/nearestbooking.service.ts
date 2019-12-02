import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class BookingService{
constructor (private http: HttpClient){}

public BookingUser(){
    let url:'https://localhost:44308/Api/BookingUser';
    return this.http.get(url)
}

}