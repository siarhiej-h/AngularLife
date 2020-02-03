class cell {
    isAlive: boolean;
    neighboursAlive: number = 0;

    constructor (isAlive: boolean) {
        this.isAlive = isAlive;
    }
}

class cellData {
    x: number;
    y: number;
}

export { cell, cellData };