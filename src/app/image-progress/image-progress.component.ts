import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-progress',
  templateUrl: './image-progress.component.html',
  styleUrls: ['./image-progress.component.css']
})
export class ImageProgressComponent implements OnInit {
  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
