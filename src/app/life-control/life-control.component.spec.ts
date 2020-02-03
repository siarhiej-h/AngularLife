import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeControlComponent } from './life-control.component';

describe('LifeControlComponent', () => {
  let component: LifeControlComponent;
  let fixture: ComponentFixture<LifeControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
