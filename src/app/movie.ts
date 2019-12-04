// export interface IMovie {
//     id:number;
//     Title:string;
//     Type:string;
//     Year:number;
//     Rated:number;
//     Genre:string;
//     Director:string;
//     Actors:string;
//     Plot:string;
//     Awards:string;
//     Poster:string;
// }

export interface IMovie {
    Type:string;
    Title:string;
    Year:number;
    imdbID:number;
    Poster:"string";

}

//http://www.omdbapi.com/?s=bri&apiKey=6c3a2d45