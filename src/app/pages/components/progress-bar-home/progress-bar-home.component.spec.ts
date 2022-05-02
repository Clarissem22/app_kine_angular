import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarHomeComponent } from './progress-bar-home.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarHomeComponent;
  let fixture: ComponentFixture<ProgressBarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
