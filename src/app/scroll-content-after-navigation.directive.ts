import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appScrollContentAfterNavigation]'
})
export class ScrollContentAfterNavigationDirective implements OnInit, OnDestroy {

  private readonly destroyed$ = new ReplaySubject();

  constructor(private readonly elementRef: ElementRef, private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd),
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.elementRef.nativeElement.scrollTo(0, 0);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
