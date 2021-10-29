import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityprojectsComponent } from './unityprojects.component';

describe('UnityprojectsComponent', () => {
  let component: UnityprojectsComponent;
  let fixture: ComponentFixture<UnityprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnityprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
