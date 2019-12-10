import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service';
import { IMovie } from '../movie';


@Component({
  selector: 'app-movie',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.scss']
})

export class FeaturedMoviesComponent implements OnInit {  
  movies: IMovie[];
  constructor(private movieService: MovieService) {    
  }

  ngOnInit() {
    //this.getMovies();   
  } 

  
  // getMovies(): void {
  //   this.movieService.getMovies()
  //     .subscribe(movies => this.movies = movies);   //.slice(0,2); //Top 2 movies laten zien -> of in movie-servie |slice:0:2
  // }


  

  

}
