import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeCanvasComponent } from './life-canvas.component';

describe('LifeCanvasComponent', () => {
  let component: LifeCanvasComponent;
  let fixture: ComponentFixture<LifeCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCanvasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LifeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have canvas element', () => {
    const canvas = fixture.nativeElement.querySelector('canvas');
    expect(canvas).toBeTruthy();
  });

  it('should initialize with proper dimensions', () => {
    expect(component.cols()).toBeGreaterThan(0);
    expect(component.rows()).toBeGreaterThan(0);
    expect(component.canvasWidth()).toBeGreaterThan(0);
    expect(component.canvasHeight()).toBeGreaterThan(0);
  });
});
