import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlenderprojectsComponent } from './blenderprojects.component';

describe('BlenderprojectsComponent', () => {
  let component: BlenderprojectsComponent;
  let fixture: ComponentFixture<BlenderprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlenderprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlenderprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
