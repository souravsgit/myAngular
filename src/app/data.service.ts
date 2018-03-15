import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['Stay focused, go after your dreams', 'keep moving toward your goals' ]);
  goal=this.goals.asObservable();

  constructor() { }

  changeGoal(goal)
  {
    this.goals.next(goal);
  }
}
