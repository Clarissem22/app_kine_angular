import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerProgrammeComponent } from './changer-programme.component';

describe('ChangerProgrammeComponent', () => {
  let component: ChangerProgrammeComponent;
  let fixture: ComponentFixture<ChangerProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
