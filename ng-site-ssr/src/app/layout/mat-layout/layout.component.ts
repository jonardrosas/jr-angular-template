import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { MatDrawer, MatDrawerMode, MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { FooterInterface, MenuItemInterface } from '../../models';
import { LayoutModule } from '@angular/cdk/layout'
import { BreakpointService } from '../../services/platform.service';
import { NavItemComponent } from '../../components/nav-item/nav-item.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatToolbarModule, NavItemComponent, LayoutModule, ToolbarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit, AfterViewInit {
  public appName = 'assets/brand.png';
  public isOpen!: boolean;
  public mode: MatDrawerMode = 'over';
  public menus: MenuItemInterface[];
  public footerState: FooterInterface;
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild(MatDrawerContent) matDrawerContent!: MatDrawerContent;
  @ViewChild(ToolbarComponent) toolbarComponent!: ToolbarComponent;

  constructor(private breakpointService: BreakpointService, private route: Router) {
    this.menus = [
      {
        id: 'products',
        label: 'Products',
        path: 'products'
      },
      {
        id: 'about',
        label: 'About',
        path: 'about'
      },
      {
        id: 'contact',
        label: 'Contact',
        path: 'contact'
      },

    ]
    this.footerState = {
      copyrightLink: '2024',
      copyrightText: 'Jonard'
    }
  }

  ngOnInit(): void {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.drawer.close()
      }
    })
  }

  ngAfterViewInit(): void {
    this.subscribeBreakpoint();
    this.subscribeScroll();
  }

  subscribeBreakpoint() {
    this.breakpointService.isSmallDevice$.subscribe(
      (result) => {
        this.checkDrawerState(result)
      }
    )
  }

  subscribeScroll() {
    this.matDrawerContent.elementScrolled().subscribe(
      (event: Event) => {
        if (event.currentTarget) {
          console.log(event.currentTarget)
        }
      }
    )
  }

  checkDrawerState(isMobile: boolean) {
    if (!isMobile) {
      this.drawer.close()
    }
  }

}
