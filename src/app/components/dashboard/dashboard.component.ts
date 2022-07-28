import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  getTask = '';
  inputText = ''
  subtaskArr = [
    'Keep my mentality healthy by taking walks outside',
    'Build some new components in Figma',
    'Figure out how to use Clever from the help center!',
    'Create wireframes for the new dashboard'
  ]

  taskForm = this.formBuilder.group({
    taskName: '',
    description: '',
    subtasks: [[]]
  });

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  getTaskText() {
    this.subtaskArr.push(this.getTask);
    this.taskForm.get('subtasks')?.patchValue(this.subtaskArr);
    this.getTask = '';
  }

  cancelTaskText() {
    this.getTask = ''
  }

  submitForm() {
    console.log('chk', this.taskForm.value);
    console.log('val', this.taskForm.get('subtasks'))
  }

}
