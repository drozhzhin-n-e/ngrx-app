import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { courseReducer } from './state/course/course.reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({courses: courseReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
