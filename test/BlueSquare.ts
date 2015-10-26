//import {DisplayObject} from '../src/Drawing/DisplayObject';
//import {IDisplayContext} from '../src/Drawing/IDisplayContext';
import {GreenSquare} from './GreenSquare';
import {CyanSquare} from './CyanSquare';

export class BlueSquare extends DisplayObject {

    public CyanSquare: CyanSquare;
    public GreenSquare: GreenSquare;

    Init(canvas: IDisplayContext): void {
        super.Init(canvas);
    }

    Setup() {
        console.log('setup blue');
        this.GreenSquare = new GreenSquare();
        this.GreenSquare.Init(this);
        //this.GreenSquare.Hide();
        //this.GreenSquare.Pause();
        this.DisplayList.Add(this.GreenSquare);

        this.CyanSquare = new CyanSquare();
        this.CyanSquare.Init(this);
        this.DisplayList.Add(this.CyanSquare);

        //this.DisplayList.Swap(this.GreenSquare, this.CyanSquare);
        //this.DisplayList.ToFront(this.GreenSquare);
        //this.DisplayList.SetIndex(this.GreenSquare, 1);
    }

    Update() {
        super.Update();
        console.log('update blue');
    }

    Draw() {
        super.Draw();

        this.Ctx.fillStyle = "#0000FF";
        this.Ctx.fillRect(150, 150, 150, 150);
        console.log("draw blue");
    }
}