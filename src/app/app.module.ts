import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CourseServiceModule } from './course/course-service.module';
import { WINDOW } from './injection-tokens';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    CourseServiceModule
  ],
  providers: [
    { provide: WINDOW, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
