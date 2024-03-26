import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSection } from '../../models';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input() heroSection!: HeroSection;
}
