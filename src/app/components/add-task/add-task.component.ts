import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  getTask = '';
  subtaskArr: string[] = [];
  finalTaskArr: any[] = [];

  taskForm = this.formBuilder.group({
    taskName: '',
    description: '',
    subtasks: [[]]
  });

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.imageList.subscribe(res => {
      this.finalTaskArr = res;
    })
  }

  getTaskText() {
    this.subtaskArr.push(this.getTask);
    this.taskForm.get('subtasks')?.patchValue(this.subtaskArr);
    this.getTask = '';
  }

  cancelTaskText() {
    this.getTask = ''
  }

  createNewTaskForm() {
    this.taskForm.reset();
    this.cancelTaskText();
    this.subtaskArr = [];
  }

  saveAndCreateForm() {
    this.submitForm();
    this.createNewTaskForm();
  }

  saveAndRedirect() {
    this.submitForm();
    this.taskService.selectedTask.next(this.taskForm.value);
    this.router.navigate(['dashboard/view-card']);
  }

  submitForm() {
    console.log('chk', this.taskForm.value);
    this.finalTaskArr.push(this.taskForm.value);
    this.taskService.imageList.next(this.finalTaskArr);
  }

}
