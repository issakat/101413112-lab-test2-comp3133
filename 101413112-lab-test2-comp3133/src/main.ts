import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CharacterListComponent } from './app/characterlist/characterlist.component';
import { CharacterDetailsComponent } from './app/characterdetails/characterdetails.component';
import { CharacterService } from './app/character.service';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter, Route } from '@angular/router';

const routes: Route[] = [
  { path: '', component: CharacterListComponent },
  { path: 'character/:id', component: CharacterDetailsComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    CharacterService,
    HttpClientModule,
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
