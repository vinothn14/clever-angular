import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskList: any[] = [];

  constructor(
    public taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.taskService.getImageList.subscribe(res => {
      this.taskList = res;
    });
  }

  viewTask(tasks: any) {
    this.taskService.selectedTask.next(tasks);
    this.router.navigate(['dashboard/view-card']);
  }

  removeSelectedTask(index: number) {
    this.taskList.splice(index, 1);
    this.taskService.imageList.next(this.taskList);
  }

}
