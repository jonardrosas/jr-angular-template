import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { getObject } from './../../store/actions';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit, OnDestroy {

  constructor(private store: Store<any>, private titleService: Title ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  dispatch() {
    this.store.dispatch(getObject())
  }

  getObject() {
  }


  getMeta() {
  }

}
