import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ProjectState } from './../../model';
import { projectTriggers } from './../../animation/animation';

@Component({
  selector: 'app-project-index',
  templateUrl: './project-index.component.html',
  styleUrls: ['./project-index.component.scss'],
  animations: [ projectTriggers ],
})
export class ProjectIndexComponent implements OnInit, OnDestroy {
  public stateSubscription!: Subscription;

  constructor(private store: Store<{ projects: ProjectState }>) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }

  dispatchChildren() {
    // this.store.dispatch(getProjectChildren())
  }


}
