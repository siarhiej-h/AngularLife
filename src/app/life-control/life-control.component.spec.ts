import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeControlComponent } from './life-control.component';

describe('LifeControlComponent', () => {
  let component: LifeControlComponent;
  let fixture: ComponentFixture<LifeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeControlComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LifeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show start button initially', () => {
    expect(component.buttonLabel()).toBe('Start');
  });

  it('should show dropdown when not running and zero generations', () => {
    expect(component.showDropdown()).toBeTrue();
  });
});
