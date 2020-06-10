import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
    selector: 'ok-app',
    templateUrl: './ok.component.html',
})

export class OkComponent {

   public name: string;
   public querySubscription: Subscription;

   constructor(private route: ActivatedRoute){

        this.querySubscription = route.queryParams.subscribe(
                (queryParam: any) => {
                this.name = queryParam['name'];
            }
        );
    }

  ngOnDestroy(){ this.querySubscription.unsubscribe();}


}
