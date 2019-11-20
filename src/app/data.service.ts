import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root',
})

export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

  const movies:IMovie[] =
    [{
      "id": 11,
      "Title": "XXXXXXX",
      "Type": "Crime",
      "Year": 1992,
      "Rated": 8,
      "Genre": "Thriller",
      "Director": "Tarrantino",
      "Actors": "Harvey Keitel, Tim Roth, Chris Penn, Michael Madsen",
      "Plot": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      "Awards": "no",
      "Poster": "Resevoirdogs.jpg"
    },
    {
      "id": 12,
      "Title": "The big Lebowski",
      "Type": "Humor",
      "Year": 1998,
      "Rated": 8,
      "Genre": "Comedy",
      "Director": "Joel and Ethan Coen",
      "Actors": "Jeff Bridges, John Goodman, Julianne Moore",
      "Plot": "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
      "Awards": "'Winner ACCA, Winner OFCS Award",
      "Poster": "TheBigLebowski.jpg"
    },
    {
      "id": 13,
      "Title": "La vita è bella",
      "Type": "Comedy",
      "Year": 1997,
      "Rated": 9,
      "Genre": "Comedy, drama, romance",
      "Director": "Roberto Benigni",
      "Actors": "Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini",
      "Plot": "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
      "Awards": "Oscar, Bafta",
      "Poster": "LaVittaEbella.jpg"
    }

    ]
      return {movies};    
    }
}
