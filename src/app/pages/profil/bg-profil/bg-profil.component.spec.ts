import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgProfilComponent } from './bg-profil.component';

describe('BgProfilComponent', () => {
  let component: BgProfilComponent;
  let fixture: ComponentFixture<BgProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
