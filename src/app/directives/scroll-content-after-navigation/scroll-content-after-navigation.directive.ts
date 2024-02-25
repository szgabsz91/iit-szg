import { Directive, ElementRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appScrollContentAfterNavigation]',
  standalone: true
})
export class ScrollContentAfterNavigationDirective {
  constructor(
    readonly elementRef: ElementRef,
    readonly router: Router
  ) {
    router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        elementRef.nativeElement.scrollTo(0, 0);
      });
  }
}
