import { DOCUMENT } from '@angular/common';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Inject, LOCALE_ID, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { AppService } from './app.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSelectChange } from '@angular/material/select';
import { WINDOW } from './injection-tokens';

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

  locales = ['en', 'hu'];
  selectedLocale: string;
  currentLocale: string;

  constructor(
    private appService: AppService,
    @Inject(LOCALE_ID) localeId: string,
    @Inject(WINDOW) private window: Window,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    @Inject(DOCUMENT) document: Document,
    renderer: Renderer2,
  ) {
    this.selectedLocale = localeId.substring(0, 2);
    this.currentLocale = this.selectedLocale;
    renderer.setAttribute(document.documentElement, 'lang', this.selectedLocale);
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

  onSelectedLanguageChanged(event: MatSelectChange): void {
    const newLocaleId = event.value;
    const currentUrl = this.window.location.href;
    const newUrl = currentUrl.replace(`/${this.currentLocale}/`, `/${newLocaleId}/`);
    this.window.location.href = newUrl;
  }

  removeHtmlComments(html: string): string {
    return html.replace(/<!--[\s\S]*?-->/g, '');
  }

}
