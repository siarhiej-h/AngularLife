import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeControlComponent } from './life-control/life-control.component';
import { GliderModeSwitchComponent } from './glider-mode-switch/glider-mode-switch.component';
import { LifeCanvasComponent } from './life-canvas/life-canvas.component';
import { PixelSizeControlComponent } from './pixel-size-control/pixel-size-control.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeControlComponent,
    GliderModeSwitchComponent,
    LifeCanvasComponent,
    PixelSizeControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
