import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelSizeControlComponent } from './pixel-size-control.component';

describe('PixelSizeControlComponent', () => {
  let component: PixelSizeControlComponent;
  let fixture: ComponentFixture<PixelSizeControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelSizeControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelSizeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
