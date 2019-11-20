import { Component, OnInit } from '@angular/core';
//import { MOVIES } from '../mock-movies';
import { MovieService } from '../movie-service';
import { IMovie } from '../movie';

import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.scss']
})

export class FeaturedMoviesComponent implements OnInit {
  movies$: Observable<IMovie[]>;
  private searchTerms = new Subject<string>();

  movies: IMovie[];

  constructor(private movieService: MovieService) {
    //console.log(" TopTwoMovies: ", this.TopTwoMovies);
  }

  ngOnInit() {
    this.getMovies();
    this.movies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.movieService.searchMovie(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  //movies = MOVIES;
  //TopTwoMovies = this.movies.slice(0,2);  //Top 2 movies laten zien
  
  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }


  

  

}
