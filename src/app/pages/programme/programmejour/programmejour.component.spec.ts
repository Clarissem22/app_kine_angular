import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammejourComponent } from './programmejour.component';

describe('ProgrammejourComponent', () => {
  let component: ProgrammejourComponent;
  let fixture: ComponentFixture<ProgrammejourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammejourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
