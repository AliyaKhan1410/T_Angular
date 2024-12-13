import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { AppComponent } from './app.component';  // Import your standalone AppComponent

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,  // Add HttpClientModule to imports
  ],
  providers: [],
  bootstrap: []  // Remove AppComponent from bootstrap
})
export class AppModule { }
