import {Workout} from "../models/workout";
import {WorkoutSet} from "../models/workoutSet";

export class WorkoutsService {


  private workouts = [
    new Workout("w1", "Workout 1", [
      new WorkoutSet("Set 1"),
      new WorkoutSet("Set 2")
    ]),
    new Workout("w2", "Workout 2", [
      new WorkoutSet("Set 1"),
      new WorkoutSet("Set 2")
    ])
  ];

  getWorkouts(): Promise<Workout[]> {
    return new Promise((resolve, reject) => {
      resolve(this.workouts);
    })
  }

  getWorkout(id: string): Promise<Workout> {
    return new Promise((resolve, reject) => {
      var workout = this.workouts.find((w) => w.id === id);
      console.log("getWorkout", workout);
      resolve(workout);
    })
  }

}
