import {DisplayObject} from '../src/Drawing/DisplayObject';
import {IDisplayContext} from '../src/Drawing/IDisplayContext';

export class GreenSquare extends DisplayObject {

    Init(canvas: IDisplayContext): void {
        super.Init(canvas);
    }

    Update() {
        super.Update();
    }

    Draw() {
        super.Draw();

        this.Ctx.fillStyle = "#00FF00";
        this.Ctx.fillRect(125, 125, 50, 50);
        console.log("green square");
    }
}