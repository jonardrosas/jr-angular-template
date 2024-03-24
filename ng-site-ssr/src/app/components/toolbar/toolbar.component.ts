import { Component, Output, Input, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrandComponent } from '../brand/brand.component';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { MenuItemInterface } from './../../models'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule, MatToolbarModule,
    MatButtonModule, MatIconModule,
    BrandComponent, NavItemComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  @Input() appName!: string;
  @Input() menus!: MenuItemInterface[];
  @Output() toggle = new EventEmitter();
  public className: string = 'bg-primary'

  constructor() {
  }

  toggleBtn() {
    this.toggle.emit()
  }

  test() {
    this.className = 'bg-accent'
    console.log(this.className)
  }

}
