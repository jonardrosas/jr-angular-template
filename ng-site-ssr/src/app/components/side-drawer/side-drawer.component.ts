import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { MenuItemInterface } from '../../models';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-side-drawer',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './side-drawer.component.html',
  styleUrl: './side-drawer.component.scss',
  animations: [
    trigger('moveLeft', [
      transition(':enter', animate('200ms', keyframes([
        style({opacity: 0, transform: 'translateX(-300px)'}),
        style({opacity: .5, transform: 'translateX(-150px)'}),
        style({opacity: 1, transform: 'translateX(0px)'}),
      ]))),
      transition(':leave', animate('200ms', keyframes([
        style({opacity: 1, transform: 'translateX(0px)'}),
        style({opacity: .5, transform: 'translateX(-150px)'}),
        style({opacity: 0, transform: 'translateX(-300px)'}),
      ]))),

    ])
  ]  
})
export class SideDrawerComponent {
  @Input() menus!: MenuItemInterface[];
  @Input() opened!: boolean;
  @Input() className!: string;
  @Output() toggle = new EventEmitter()
  @Output() themeToggle = new EventEmitter()
}
