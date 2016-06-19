import DisplayObject = etch.drawing.DisplayObject;

export class GreenSquare extends DisplayObject {

    init(canvas: IDisplayContext): void {
        super.init(canvas);
    }

    setup() {
        //console.log('setup green');
    }

    update() {
        super.update();
        //console.log('update green');
    }

    draw() {
        super.draw();

        this.ctx.fillStyle = "#00FF00";
        this.ctx.fillRect(0, 0, 50, 50);
        //console.log("draw green");
    }
}