import { GliderDirection } from './glider-direction';
import { Grid } from './grid';
import { PatternType } from './pattern-type';

export type PatternCell = [number, number, boolean];

function wrapCoord(coord: number, max: number): number {
  if (coord < 0) return max - 1;
  if (coord >= max) return 0;
  return coord;
}

function getRelativeCells(
  grid: Grid,
  x: number,
  y: number,
  pattern: number[][]
): PatternCell[] {
  return pattern.map(([dx, dy]) => {
    const cellX = wrapCoord(x + dx, grid.width);
    const cellY = wrapCoord(y + dy, grid.height);
    return [cellX, cellY, true];
  });
}

// Still lifes
function getBlock(grid: Grid, x: number, y: number): PatternCell[] {
  return getRelativeCells(grid, x, y, [
    [0, 0], [1, 0],
    [0, 1], [1, 1]
  ]);
}

function getBeehive(grid: Grid, x: number, y: number): PatternCell[] {
  return getRelativeCells(grid, x, y, [
    [1, 0], [2, 0],
    [0, 1], [3, 1],
    [1, 2], [2, 2]
  ]);
}

function getLoaf(grid: Grid, x: number, y: number): PatternCell[] {
  return getRelativeCells(grid, x, y, [
    [1, 0], [2, 0],
    [0, 1], [3, 1],
    [1, 2], [3, 2],
    [2, 3]
  ]);
}

function getBoat(grid: Grid, x: number, y: number): PatternCell[] {
  return getRelativeCells(grid, x, y, [
    [0, 0], [1, 0],
    [0, 1], [2, 1],
    [1, 2]
  ]);
}

// Oscillators
function getBlinker(grid: Grid, x: number, y: number): PatternCell[] {
  return getRelativeCells(grid, x, y, [
    [0, 0], [1, 0], [2, 0]
  ]);
}

function getToad(grid: Grid, x: number, y: number): PatternCell[] {
  return getRelativeCells(grid, x, y, [
    [1, 0], [2, 0], [3, 0],
    [0, 1], [1, 1], [2, 1]
  ]);
}

function getBeacon(grid: Grid, x: number, y: number): PatternCell[] {
  return getRelativeCells(grid, x, y, [
    [0, 0], [1, 0],
    [0, 1], [1, 1],
    [2, 2], [3, 2],
    [2, 3], [3, 3]
  ]);
}

function getPulsar(grid: Grid, x: number, y: number): PatternCell[] {
  // Pulsar is a 13x13 pattern (48 live cells), period-3 oscillator
  // Coordinates relative to top-left corner, offset by -6 to center at (x, y)
  return getRelativeCells(grid, x - 6, y - 6, [
    // Top horizontal bar (row 0)
    [2, 0], [3, 0], [4, 0], [8, 0], [9, 0], [10, 0],
    // Top vertical bars (rows 2-4)
    [0, 2], [5, 2], [7, 2], [12, 2],
    [0, 3], [5, 3], [7, 3], [12, 3],
    [0, 4], [5, 4], [7, 4], [12, 4],
    // Middle horizontal bars (rows 5, 7)
    [2, 5], [3, 5], [4, 5], [8, 5], [9, 5], [10, 5],
    [2, 7], [3, 7], [4, 7], [8, 7], [9, 7], [10, 7],
    // Bottom vertical bars (rows 8-10)
    [0, 8], [5, 8], [7, 8], [12, 8],
    [0, 9], [5, 9], [7, 9], [12, 9],
    [0, 10], [5, 10], [7, 10], [12, 10],
    // Bottom horizontal bar (row 12)
    [2, 12], [3, 12], [4, 12], [8, 12], [9, 12], [10, 12]
  ]);
}

