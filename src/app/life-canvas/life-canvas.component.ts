import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
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

  private cols: number;
  private rows: number;
  private cellPixelSize: number = 4;
  private cellBorderSize: number = 1;
  private context: CanvasRenderingContext2D;
  private subs: Subscription[] = [];
  private grid: grid;
  private interval;
  private startOptions: startOptions;
  private containerWidth: number;
  private containerHeight: number;
  private isGliderMode: boolean;
  private gliderDirection: gliderDirection;
  private delay: number = 15;

  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  constructor(private lifeControlService: LifeControlService, private ref: ChangeDetectorRef, private route: ActivatedRoute) {
    
    this.cellPixelSize = lifeControlService.DefaultPixelSize;
    this.startOptions = lifeControlService.DefaultStartOptions;

    this.onPixelSizeChange = this.onPixelSizeChange.bind(this);
    this.onStartOptionsChange = this.onStartOptionsChange.bind(this);
    this.onLifeStateChanged = this.onLifeStateChanged.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onCanvasClick = this.onCanvasClick.bind(this);
    this.onGliderModeChange = this.onGliderModeChange.bind(this);
    this.onParamsChange = this.onParamsChange.bind(this);

    this.subs.push(this.lifeControlService.StartOptions$.subscribe(this.onStartOptionsChange));
    this.subs.push(this.lifeControlService.CellPixelSize$.subscribe(this.onPixelSizeChange));
    this.subs.push(this.lifeControlService.LifeState$.subscribe(this.onLifeStateChanged));
    this.subs.push(this.lifeControlService.Reset$.subscribe(this.onReset));
    this.subs.push(this.lifeControlService.GliderMode$.subscribe(this.onGliderModeChange));
    this.subs.push(route.queryParams.subscribe(this.onParamsChange));
  }

  onParamsChange(params: Params) {
    let { delay } = params;
    if (delay < 1){
      return;
    }

    this.delay = delay;
    if (this.interval){
      clearInterval(this.interval);
      this.onLifeStateChanged(true);
    }
  }

  onLifeStateChanged(state: boolean): void {
    if (state) {      
        this.interval = setInterval(() => {
          let [alive, dead] = this.grid.calcNextGen();
          this.paint(alive, dead);
          this.lifeControlService.upCount();
      }, this.delay);
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
    this.startOptions = startOptions;
    this.onReset();
  }

  onReset(): void {
    this.grid = grid.create(this.cols, this.rows, this.startOptions);
    this.renderGrid(this.grid);
  }

  onCanvasClick(event) {
    if (!event) {
      return;
    }

    let x = Math.floor(event.offsetX / this.cellPixelSize);
    let y = Math.floor(event.offsetY / this.cellPixelSize);

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
      let isAlive = !this.grid.cells[y * this.grid.width + x].isAlive;
      this.grid.set(x, y, isAlive);
      (isAlive ? alive : dead).push({x: x, y: y});
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
    this.cols = 2 * Math.floor(this.containerWidth / this.cellPixelSize / 2);
    this.rows = 2 * Math.floor(this.containerHeight / this.cellPixelSize / 2);
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
    this.grid = grid.create(this.cols, this.rows, this.startOptions);
    this.renderGrid(this.grid);     
  }

  updatePixelSize(pixelSize: number): void {
    this.cellPixelSize = pixelSize;
    this.cols = 2 * Math.floor(this.containerWidth / this.cellPixelSize / 2);
    this.rows = 2 * Math.floor(this.containerHeight / this.cellPixelSize / 2);
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
    let size = this.cellPixelSize - this.cellBorderSize;
    for (const cell of cells) {
      let x = cell.x * this.cellPixelSize + this.cellBorderSize;
      let y = cell.y * this.cellPixelSize + this.cellBorderSize;
      this.context.fillRect(x, y, size, size);
    }
  }

  clear() {    
    this.context.clearRect(0, 0, this.cols * this.cellPixelSize, this.rows * this.cellPixelSize);
  }

  get Width(): number {
    return this.cols * this.cellPixelSize;
  }

  get Height(): number {
    return this.rows * this.cellPixelSize;
  }
}
