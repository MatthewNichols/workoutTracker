
import {WorkoutSet} from "./workoutSet";
export class Workout {

  constructor(public id: string, public name: string, public sets: WorkoutSet[]) {}

}
