import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { startOptions } from './game-model/startOptions';
import { gliderDirection } from './game-model/gliderDirection';

@Injectable({
  providedIn: 'root'
})
export class LifeControlService {

  public DefaultStartOptions: startOptions = startOptions.Random;
  public DefaultPixelSize: number = 4;
  public DefaultGliderDirection: gliderDirection = gliderDirection.UpRight;
  public DefaultGliderMode: boolean = true;

  private _cellPixelSize$: Subject<number>;
  private _startOptions$: Subject<startOptions>;
  private _lifeState$: Subject<boolean>;
  private _generationsUp$: Subject<number>;
  private _reset$: Subject<void>;
  private _gliderMode$: Subject<[boolean, gliderDirection]>;

  constructor() {
    this._cellPixelSize$ = new Subject<number>();
    this._startOptions$ = new Subject<startOptions>();
    this._lifeState$ = new Subject<boolean>();
    this._generationsUp$ = new Subject<number>();
    this._reset$ = new Subject<void>();
    this._gliderMode$ = new BehaviorSubject<[boolean, gliderDirection]>([this.DefaultGliderMode, this.DefaultGliderDirection]);
  }  

  public get CellPixelSize$(): Observable<number> {
    return this._cellPixelSize$;
  }

  public changePixelSize(pixelSize: number): void {
    this._cellPixelSize$.next(pixelSize);
  }

  public get StartOptions$(): Observable<startOptions> {
    return this._startOptions$;
  }
  
  public get LifeState$(): Observable<boolean> {
    return this._lifeState$;
  }

  public get Reset$(): Observable<void> {
    return this._reset$;
  }

  public get GliderMode$(): Observable<[boolean, gliderDirection]> {
    return this._gliderMode$;
  }

  public startGen(): void {
    this._lifeState$.next(true);
  }

  public stopGen(): void {
    this._lifeState$.next(false);
  }

  public changeStartOptions(startOptions: startOptions): void {
    this._startOptions$.next(startOptions);
  }
  
  public get generationsUp$(): Observable<number> {
    return this._generationsUp$;
  }

  public upCount(): void {
    this._generationsUp$.next();
  }

  public reset(): void {
    this._reset$.next();
  }

  public changeGliderMode(gliderMode: boolean, direction: gliderDirection): void {
    this._gliderMode$.next([gliderMode, direction]);
  }
}
