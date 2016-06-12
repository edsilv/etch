import {GreenSquare} from './GreenSquare';
import DisplayObject = etch.drawing.DisplayObject;

export class CyanSquare extends DisplayObject {

    init(canvas: IDisplayContext): void {
        super.init(canvas);
    }

    setup() {
        //console.log('setup cyan');
    }

    update() {
        super.update();
        //console.log('update cyan');
    }

    draw() {
        super.draw();

        this.ctx.fillStyle = "#00FFFF";
        this.ctx.fillRect(145, 145, 50, 50);
        //console.log("draw cyan");
    }
}