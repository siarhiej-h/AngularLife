import { Injectable, signal, computed } from '@angular/core';
import { StartOptions } from './game-model/start-options';
import { GliderDirection } from './game-model/glider-direction';

export interface GliderMode {
  enabled: boolean;
  direction: GliderDirection;
}

export interface SimulationState {
  isRunning: boolean;
  generations: number;
  speed: number;
}

@Injectable({
  providedIn: 'root'
})
export class LifeControlService {
  // Default configuration
  readonly defaultPixelSize = 4;
  readonly defaultStartOptions = StartOptions.Random;
  readonly defaultGliderDirection = GliderDirection.UpRight;
  readonly defaultGliderMode = true;
  readonly defaultSpeed = 15;

  // Signals for reactive state
  private readonly _pixelSize = signal(this.defaultPixelSize);
  private readonly _startOptions = signal(this.defaultStartOptions);
  private readonly _gliderMode = signal<GliderMode>({
    enabled: this.defaultGliderMode,
    direction: this.defaultGliderDirection
  });
  private readonly _simulationState = signal<SimulationState>({
    isRunning: false,
    generations: 0,
    speed: this.defaultSpeed
  });
  private readonly _resetTrigger = signal(0);

  // Public readonly signals
  readonly pixelSize = this._pixelSize.asReadonly();
  readonly startOptions = this._startOptions.asReadonly();
  readonly gliderMode = this._gliderMode.asReadonly();
  readonly simulationState = this._simulationState.asReadonly();
  readonly resetTrigger = this._resetTrigger.asReadonly();

  // Computed values
  readonly isRunning = computed(() => this._simulationState().isRunning);
  readonly generations = computed(() => this._simulationState().generations);
  readonly speed = computed(() => this._simulationState().speed);
  readonly gliderEnabled = computed(() => this._gliderMode().enabled);
  readonly gliderDirection = computed(() => this._gliderMode().direction);

  changePixelSize(size: number): void {
    this._pixelSize.set(size);
    this.reset();
  }

  changeStartOptions(options: StartOptions): void {
    this._startOptions.set(options);
    this.reset();
  }

  changeGliderMode(enabled: boolean, direction: GliderDirection): void {
    this._gliderMode.set({ enabled, direction });
  }

  changeSpeed(speed: number): void {
    this._simulationState.update(state => ({ ...state, speed }));
  }

  start(): void {
    this._simulationState.update(state => ({ ...state, isRunning: true }));
  }

  stop(): void {
    this._simulationState.update(state => ({ ...state, isRunning: false }));
  }

  toggle(): void {
    this._simulationState.update(state => ({
      ...state,
      isRunning: !state.isRunning
    }));
  }

  incrementGeneration(): void {
    this._simulationState.update(state => ({
      ...state,
      generations: state.generations + 1
    }));
  }

  reset(): void {
    this._simulationState.set({
      isRunning: false,
      generations: 0,
      speed: this._simulationState().speed
    });
    this._resetTrigger.update(v => v + 1);
  }
}
