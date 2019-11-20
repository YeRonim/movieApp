import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService }  from '../movie-service';
import { IMovie } from '../movie';


@Component({
  selector: 'app-searched-movie',
  templateUrl: './searched-movie.component.html',
  styleUrls: ['./searched-movie.component.scss']
})


export class SearchedMovieComponent implements OnInit {
  @Input() movie: IMovie;
  public movies = [];

  constructor( private route: ActivatedRoute, private movieService: MovieService, private location: Location) { }

  ngOnInit() {
    this.getMovie(); 
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

}

