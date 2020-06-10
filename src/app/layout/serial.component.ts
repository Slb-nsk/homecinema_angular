import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

import { Bigmovie } from './bigmovie.component';
import { HttpService } from '../http.service'

@Component({
    selector: 'serial-app',
    templateUrl: './serial.component.html',
})

export class SerialComponent implements OnInit {

   movieId: number;

   constructor(private activateRoute: ActivatedRoute,
               private HttpService: HttpService,
               private router: Router){

        this.movieId = activateRoute.snapshot.params['movieId'];
    }


  ngOnInit() {
    this.HttpService.getMovieById(this.movieId).subscribe(data => {
   console.log(data);
      this.movie = data;},

      );
    }

  onClick() {
      this.router.navigate(['update', this.movie.movieId],
                  {queryParams:{
                  'movieRussianName': this.movie.movieRussianName,
                  'movieOriginalName': this.movie.movieOriginalName,
                  'movieYear': this.movie.movieYear,
                  'seriesAmount': this.movie.seriesAmount,
                  'countries': this.movie.countries,
                  'genres': this.movie.genres,
                  'description': this.movie.description,
                  'imageUrl': this.movie.imageUrl
                  }}
                         );
    }


@Input() movie: Bigmovie;

}
