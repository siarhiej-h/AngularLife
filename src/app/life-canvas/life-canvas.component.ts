import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  inject,
  effect,
  signal,
  HostListener
} from '@angular/core';
import { Grid } from '../game-model/grid';
import { CellData } from '../game-model/cell';
import { LifeControlService } from '../life-control.service';
import { GliderDirection } from '../game-model/glider-direction';
import { getGlider } from '../game-model/life-form-helper';

@Component({
  selector: 'app-life-canvas',
  standalone: true,
  templateUrl: './life-canvas.component.html',
  styleUrl: './life-canvas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCanvasComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  private readonly lifeControl = inject(LifeControlService);

  private context!: CanvasRenderingContext2D;
  private grid!: Grid;
  private animationFrameId: number | null = null;
  private lastFrameTime = 0;
  private containerWidth = 0;
  private containerHeight = 0;

  // Reactive state
  readonly cols = signal(0);
  readonly rows = signal(0);
  readonly cellPixelSize = signal(this.lifeControl.defaultPixelSize);
  private readonly cellBorderSize = 1;

  // Canvas dimensions
  readonly canvasWidth = signal(0);
  readonly canvasHeight = signal(0);

  constructor() {
    // React to pixel size changes
    effect(() => {
      const size = this.lifeControl.pixelSize();
      this.cellPixelSize.set(size);
      this.updateDimensions();
      this.initializeGrid();
    });

    // React to start options changes
    effect(() => {
      this.lifeControl.startOptions();
      if (this.context) {
        this.initializeGrid();
      }
    });

    // React to reset trigger
    effect(() => {
      this.lifeControl.resetTrigger();
      if (this.context) {
        this.stopSimulation();
        this.initializeGrid();
      }
    });

    // React to simulation state changes
    effect(() => {
      const state = this.lifeControl.simulationState();
      if (state.isRunning) {
        this.startSimulation();
      } else {
        this.stopSimulation();
      }
    });
  }

  ngOnInit(): void {
    this.calculateContainerSize();
    this.updateDimensions();
  }

  ngAfterViewInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (!ctx) {
      throw new Error('Could not get canvas context');
    }
    this.context = ctx;
    this.initializeGrid();
  }

  ngOnDestroy(): void {
    this.stopSimulation();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateContainerSize();
    this.updateDimensions();
    this.initializeGrid();
  }

  onCanvasClick(event: MouseEvent): void {
    if (!this.grid) return;

    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / this.cellPixelSize());
    const y = Math.floor((event.clientY - rect.top) / this.cellPixelSize());

    const alive: CellData[] = [];
    const dead: CellData[] = [];
    const gliderMode = this.lifeControl.gliderMode();

    if (gliderMode.enabled) {
      this.placeGlider(x, y, gliderMode.direction, alive, dead);
    } else {
      this.toggleCell(x, y, alive, dead);
    }

    this.paint(alive, dead);
  }

  private placeGlider(
    x: number,
    y: number,
    direction: GliderDirection,
    alive: CellData[],
    dead: CellData[]
  ): void {
    const cells = getGlider(direction, this.grid, x, y);
    for (const [cellX, cellY, isAlive] of cells) {
      this.grid.set(cellX, cellY, isAlive);
      (isAlive ? alive : dead).push({ x: cellX, y: cellY });
    }
  }

  private toggleCell(
    x: number,
    y: number,
    alive: CellData[],
    dead: CellData[]
  ): void {
    const idx = y * this.grid.width + x;
    if (idx >= 0 && idx < this.grid.cells.length) {
      const isAlive = !this.grid.cells[idx].isAlive;
      this.grid.set(x, y, isAlive);
      (isAlive ? alive : dead).push({ x, y });
    }
  }

  private calculateContainerSize(): void {
    this.containerWidth = Math.floor(window.innerWidth * 0.95);
    this.containerHeight = Math.floor(window.innerHeight * 0.65);
  }

  private updateDimensions(): void {
    const pixelSize = this.cellPixelSize();
    // Ensure even numbers for smoother rendering
    const cols = 2 * Math.floor(this.containerWidth / pixelSize / 2);
    const rows = 2 * Math.floor(this.containerHeight / pixelSize / 2);

    this.cols.set(cols);
    this.rows.set(rows);
    this.canvasWidth.set(cols * pixelSize);
    this.canvasHeight.set(rows * pixelSize);
  }

  private initializeGrid(): void {
    if (!this.context) return;

    this.clear();
    this.grid = Grid.create(
      this.cols(),
      this.rows(),
      this.lifeControl.startOptions()
    );
    this.renderGrid();
  }

  private renderGrid(): void {
    const alive: CellData[] = [];
    const dead: CellData[] = [];

    for (let row = 0; row < this.grid.height; row++) {
      const rowOffset = row * this.grid.width;
      for (let col = 0; col < this.grid.width; col++) {
        const cell = { x: col, y: row };
        (this.grid.cells[rowOffset + col].isAlive ? alive : dead).push(cell);
      }
    }

    this.paint(alive, dead);
  }

  private startSimulation(): void {
    if (this.animationFrameId !== null) return;

    const frameDelay = this.lifeControl.speed();

    const animate = (timestamp: number): void => {
      if (timestamp - this.lastFrameTime >= frameDelay) {
        const [alive, dead] = this.grid.calcNextGen();
        this.paint(alive, dead);
        this.lifeControl.incrementGeneration();
        this.lastFrameTime = timestamp;
      }
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  private stopSimulation(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  private paint(alive: CellData[], dead: CellData[]): void {
    const pixelSize = this.cellPixelSize();
    const size = pixelSize - this.cellBorderSize;
    const border = this.cellBorderSize;

    // Paint dead cells (background color)
    if (dead.length > 0) {
      this.context.fillStyle = '#1a1a2e';
      for (const cell of dead) {
        this.context.fillRect(
          cell.x * pixelSize + border,
          cell.y * pixelSize + border,
          size,
          size
        );
      }
    }

    // Paint alive cells (accent color)
    if (alive.length > 0) {
      this.context.fillStyle = '#e94560';
      for (const cell of alive) {
        this.context.fillRect(
          cell.x * pixelSize + border,
          cell.y * pixelSize + border,
          size,
          size
        );
      }
    }
  }

  private clear(): void {
    if (this.context) {
      this.context.fillStyle = '#1a1a2e';
      this.context.fillRect(0, 0, this.canvasWidth(), this.canvasHeight());
    }
  }
}
