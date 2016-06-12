import {GreenSquare} from './GreenSquare';
import {CyanSquare} from './CyanSquare';
import DisplayObject = etch.drawing.DisplayObject;

export class BlueSquare extends DisplayObject {

    public cyanSquare: CyanSquare;
    public greenSquare: GreenSquare;

    init(canvas: IDisplayContext): void {
        super.init(canvas);
    }

    setup() {
        //console.log('setup blue');
        this.greenSquare = new GreenSquare();
        this.greenSquare.init(this);
        //this.greenSquare.Hide();
        //this.greenSquare.Pause();
        this.displayList.add(this.greenSquare);

        this.cyanSquare = new CyanSquare();
        this.cyanSquare.init(this);
        this.displayList.add(this.cyanSquare);

        //this.DisplayList.Swap(this.greenSquare, this.cyanSquare);
        //this.DisplayList.ToFront(this.greenSquare);
        //this.DisplayList.SetIndex(this.greenSquare, 1);
    }

    update() {
        super.update();
        //console.log('update blue');
    }

    draw() {
        super.draw();

        this.ctx.fillStyle = "#0000FF";
        this.ctx.fillRect(150, 150, 150, 150);
        //console.log("draw blue");
    }
}