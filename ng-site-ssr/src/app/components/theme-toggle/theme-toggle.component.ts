import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DARK } from '../../models';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent implements OnChanges {
  @Output() toggle = new EventEmitter();
  @Input() themeMode = 'light_mode';
  public themIcon = 'light_mode';

  ngOnChanges() {
    if(this.themeMode == DARK) {
      this.themIcon = 'light_mode'
    }else {
      this.themIcon = 'dark_mode'
    }
  }  

}
