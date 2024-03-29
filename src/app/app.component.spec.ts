import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from './services/app/app.service';
import { of } from 'rxjs';
import { WINDOW } from './injection-tokens';
import { DebugElement, LOCALE_ID } from '@angular/core';
import { Course } from './model/course';
import { By } from '@angular/platform-browser';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ActivationEnd, Router } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  let compiled: HTMLElement;
  let mockWindow: Window;

  const mockedCourses: Course[] = [
    {
      id: 'course1',
      name: 'Course 1',
      description: 'Course 1 Description',
      keywords: ['Course 1 Keyword'],
      labs: [
        {
          index: 1,
          titles: {
            short: 'Course 1 Lab 1 Short',
            long: 'Course 1 Lab 1 Long'
          },
          description: 'Course 1 Lab 1 Description',
          keywords: ['Course 1 Lab 1 Keyword']
        },
        {
          index: 2,
          titles: {
            long: 'Course 1 Lab 2 Long'
          },
          description: 'Course 1 Lab 2 Description',
          keywords: ['Course 1 Lab 2 Keyword']
        }
      ]
    },
    {
      id: 'course2',
      name: 'Course 2',
      description: 'Course 2 Description',
      keywords: ['Course 2 Keyword'],
      labs: [
        {
          index: 1,
          titles: {
            short: 'Course 2 Lab 1 Short',
            long: 'Course 2 Lab 1 Long'
          },
          description: 'Course 2 Lab 1 Description',
          keywords: ['Course 2 Lab 1 Keyword']
        }
      ]
    }
  ];

  beforeEach(waitForAsync(() => {
    mockWindow = {
      location: {
        href: '/hu/something'
      }
    } as any;

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, NoopAnimationsModule],
      providers: [
        { provide: WINDOW, useValue: mockWindow },
        { provide: LOCALE_ID, useValue: 'hu' }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const appService = TestBed.inject(AppService);
    spyOn(appService, 'getCourses').and.returnValue(of(mockedCourses));

    const router = TestBed.inject(Router);
    // eslint-disable-next-line no-underscore-dangle
    (router as any)._events = of(
      new ActivationEnd({
        params: {
          courseId: 'course2'
        }
      } as any)
    );

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  describe('component', () => {
    describe('properties', () => {
      it('should contain the appropriate courses', () => {
        appComponent.courses$.subscribe(courses => {
          expect(courses).toEqual(mockedCourses);
        });
      });

      it('should contain the current year', () => {
        expect(appComponent.currentYear).toEqual(new Date().getFullYear());
      });
    });

    describe('toggleSidenav', () => {
      it('should toggle the sidenav', () => {
        spyOn(appComponent.sidenav(), 'toggle');

        appComponent.toggleSidenav();

        expect(appComponent.sidenav().toggle).toHaveBeenCalledTimes(1);
      });
    });

    describe('closeSidenavOnMobile', () => {
      it('should close the sidenav on mobile clients', () => {
        spyOn(appComponent.sidenav(), 'close');

        appComponent.closeSidenavOnMobile();

        if (appComponent.mobileQuery.matches) {
          expect(appComponent.sidenav().close).toHaveBeenCalledTimes(1);
        }
      });
    });

    describe('onSelectedLanguageChanged', () => {
      it('should navigate to the appropriate page with the selected language', () => {
        appComponent.onSelectedLanguageChanged({
          value: 'en'
        } as any);

        expect(mockWindow.location.href).toBe('/en/something');
      });
    });
  });

  describe('template', () => {
    it('should render the appropriate title as the logo alt attribute', () => {
      const logoAlt = compiled.querySelector('svg title').textContent;
      expect(logoAlt).toEqual('IIT-SZG');
    });

    it('should render the appropriate menu items', () => {
      const menuItems = Array.from(compiled.querySelectorAll('[mat-list-item]'));
      const menuItemLabels = menuItems.map(menuItem => menuItem.textContent.trim()).sort();
      expect(menuItemLabels).toEqual([
        'Course 1 Lab 1 Short',
        'Course 1 Lab 2 Long',
        'Course 2 Lab 1 Short',
        'Index',
        'Index'
      ]);
    });

    it('should expand the appropriate course', () => {
      const expansionPanels = fixture.debugElement
        .queryAll(By.directive(MatExpansionPanel))
        .map((debugElement: DebugElement): MatExpansionPanel => debugElement.componentInstance);
      const expandedFlags = expansionPanels.map((expansionPanel: MatExpansionPanel) => expansionPanel.expanded);
      expect(expandedFlags).toEqual([false, true]);
    });

    it('should render the appropriate footer', () => {
      const footerContent = compiled.querySelector('footer').textContent;
      expect(footerContent).toEqual(`© Gabor Szabo ${new Date().getFullYear()}`);
    });
  });

  describe('when online', () => {
    beforeEach(() => {
      window.dispatchEvent(new Event('offline'));
      fixture.detectChanges();
      window.dispatchEvent(new Event('online'));
      fixture.detectChanges();
    });

    it('should not add the is-offline class to the toolbar', () => {
      const toolbar = fixture.debugElement.query(By.directive(MatToolbar));
      expect(toolbar.classes['is-offline']).toBeUndefined();
    });
  });

  describe('when offline', () => {
    beforeEach(() => {
      window.dispatchEvent(new Event('offline'));
      fixture.detectChanges();
    });

    it('should add the is-offline class to the toolbar', () => {
      const toolbar = fixture.debugElement.query(By.directive(MatToolbar));
      expect(toolbar.classes['is-offline']).toBe(true);
    });
  });
});
