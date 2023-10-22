import { animate, style, transition, trigger, state, keyframes } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-brand',
  templateUrl: './nav-brand.component.html',
  styleUrls: ['./nav-brand.component.scss'],
  animations: [
    trigger('brandAnimate', [
      transition(':enter', [
        animate('500ms',
        keyframes([
          style({transform: 'translateX(-200px)',opacity: 0}),
          style({transform: 'translateX(-100px)', opacity: .5}),
          style({transform: 'translateX(-0)', opacity: 1})
        ])
        )
      ])
    ])
  ]
})
export class NavBrandComponent implements OnInit {
  @Input() brand = '';
  state: string = 'stop'

  constructor() {}

  ngOnInit(): void {}

}
