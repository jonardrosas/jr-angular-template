import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BrandComponent } from '../brand/brand.component';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { ToggleBtnComponent } from './../toggle-btn/toggle-btn.component'
import { MenuItemInterface, ProfileState } from './../../models'
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule, BrandComponent, NavItemComponent,
    ToggleBtnComponent, ThemeToggleComponent,
    ProfileComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  @Input() appName!: string | null;
  @Input() themeMode!: string;
  @Input() menus!: MenuItemInterface[];
  @Output() toggle = new EventEmitter();
  @Output() themeToggle = new EventEmitter();
  @Input() className!: string;
  @Input() userProfile!: ProfileState | null;
}
