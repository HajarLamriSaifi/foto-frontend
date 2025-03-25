import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http'; 
import { Booking } from '../Models/booking.model'; 
import { BookingService } from '../booking.services';  

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  booking: Booking = {
    name: '',
    surname: '',
    eventType: '',
    mediaType: '',
    date: '',
    location: '',
    message: '',
    email: ''  
  };

  isSubmitted: boolean = false;
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private bookingService: BookingService) {}

  onSubmit() {
    this.errorMessage = null;

    if (!this.isValidForm()) {
      this.errorMessage = "Gelieve alle velden correct in te vullen.";
      return;
    }

    console.log('Formulier verzonden', this.booking);

    this.bookingService.submitBooking(this.booking).subscribe(
      (response: any) => {
        console.log('Formulier succesvol verzonden!', response);
        this.isSubmitted = true;  
      },
      (error: any) => {
        console.error('Er is iets mis gegaan bij het verzenden van het formulier!', error);
        this.errorMessage = "Fout bij het verzenden van het formulier. Probeer opnieuw.";
      }
    );
  }

  isValidForm(): boolean {
    if (!this.booking.name || !this.booking.surname || !this.booking.eventType ||
        !this.booking.mediaType || !this.booking.date || !this.booking.location || !this.booking.email) {
      return false;
    }
    if (!this.validateEmail(this.booking.email)) {
      return false;
    }
    if (this.isDateInPast(this.booking.date)) {
      return false;
    }
    return true;
  }

  isDateInPast(date: string): boolean {
    return new Date(date) < new Date();
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
