//import {DisplayObject} from '../src/Drawing/DisplayObject';
//import {IDisplayContext} from '../src/Drawing/IDisplayContext';

export class GreenSquare extends DisplayObject {

    Init(canvas: IDisplayContext): void {
        super.Init(canvas);
    }

    Setup() {
        //console.log('setup green');
    }

    Update() {
        super.Update();
        //console.log('update green');
    }

    Draw() {
        super.Draw();

        this.Ctx.fillStyle = "#00FF00";
        this.Ctx.fillRect(125, 125, 50, 50);
        //console.log("draw green");
    }
}