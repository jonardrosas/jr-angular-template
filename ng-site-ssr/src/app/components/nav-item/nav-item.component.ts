import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MenuItemInterface, DARK } from '../../models';


@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink, MatIcon, MatButton],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent implements OnChanges{
  @Input({ required: true }) menus!: MenuItemInterface[];
  @Output() themeToggle = new EventEmitter()
  @Output() toggleNav = new EventEmitter()
  public themIcon = 'light_mode';
  @Input() themeMode = 'light_mode';

  ngOnChanges() {
    if(this.themeMode == DARK) {
      this.themIcon = 'light_mode'
    }else {
      this.themIcon = 'dark_mode'
    }
  }
  
  getIcon() {
  }

  toggleThem() {
    this.themeToggle.emit()
  }

}
