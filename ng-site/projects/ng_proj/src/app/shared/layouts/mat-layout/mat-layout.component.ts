import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PlatformService } from '../../services';
import { getLayoutData } from '../../store/actions';
import { selectInitialData } from './../../store/selector';
import { Subscription } from 'rxjs';
import { LayoutState } from '../../models/meta';
import { MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-mat-layout',
  templateUrl: './mat-layout.component.html',
  styleUrls: ['./mat-layout.component.scss'],
})
export class MatLayoutComponent implements OnDestroy, OnInit, AfterViewInit {
  public isOpen = false;
  public isMobile = false;
  public dataSubscription!: Subscription;
  public platformSubscription!: Subscription;
  public mainClass!: string;
  public toolBarClass: string = '';
  public state!: LayoutState;
  public obj!: string;
  @ViewChild(MatSidenavContent) matSidenavContent!: MatSidenavContent;

  constructor(private store: Store<any>, public platForm: PlatformService, private router: Router) {}

  ngOnInit(): void {
    this.dispatch();
    this.checkPlatform();
    this.getInitialLayoutState();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isOpen = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.matSidenavContent.elementScrolled().subscribe(
      (data: any) => {
        if(data.currentTarget.scrollTop > 120) {
          this.obj = data.currentTarget.scrollTop;
          this.toolBarClass = 'sticky';
        }else {
          this.toolBarClass = '';
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe()
    this.platformSubscription.unsubscribe()
  }

  dispatch() {
    this.store.dispatch(getLayoutData())
  }

  toggleNav(): void {
    this.isOpen = !this.isOpen;
  }

  checkPlatform(): void {
    this.platformSubscription = this.platForm.isMobileDevice$.subscribe((data) => {
      this.isMobile = data;
      if (data) {
        this.mainClass = 'is-mobile';
      } else {
        this.mainClass = 'is-large';
      }
    });
  }


  getInitialLayoutState(): void {
    this.dataSubscription = this.store.select(selectInitialData).subscribe(data => {
      this.state = data;
    })
  }

}
