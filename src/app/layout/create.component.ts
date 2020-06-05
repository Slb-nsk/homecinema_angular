import { Input, Component} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

import { Bigmovie } from './bigmovie.component';
import { HttpService } from '../http.service'

@Component({
    selector: 'create-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    templateUrl: './create.component.html',
})

export class CreateComponent {
  movieRussianName: string = '';
  movieOriginalName: string = '';
  seriesAmount: number = 1;
  countries: string = '';
  genres: string = '';
  imageUrl: string = '';

  createForm: FormGroup;



  constructor(private activateRoute: ActivatedRoute,
              private HttpService: HttpService,
              private router: Router){
    this.createForm = new FormGroup({
         "movieRussianName": new FormControl("", Validators.required),
         "movieOriginalName": new FormControl(),
         "movieYear": new FormControl(),
         "seriesAmount": new FormControl(),
         "description": new FormControl(),
         "imageUrl": new FormControl(),
         "countries": new FormControl(),
         "genres": new FormControl()
        });

    }


  onSubmit() {
      this.HttpService.postData(this.createForm.value.movieRussianName,
                                this.createForm.value.movieOriginalName,
                                this.createForm.value.movieYear,
                                this.createForm.value.seriesAmount,
                                this.createForm.value.countries,
                                this.createForm.value.genres,
                                this.createForm.value.imageUrl,
                                this.createForm.value.description).subscribe();
      this.router.navigate(['ok'], {queryParams:{'name': this.createForm.value.movieRussianName}});
    }



@Input() movie: Bigmovie;




}
