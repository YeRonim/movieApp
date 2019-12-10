import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'featured-movie', component: FeaturedMoviesComponent },  
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'detail-movie/:id', component: MovieDetailComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }