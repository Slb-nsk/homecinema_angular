import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Movie } from './entities/movie.component';
import { Bigmovie } from './entities/bigmovie.component';

@Injectable()
export class HttpService{
  myUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient){ }

   getData(){

   return this.http.get<Movie[]>(this.myUrl)
   }

   getMovieById(movieId: number){


   return this.http.get<Bigmovie>(this.myUrl + movieId)
   }

   postData(movieRussianName: string, movieOriginalName: string,
            movieYear: number, seriesAmount: number, countries: string,
            genres: string, description: string, imageUrl: string, sourceUrl: string[]){
   const body = {movieRussianName, movieOriginalName, movieYear, seriesAmount,
                 countries, genres, description, imageUrl, sourceUrl};
   return this.http.post(this.myUrl + 'add', body);
   }

   putData(movieId: number, movieRussianName: string, movieOriginalName: string,
            movieYear: number, seriesAmount: number, countries: string,
            genres: string, description: string, imageUrl: string){
   const body = {movieRussianName, movieOriginalName, movieYear, seriesAmount,
                 countries, genres, description, imageUrl};
   return this.http.put(this.myUrl + movieId, body);
   }

   deleteData(movieId: number){
console.log(this.myUrl + movieId);
   return this.http.delete(this.myUrl + movieId)
.subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body",
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
   }

}
