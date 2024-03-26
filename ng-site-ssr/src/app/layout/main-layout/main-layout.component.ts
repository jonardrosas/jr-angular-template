import { CdkScrollable, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { SideDrawerComponent } from '../../components/side-drawer/side-drawer.component';
import { DARK, MODE } from '../../models';
import { BreakpointService } from '../../services/platform.service';
import * as selector from './../../store/main/selector'


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, SideDrawerComponent, NavigationComponent, ScrollingModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements AfterViewInit {
  menus$ = this.store.select(selector.selectMenu)
  footer$ = this.store.select(selector.selectFooterData)
  public isMobile$: Observable<boolean>;
  public appName = 'assets/brand.png';
  public themeMode: MODE = '';
  public navigationClass: string;
  public defaultClass = 'bg-transparent text-primary-800 dark:text-primary-50'
  public isOpen!: boolean;
  @ViewChild(CdkScrollable) content!: CdkScrollable;

  constructor(private readonly store: Store, private route: Router, private breakpointService: BreakpointService, private ref: ChangeDetectorRef, private zone: NgZone) {
    this.isMobile$ = this.breakpointService.isSmallDevice$;
    this.navigationClass = this.defaultClass;

    this.route.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isOpen = false;
      }
    })
    this.isMobile$.subscribe(() => (this.isOpen = false))
  }

  ngAfterViewInit(): void {
     this.content.elementScrolled().subscribe(
      () => {
        const offset = this.content.measureScrollOffset('top')
        if(offset > 64) {
          this.navigationClass = 'bg-primary-50 dark:bg-primary-900 dark:text-primary-50';
        } else {
          this.navigationClass = this.defaultClass;
        }
        this.ref.detectChanges()
      })
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
  }

  toggleTheme() {
    if(this.themeMode == DARK) {
      this.themeMode = '';
    }else {
      this.themeMode = 'dark';
    }
  }
}
