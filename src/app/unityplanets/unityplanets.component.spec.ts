import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityplanetsComponent } from './unityplanets.component';

describe('UnityplanetsComponent', () => {
  let component: UnityplanetsComponent;
  let fixture: ComponentFixture<UnityplanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnityplanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityplanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
