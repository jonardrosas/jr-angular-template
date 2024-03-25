import { CdkScrollable, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { SideDrawerComponent } from '../../components/side-drawer/side-drawer.component';
import { FooterInterface, MenuItemInterface, AppState, DARK, MODE } from '../../models';
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
  public menus$: Observable<MenuItemInterface[]>;
  public footer$: Observable<FooterInterface>;
  public isMobile$: Observable<boolean>;
  public appName = 'assets/brand.png';
  public mode: MODE = '';
  public navigationClass!: string;
  public isOpen = false;
  @ViewChild(CdkScrollable) content!: CdkScrollable;

  constructor(private store: Store<AppState>, private route: Router, private breakpointService: BreakpointService, private ref: ChangeDetectorRef) {
    this.menus$ = this.store.select(selector.selectMenu)
    this.footer$ = this.store.select(selector.selectFooterData)
    this.isMobile$ = this.breakpointService.isSmallDevice$;

    this.route.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isOpen = false;
      }
    })

    this.isMobile$.subscribe(() => (this.isOpen = false))

  }

  ngAfterViewInit(): void {
     this.content.elementScrolled().subscribe(
      (data: any) => {
        console.log(data.target.scrollTop)
        if(data.target.scrollTop > 64) {
          this.navigationClass = 'opacity-50';
        } else {
          this.navigationClass = '';
        }
        this.ref.detectChanges()
      })
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
  }

  toggleTheme() {
    if(this.mode == DARK) {
      this.mode = '';
    }else {
      this.mode = 'dark';
    }
  }
}
