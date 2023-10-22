import { Directive, ElementRef, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appOnview]',
})
export class OnviewDirective {
  public isVisible = new BehaviorSubject(false);
  @Input() appOnview: number = 0;

  constructor(private el: ElementRef) {
    const observer = new IntersectionObserver(this.setVisibility, { threshold: [this.appOnview] });
    observer.observe(this.el.nativeElement);
  }

  public setVisibility = (entries: any) => {
    if (entries[0].isIntersecting === true) {
      this.isVisible.next(true);
    } else {
      this.isVisible.next(false);
    }
  };
}
