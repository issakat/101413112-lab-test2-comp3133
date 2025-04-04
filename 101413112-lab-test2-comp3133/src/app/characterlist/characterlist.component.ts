import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-characterlist',
  standalone: true,  // Marking the component as standalone
  imports: [CommonModule, MatCardModule],  // Import necessary modules like CommonModule and MatCardModule
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input() characters: Character[] = [];  // Declare 'characters' as an @Input property
  filteredCharacters: Character[] = [];

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    // If 'characters' is not provided via input, fetch from service
    if (this.characters.length === 0) {
      this.characterService.getAllCharacters().subscribe(data => {
        this.characters = data;
        this.filteredCharacters = data;  // Initialize filtered characters with all characters initially
      });
    } else {
      this.filteredCharacters = this.characters;  // If characters are passed in, use them directly
    }
  }

  onCharacterSelect(id: string): void {
    this.router.navigate(['/character', id]);
  }

  onFilterChange(house: string): void {
    if (house === 'None') {
      this.filteredCharacters = this.characters;
    } else {
      this.filteredCharacters = this.characters.filter(character => character.house === house);
    }
  }
}
