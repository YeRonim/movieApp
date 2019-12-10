// export interface IMovie {
//     Type:string;
//     Title:string;
//     Year:number;
//     imdbID:number;
//     Poster:"string";

// }

//http://www.omdbapi.com/?s=bri&apiKey=6c3a2d45


export interface IMovie {
    Title:string;
    Year:number;
    Rated:number;
    Released:Date;
    Runtime:string;
    Genre:string;
    Director:string;
    Writer:string;
    Actors:string;
    Plot:string;
    Language:string;
    Country:string;
    Awards:string;
    Poster:string;
    Ratings:Array<any>;
    Metascore:number;
    imdbRating:number;
    imdbVotes:number;
    imdbID:string;
    Type:string;
    DVD:string;
    BoxOffice:string;
    Production:string;
    Website:string;    
}