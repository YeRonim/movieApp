import { Component, OnInit, ViewChild, ElementRef, AfterContentChecked, DoCheck, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService }  from '../movie-service';
import { IMovie } from '../movie';
import { Subscription } from 'rxjs'
 

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {
  movie:IMovie; 
  plotShort:boolean;
  plotContent:string;
  movieLoaded: Promise<boolean>;

  @ViewChild('plot', {static:false}) plotRef: ElementRef;

  public person:string;
  movieShort:string;
  movieSubscription:Subscription;
 
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit() {    
    this.getMovie();             
  }  

  getMovie(): void {
    console.log("In getMovie");
    
    const id = this.route.snapshot.paramMap.get('id');     
    this.movieService.getMovie(id).subscribe(movie => 
    {
        this.movie = movie;  
        console.log("this.movie.Plot in getMovie: ", this.movie.Plot);         
        console.log("movieLoaded", this.movieLoaded);   
        this.plotShortLength(); 
    });

  }  

  plotShortLength(){
    console.log("in plotlength");
    console.log("movie.Plot: ",this.movie.Plot);
      

    if(this.movie.Plot.length > 50){
      console.log("in movie.Plot.length>50")
      this.plotShort = true;
      let plotShortContent = this.movie.Plot.substring(0,50);
      this.plotContent = plotShortContent;      
    }      

    if(this.movie.Plot.length < 50){
      console.log("in movie.Plot.length<50")
      this.plotShort = false;
      let plotShortContent = this.movie.Plot;
      this.plotContent = plotShortContent; 
    }    
    console.log("plotContent: ", this.plotContent);   

  }

  moreLess(){  
    console.log("In moreLess")
    this.plotShort = !this.plotShort;
    console.log("this.plotShort", this.plotShort);    
  }

  ngOnDestroy(){
    //this.movieSubscription.unsubscribe();
  }

}



