import {DisplayObject} from '../src/Drawing/DisplayObject';
import {IDisplayContext} from '../src/Drawing/IDisplayContext';
import {GreenSquare} from './GreenSquare';

export class BlueSquare extends DisplayObject {

    public GreenSquare: GreenSquare;

    Init(canvas: IDisplayContext): void {
        super.Init(canvas);
    }

    Setup() {
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
        this.Ctx.fillRect(150, 150, 150, 150);
        console.log("blue square");
    }
}