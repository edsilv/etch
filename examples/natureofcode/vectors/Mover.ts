import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Vector = etch.primitives.Vector;

export class Mover extends DisplayObject {

	public velocity: Vector;

	init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void {
        super.init(drawTo, drawFrom);
    }

	setup(): void {
        this.width = 30;
        this.height = 30;

        this.position = new Point(Math.randomBetween(this.canvasWidth), Math.randomBetween(this.canvasHeight));
        this.velocity = new Vector(Math.randomBetween(-10, 10), Math.randomBetween(-10, 10));
    }

    update(): void {
        var p: Point = Point.addVector(this.position, this.velocity);

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

        this.position = p;
    }

    draw(): void {
    	this.ctx.beginPath();
		this.ctx.ellipse(this.position.x, this.position.y, this.width, this.height, 0, 0, 0);
		this.ctx.stroke();
    }
}