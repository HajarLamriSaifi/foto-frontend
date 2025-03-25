import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Importeer provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // Gebruik provideHttpClient om HttpClient beschikbaar te stellen
}).catch((err) => console.error(err));
