import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  icon: boolean = false;
  cdkTextareaAutosize = '16px'
  autosize = true

  // @ViewChild('autosize') : CdkTextareaAutosize;

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.icon = !this.icon;
  }

}
