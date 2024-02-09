import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  { path: '', redirectTo: 'exercise', pathMatch: 'full' },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'analytics', component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
