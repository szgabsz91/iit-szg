import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AppMaterialModule } from '../app-material.module';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [AppMaterialModule]
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
      expect(paragraphCount).toEqual(2);
    });
  });
});
