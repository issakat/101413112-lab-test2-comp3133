import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { CommonModule } from '@angular/common';
import {MatCard, MatCardContent, MatCardImage} from '@angular/material/card';

@Component({
  selector: 'app-characterdetails',
  standalone: true,  // Marking the component as standalone
  imports: [CommonModule, MatCardContent, MatCard, MatCardImage],  // Importing necessary modules
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  @Input() characterId!: string;
  character: Character | undefined;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    if (this.characterId) {
      this.characterService.getCharacterById(this.characterId).subscribe((data: Character) => {
        this.character = data;
      });
    }
  }
}
