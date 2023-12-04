import {
  trigger, transition, style, query, animateChild, group, animate
} from '@angular/animations';
export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0 }),
      animate('500ms', style({ opacity: 1 }))
    ], { optional: true }),
  ])
]);
