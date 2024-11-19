import { DOCUMENT } from '@angular/common';
import { Injectable, LOCALE_ID, Renderer2, RendererFactory2, inject } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanonicalLinkService {
  private readonly router = inject(Router);
  private readonly locale = inject(LOCALE_ID);
  private readonly document = inject<Document>(DOCUMENT);

  private readonly renderer!: Renderer2;

  constructor() {
    const rendererFactory = inject(RendererFactory2);
    this.renderer = rendererFactory.createRenderer(undefined, undefined);
  }

  start(): void {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.urlAfterRedirects)
      )
      .subscribe((url: string) => {
        const canonicalLink = this.document.querySelector('link[rel="canonical"]');
        this.renderer.setAttribute(canonicalLink, 'href', `https://iit-szg.web.app/${this.locale}${url}`);
      });
  }
}
