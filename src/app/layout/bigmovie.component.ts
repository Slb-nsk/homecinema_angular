import {Injectable} from '@angular/core'


@Injectable()
export class Bigmovie {
         constructor(public movieId: number = 0,
                     public movieRussianName: string = "",
                     public movieOriginalName: string = "",
                     public seriesAmount: number = 0,
                     public movieYear: number = 0,
                     public description: string = "",
                     public countries: string[] = [],
                     public genres: string[] = [],
                     public imageUrl: string[] = []
                  )

{}

}
