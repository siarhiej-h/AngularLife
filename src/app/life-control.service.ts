import { Injectable, signal, computed } from '@angular/core';
import { StartOptions } from './game-model/start-options';
import { GliderDirection } from './game-model/glider-direction';
import { PatternType } from './game-model/pattern-type';

export interface PatternMode {
  patternType: PatternType;
  direction?: GliderDirection; // Only used for Glider pattern
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
  readonly defaultStartOptions = StartOptions.Random10;
  readonly defaultPatternType = PatternType.Cell;
  readonly defaultGliderDirection = GliderDirection.UpRight;
  readonly defaultSpeed = 15;

  // Signals for reactive state
  private readonly _pixelSize = signal(this.defaultPixelSize);
  private readonly _startOptions = signal(this.defaultStartOptions);
  private readonly _patternMode = signal<PatternMode>({
    patternType: this.defaultPatternType,
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
  readonly patternMode = this._patternMode.asReadonly();
  readonly simulationState = this._simulationState.asReadonly();
  readonly resetTrigger = this._resetTrigger.asReadonly();

  // Computed values
  readonly isRunning = computed(() => this._simulationState().isRunning);
  readonly generations = computed(() => this._simulationState().generations);
  readonly speed = computed(() => this._simulationState().speed);
  readonly currentPatternType = computed(() => this._patternMode().patternType);
  readonly currentDirection = computed(() => this._patternMode().direction);

  changePixelSize(size: number): void {
    this._pixelSize.set(size);
    this.reset();
  }

  changeStartOptions(options: StartOptions): void {
    this._startOptions.set(options);
    this.reset();
  }

  changePatternMode(patternType: PatternType, direction?: GliderDirection): void {
    this._patternMode.set({
      patternType,
      direction: direction ?? this._patternMode().direction ?? this.defaultGliderDirection
    });
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
