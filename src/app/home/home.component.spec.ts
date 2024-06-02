import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideRouter } from '@angular/router';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomeComponent);
    await fixture.whenStable();
    compiled = fixture.debugElement.nativeElement;
  });

  describe('template', () => {
    it('should render the appropriate title', () => {
      const title = compiled.querySelector('mat-card-title').textContent.trim();
      expect(title).toEqual('Home');
    });

    it('should render the appropriate paragraphs', () => {
      const paragraphCount = compiled.querySelectorAll('mat-card-content p').length;
      expect(paragraphCount).toEqual(3);
    });

    it('should render the appropriate list items', () => {
      const listItemCount = compiled.querySelectorAll('mat-card-content li').length;
      expect(listItemCount).toEqual(2);
    });
  });
});
