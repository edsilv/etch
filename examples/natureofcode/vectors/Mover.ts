import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Vector = etch.primitives.Vector;

export class Mover extends DisplayObject {

	public position: Vector;
	public velocity: Vector;

	init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void {
        super.init(drawTo, drawFrom);
    }

	setup() {
        this.width = 30;
        this.height = 30;

        this.position = new Vector(Math.randomBetween(this.canvasWidth), Math.randomBetween(this.canvasHeight)).toPoint();
        this.velocity = new Vector(Math.randomBetween(-10, 10), Math.randomBetween(-10, 10));
    }

    update() {
        super.update();

        var p: Vector = this.position.toVector();
        p.add(this.velocity);

        if (p.x > this.canvasWidth) {
            p.x = 0;
        } else if (p.x < 0) {
            p.x = this.canvasWidth;
        }

        if (p.y > this.canvasHeight) {
            p.y = 0;
        } else if (p.y < 0) {
            p.y = this.canvasHeight;
        }

        this.position = p.toPoint();
    }

    draw(): void{
    	this.ctx.fill(0);
	    this.ctx.ellipse(this.position.x, this.position.y, 20);
    }
}