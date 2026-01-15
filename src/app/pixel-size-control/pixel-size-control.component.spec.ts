import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PixelSizeControlComponent } from './pixel-size-control.component';

describe('PixelSizeControlComponent', () => {
  let component: PixelSizeControlComponent;
  let fixture: ComponentFixture<PixelSizeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixelSizeControlComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PixelSizeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default pixel size of 4', () => {
    expect(component.pixelSize()).toBe(4);
  });

  it('should not be disabled initially', () => {
    expect(component.disabled()).toBeFalse();
  });

  it('should have min and max size values', () => {
    expect(component.minSize).toBe(2);
    expect(component.maxSize).toBe(50);
  });
});
