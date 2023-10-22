import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { MetaService } from '../services';
import * as actions from './actions'
import { ResponseLayoutState } from '../models/meta';
 
@Injectable()
export class BaseEffectsEffects {
 
  loadBaseIndex$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getLayoutData),
    exhaustMap(() => this.metaService.getMeta()
      .pipe(
        map(obj => {
            let newObj: ResponseLayoutState;
            newObj = obj.results[0];
            return actions.updateLayoutData({data: newObj})
        }),
        catchError(() => EMPTY)
      ))
    )
  );

 
  constructor(
    private actions$: Actions,
    private metaService: MetaService
  ) {}
}