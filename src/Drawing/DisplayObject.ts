import {ClockTimer} from '../Engine/ClockTimer';
import {DisplayObjectCollection} from './DisplayObjectCollection';
import {IDisplayObject} from './IDisplayObject';
import {IDisplayContext} from './IDisplayContext';
import {Point} from './../Primitives/Point';

var MAX_FPS: number = 100;
var MAX_MSPF: number = 1000 / MAX_FPS;

export class DisplayObject implements IDisplayObject {

    private _DisplayList: DisplayObjectCollection<IDisplayObject>;
    public Height: number;
    public Initialised: boolean = false;
    public IsPaused: boolean = false;
    public IsVisible: boolean = true;
    public Position: Point;
    public Sketch: any;
    public Width: number;
    public ZIndex: number;

    Init(sketch: IDisplayContext): void {
        this.Sketch = sketch;
        this.DisplayList = new DisplayObjectCollection();
        this.Initialised = true;
        this.Setup();
    }

    get Ctx(): CanvasRenderingContext2D{
        return this.Sketch.Ctx;
    }

    get DisplayList(): DisplayObjectCollection<IDisplayObject> {
        return this._DisplayList;
    }

    set DisplayList(value: DisplayObjectCollection<IDisplayObject>) {
        this._DisplayList = value;
    }

    public Setup(): void {

    }

    public Update(): void {

    }

    public Draw(): void {

    }

    public Dispose(): void {

    }

    public Play(): void {
        this.IsPaused = false;
    }

    public Pause(): void {
        this.IsPaused = true;
    }

    public Show(): void {
        this.IsVisible = true;
    }

    public Hide(): void {
        this.IsVisible = false;
    }

    //HitRect(x, y, w, h, mx, my): boolean {
        //return Utils.Measurements.Dimensions.HitRect(x, y, w, h, mx, my);
    //}
}
