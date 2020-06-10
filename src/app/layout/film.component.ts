import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Bigmovie } from './bigmovie.component';
import { HttpService } from '../http.service'

@Component({
    selector: 'film-app',
    templateUrl: './film.component.html',
})

export class FilmComponent implements OnInit {

   movieId: number;

   constructor(private activatedRoute: ActivatedRoute,
               private HttpService: HttpService,
               private router: Router){

        this.movieId = activatedRoute.snapshot.params['movieId'];
    }


  ngOnInit() {
    this.HttpService.getMovieById(this.movieId).subscribe(data => {
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
