//import {DisplayObject} from '../src/Drawing/DisplayObject';
//import {IDisplayContext} from '../src/Drawing/IDisplayContext';
import {GreenSquare} from './GreenSquare';

export class CyanSquare extends DisplayObject {

    Init(canvas: IDisplayContext): void {
        super.Init(canvas);
    }

    Setup() {
        console.log('setup cyan');
    }

    Update() {
        super.Update();
        console.log('update cyan');
    }

    Draw() {
        super.Draw();

        this.Ctx.fillStyle = "#00FFFF";
        this.Ctx.fillRect(145, 145, 50, 50);
        console.log("draw cyan");
    }
}