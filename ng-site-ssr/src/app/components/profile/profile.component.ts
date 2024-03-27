import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProfileState } from '../../models';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() userProfile!:ProfileState | null;
}
