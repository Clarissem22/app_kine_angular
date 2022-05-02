import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarAccueilComponent } from './progress-bar-accueil.component';

describe('ProgressBarAccueilComponent', () => {
  let component: ProgressBarAccueilComponent;
  let fixture: ComponentFixture<ProgressBarAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
