import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './Models/booking.model';  // Definieer dit model in de frontend (zie hieronder)

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  submitBooking(booking: Booking) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:5147/api/formdata'; // URL van je backend API

  constructor(private http: HttpClient) {}

  submitForm(booking: Booking): Observable<any> {
    return this.http.post(this.apiUrl, booking);
  }
}
