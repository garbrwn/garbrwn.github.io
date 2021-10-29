import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduralprojectsComponent } from './proceduralprojects.component';

describe('ProceduralprojectsComponent', () => {
  let component: ProceduralprojectsComponent;
  let fixture: ComponentFixture<ProceduralprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduralprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduralprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
