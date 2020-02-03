import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCanvasComponent } from './life-canvas.component';

describe('LifeCanvasComponent', () => {
  let component: LifeCanvasComponent;
  let fixture: ComponentFixture<LifeCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
