import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CourseParentComponent } from './course-parent/course-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseParentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
