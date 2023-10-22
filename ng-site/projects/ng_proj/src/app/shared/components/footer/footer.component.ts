import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { FooterState } from '../../models/meta';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() data!: FooterState;
  @Input() mainClass!: string;

  ngOnInit(): void {}

}
