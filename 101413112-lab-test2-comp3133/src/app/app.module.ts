import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';  // Standalone component
import { CharacterListComponent } from './characterlist/characterlist.component';  // Standalone component
import { CharacterDetailsComponent } from './characterdetails/characterdetails.component';  // Standalone component

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    // Remove the declarations array
  ],
  providers: [],
  // Remove the bootstrap array
})
export class AppModule { }
