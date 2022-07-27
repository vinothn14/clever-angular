import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  getTaskText() {
    this.subtaskArr.push(this.getTask);
    this.getTask = '';
  }

  cancelTaskText() {
    this.getTask = ''
  }

}
