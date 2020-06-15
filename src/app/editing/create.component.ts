import { Input, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Bigmovie } from '../entities/bigmovie.component';
import { HttpService } from '../http.service';
import { AddUrlComponent } from './addurl.component';

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
  movieYear: number = 1;
  countries: string = '';
  genres: string = '';
  description: string = '';
  imageUrl: string = '';
  createForm: FormGroup;
  sourceUrl: string[];


  @ViewChild(AddUrlComponent) private addUrl: AddUrlComponent;

  @Input() movie: Bigmovie;

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
         "genres": new FormControl(),
        });
    }

        changeSeriesAmount(){
            this.seriesAmount = this.createForm.value["seriesAmount"];
        }



  onSubmit() {
      this.HttpService.postData(this.createForm.value.movieRussianName,
                                this.createForm.value.movieOriginalName,
                                this.createForm.value.movieYear,
                                this.createForm.value.seriesAmount,
                                this.createForm.value.countries,
                                this.createForm.value.genres,
                                this.createForm.value.imageUrl,
                                this.createForm.value.description,
                                this.addUrl.urlForm.value.sourceUrl).subscribe();
      this.router.navigate(['ok'], {queryParams:{'name': this.createForm.value.movieRussianName}});
    }

}
