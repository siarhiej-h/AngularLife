import { Cell, CellData } from './cell';
import { StartOptions } from './start-options';

export class Grid {
    cells: Cell[];
    cellsNext: Cell[];

    private constructor(
        public readonly width: number,
        public readonly height: number
    ) {
        const size = width * height;
        this.cells = new Array<Cell>(size);
        this.cellsNext = new Array<Cell>(size);

        for (let i = 0; i < size; i++) {
            this.cells[i] = new Cell(false);
            this.cellsNext[i] = new Cell(false);
        }
    }

    static create(
        width: number,
        height: number,
        options: StartOptions
    ): Grid {
        const newGrid = new Grid(width, height);
        newGrid.populate(options);
        return newGrid;
    }

    calcNextGen(): [CellData[], CellData[]] {
        const alive: CellData[] = [];
        const dead: CellData[] = [];

        // Copy neighbour counts
        for (let i = 0; i < this.cells.length; i++) {
            this.cellsNext[i].neighboursAlive = this.cells[i].neighboursAlive;
        }

        // Calculate next generation
        for (let row = 0; row < this.height; row++) {
            const rowOffset = row * this.width;
            for (let col = 0; col < this.width; col++) {
                const cell = this.cells[rowOffset + col];
                const cellNextGen = this.cellsNext[rowOffset + col];
                cellNextGen.isAlive = Grid.prepareNextState(cell);

                if (cellNextGen.isAlive !== cell.isAlive) {
                    this.updateCellNeighbours(this.cellsNext, row, col, cellNextGen.isAlive);
                    (cellNextGen.isAlive ? alive : dead).push({ x: col, y: row });
                }
            }
        }

        // Swap buffers
        [this.cells, this.cellsNext] = [this.cellsNext, this.cells];

        return [alive, dead];
    }

    set(x: number, y: number, isAlive: boolean): void {
        const cell = this.cells[y * this.width + x];
        if (cell.isAlive !== isAlive) {
            cell.isAlive = isAlive;
            this.updateCellNeighbours(this.cells, y, x, isAlive);
        }
    }

    private static prepareNextState(cell: Cell): boolean {
        const { isAlive, neighboursAlive } = cell;

        // Conway's Game of Life rules:
        // 1. Any live cell with fewer than 2 neighbours dies (underpopulation)
        // 2. Any live cell with 2 or 3 neighbours survives
        // 3. Any live cell with more than 3 neighbours dies (overpopulation)
        // 4. Any dead cell with exactly 3 neighbours becomes alive (reproduction)

        if (isAlive) {
            return neighboursAlive === 2 || neighboursAlive === 3;
        }
        return neighboursAlive === 3;
    }

    private populate(options: StartOptions): void {
        if (options === StartOptions.Random10) {
            this.populateRandomGrid(0.1);
        } else if (options === StartOptions.Random25) {
            this.populateRandomGrid(0.25);
        } else if (options === StartOptions.Random50) {
            this.populateRandomGrid(0.5);
        }
        // Blank option doesn't populate anything (all cells remain dead)
    }

    private populateRandomGrid(probability: number): void {
        for (let row = 0; row < this.height; row++) {
            const rowOffset = row * this.width;
            for (let col = 0; col < this.width; col++) {
                const isAlive = Math.random() < probability;
                this.cells[rowOffset + col].isAlive = isAlive;

                if (isAlive) {
                    this.updateCellNeighbours(this.cells, row, col, true);
                }
            }
        }
    }

    private updateCellNeighbours(
        cells: Cell[],
        row: number,
        col: number,
        isAlive: boolean
    ): void {
        const upRow = (row === 0 ? this.height - 1 : row - 1) * this.width;
        const downRow = (row === this.height - 1 ? 0 : row + 1) * this.width;
        const left = col === 0 ? this.width - 1 : col - 1;
        const right = col === this.width - 1 ? 0 : col + 1;
        const currentRow = row * this.width;
        const delta = isAlive ? 1 : -1;

        // Update all 8 neighbours
        cells[upRow + left].neighboursAlive += delta;
        cells[upRow + col].neighboursAlive += delta;
        cells[upRow + right].neighboursAlive += delta;
        cells[currentRow + left].neighboursAlive += delta;
        cells[currentRow + right].neighboursAlive += delta;
        cells[downRow + left].neighboursAlive += delta;
        cells[downRow + col].neighboursAlive += delta;
        cells[downRow + right].neighboursAlive += delta;
    }
}
