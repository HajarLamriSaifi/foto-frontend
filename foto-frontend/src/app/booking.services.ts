import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './Models/booking.model';  // Dit model gaan we maken om de gegevens te structureren

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'http://localhost:5147/api/formdata';  // URL van je backend endpoint

  constructor(private http: HttpClient) {}

  submitBooking(booking: Booking): Observable<any> {
    return this.http.post<any>(this.apiUrl, booking);
  }
}
