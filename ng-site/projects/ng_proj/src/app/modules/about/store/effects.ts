import { Injectable  } from "@angular/core";
import { DataService } from "../services/data.service";


import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as actions from './actions';
import { AboutState } from './../models'



@Injectable()
export class AboutEffects {

   loadAboutIndex$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getObject),
    exhaustMap(() => this.dataService.getObject()
      .pipe(
        map(obj => {
            let newObj: AboutState;
            newObj = obj.results[0]
            return actions.updateData({data: newObj})
        }),
        catchError(() => EMPTY)
      ))
    )
  );   

    constructor( private actions$: Actions, private dataService: DataService) {

    }
}
