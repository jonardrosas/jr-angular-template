import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectHomeObject } from '../../store';
import { HomeState } from '../../models/home.interface';
import { Subscription } from 'rxjs';
import { PlatformService } from 'projects/ng_proj/src/app/shared';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy, AfterViewInit {
  public state!: HomeState;
  private getObjectSubscription!: Subscription;
  private getPlatformSubscription!: Subscription;
  public isMobile: boolean = false;
  public pageClass: string = '';

  constructor(private store: Store<any>, private platFormService: PlatformService) {
  }

  ngOnInit(): void {
    this.getObject()
    this.getPlatform()
  }

  ngOnDestroy(): void {
    this.getObjectSubscription.unsubscribe()
    this.getPlatformSubscription.unsubscribe()
  }

  ngAfterViewInit(): void {
  }

  getObject(): void {
    this.getObjectSubscription = this.store.select(selectHomeObject).subscribe(
      (data) => {
        this.state = data;
      }
    )
  }

  getPlatform() {
    this.getPlatformSubscription = this.platFormService.isMobileDevice$.subscribe(
      (data) => {
        this.isMobile = data;
        if(data) {
          this.pageClass = 'is-mobile';
        }else {
          this.pageClass = '';
        }
      }
    )
  }

}
