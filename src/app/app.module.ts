import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import {SetComponent} from "./components/set.component";
import {WorkoutsService} from "./services/workouts.service";
import {routing} from "./app.routing";
import {WorkoutsComponent} from "./components/workouts.component";
import {WorkoutDetailComponent} from "./components/workout-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    WorkoutDetailComponent,
    SetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    WorkoutsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
