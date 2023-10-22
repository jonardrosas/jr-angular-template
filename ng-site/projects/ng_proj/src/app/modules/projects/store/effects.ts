import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProjectService } from '../services/project.service';
import * as actions from './actions'
import { PageQuery, ProjectState } from '../model';
 
@Injectable()
export class ProjectEffects {
 

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}