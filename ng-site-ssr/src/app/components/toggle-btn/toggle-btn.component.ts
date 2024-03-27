import { Output, Component, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-toggle-btn',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './toggle-btn.component.html',
  styleUrl: './toggle-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleBtnComponent {
  @Output() toggle = new EventEmitter();
}
