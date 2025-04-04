import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input() characters: Character[] = [];
  filteredCharacters: Character[] = [];

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    if (this.characters.length === 0) {
      this.characterService.getAllCharacters().subscribe(data => {
        this.characters = data;
        this.filteredCharacters = data;
      });
    } else {
      this.filteredCharacters = this.characters;
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
