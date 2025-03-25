import { Component } from '@angular/core';
import { BookingFormComponent } from './booking-form/booking-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookingFormComponent],  // Voeg hier BookingFormComponent toe
  template: '<app-booking-form></app-booking-form>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fotograaf-app';
}
