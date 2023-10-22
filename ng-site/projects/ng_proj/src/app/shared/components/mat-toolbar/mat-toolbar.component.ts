import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { PlatformService } from '../../services/platform.service';
import { LayoutState } from './../../models/meta';
import { OnscrollDirective } from '../../directives/onscroll.directive';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.scss'],
})
export class MatToolbarComponent implements OnInit{
  @Input() state!: LayoutState;
  @Input() mainClass!: string;
  @Input() isMobile!: boolean;
  @Input() isOpen!: boolean;
  @Output() toggleNav = new EventEmitter();
  @ViewChild(OnscrollDirective) scroll!: OnscrollDirective;
  public isSmall!: boolean;
  public scrollSubscription!: Subscription;
  public toolbarClass!: string;
  public animateBrand: boolean = false;

  constructor(private platForm: PlatformService) {}

  ngOnInit(): void {
    this.animateBrand = true;

  }

  getToolbarClass() {
    return `${this.mainClass} ${this.toolbarClass}`
  }

  toggle(): void {
    this.toggleNav.emit(true);
  }
}
