
import {Component, OnInit} from "@angular/core";
import {WorkoutsService} from "../services/workouts.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Workout} from "../models/workout";
@Component ({
  selector: 'app-root',
  templateUrl: 'workout-detail.component.html',
  styleUrls: ['workout-detail.component.scss'],
  providers: [
    WorkoutsService
  ]
})
export class WorkoutDetailComponent implements OnInit{

  workout: Workout;

  constructor(
    private workoutsService: WorkoutsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      var id = params["id"];
      console.log("ngOnInit = id", id);
      this.workoutsService.getWorkout(id)
        .then((workout) => {
          console.log("got workout", workout);
          this.workout = workout;
      });
    });


  }

}
