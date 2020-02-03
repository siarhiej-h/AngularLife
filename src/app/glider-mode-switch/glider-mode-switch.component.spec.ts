import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GliderModeSwitchComponent } from './glider-mode-switch.component';

describe('GliderModeSwitchComponent', () => {
  let component: GliderModeSwitchComponent;
  let fixture: ComponentFixture<GliderModeSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GliderModeSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GliderModeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
