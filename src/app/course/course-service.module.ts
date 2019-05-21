import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule()
export class CourseServiceModule {

  constructor(@Optional() @SkipSelf() courseServiceModule: CourseServiceModule) {
    if (courseServiceModule) {
      throw new Error('CourseServiceModule is already loaded. Import it in the AppModule only');
    }
  }

}
