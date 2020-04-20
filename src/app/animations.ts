import { trigger, transition, style, animate } from '@angular/animations';

export const hamburgerMenuButtonTrigger = trigger('hamburgerMenuButtonTrigger', [
  transition(':enter', [
    style({ transform: 'translateX(-100px)' }),
    animate('500ms', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('500ms', style({ transform: 'translateX(-100px)' }))
  ])
]);