// Spaceships
function getGlider(
  direction: GliderDirection,
  grid: Grid,
  x: number,
  y: number
): PatternCell[] {
  const up = (y === 0 ? grid.height : y) - 1;
  const down = y === grid.height - 1 ? 0 : y + 1;
  const left = (x === 0 ? grid.width : x) - 1;
  const right = x === grid.width - 1 ? 0 : x + 1;

  const patterns: Record<GliderDirection, PatternCell[]> = {
    [GliderDirection.UpLeft]: [
      [left, up, true], [x, up, true], [right, up, true],
      [left, y, true], [x, y, false], [right, y, false],
      [left, down, false], [x, down, true], [right, down, false]
    ],
    [GliderDirection.UpRight]: [
      [left, up, true], [x, up, true], [right, up, true],
      [left, y, false], [x, y, false], [right, y, true],
      [left, down, false], [x, down, true], [right, down, false]
    ],
    [GliderDirection.DownLeft]: [
      [left, up, false], [x, up, true], [right, up, false],
      [left, y, true], [x, y, false], [right, y, false],
      [left, down, true], [x, down, true], [right, down, true]
    ],
    [GliderDirection.DownRight]: [
      [left, up, false], [x, up, true], [right, up, false],
      [left, y, false], [x, y, false], [right, y, true],
      [left, down, true], [x, down, true], [right, down, true]
    ]
  };

  return patterns[direction] ?? [];
}

function getLWSS(grid: Grid, x: number, y: number): PatternCell[] {
  // LWSS: 5 wide x 4 tall, moving left
  return getRelativeCells(grid, x, y, [
    [1, 0], [4, 0],  // Row 0
    [0, 1],           // Row 1
    [0, 2], [4, 2],  // Row 2
    [0, 3], [1, 3], [2, 3], [3, 3]  // Row 3 (note: no cell at [4,3])
  ]);
}

function getMWSS(grid: Grid, x: number, y: number): PatternCell[] {
  // MWSS: 6 wide x 4 tall, moving left
  return getRelativeCells(grid, x, y, [
    [1, 0], [4, 0],  // Row 0
    [0, 1],  // Row 1
    [0, 2], [5, 2],  // Row 2
    [0, 3], [1, 3], [2, 3], [3, 3], [4, 3]  // Row 3
  ]);
}

// Complex patterns
function getGosperGun(grid: Grid, x: number, y: number): PatternCell[] {
  return getRelativeCells(grid, x, y, [
    // Left square
    [0, 4], [0, 5], [1, 4], [1, 5],
    // Left part
    [10, 4], [10, 5], [10, 6], [11, 3], [11, 7],
    [12, 2], [12, 8], [13, 2], [13, 8],
    [14, 5], [15, 3], [15, 7],
    [16, 4], [16, 5], [16, 6], [17, 5],
    // Right part
    [20, 2], [20, 3], [20, 4], [21, 2], [21, 3], [21, 4],
    [22, 1], [22, 5],
    [24, 0], [24, 1], [24, 5], [24, 6],
    // Right square
    [34, 2], [35, 2], [34, 3], [35, 3]
  ]);
}

function getRPentomino(grid: Grid, x: number, y: number): PatternCell[] {
  return getRelativeCells(grid, x, y, [
    [1, 0], [2, 0],
    [0, 1], [1, 1],
    [1, 2]
  ]);
}

export function getPattern(
  patternType: PatternType,
  grid: Grid,
  x: number,
  y: number,
  direction?: GliderDirection
): PatternCell[] {
  switch (patternType) {
    case PatternType.Cell:
      return [[wrapCoord(x, grid.width), wrapCoord(y, grid.height), true]];
    case PatternType.Glider:
      if (direction === undefined) {
        direction = GliderDirection.UpRight;
      }
      return getGlider(direction, grid, x, y);
    case PatternType.Block:
      return getBlock(grid, x, y);
    case PatternType.Beehive:
      return getBeehive(grid, x, y);
    case PatternType.Loaf:
      return getLoaf(grid, x, y);
    case PatternType.Boat:
      return getBoat(grid, x, y);
    case PatternType.Blinker:
      return getBlinker(grid, x, y);
    case PatternType.Toad:
      return getToad(grid, x, y);
    case PatternType.Beacon:
      return getBeacon(grid, x, y);
    case PatternType.Pulsar:
      return getPulsar(grid, x, y);
    case PatternType.LWSS:
      return getLWSS(grid, x, y);
    case PatternType.MWSS:
      return getMWSS(grid, x, y);
    case PatternType.GosperGun:
      return getGosperGun(grid, x, y);
    case PatternType.RPentomino:
      return getRPentomino(grid, x, y);
    default:
      return [];
  }
}
