import { DOCUMENT } from '@angular/common';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Inject, LOCALE_ID, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { AppService } from './app.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild(MatSidenav, { static: true })
  sidenav: MatSidenav;

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  currentYear: number = new Date().getFullYear();
  courses$: Observable<Course[]>;

  constructor(
    private appService: AppService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    @Inject(DOCUMENT) document: Document,
    @Inject(LOCALE_ID) localeId: string,
    renderer: Renderer2
  ) {
    renderer.setAttribute(document.documentElement, 'lang', localeId);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // istanbul ignore next
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
    this.courses$ = this.appService.getCourses();
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  closeSidenavOnMobile() {
    // istanbul ignore if
    if (this.mobileQuery.matches) {
      this.sidenav.close();
    }
  }

}
