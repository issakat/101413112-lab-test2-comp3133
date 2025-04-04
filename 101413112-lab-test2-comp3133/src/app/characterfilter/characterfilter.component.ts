import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-characterlist',
  standalone: true,  // Marking the component as standalone
  imports: [CommonModule],  // Import necessary modules like CommonModule
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];  // All characters
  filteredCharacters: Character[] = [];  // Filtered characters based on user selection

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    // Fetch the characters from the service
    this.characterService.getAllCharacters().subscribe(data => {
      this.characters = data;
      this.filteredCharacters = data;  // Initialize filtered characters with all characters initially
    });
  }

  // Method to handle character selection
  onCharacterSelect(id: string): void {
    this.router.navigate(['/character', id]);  // Navigate to the character details page with the selected character's id
  }

  // You may want to implement filtering logic here
  // Example: You could set filteredCharacters to a subset based on user input
  onFilterChange(house: string): void {
    if (house === 'None') {
      this.filteredCharacters = this.characters;
    } else {
      this.filteredCharacters = this.characters.filter(character => character.house === house);
    }
  }
}
