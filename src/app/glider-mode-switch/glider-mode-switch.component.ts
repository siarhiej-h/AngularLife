import { Component, OnInit } from '@angular/core';
import { gliderDirection } from '../game-model/gliderDirection';
import { LifeControlService } from '../life-control.service';

@Component({
  selector: 'app-glider-mode-switch',
  templateUrl: './glider-mode-switch.component.html',
  styleUrls: ['./glider-mode-switch.component.css']
})
export class GliderModeSwitchComponent implements OnInit {

  private gliderMode: boolean;
  private gliderDirection: gliderDirection;

  private readonly upLeft: gliderDirection = gliderDirection.UpLeft;
  private readonly upRight: gliderDirection = gliderDirection.UpRight;
  private readonly downLeft: gliderDirection = gliderDirection.DownLeft;
  private readonly downRight: gliderDirection = gliderDirection.DownRight;

  constructor(private lifeControlService: LifeControlService) { 
    this.gliderDirection = lifeControlService.DefaultGliderDirection;
    this.gliderMode = lifeControlService.DefaultGliderMode;
  }

  private onModeChange(event): void {
    this.gliderMode = !this.gliderMode;
    this.lifeControlService.changeGliderMode(this.gliderMode, this.gliderDirection);
  }

  private onDirectionChange(event): void {
    this.gliderDirection = event.target.value;
    this.lifeControlService.changeGliderMode(this.gliderMode, this.gliderDirection);
  }

  ngOnInit() {
  }

}
