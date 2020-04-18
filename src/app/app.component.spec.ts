import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from './app.service';
import { of } from 'rxjs';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  let compiled: HTMLElement;

  const mockedCourses = [{
    id: 'course1',
    name: 'Course 1',
    labs: [{
      index: 1,
      title: 'Course 1 Lab 1'
    }, {
      index: 2,
      title: 'Course 1 Lab 2'
    }]
  }, {
    id: 'course2',
    name: 'Course 2',
    labs: [{
      index: 1,
      title: 'Course 2 Lab 1'
    }]
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AppMaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const appService = TestBed.inject(AppService);
    spyOn(appService, 'getCourses').and.returnValue(of(mockedCourses));

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
        spyOn(appComponent.sidenav, 'toggle');

        appComponent.toggleSidenav();

        expect(appComponent.sidenav.toggle).toHaveBeenCalledTimes(1);
      });

    });

    describe('closeSidenavOnMobile', () => {

      it('should close the sidenav on mobile clients', () => {
        spyOn(appComponent.sidenav, 'close');

        appComponent.closeSidenavOnMobile();

        if (appComponent.mobileQuery.matches) {
          expect(appComponent.sidenav.close).toHaveBeenCalledTimes(1);
        }
      });

    });

  });

  describe('template', () => {

    it('should render the appropriate title', () => {
      const title = compiled.querySelector('h1').textContent;
      expect(title).toEqual('IIT');
    });

    it('should render the appropriate menu items', () => {
      const menuItems = Array.from(compiled.querySelectorAll('[mat-list-item]'));
      const menuItemLabels = menuItems.map(menuItem => menuItem.textContent).sort();
      expect(menuItemLabels).toEqual(['Course 1 Lab 1', 'Course 1 Lab 2', 'Course 2 Lab 1', 'Index', 'Index']);
    });

    it('should render the appropriate footer', () => {
      const footerContent = compiled.querySelector('footer').textContent;
      expect(footerContent).toEqual(`© Gabor Szabo ${new Date().getFullYear()}`);
    });

  });

});
