import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent {
  @Input() appName!: string;
}
