import { DOCUMENT } from '@angular/common';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Inject, LOCALE_ID, OnDestroy, Renderer2, ViewChild } from '@angular/core';
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
export class AppComponent implements OnDestroy {

  @ViewChild(MatSidenav, { static: true })
  readonly sidenav: MatSidenav;

  readonly mobileQuery: MediaQueryList;
  private readonly mobileQueryListener: () => void;
  readonly currentYear: number = new Date().getFullYear();
  readonly courses$: Observable<Course[]> = this.appService.getCourses();

  readonly locales = ['en', 'hu'];
  readonly currentLocale: string;
  selectedLocale: string;

  constructor(
    private readonly appService: AppService,
    @Inject(LOCALE_ID) readonly localeId: string,
    @Inject(WINDOW) private readonly window: Window,
    readonly changeDetectorRef: ChangeDetectorRef,
    readonly media: MediaMatcher,
    @Inject(DOCUMENT) readonly document: Document,
    readonly renderer: Renderer2,
  ) {
    this.currentLocale = localeId.substring(0, 2);
    this.selectedLocale = this.currentLocale;
    renderer.setAttribute(document.documentElement, 'lang', this.selectedLocale);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // istanbul ignore next
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
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
