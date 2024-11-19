import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  LOCALE_ID,
  OnDestroy,
  Renderer2,
  HostListener,
  viewChild,
  Signal,
  inject
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AppService } from './services/app/app.service';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { WINDOW } from './injection-tokens';
import { hamburgerMenuButtonTrigger } from './animations';
import { ActivationEnd, Event, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, first, map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ScrollContentAfterNavigationDirective } from './directives/scroll-content-after-navigation/scroll-content-after-navigation.directive';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [hamburgerMenuButtonTrigger],
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    NgOptimizedImage,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    ScrollContentAfterNavigationDirective
  ]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private readonly appService = inject(AppService);
  private readonly localeId = inject(LOCALE_ID);
  private readonly window = inject<Window>(WINDOW);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly media = inject(MediaMatcher);
  private readonly document = inject<Document>(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly router = inject(Router);

  readonly sidenav = viewChild<MatSidenav>(MatSidenav);

  readonly mobileQuery: MediaQueryList;
  readonly currentYear: number = new Date().getFullYear();
  readonly courses: Signal<readonly Course[]>;
  readonly activeCourseId: Signal<string>;

  readonly locales = ['en', 'hu'];
  readonly currentLocale: string;
  selectedLocale: string;
  isOffline = false;

  private readonly handleSidenav: (mediaQueryListEvent: MediaQueryListEvent) => void;

  constructor() {
    this.courses = toSignal(this.appService.getCourses());
    this.activeCourseId = toSignal(
      this.router.events.pipe(
        filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
        map((event: ActivationEnd) => event.snapshot.params),
        map(params => params.courseId),
        first()
      )
    );
    this.currentLocale = this.localeId.substring(0, 2);
    this.selectedLocale = this.currentLocale;
    this.renderer.setAttribute(this.document.documentElement, 'lang', this.selectedLocale);
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    // istanbul ignore next
    this.handleSidenav = (event: MediaQueryListEvent): void => {
      if (!event.matches) {
        this.sidenav().open();
      } else {
        this.sidenav().close();
      }
      this.changeDetectorRef.detectChanges();
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
      this.sidenav().open();
    }
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this.handleSidenav);
  }

  toggleSidenav() {
    this.sidenav().toggle();
  }

  closeSidenavOnMobile() {
    // istanbul ignore if
    if (this.mobileQuery.matches) {
      this.sidenav().close();
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
