import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { grid } from "../game-model/grid";
import { cellData } from "../game-model/cell";
import { startOptions } from '../game-model/startOptions';
import { LifeControlService } from '../life-control.service';
import { Subscription } from 'rxjs';
import { gliderDirection } from '../game-model/gliderDirection';
import { getGlider } from '../game-model/lifeFormHelper';

@Component({
  selector: 'app-life-canvas',
  templateUrl: './life-canvas.component.html',
  styleUrls: ['./life-canvas.component.css']
})
export class LifeCanvasComponent implements OnInit, AfterViewInit, OnDestroy {  
  public Cols: number;
  public Rows: number;
  public CellPixelSize: number = 4;
  public CellBorderSize: number = 1;

  private context: CanvasRenderingContext2D;

  private subs: Subscription[] = [];

  private grid: grid;

  private interval;

  private StartOptions: startOptions;

  private containerWidth: number;
  private containerHeight: number;

  private isGliderMode: boolean;
  private gliderDirection: gliderDirection;

  private nextFrame: boolean = true;

  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  constructor(private lifeControlService: LifeControlService, private ref: ChangeDetectorRef) {

    this.CellPixelSize = lifeControlService.DefaultPixelSize;
    this.StartOptions = lifeControlService.DefaultStartOptions;
    
    this.onPixelSizeChange = this.onPixelSizeChange.bind(this);
    this.onStartOptionsChange = this.onStartOptionsChange.bind(this);
    this.onLifeStateChanged = this.onLifeStateChanged.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onCanvasClick = this.onCanvasClick.bind(this);
    this.onGliderModeChange = this.onGliderModeChange.bind(this);

    this.subs.push(this.lifeControlService.StartOptions$.subscribe(this.onStartOptionsChange));
    this.subs.push(this.lifeControlService.CellPixelSize$.subscribe(this.onPixelSizeChange));
    this.subs.push(this.lifeControlService.LifeState$.subscribe(this.onLifeStateChanged));
    this.subs.push(this.lifeControlService.Reset$.subscribe(this.onReset));
    this.subs.push(this.lifeControlService.GliderMode$.subscribe(this.onGliderModeChange));
  }

  onLifeStateChanged(state: boolean): void {
    if (state) {
        this.interval = setInterval(() => {
          if (this.nextFrame) {
            
            let [alive, dead] = this.grid.calcNextGen();
            this.paint(alive, dead);
            this.lifeControlService.upCount();
            
          }          
      }, 15);
    }
    else {
      clearInterval(this.interval);
    }
  }

  onPixelSizeChange(pixelSize: number): void {
    this.clear();
    this.updatePixelSize(pixelSize);
    this.onReset();
  }

  onStartOptionsChange(startOptions: startOptions): void {
    this.clear();
    this.StartOptions = startOptions;
    this.onReset();
  }

  onReset(): void {
    this.grid = grid.create(this.Cols, this.Rows, this.StartOptions);
    this.renderGrid(this.grid);
  }

  onCanvasClick(event) {
    if (!event) {
      return;
    }

    let x = Math.floor(event.offsetX / this.CellPixelSize);
    let y = Math.floor(event.offsetY / this.CellPixelSize);

    let alive = [];
    let dead = [];
    if (this.isGliderMode) {
      // Enums in typescript ONE LOVE. Remove the + and switching direciton will stop working.
      let cells = getGlider(+this.gliderDirection, this.grid, x, y);
      cells.forEach(c => {
        let isAlive: boolean = c[2];
        let x: number = c[0];
        let y: number = c[1];
        this.grid.set(x, y, isAlive);
        (isAlive ? alive : dead).push({x: x, y: y});
      });
    }
    else {
      let isAlive = this.grid.cells[y * this.grid.width + x].isAlive;
      (isAlive ? dead : alive).push({x: x, y: y});
    }

    this.paint(alive, dead);
  }

  onGliderModeChange(gliderMode: [boolean, gliderDirection]) {
    this.isGliderMode = gliderMode[0];
    this.gliderDirection = gliderMode[1];
  }

  ngOnInit() {
    this.containerWidth = window.outerWidth * .97;
    this.containerHeight = window.outerHeight * .85;
    this.Cols = 2 * Math.floor(this.containerWidth / this.CellPixelSize / 2);
    this.Rows = 2 * Math.floor(this.containerHeight / this.CellPixelSize / 2);
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  ngAfterViewInit() {
    const canvas = this.canvas.nativeElement;
    this.context = canvas.getContext('2d');
    this.grid = grid.create(this.Cols, this.Rows, this.StartOptions);
    this.renderGrid(this.grid);     
  }

  updatePixelSize(pixelSize: number): void {
    this.CellPixelSize = pixelSize;
    this.Cols = 2 * Math.floor(this.containerWidth / this.CellPixelSize / 2);
    this.Rows = 2 * Math.floor(this.containerHeight / this.CellPixelSize / 2);
    this.ref.detectChanges();
  }

  renderGrid(grid: grid) {
    let alive: cellData[] = [];
    let dead: cellData[] = [];
    for (let i = 0; i !== grid.height; i++) {
      const row = i * grid.width;
      for (let j = 0; j !== grid.width; j++) {
        let cell = {x: j, y: i};
        (grid.cells[row + j].isAlive ? alive : dead).push(cell);
      }
    }

    this.paint(alive, dead);
  }

  paint(alive: cellData[], dead: cellData[]): void {
    if (dead) {
      this.context.fillStyle = 'white';
      this.paintCells(dead);
    }

    if (alive) {
      this.context.fillStyle = '#252525';
      this.paintCells(alive);
    }
  }

  paintCells(cells: cellData[]): void {
    let size = this.CellPixelSize - this.CellBorderSize;
    for (const cell of cells) {
      let x = cell.x * this.CellPixelSize + this.CellBorderSize;
      let y = cell.y * this.CellPixelSize + this.CellBorderSize;
      this.context.fillRect(x, y, size, size);
    }
  }

  clear() {    
    this.context.clearRect(0, 0, this.Cols * this.CellPixelSize, this.Rows * this.CellPixelSize);
  }

  get Width(): number {
    return this.Cols * this.CellPixelSize;
  }

  get Height(): number {
    return this.Rows * this.CellPixelSize;
  }
}
