import { animate, transition, trigger, style, state } from '@angular/animations';

export const projectTriggers = [
  trigger('toggle', [
    state('true', style({ transform: 'translateX(10px)' })),
    state('false', style({ transform: 'translateX(-230px)' })),
    transition('false => true', animate('10ms')),
    transition('true => false', animate('10ms')),
  ]),
  trigger('toggle2', [
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0, transform: 'translateX(-230px)' })),
    transition('false => true', animate('500ms')),
    transition('true => false', animate('500ms')),
  ]),
  trigger('mainToggle', [
    state('true', style({ transform: 'translateX(0px)' })),
    state('false', style({ opacity: 1, transform: 'translateX(-200px)' })),
    transition('false => true', animate('500ms ease-in')),
    transition('true => false', animate('500ms ease-in')),
  ]),
  trigger('contentToggle', [
    state('true', style({ transform: 'translateX(0)', width: '85%' })),
    state('false', style({ opacity: 1, transform: 'translateX(-230px)', width: '100%' })),
    transition('false => true', animate('200ms ease-in')),
    transition('true => false', animate('200ms ease-in')),
  ]),
];
