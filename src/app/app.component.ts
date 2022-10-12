import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject,
  LOCALE_ID,
  OnDestroy,
  Renderer2,
  ViewChild,
  HostListener
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { AppService } from './services/app/app.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSelectChange } from '@angular/material/select';
import { WINDOW } from './injection-tokens';
import { hamburgerMenuButtonTrigger } from './animations';
import { ActivationEnd, Event, Router } from '@angular/router';
import { filter, first, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [hamburgerMenuButtonTrigger]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatSidenav, { static: true })
  readonly sidenav: MatSidenav;

  readonly mobileQuery: MediaQueryList;
  readonly currentYear: number = new Date().getFullYear();
  readonly courses$: Observable<Course[]> = this.appService.getCourses();
  readonly activeCourseId$ = this.router.events.pipe(
    filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
    map((event: ActivationEnd) => event.snapshot.params),
    map(params => params.courseId),
    first()
  );

  readonly locales = ['en', 'hu'];
  readonly currentLocale: string;
  selectedLocale: string;
  isOffline = false;

  private readonly handleSidenav: (mediaQueryListEvent: MediaQueryListEvent) => void;

  constructor(
    private readonly appService: AppService,
    @Inject(LOCALE_ID) readonly localeId: string,
    @Inject(WINDOW) private readonly window: Window,
    readonly changeDetectorRef: ChangeDetectorRef,
    readonly media: MediaMatcher,
    @Inject(DOCUMENT) readonly document: Document,
    readonly renderer: Renderer2,
    private readonly router: Router
  ) {
    this.currentLocale = localeId.substring(0, 2);
    this.selectedLocale = this.currentLocale;
    renderer.setAttribute(document.documentElement, 'lang', this.selectedLocale);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // istanbul ignore next
    this.handleSidenav = (event: MediaQueryListEvent): void => {
      if (!event.matches) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this.handleSidenav);
  }

  @HostListener('window:offline')
  onOffline(): void {
    this.isOffline = true;
  }

  @HostListener('window:online')
  onOnline(): void {
    this.isOffline = false;
  }

  ngAfterViewInit(): void {
    // istanbul ignore next
    if (!this.mobileQuery.matches) {
      this.sidenav.open();
    }
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this.handleSidenav);
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
