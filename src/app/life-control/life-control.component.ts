import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LifeControlService } from '../life-control.service';
import { StartOptions } from '../game-model/start-options';
import { GliderModeSwitchComponent } from '../glider-mode-switch/glider-mode-switch.component';

@Component({
  selector: 'app-life-control',
  standalone: true,
  imports: [FormsModule, GliderModeSwitchComponent],
  templateUrl: './life-control.component.html',
  styleUrl: './life-control.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeControlComponent {
  private readonly lifeControl = inject(LifeControlService);

  readonly StartOptions = StartOptions;
  readonly startOptionKeys = Object.values(StartOptions);

  readonly isRunning = this.lifeControl.isRunning;
  readonly generations = this.lifeControl.generations;

  readonly selectedOption = computed(() => this.lifeControl.startOptions());

  readonly buttonLabel = computed(() => {
    if (this.isRunning()) {
      return 'Stop';
    }
    return this.generations() === 0 ? 'Start' : 'Resume';
  });

  readonly showDropdown = computed(() => 
    !this.isRunning() && this.generations() === 0
  );

  onStartStop(): void {
    this.lifeControl.toggle();
  }

  onReset(): void {
    this.lifeControl.reset();
  }

  onStartModeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const option = target.value as StartOptions;
    this.lifeControl.changeStartOptions(option);
  }
}
