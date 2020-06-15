import {Injectable} from '@angular/core'


@Injectable()
export class Movie {
         constructor(public movieId: number,
                     public movieRussianName: string,
                     public movieOriginalName: string,
                     public seriesAmount: number,
                     public movieYear: number,
                     public imageUrl: string
                  )

{}

}
