import { Component, OnInit, OnDestroy } from '@angular/core';
import { LifeControlService } from '../life-control.service';
import { startOptions } from '../game-model/startOptions';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-life-control',
  templateUrl: './life-control.component.html',
  styleUrls: ['./life-control.component.css']
})
export class LifeControlComponent implements OnInit, OnDestroy {

  public lifeStarted: boolean;

  public generationsPassed: number;

  public startOptions = startOptions;  

  public get startOptionKeys():string[] {
    return Object.keys(startOptions);
  }

  public selectedOption: startOptions;

  private subs: Subscription[] = [];  

  constructor(public lifeControlService: LifeControlService, private route: ActivatedRoute) { 

    this.lifeStarted = false;
    this.generationsPassed = 0;
    
    this.onReset = this.onReset.bind(this);
    this.onParamsChange = this.onParamsChange.bind(this);

    this.selectedOption = lifeControlService.DefaultStartOptions;
    this.subs.push(this.lifeControlService.generationsUp$.subscribe(() => {
      this.generationsPassed++;
    }));

    this.subs.push(this.lifeControlService.CellPixelSize$.subscribe(this.onReset));
    this.subs.push(this.route.queryParams.subscribe(this.onParamsChange));
  }

  onParamsChange(params: Params) {
    let { started } = params;    
    if ((/true/i).test(started)) {
      this.onStartStop();
    }
  }

  onStartStop(): void {
    if (this.lifeStarted) {
      this.lifeStarted = false;
      this.lifeControlService.stopGen();
    }
    else {
      this.lifeStarted = true;
      this.lifeControlService.startGen();
    }        
  }

  onReset(): void {
    this.lifeStarted = false;
    this.generationsPassed = 0;
    this.lifeControlService.reset();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  onStartModeChange(event) {
    this.selectedOption = event.target.value;
    this.lifeControlService.changeStartOptions(this.selectedOption);
  }
}
