import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { first } from 'rxjs/operators';
import { AppService } from '../../app/app.service';
import { Course } from '../../../model/course';
import { Lab } from '../../../model/lab';

const appTitle = $localize`:app.titles.app|The title of the application@@appTitlesApp:IIT-SZG`;
const homeTitle = $localize`:app.titles.home|The title of the home page@@appTitlesHome:Home`;

@Injectable()
export class AppTitleStrategyService extends TitleStrategy {
  private courses: Course[];

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly appService: AppService
  ) {
    super();
    this.appService
      .getCourses()
      .pipe(first())
      .subscribe((courses: Course[]) => (this.courses = courses));
  }

  updateTitle(snapshot: RouterStateSnapshot): void {
    const [_courses, courseId, _labs, labId] = snapshot.url.split('/').slice(1);

    if (!courseId) {
      this.setTitle(homeTitle);
      return;
    }

    const course = this.courses.find((c: Course) => c.id === courseId);

    if (!course) {
      this.setTitle();
      return;
    }

    const courseName = $localize`:app.titles.course|The title of a given course@@appTitlesCourse:${course.name}:courseName: Course`;

    if (!labId) {
      this.setTitle(courseName);
      return;
    }

    const lab = course.labs.find((l: Lab) => l.index === parseInt(labId, 10));

    if (!lab) {
      this.setTitle(courseName);
      return;
    }

    this.setTitle(`${courseName} - ${lab.titles.long}`);
  }

  private setTitle(title?: string): void {
    if (title) {
      this.document.title = `${appTitle} - ${title}`;
    } else {
      this.document.title = appTitle;
    }
  }
}
