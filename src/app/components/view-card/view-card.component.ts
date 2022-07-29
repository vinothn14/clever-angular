import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {
  viewImageList: any = {};
  taskList: any[] = [];

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getSelectedTask.subscribe(res => {
      this.viewImageList = res;
    });
  }

}
