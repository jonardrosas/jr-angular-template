import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { DataService } from './../services'
import * as actions from './actions';
import { ContactState } from './../models'


@Injectable()
export class ContactEffect {

  loadProjectIndex$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getObject),
    exhaustMap(() => this.dataService.getObject()
      .pipe(
        map(obj => {
            let newObj: ContactState;
            newObj = obj.results[0]
            return actions.updateObject({data: newObj})
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
