import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeState } from './../../models/home.interface';
import { PlatformService } from '../../../../shared/services/platform.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
  ],
})
export class HeroComponent implements OnInit, OnDestroy, OnChanges {

  constructor(private router: Router, private platformService: PlatformService) {}

  ngOnInit(): void {
  }

  @Input() heroData!: HomeState;

  ngOnChanges(changes: any) {
  }

  ngOnDestroy(): void {
  }

}
