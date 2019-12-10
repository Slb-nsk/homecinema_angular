import { Input, Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

import { Bigmovie } from './bigmovie.component';
import { HttpService } from '../http.service'
  
@Component({
    selector: 'update-app',
    templateUrl: './update.component.html',
})

export class UpdateComponent {

   private querySubscription: Subscription;
   private movie: Bigmovie;      
      updateForm: FormGroup;

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
this.movie.country= queryParam['country']; 
this.movie.genre= queryParam['genre']; 
this.movie.description= queryParam['description'];
                }
          )

    this.updateForm = new FormGroup({
         "movieRussianName": new FormControl(this.movie.movieRussianName, Validators.required),
         "movieOriginalName": new FormControl(this.movie.movieOriginalName),
         "movieYear": new FormControl(this.movie.movieYear),
         "seriesAmount": new FormControl(this.movie.seriesAmount),
         "description": new FormControl(this.movie.description),
         "country": new FormArray([
             new FormControl()
           ]),
         "genre": new FormArray([
             new FormControl()
           ])
        });


     }

    addCountry(){
        (<FormArray>this.updateForm.controls["country"]).push(new FormControl());
    }

    removeCountry(i: number){
        (<FormArray>this.updateForm.controls["country"]).removeAt(i);
    }

    addGenre(){
        (<FormArray>this.updateForm.controls["genre"]).push(new FormControl());
    }

    removeGenre(i: number){
        (<FormArray>this.updateForm.controls["genre"]).removeAt(i);
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

  onSubmit() {
      this.HttpService.putData(this.movie.movieId,
                                this.updateForm.value.movieRussianName, 
                                this.updateForm.value.movieOriginalName, 
                                this.updateForm.value.movieYear,
                                this.updateForm.value.seriesAmount, 
                                this.updateForm.value.country, 
                                this.updateForm.value.genre, 
                                this.updateForm.value.description).subscribe();
      this.router.navigate(['ok'], {queryParams:{'name': this.updateForm.value.movieRussianName}});
    }



  ngOnDestroy() { this.querySubscription.unsubscribe();}

     
}


