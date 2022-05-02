import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactKineComponent } from './contact-kine.component';

describe('ContactKineComponent', () => {
  let component: ContactKineComponent;
  let fixture: ComponentFixture<ContactKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactKineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
