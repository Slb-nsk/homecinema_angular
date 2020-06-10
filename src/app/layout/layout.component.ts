import { Input, Component, OnInit } from '@angular/core';

import { Movie } from './movie.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})


export class LayoutComponent implements OnInit {

  constructor(private HttpService: HttpService) {}

  ngOnInit() {
    this.HttpService.getData().subscribe(data => {
      this.movies = data;},

      );
    }

@Input() movies: Movie[];

}



