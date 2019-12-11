import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service';
import { IMovie } from '../movie';


@Component({
  selector: 'app-movie',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.scss']
})

export class FeaturedMoviesComponent implements OnInit {  
  movie: IMovie; 
  featuredMovies:Array<IMovie>=[];
  featuredMoviesId:Array<string> = ["tt0083866", "tt0319061"];

  constructor(
      private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.getFeaturedMovies()
  }

  getFeaturedMovies(): void {   
    for(let i=0; i<this.featuredMoviesId.length; i++){

      this.movieService.getMovie(this.featuredMoviesId[i])
      .subscribe(movie => {
        console.log("movie: ", movie);
        this.featuredMovies.push(movie);        
      });
    }    
  }


  

  

}
