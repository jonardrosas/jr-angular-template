import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MenuItemInterface } from '../../models';


@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink, MatIcon, MatButton],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input({ required: true }) menus!: MenuItemInterface[];
  @Output() themeToggle = new EventEmitter()

}
