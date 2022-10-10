import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Course } from 'src/app/model/course';
import { Lab } from 'src/app/model/lab';
import { SeoInformation } from 'src/app/model/seo-information';
import { AppService } from '../../app/app.service';

export const defaultSeoInformation: SeoInformation = {
  // eslint-disable-next-line max-len
  description: $localize`IIT-SZG is an application that consists of software engineering related courses. Each course contains a set of labs and their solutions. Currently there are two courses: XML and Databases.`,
  keywords: [
    $localize`:app.seo.keyword.iit-szg|The meta keyword translation of IIT-SZG for SEO@@appSeoKeywordIitSzg:IIT-SZG`,
    $localize`:app.seo.keyword.szg|The meta keyword translation of SZG for SEO@@appSeoKeywordSzg:SZG`,
    $localize`:app.seo.keyword.szgabsz91|The meta keyword translation of szgabsz91 for SEO@@appSeoKeywordIitSzgabsz91:szgabsz91`,
    $localize`:app.seo.keyword.gabor-szabo|The meta keyword translation of Gabor Szabo for SEO@@appSeoKeywordIitGaborSzabo:Gabor Szabo`,
    $localize`:app.seo.keyword.it|The meta keyword translation of IT for SEO@@appSeoKeywordIT:IT`,
    // eslint-disable-next-line max-len
    $localize`:app.seo.keyword.information-technology|The meta keyword translation of information technology for SEO@@appSeoKeywordInformationTechnology:information technology`,
    // eslint-disable-next-line max-len
    $localize`:app.seo.keyword.sofware-engineering|The meta keyword translation of software engineering for SEO@@appSeoKeywordSoftwareEngineering:software engineering`,
    $localize`:app.seo.keyword.course|The meta keyword translation of course for SEO@@appSeoKeywordCourse:course`,
    $localize`:app.seo.keyword.lab|The meta keyword translation of lab for SEO@@appSeoKeywordLab:lab`,
    $localize`:app.seo.keyword.courses.xml|The meta keyword translation of the XML course for SEO@@appSeoKeywordCoursesXml:XML`,
    // eslint-disable-next-line max-len
    $localize`:app.seo.keyword.courses.databases|The meta keyword translation of the Databases course for SEO@@appSeoKeywordCoursesDatabases:Databases`
  ]
};

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private renderer: Renderer2;

  constructor(
    private readonly router: Router,
    private readonly appService: AppService,
    @Inject(DOCUMENT) private readonly document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(undefined, undefined);
  }

  start(): void {
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        switchMap((event: NavigationEnd) => {
          const [courseId, labIndex] = event.urlAfterRedirects.replace('/courses/', '').replace('/labs', '').split('/');

          if (courseId && labIndex) {
            return this.appService
              .getCourses()
              .pipe(
                map((courses: Course[]) => this.getSeoInformationForLab(courses, courseId, parseInt(labIndex, 10)))
              );
          }

          if (courseId) {
            return this.appService
              .getCourses()
              .pipe(map((courses: Course[]) => this.getSeoInformationForCourse(courses, courseId)));
          }

          return of(defaultSeoInformation);
        })
      )
      .subscribe(({ description, keywords }: SeoInformation) => {
        const descriptionMeta = this.document.querySelector('meta[name="description"]');
        this.renderer.setAttribute(descriptionMeta, 'content', description);

        const keywordsMeta = this.document.querySelector('meta[name="keywords"]');
        this.renderer.setAttribute(keywordsMeta, 'content', keywords.join(', '));
      });
  }

  private getSeoInformationForCourse(courses: Course[], courseId: string): SeoInformation {
    const course = courses.find((c: Course) => c.id === courseId);

    if (!course) {
      return defaultSeoInformation;
    }

    return {
      description: course.description,
      keywords: course.keywords
    };
  }

  private getSeoInformationForLab(courses: Course[], courseId: string, labIndex: number): SeoInformation {
    const course = courses.find((c: Course) => c.id === courseId);

    if (!course) {
      return defaultSeoInformation;
    }

    const lab = course.labs.find((l: Lab) => l.index === labIndex);

    if (!lab) {
      return defaultSeoInformation;
    }

    return {
      description: lab.description,
      keywords: lab.keywords
    };
  }
}
