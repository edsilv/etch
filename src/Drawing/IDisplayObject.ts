import DisplayObjectCollection = etch.drawing.DisplayObjectCollection;
import IDisplayContext = etch.drawing.IDisplayContext;
import Point = etch.primitives.Point;
import Stage = etch.drawing.Stage;

module etch.drawing{
    export interface IDisplayObject extends IDisplayContext{
        canvasWidth: number;
        canvasHeight: number;
        deltaTime: number;
        displayList: DisplayObjectCollection<IDisplayObject>;
        draw(): void;
        drawFrom: IDisplayContext;
        drawTo: IDisplayContext;
        frameCount: number;
        height: number;
        hide(): void;
        init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void;
        isInitialised: boolean;
        isPaused: boolean;
        isVisible: boolean;
        lastVisualTick: number;
        pause(): void;
        play(): void;
        position: Point;
        resize(): void;
        setup(): void;
        show(): void;
        update(): void;
        width: number;
        zIndex: number;
    }
}