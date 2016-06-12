import DisplayObject = etch.drawing.DisplayObject;

export class RedSquare extends DisplayObject {

    init(canvas: IDisplayContext): void {
        super.init(canvas);
    }

    setup() {
        //console.log('setup red');
    }

    update() {
        super.update();
        //console.log('update red');
    }

    draw() {
        super.draw();

        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(0, 0, 150, 150);
        //console.log("draw red");
    }
}