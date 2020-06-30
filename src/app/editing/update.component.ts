import { Input, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Bigmovie } from '../entities/bigmovie.component';
import { HttpService } from '../http.service';
import { ChangeUrlComponent } from './changeurl.component';

@Component({
    selector: 'update-app',
    templateUrl: './update.component.html',
})

export class UpdateComponent {

   private querySubscription: Subscription;
   public movie: Bigmovie;
      updateForm: FormGroup;

  @ViewChild(ChangeUrlComponent) private changeUrl: ChangeUrlComponent;

   constructor(private route: ActivatedRoute,
               private HttpService: HttpService,
               private router: Router){
          this.movie = new Bigmovie;

      this.movie.movieId = this.route.snapshot.params['movieId'];
          this.querySubscription = this.route.queryParams.subscribe(
                (queryParam: any) => {
                  this.movie.movieRussianName= queryParam['movieRussianName'];
                  this.movie.movieOriginalName=queryParam['movieOriginalName'];
                  this.movie.movieYear= queryParam['movieYear'];
                  this.movie.seriesAmount= queryParam['seriesAmount'];
                  this.movie.countries= queryParam['countries'];
                  this.movie.genres= queryParam['genres'];
                  this.movie.description= queryParam['description'];
                  this.movie.imageUrl= queryParam['imageUrl'];
                  this.movie.sourceUrl= queryParam['sourceUrl'];
                }
          )

    this.updateForm = new FormGroup({
         "movieRussianName": new FormControl(this.movie.movieRussianName, Validators.required),
         "movieOriginalName": new FormControl(this.movie.movieOriginalName),
         "movieYear": new FormControl(this.movie.movieYear),
         "seriesAmount": new FormControl(this.movie.seriesAmount),
         "description": new FormControl(this.movie.description),
         "genres": new FormControl(this.movie.genres),
         "countries": new FormControl(this.movie.countries),
         "imageUrl": new FormControl(this.movie.imageUrl)
        });


     }

    deleteAll(){
console.log("delete movie with this ID:",this.movie.movieId);
        this.HttpService.deleteData(this.movie.movieId);
      this.router.navigate(['ok'], {queryParams:{'name': this.movie.movieRussianName}});
    }

    goBack(){

    if (this.movie.seriesAmount >1) {
      this.router.navigate(['serial', this.movie.movieId]);
        } else {
      this.router.navigate(['film', this.movie.movieId]);
       };

   }

    changeSeriesAmount(){
      this.movie.seriesAmount = this.updateForm.value["seriesAmount"];
    }

  onSubmit() {
      this.HttpService.putData(this.movie.movieId,
                                this.updateForm.value.movieRussianName,
                                this.updateForm.value.movieOriginalName,
                                this.updateForm.value.movieYear,
                                this.updateForm.value.seriesAmount,
                                this.updateForm.value.countries,
                                this.updateForm.value.genres,
                                this.updateForm.value.imageUrl,
                                this.updateForm.value.description,
                                this.updateForm.value.description).subscribe();
      this.router.navigate(['ok'], {queryParams:{'name': this.updateForm.value.movieRussianName}});
    }

  ngOnDestroy() { this.querySubscription.unsubscribe();}

}


