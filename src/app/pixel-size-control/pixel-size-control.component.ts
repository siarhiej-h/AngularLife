import { Component, OnInit, OnDestroy } from '@angular/core';
import { LifeControlService } from '../life-control.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pixel-size-control',
  templateUrl: './pixel-size-control.component.html',
  styleUrls: ['./pixel-size-control.component.css']
})
export class PixelSizeControlComponent implements OnInit, OnDestroy {  

  private Enabled: boolean = true;

  private PixelSize: number = 4;

  private subs: Subscription[] = [];  
  
  constructor(private lifeControlService: LifeControlService) { 
    this.subs.push(lifeControlService.LifeState$.subscribe(state => {
      if (state) {
        this.Enabled = false;
      }
    }));

    this.subs.push(lifeControlService.Reset$.subscribe(() => {
      this.Enabled = true;
    }));
  }

  ngOnInit() {
  }

  private onSliderValueChange(event) {
    if (event.target) {
      this.PixelSize = event.target.value;
      this.lifeControlService.changePixelSize(this.PixelSize);
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
