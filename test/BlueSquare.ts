import {DisplayObject} from '../src/Drawing/DisplayObject';
import {IDisplayContext} from '../src/Drawing/IDisplayContext';
import {GreenSquare} from './GreenSquare';

export class BlueSquare extends DisplayObject {

    public GreenSquare: GreenSquare;

    Init(canvas: IDisplayContext): void {
        super.Init(canvas);

        this.GreenSquare = new GreenSquare();
        this.GreenSquare.Init(this);
        this.DisplayList.Add(this.GreenSquare);
    }

    Update() {
        super.Update();
    }

    Draw() {
        super.Draw();

        this.Ctx.fillStyle = "#0000FF";
        this.Ctx.fillRect(200, 200, 150, 150);
    }
}