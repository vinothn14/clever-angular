import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProgressComponent } from './image-progress.component';

describe('ImageProgressComponent', () => {
  let component: ImageProgressComponent;
  let fixture: ComponentFixture<ImageProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
