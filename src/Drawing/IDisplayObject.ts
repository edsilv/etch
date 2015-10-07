import {DisplayObjectCollection} from './DisplayObjectCollection';
import {IDisplayContext} from './IDisplayContext';
import Point = minerva.Point;

export interface IDisplayObject extends IDisplayContext{
    Ctx: CanvasRenderingContext2D;
    DisplayList: DisplayObjectCollection<IDisplayObject>;
    Draw(): void;
    Height: number;
    Hide(): void;
    Init(sketch?: IDisplayContext): void;
    Initialised: boolean;
    IsPaused: boolean;
    IsVisible: boolean;
    Pause(): void;
    Play(): void;
    Position: Point;
    Setup(): void;
    Show(): void;
    Sketch: IDisplayContext;
    Update(): void;
    Width: number;
    ZIndex: number;
}
