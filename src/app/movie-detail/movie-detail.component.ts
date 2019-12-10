import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService }  from '../movie-service';
import { IMovie } from '../movie';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {
 @Input() movie: IMovie;
  

  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit() {    
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
     //id = 'tt1795096';
    console.log("id1: ",id.toString);

    this.movieService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
        console.log("movieDetail = ", movie);
        console.log("id1: ",id);
      });
  }

}
