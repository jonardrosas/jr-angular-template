import { createSelector } from '@ngrx/store';
import { ProjectState } from './../model';

interface ProjectPageState {
  projects: ProjectState;
}

export const selectProjectObject = (state: ProjectPageState) => state.projects;
