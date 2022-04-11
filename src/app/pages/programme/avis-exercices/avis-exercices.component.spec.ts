import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisExercicesComponent } from './avis-exercices.component';

describe('AvisExercicesComponent', () => {
  let component: AvisExercicesComponent;
  let fixture: ComponentFixture<AvisExercicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisExercicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisExercicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
