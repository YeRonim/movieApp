import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMovie } from '../movie';
import { MovieService } from '../movie-service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  movies$: Observable<IMovie[]>;

  
  show: boolean = false;
  public searchTerms =  new Subject<string>();
  public maxResults_search:number = 3;  //use slice in template
 

  constructor(private movieService:MovieService) { }
  

  ngOnInit() {
    
    this.movies$ = this.searchTerms.pipe(
      //Wait 300ms after each keystroke before considering the term
      debounceTime(700),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.movieService.searchMovie(term)),      
    );   
    
  }

  //Push a search term into the observable stream.
  search(term: string): void{
    console.log("in search.component - search(term)", term);
    this.searchTerms.next(term);

    
  }

  // setPresentMovies(){
  //   this.settingPresentMovies = !this.settingPresentMovies;
  //   console.log("settingPresentMovies:", this.settingPresentMovies)
    
  // }
  
}
