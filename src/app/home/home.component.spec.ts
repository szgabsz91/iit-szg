import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AppMaterialModule } from '../app-material.module';

describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let homeComponent: HomeComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [AppMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    homeComponent  = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  describe('template', () => {

    it('should render the appropriate title', () => {
      const title = compiled.querySelector('mat-card-title').textContent;
      expect(title).toEqual('Home');
    });

    it('should render the appropriate paragraphs', () => {
      const paragraphCount = compiled.querySelectorAll('mat-card-content p').length;
      expect(paragraphCount).toEqual(2);
    });

  });

});
