import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgProgrammeComponent } from './bg-programme.component';

describe('BgProgrammeComponent', () => {
  let component: BgProgrammeComponent;
  let fixture: ComponentFixture<BgProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
