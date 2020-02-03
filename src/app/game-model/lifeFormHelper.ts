import { gliderDirection } from './gliderDirection';
import { grid } from './grid';

export function getGlider(direction: gliderDirection, grid: grid, x: number, y: number): [number, number, boolean][] {
    var up = (y === 0 ? grid.height : y) - 1;
    var down = y === grid.height - 1 ? 0 : y + 1;
    var left = (x === 0 ? grid.width : x) - 1;
    var right = x === grid.width - 1 ? 0 : x + 1;

    switch (direction)
    {
        case gliderDirection.UpLeft: {
            return [
                [left, up, true], [x, up, true], [right, up, true],
                [left, y, true], [x, y, false], [right, y, false],
                [left, down, false], [x, down, true], [right, down, false]
            ];
        }   

        case gliderDirection.UpRight: {     
            return [
                [left, up, true], [x, up, true], [right, up, true],
                [left, y, false], [x, y, false], [right, y, true],
                [left, down, false], [x, down, true], [right, down, false]
            ];
        }
        case gliderDirection.DownLeft: {
            return [
                [left, up, false], [x, up, true], [right, up, false],
                [left, y, true], [x, y, false], [right, y, false],
                [left, down, true], [x, down, true], [right, down, true]
            ];
        }
        case gliderDirection.DownRight: {
            return [
                [left, up, false], [x, up, true], [right, up, false],
                [left, y, false], [x, y, false], [right, y, true],
                [left, down, true], [x, down, true], [right, down, true]
            ];
        }
        default:
            return [];
    };
}