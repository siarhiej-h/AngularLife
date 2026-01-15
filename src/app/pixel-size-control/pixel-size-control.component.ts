import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { LifeControlService } from '../life-control.service';

@Component({
  selector: 'app-pixel-size-control',
  standalone: true,
  templateUrl: './pixel-size-control.component.html',
  styleUrl: './pixel-size-control.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PixelSizeControlComponent {
  private readonly lifeControl = inject(LifeControlService);

  readonly pixelSize = signal(this.lifeControl.defaultPixelSize);
  readonly minSize = 2;
  readonly maxSize = 50;

  // Disable during simulation
  readonly disabled = this.lifeControl.isRunning;

  readonly sizeLabel = computed(() => `${this.pixelSize()}px`);

  onSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const size = parseInt(target.value, 10);
    this.pixelSize.set(size);
    this.lifeControl.changePixelSize(size);
  }
}
