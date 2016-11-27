import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkoutsComponent} from "./components/workouts.component";
import {WorkoutDetailComponent} from "./components/workout-detail.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/workouts',
    pathMatch: 'full'
  },
  {
    path: 'workouts',
    component: WorkoutsComponent
  },
  {
    path: 'workout/:id',
    component: WorkoutDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
