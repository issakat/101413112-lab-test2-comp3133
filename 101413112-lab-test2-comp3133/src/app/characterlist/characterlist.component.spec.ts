import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input() characters: any[] = [];  // Accept characters from parent component

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch all characters from the Harry Potter API on initialization
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.http.get<any[]>('https://hp-api.onrender.com/api/characters')
        .subscribe(data => {
          this.characters = data;  // Set the characters from API response
        });
  }
}
