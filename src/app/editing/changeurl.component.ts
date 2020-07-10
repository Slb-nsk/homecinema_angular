import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'change-url',
  templateUrl: './changeurl.component.html',
})

export class ChangeUrlComponent implements OnChanges, OnInit {

  arr: FormArray;
  urlForm: FormGroup;
  private amountOfSeries: number;
  private control: FormControl;

  @Input() seriesAmount: number;
  @Input() sourceUrl: string[];

  constructor( ){
   this.urlForm = new FormGroup({
      arr : new FormArray([])
     });
   }

  ngOnInit() {
   this.arr = new FormArray([]);
       this.amountOfSeries = 0;
       do {
         this.control = new FormControl(this.sourceUrl[this.amountOfSeries]);
         this.arr.push(this.control);
         this.amountOfSeries++;
       }
       while (this.amountOfSeries < this.seriesAmount);
  }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
     this.arr = new FormArray([]);
         this.amountOfSeries = 0;
         do {
           this.control = new FormControl(this.sourceUrl[this.amountOfSeries]);
           this.arr.push(this.control);
           this.amountOfSeries++;
         }
         while (this.amountOfSeries < this.seriesAmount);
    }

}
