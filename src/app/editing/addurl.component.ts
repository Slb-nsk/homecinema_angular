import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'add-url',
  templateUrl: './addurl.component.html',
})

export class AddUrlComponent implements OnChanges {

  urlForm :FormGroup;
  private amountOfSeries: number = 0;

  @Input() seriesAmount: number;

  constructor(){
    this.urlForm = new FormGroup({
      "sourceUrl" : new FormArray([])
    });
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
