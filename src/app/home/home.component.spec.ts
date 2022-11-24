import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
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
