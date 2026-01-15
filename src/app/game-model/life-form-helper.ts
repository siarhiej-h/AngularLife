import { GliderDirection } from './glider-direction';
import { Grid } from './grid';

export type GliderCell = [number, number, boolean];

export function getGlider(
  direction: GliderDirection,
  grid: Grid,
  x: number,
  y: number
): GliderCell[] {
  const up = (y === 0 ? grid.height : y) - 1;
  const down = y === grid.height - 1 ? 0 : y + 1;
  const left = (x === 0 ? grid.width : x) - 1;
  const right = x === grid.width - 1 ? 0 : x + 1;

  // Glider patterns for each direction
  const patterns: Record<GliderDirection, GliderCell[]> = {
    [GliderDirection.UpLeft]: [
      [left, up, true],   [x, up, true],   [right, up, true],
      [left, y, true],    [x, y, false],   [right, y, false],
      [left, down, false],[x, down, true], [right, down, false]
    ],
    [GliderDirection.UpRight]: [
      [left, up, true],   [x, up, true],   [right, up, true],
      [left, y, false],   [x, y, false],   [right, y, true],
      [left, down, false],[x, down, true], [right, down, false]
    ],
    [GliderDirection.DownLeft]: [
      [left, up, false],  [x, up, true],   [right, up, false],
      [left, y, true],    [x, y, false],   [right, y, false],
      [left, down, true], [x, down, true], [right, down, true]
    ],
    [GliderDirection.DownRight]: [
      [left, up, false],  [x, up, true],   [right, up, false],
      [left, y, false],   [x, y, false],   [right, y, true],
      [left, down, true], [x, down, true], [right, down, true]
    ]
  };

  return patterns[direction] ?? [];
}
