import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { SearchComponent } from './search/search.component';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component'


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'featured-movie', component: FeaturedMoviesComponent },
  //{ path: 'found-movies/', component: SearchedMovieComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'searched-movie/:id', component: SearchedMovieComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }