import {DisplayObjectCollection} from './DisplayObjectCollection';
import {IDisplayContext} from './IDisplayContext';
import {Vector} from '../Primitives/Vector';

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
    Position: Vector;
    Setup(): void;
    Show(): void;
    Sketch: IDisplayContext;
    Update(): void;
    Width: number;
    ZIndex: number;
}