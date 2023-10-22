import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appOnscroll]',
})
export class OnscrollDirective {
  @Input() appOnscroll!: number; // height of element
  public isLess = new BehaviorSubject(false);
  public scrollTop = new BehaviorSubject(0);
  public elementHeight!: number;
  public isVisible = new BehaviorSubject(false);

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.appOnscroll) {
      this.elementHeight = this.appOnscroll;
    } else {
      this.elementHeight = this.el.nativeElement.offsetHeight;
    }
    console.log("Element", this.elementHeight)
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollTop.next(scrollTop);
    console.log("Scroll", this.elementHeight, scrollTop)
    if (this.elementHeight <= scrollTop) {
      this.isLess.next(true);
    } else {
      this.isLess.next(false);
    }
  }
}
