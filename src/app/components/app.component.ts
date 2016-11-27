import {Component, OnInit} from '@angular/core';
import {WorkoutsService} from "../services/workouts.service";
import {Router} from "@angular/router";
import {Workout} from "../models/workout";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [WorkoutsService]
})
export class AppComponent {

  title = 'app works!!!!';
  workouts: Workout[];

  constructor(
    private router: Router
  ) { }

}
