import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MobileKeyboardComponent } from './mobile-keyboard/mobile-keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    AnalyticsComponent,
    MobileKeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
