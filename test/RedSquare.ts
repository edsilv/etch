import {DisplayObject} from '../src/Drawing/DisplayObject';
import {IDisplayContext} from '../src/Drawing/IDisplayContext';

export class RedSquare extends DisplayObject {

    Init(canvas: IDisplayContext): void {
        super.Init(canvas);
    }

    Update() {
        super.Update();
    }

    Draw() {
        super.Draw();

        this.Ctx.fillStyle = "#FF0000";
        this.Ctx.fillRect(0, 0, 150, 150);
    }
}