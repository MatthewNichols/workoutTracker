import {Component, OnInit} from '@angular/core';
import {WorkoutsService} from "../services/workouts.service";
import {Router} from "@angular/router";
import {Workout} from "../models/workout";

@Component({
  selector: 'app-root',
  templateUrl: 'workouts.component.html',
  //styleUrls: ['workouts.component.css'],
  providers: [WorkoutsService]
})
export class WorkoutsComponent implements OnInit {

  title = 'Workouts';
  workouts: Workout[];

  constructor(
    private workoutService: WorkoutsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.workoutService.getWorkouts()
      .then(workouts => this.workouts = workouts);
  }

  gotoWorkout(workout: Workout) {
    let link = ['/workout', workout.id]
    this.router.navigate(link);
  }
}
