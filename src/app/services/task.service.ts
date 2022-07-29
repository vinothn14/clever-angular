import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  subtaskArr = [
    'Keep my mentality healthy by taking walks outside',
    'Build some new components in Figma',
    'Figure out how to use Clever from the help center!',
    'Create wireframes for the new dashboard'
  ];

  imageList = new BehaviorSubject(<any>[]);
  getImageList = this.imageList.asObservable();

  selectedTask = new BehaviorSubject(<any>{});
  getSelectedTask = this.selectedTask.asObservable();

  constructor() { }
}
