export interface CellData {
  x: number;
  y: number;
}

export class Cell {
  isAlive: boolean;
  neighboursAlive = 0;

  constructor(isAlive: boolean) {
    this.isAlive = isAlive;
  }
}
