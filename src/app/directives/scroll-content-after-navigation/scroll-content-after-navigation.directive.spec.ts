import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ScrollContentAfterNavigationDirective } from './scroll-content-after-navigation.directive';

@Component({
  template: '<p appScrollContentAfterNavigation #content></p>',
  standalone: true,
  imports: [ScrollContentAfterNavigationDirective]
})
class WrapperComponent {
  @ViewChild('content')
  content: ElementRef;
}

describe('ScrollContentAfterNavigationDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let component: WrapperComponent;
  let eventsSubject$: BehaviorSubject<Event>;

  beforeEach(waitForAsync(() => {
    eventsSubject$ = new BehaviorSubject<Event>({} as Event);
    const router = {
      events: eventsSubject$.asObservable()
    };

    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: router }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.content.nativeElement, 'scrollTo');
  });

  describe('after a NavigationStart event', () => {
    beforeEach(() => {
      eventsSubject$.next(new NavigationStart(1, ''));
      fixture.detectChanges();
    });

    it('should not scroll to top', () => {
      expect(component.content.nativeElement.scrollTo).not.toHaveBeenCalled();
    });
  });

  describe('after a NavigationEnd event', () => {
    beforeEach(() => {
      eventsSubject$.next(new NavigationEnd(1, '', ''));
      fixture.detectChanges();
    });

    it('should not scroll to top', () => {
      expect(component.content.nativeElement.scrollTo).toHaveBeenCalledOnceWith(0, 0);
    });
  });
});
