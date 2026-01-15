import { TestBed } from '@angular/core/testing';
import { LifeControlService } from './life-control.service';
import { StartOptions } from './game-model/start-options';
import { GliderDirection } from './game-model/glider-direction';

describe('LifeControlService', () => {
  let service: LifeControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default values', () => {
    expect(service.pixelSize()).toBe(4);
    expect(service.startOptions()).toBe(StartOptions.Random);
    expect(service.isRunning()).toBeFalse();
    expect(service.generations()).toBe(0);
  });

  it('should change pixel size', () => {
    service.changePixelSize(10);
    expect(service.pixelSize()).toBe(10);
  });

  it('should toggle simulation state', () => {
    expect(service.isRunning()).toBeFalse();
    service.toggle();
    expect(service.isRunning()).toBeTrue();
    service.toggle();
    expect(service.isRunning()).toBeFalse();
  });

  it('should increment generation', () => {
    expect(service.generations()).toBe(0);
    service.incrementGeneration();
    expect(service.generations()).toBe(1);
    service.incrementGeneration();
    expect(service.generations()).toBe(2);
  });

  it('should reset state', () => {
    service.start();
    service.incrementGeneration();
    service.incrementGeneration();
    
    service.reset();
    
    expect(service.isRunning()).toBeFalse();
    expect(service.generations()).toBe(0);
  });

  it('should change glider mode', () => {
    service.changeGliderMode(false, GliderDirection.DownLeft);
    
    expect(service.gliderEnabled()).toBeFalse();
    expect(service.gliderDirection()).toBe(GliderDirection.DownLeft);
  });
});
