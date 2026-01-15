import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LifeControlComponent } from './life-control/life-control.component';
import { PixelSizeControlComponent } from './pixel-size-control/pixel-size-control.component';
import { LifeCanvasComponent } from './life-canvas/life-canvas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LifeControlComponent,
    PixelSizeControlComponent,
    LifeCanvasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'AngularLife';
}
