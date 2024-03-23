import { Component, Input } from '@angular/core';
import { FooterInterface } from '../../models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() data!: FooterInterface;

}
