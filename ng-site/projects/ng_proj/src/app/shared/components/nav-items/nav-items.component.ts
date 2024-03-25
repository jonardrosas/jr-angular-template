import { Component, OnInit, Input } from '@angular/core';
import { PlatformService } from '../../services';
import { LayoutState } from './../../models/meta';
import { query, style, animate, keyframes, transition, trigger, stagger } from '@angular/animations';
import { keyValuesToMap } from '@angular/flex-layout/extended/style/style-transforms';

export interface NavState {
  link: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
  animations: [
    trigger('moveLeft', [
      transition(':enter', animate('2000ms', keyframes([
        style({opacity: 0, transform: 'translateX(300px)'}),
        style({opacity: .5, transform: 'translateX(150px)'}),
        style({opacity: 1, transform: 'translateX(0px)'}),
      ]
      ))),
      /*
      transition(':enter', 
        query('.mat-item', [
        stagger('1000ms', animate('500ms', keyframes(
          [
            style({opacity: 0, transform: 'translateX(300px)'}),
            style({opacity: .5, transform: 'translateX(150px)'}),
            style({opacity: 1, transform: 'translateX(0px)'}),
          ])
        ))
      ]))*/
    ])
  ]
})
export class NavItemsComponent implements OnInit {
  @Input() state!: LayoutState;
  @Input() mainClass!: string;
  brand!: string;
  navItems!: NavState[];
  public matItemsContainer!: string;

  constructor() {}

  ngOnInit(): void {
    this.navItems = this.state.naviItems;
    this.brand = this.state.brand;
  }
}
