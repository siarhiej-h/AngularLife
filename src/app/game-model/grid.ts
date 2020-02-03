import { cell, cellData } from "./cell";
import { startOptions } from "./startOptions";

class grid {
    cells: cell[];
    cellsNext: cell[];

    private constructor(public width: number, public height: number) {
        this.cells = new Array<cell>(width * height);
        this.cellsNext = new Array<cell>(width * height);
        for (let i = 0; i !== height; i++)
        {
            const row = i * width;
            for (let j = 0; j !== width; j++)
            {
                this.cells[row + j] = new cell(false);
                this.cellsNext[row + j] = new cell(false);
            }
        }
    }

    public static create(width: number, height: number, options: startOptions, probability: number = 0.1): grid {
        var newGrid = new grid(width, height);
        newGrid.populate(options, probability);
        return newGrid;
    }

    public calcNextGen(): [cellData[], cellData[]] {
        let alive = [];
        let dead = [];

        for (let i = 0; i !== this.cells.length; i++) {
            this.cellsNext[i].neighboursAlive = this.cells[i].neighboursAlive;
        }

        for (let i = 0; i !== this.height; i++) {
            var row = i * this.width;
            for (let j = 0; j !== this.width; j++)
            {
                var cell = this.cells[row + j];
                var cellNextGen = this.cellsNext[row + j];
                cellNextGen.isAlive = grid.prepareNextState(cell);
                if (cellNextGen.isAlive !== cell.isAlive)
                {
                    this.updateCellNeighbours(this.cellsNext, i, j, cellNextGen.isAlive);
                    (cellNextGen.isAlive ? alive : dead).push({x: j, y: i});
                }
            }
        }

        [this.cells, this.cellsNext] = [this.cellsNext, this.cells];

        return [alive, dead];
    }

    public set(x: number, y: number, isAlive: boolean): void {
        var cell = this.cells[y * this.width + x];
        if (cell.isAlive !== isAlive)
        {
            cell.isAlive = isAlive;            
            this.updateCellNeighbours(this.cells, y, x, isAlive);
        }
    }

    private static prepareNextState(cell: cell): boolean {
        let nextState = cell.isAlive;
        if (nextState && cell.neighboursAlive < 2)
        {
            nextState = false;
        }
        else if (nextState && cell.neighboursAlive > 3)
        {
            nextState = false;
        }
        else if (!nextState && cell.neighboursAlive === 3)
        {
            nextState = true;
        }

        return nextState;
    }
    
    private populate(options: startOptions, probability: number = 0.5): void {
        switch (options) {
            case startOptions.Random:
                this.populateRandomGrid(probability);
                break;

            case startOptions.Blank:
            default:
                break;
        }
    }

    private populateRandomGrid(probability: number): void {
        for (let i = 0; i !== this.height; i++) {
            const row = i * this.width;
            for (let j = 0; j !== this.width; j++) {                
                var outcome = Math.random() < probability ? true : false;
                this.cells[row + j].isAlive = outcome;

                if (outcome) {
                    this.updateCellNeighbours(this.cells, i, j, outcome);
                }
            }
        }
    }

    private updateCellNeighbours(cells: cell[], row: number, column: number, newValue: boolean): void {
        var upRow = (row === 0 ? this.height - 1 : row - 1) * this.width;
        var downRow = (row === this.height - 1 ? 0 : row + 1) * this.width;
        let left = column === 0 ? this.width - 1 : column - 1;
        let right = column === this.width - 1 ? 0 : column + 1;
        let rowWidth = row * this.width;

        if (newValue) {
            cells[upRow + left].neighboursAlive++;
            cells[upRow + column].neighboursAlive++;
            cells[upRow + right].neighboursAlive++;

            cells[rowWidth + left].neighboursAlive++;
            cells[rowWidth + right].neighboursAlive++;

            cells[downRow + left].neighboursAlive++;
            cells[downRow + column].neighboursAlive++;
            cells[downRow + right].neighboursAlive++;
        }
        else {
            cells[upRow + left].neighboursAlive--;
            cells[upRow + column].neighboursAlive--;
            cells[upRow + right].neighboursAlive--;
    
            cells[rowWidth + left].neighboursAlive--;
            cells[rowWidth + right].neighboursAlive--;
    
            cells[downRow + left].neighboursAlive--;
            cells[downRow + column].neighboursAlive--;
            cells[downRow + right].neighboursAlive--;
        }        
    }
}

export { grid };