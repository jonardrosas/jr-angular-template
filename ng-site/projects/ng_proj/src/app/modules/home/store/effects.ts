import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { HomeService } from '../services';
import * as actions from './actions'
 
@Injectable()
export class HomeEffects {
 
  loadHome$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getObject),
    exhaustMap(() => this.homeService.getObject()
      .pipe(
        map(obj => (actions.setObject({data: obj}))),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private homeService: HomeService
  ) {}
}