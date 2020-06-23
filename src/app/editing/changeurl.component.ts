import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'change-url',
  templateUrl: './changeurl.component.html',
})

export class ChangeUrlComponent implements OnChanges {

  urlForm :FormGroup;
  private amountOfSeries: number;

  @Input() seriesAmount: number;
  @Input() sourceUrl: string[];

  constructor(){
    this.urlForm = new FormGroup({
      "sourceUrl" : new FormArray([])
    });
  }

  ngOnInit() {
  console.log(this.seriesAmount, this.sourceUrl);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  this.amountOfSeries = 0;
    this.urlForm = new FormGroup({
      "sourceUrl" : new FormArray([])
    });
  do {
    (<FormArray>this.urlForm.controls["sourceUrl"]).push(new FormControl(''));
    this.amountOfSeries++;
  }
  while (this.amountOfSeries < this.seriesAmount);

  }

}
