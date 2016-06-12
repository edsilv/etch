module etch.drawing{
    export interface IDisplayContext {
        ctx: CanvasRenderingContext2D;
        width: number;
        height: number;
        isCached: boolean;
    }
}