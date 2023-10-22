import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getObject } from './../../store/actions'
import { AboutState } from '../../models';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, OnDestroy {
  public getObjectSubscription!: Subscription;
  public getMetaSubscription!: Subscription;
  public data!: AboutState
  public description!: SafeHtml;
  

  constructor(private store: Store<any>, private titleService: Title, private sanitizer: DomSanitizer) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  dispatch() {
    this.store.dispatch(getObject());
  }

  getObject(): void {
  }

  getMeta(): void {
  }


}
