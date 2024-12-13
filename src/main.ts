import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { provideHttpClient } from '@angular/common/http'; // Provide HttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Provide HttpClient in the bootstrap config
  ]
})
  .catch(err => console.error(err));
