import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie-service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService }  from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FeaturedMoviesComponent,
    SearchedMovieComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }
    )
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
