import { Pokemon } from './../../Models/Pokemon';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {
  public dummyPokemon: Pokemon = {
    name: 'pikachu',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  }

  myInput: string = '';

  constructor(private httpService: HttpService) {}

  async goButtonClicked() {
    this.dummyPokemon = await this.httpService.getPokemonObject(this.myInput);
  }
}
