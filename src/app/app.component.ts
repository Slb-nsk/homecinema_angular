import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';
import { Movie } from './movie.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent implements OnInit{
  kind: string = 'Any';
  country:string = 'Any';
  genre: string = 'Any';
  movies: Movie[];


  findMovies(kind: string, country: string, genre: string) {
/*    this.http.get<Movie[]>('http://localhost:8080/').subscribe(data => {
   console.log(data);
      this.movies = data;
   console.log(this.movies[0].movieId);
    },


    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log('Backend returned code ${err.status}, body was: ${err.error}'
      );
    }

   }
  ) */ 
 }


  constructor(private httpService: HttpService){
  }


  ngOnInit() {
  }

}
                    