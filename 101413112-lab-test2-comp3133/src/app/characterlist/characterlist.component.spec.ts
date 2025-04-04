import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input() characters: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.http.get<any[]>('https://hp-api.onrender.com/api/characters')
        .subscribe(data => {
          this.characters = data;
        });
  }
}
