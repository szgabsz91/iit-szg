import { Component, ElementRef, provideExperimentalZonelessChangeDetection, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ScrollContentAfterNavigationDirective } from './scroll-content-after-navigation.directive';

@Component({
  template: '<p appScrollContentAfterNavigation #content></p>',
  imports: [ScrollContentAfterNavigationDirective]
})
class WrapperComponent {
  content = viewChild<ElementRef>('content');
}

describe('ScrollContentAfterNavigationDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let component: WrapperComponent;
  let eventsSubject$: BehaviorSubject<Event>;

  beforeEach(() => {
    eventsSubject$ = new BehaviorSubject<Event>({} as Event);
    const router = {
      events: eventsSubject$.asObservable()
    };

    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: router }, provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
    spyOn(component.content().nativeElement, 'scrollTo');
  });

  describe('after a NavigationStart event', () => {
    beforeEach(async () => {
      eventsSubject$.next(new NavigationStart(1, ''));
      fixture.whenStable();
    });

    it('should not scroll to top', () => {
      expect(component.content().nativeElement.scrollTo).not.toHaveBeenCalled();
    });
  });

  describe('after a NavigationEnd event', () => {
    beforeEach(async () => {
      eventsSubject$.next(new NavigationEnd(1, '', ''));
      await fixture.whenStable();
    });

    it('should not scroll to top', () => {
      expect(component.content().nativeElement.scrollTo).toHaveBeenCalledOnceWith(0, 0);
    });
  });
});
