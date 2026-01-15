import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GliderDirection } from '../game-model/glider-direction';
import { LifeControlService } from '../life-control.service';

@Component({
  selector: 'app-glider-mode-switch',
  standalone: true,
  templateUrl: './glider-mode-switch.component.html',
  styleUrl: './glider-mode-switch.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GliderModeSwitchComponent {
  private readonly lifeControl = inject(LifeControlService);

  readonly GliderDirection = GliderDirection;
  readonly gliderEnabled = this.lifeControl.gliderEnabled;
  readonly gliderDirection = this.lifeControl.gliderDirection;

  readonly directions = [
    { value: GliderDirection.UpLeft, label: '↖', title: 'Up-Left' },
    { value: GliderDirection.UpRight, label: '↗', title: 'Up-Right' },
    { value: GliderDirection.DownLeft, label: '↙', title: 'Down-Left' },
    { value: GliderDirection.DownRight, label: '↘', title: 'Down-Right' }
  ];

  onModeToggle(): void {
    const currentMode = this.lifeControl.gliderMode();
    this.lifeControl.changeGliderMode(!currentMode.enabled, currentMode.direction);
  }

  onDirectionChange(direction: GliderDirection): void {
    this.lifeControl.changeGliderMode(true, direction);
  }
}
