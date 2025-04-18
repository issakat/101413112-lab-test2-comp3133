import { Component } from '@angular/core';
import { Character } from './character.model';
import { CharacterService } from './character.service';
import { CharacterFilterComponent } from './characterfilter/characterfilter.component';
import { CharacterListComponent } from './characterlist/characterlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterFilterComponent, CharacterListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredCharacters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.getAllCharacters().subscribe((data: Character[]) => {
      this.filteredCharacters = data;
    });
  }

  onHouseFilterChanged(house: string): void {
    if (house === 'None') {
      this.characterService.getAllCharacters().subscribe((data: Character[]) => {
        this.filteredCharacters = data;
      });
    } else {
      this.characterService.getAllCharacters().subscribe((data: Character[]) => {
        this.filteredCharacters = data.filter(character => character.house === house);
      });
    }
  }
}
