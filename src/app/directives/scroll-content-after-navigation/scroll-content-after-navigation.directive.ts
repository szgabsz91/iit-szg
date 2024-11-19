import { Directive, ElementRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appScrollContentAfterNavigation]',
  standalone: true
})
export class ScrollContentAfterNavigationDirective {
  private readonly elementRef = inject(ElementRef);
  private readonly router = inject(Router);

  constructor() {
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        this.elementRef.nativeElement.scrollTo(0, 0);
      });
  }
}
