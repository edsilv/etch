import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;

export class Mover extends DisplayObject {

	public velocity: Vector;
    public color: string = '#000';

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
        this.position = this.position.toVector().add(this.velocity).toPoint();

        if (this.position.x > this.canvasWidth) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = this.canvasWidth;
        }

        if (this.position.y > this.canvasHeight) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = this.canvasHeight;
        }
    }

    draw(): void {
        // optionally set origin to position
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.width * .5, 0, Math.TAU, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}