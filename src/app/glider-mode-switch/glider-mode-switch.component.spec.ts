import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GliderModeSwitchComponent } from './glider-mode-switch.component';

describe('GliderModeSwitchComponent', () => {
  let component: GliderModeSwitchComponent;
  let fixture: ComponentFixture<GliderModeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GliderModeSwitchComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GliderModeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have glider mode enabled by default', () => {
    expect(component.gliderEnabled()).toBeTrue();
  });

  it('should have direction options', () => {
    expect(component.directions.length).toBe(4);
  });
});
