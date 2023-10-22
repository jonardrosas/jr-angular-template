import { Component, Input, OnInit } from '@angular/core';
import { APPCONFIG } from '../../../config';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  @Input() message: string = 'Coming Soon';
  public image = APPCONFIG.aiUnderContruction;

  constructor() { }

  ngOnInit(): void {
  }

}
