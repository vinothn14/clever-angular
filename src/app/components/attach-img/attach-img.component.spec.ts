import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachImgComponent } from './attach-img.component';

describe('AttachImgComponent', () => {
  let component: AttachImgComponent;
  let fixture: ComponentFixture<AttachImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
