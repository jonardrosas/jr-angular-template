import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrandComponent } from '../brand/brand.component';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { MenuItemInterface } from './../../models'


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule,
    MatIconModule, BrandComponent,
    NavItemComponent    
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @Input() appName!: string;
  @Input() menus!: MenuItemInterface[];
  @Output() toggle = new EventEmitter();
  @Output() themeToggle = new EventEmitter();
  @Input() className!: string;

}
