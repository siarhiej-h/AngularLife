import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { LifeControlService } from '../life-control.service';
import { PatternType } from '../game-model/pattern-type';
import { GliderDirection } from '../game-model/glider-direction';

@Component({
  selector: 'app-pattern-selector',
  standalone: true,
  templateUrl: './pattern-selector.component.html',
  styleUrl: './pattern-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatternSelectorComponent {
  private readonly lifeControl = inject(LifeControlService);

  readonly PatternType = PatternType;
  readonly GliderDirection = GliderDirection;

  readonly currentPattern = this.lifeControl.currentPatternType;
  readonly currentDirection = this.lifeControl.currentDirection;

  readonly showDirectionPicker = computed(() =>
    this.currentPattern() === PatternType.Glider
  );

  // Group patterns by category
  readonly patternGroups = [
    {
      label: 'Basic',
      patterns: [
        { type: PatternType.Cell, label: 'Cell', icon: '●' }
      ]
    },
    {
      label: 'Still Lifes',
      patterns: [
        { type: PatternType.Block, label: 'Block', icon: '■' },
        { type: PatternType.Beehive, label: 'Beehive', icon: '⬡' },
        { type: PatternType.Loaf, label: 'Loaf', icon: '▱' },
        { type: PatternType.Boat, label: 'Boat', icon: '▰' }
      ]
    },
    {
      label: 'Oscillators',
      patterns: [
        { type: PatternType.Blinker, label: 'Blinker', icon: '▬' },
        { type: PatternType.Toad, label: 'Toad', icon: '▭' },
        { type: PatternType.Beacon, label: 'Beacon', icon: '▣' },
        { type: PatternType.Pulsar, label: 'Pulsar', icon: '✦' }
      ]
    },
    {
      label: 'Spaceships',
      patterns: [
        { type: PatternType.Glider, label: 'Glider', icon: '✣' },
        { type: PatternType.LWSS, label: 'LWSS', icon: '◄' },
        { type: PatternType.MWSS, label: 'MWSS', icon: '◄' }
      ]
    },
    {
      label: 'Complex',
      patterns: [
        { type: PatternType.GosperGun, label: 'Gosper Gun', icon: '☢' },
        { type: PatternType.RPentomino, label: 'R-pentomino', icon: '◆' }
      ]
    }
  ];

  readonly directions = [
    { value: GliderDirection.UpLeft, label: '↖', title: 'Up-Left' },
    { value: GliderDirection.UpRight, label: '↗', title: 'Up-Right' },
    { value: GliderDirection.DownLeft, label: '↙', title: 'Down-Left' },
    { value: GliderDirection.DownRight, label: '↘', title: 'Down-Right' }
  ];

  onPatternChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const patternType = target.value as PatternType;
    this.lifeControl.changePatternMode(
      patternType,
      patternType === PatternType.Glider ? this.currentDirection() : undefined
    );
  }

  onDirectionChange(direction: GliderDirection): void {
    this.lifeControl.changePatternMode(PatternType.Glider, direction);
  }
}
