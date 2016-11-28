import {Component, Input} from '@angular/core';
import {WorkoutSet} from "../models/workoutSet";

@Component({
  selector: 'set-root',
  templateUrl: 'set.component.html',
  styleUrls: ['set.component.scss']
})
export class SetComponent {

  @Input() set: WorkoutSet;

  title = 'set works!!!!';
}
