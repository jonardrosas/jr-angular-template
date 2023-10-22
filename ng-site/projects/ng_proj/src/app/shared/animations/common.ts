import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  state,
  keyframes,
  query,
  stagger,
} from '@angular/animations';

export const fadeRight = trigger('fadeRight', [
  state('true', style({ opacity: 1, transform: 'translateX(0)' })),
  state('false', style({ opacity: 0, transform: 'translateX(-200px)' })),
  transition('false => true', [
    animate(
      '1s ease-out',
      keyframes([
        style({
          opacity: 0.7,
          transform: 'translateX(0)',
        }),
      ])
    ),
  ]),
  transition('true => false', [
    animate(
      '1s ease-out',
      keyframes([
        style({
          opacity: 0,
        }),
      ])
    ),
  ]),
]);

export const fadeLeft = trigger('fadeLeft', [
  state('true', style({ transform: 'translateX(0)' })),
  state('false', style({ transform: 'translateX(0)' })),
  transition('false => true', [
    animate(
      '1s ease-out',
      keyframes([
        style({ transform: 'translateX(50px)' }),
        style({ transform: 'translateX(40px)' }),
        style({ transform: 'translateX(30px)' }),
        style({ transform: 'translateX(20px)' }),
        style({ transform: 'translateX(10px)' }),
        style({ transform: 'translateX(5px)' }),
      ])
    ),
  ]),
  transition('true => false', [animate('1s ease-out')]),
]);
