import { Component, OnInit } from '@angular/core';
import { gliderDirection } from '../game-model/gliderDirection';
import { LifeControlService } from '../life-control.service';

@Component({
  selector: 'app-glider-mode-switch',
  templateUrl: './glider-mode-switch.component.html',
  styleUrls: ['./glider-mode-switch.component.css']
})
export class GliderModeSwitchComponent implements OnInit {

  public gliderMode: boolean;
  public gliderDirection: gliderDirection;

  public readonly upLeft: gliderDirection = gliderDirection.UpLeft;
  public readonly upRight: gliderDirection = gliderDirection.UpRight;
  public readonly downLeft: gliderDirection = gliderDirection.DownLeft;
  public readonly downRight: gliderDirection = gliderDirection.DownRight;

  constructor(private lifeControlService: LifeControlService) { 
    this.gliderDirection = lifeControlService.DefaultGliderDirection;
    this.gliderMode = lifeControlService.DefaultGliderMode;
  }

  onModeChange(event): void {
    this.gliderMode = !this.gliderMode;
    this.lifeControlService.changeGliderMode(this.gliderMode, this.gliderDirection);
  }

  onDirectionChange(event): void {
    this.gliderDirection = event.target.value;
    this.lifeControlService.changeGliderMode(this.gliderMode, this.gliderDirection);
  }

  ngOnInit() {
  }

}
