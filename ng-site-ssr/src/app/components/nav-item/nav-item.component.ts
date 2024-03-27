import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItemInterface } from '../../models';


@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {
  @Input({ required: true }) menus!: MenuItemInterface[];
}
