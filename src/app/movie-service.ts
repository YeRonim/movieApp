import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';



@Injectable()
export class MovieService {
   //private _url:string  = "api/movies";
   private environment = environment;
   
   //JSON.stringify(MOVIES) ; //JSON.parse((/assets/data/movies.json)
    //movies: IMovie[] = MOVIES;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };    
    
    constructor(private http: HttpClient){
        console.log("constructor MovieService", environment.baseUrl);
        //console.log("inladen url: ", this._url);
    }

    getMovies():Observable<IMovie[]>{          //Hier wordt de observable gedefinieerd. Hier kan je je op subscriben.
        return this.http.get<IMovie[]>(environment.baseUrl);
    }

    getMovie(id: number): Observable<IMovie> {
        const url = `${this.environment.baseUrl}/${id}`;
        return this.http.get<IMovie>(url).pipe(          
          catchError(this.handleError<IMovie>(`getMovie id=${id}`))
        );
      }

    searchMovie(term:string): Observable<IMovie[]>{        
        console.log("movie-service.ts  term: ",term);       
        console.log("test:", this.http.get<IMovie[]>(`${this.environment.baseUrl}/?s=${term}&apiKey=6c3a2d45`).subscribe(response => console.log("response: ",response)));
        //console.log(this.http.get<IMovie[]>(`${this._url}?Title=${term}`).subscribe(response => console.log("response: ",response)));
        
        if(!term.trim()){
            //If not search term, return empty movie array
            return of([]);
        }
        else{
            //let searchedMovies = this.http.get<IMovie[]>(`${this._url}`)
            //console.log(`checkUrl: ${JSON.stringify(searchedMovies)}`)            
            
            //return searchedMovies ;
            //return this.http.get<IMovie[]>(`${this._url}/?Title=${term}`)    
            return this.http.get<IMovie[]>(`${this.environment.baseUrl}/?s=${term}&apiKey=6c3a2d45`)   
        }             
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
      
          // TODO: better job of transforming error for user consumption
          //this.log(`${operation} failed: ${error.message}`);
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}

