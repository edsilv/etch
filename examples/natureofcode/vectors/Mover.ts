import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;

export class Mover extends DisplayObject {

	public velocity: Vector;
    private _color: string = '#000';

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
        var p: Point = Vector.add(this.position.toVector(), this.velocity).toPoint();

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
        // optionally set origin to position
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.width * .5, 0, Math.TAU, false);
        this.ctx.fillStyle = this._color;
        this.ctx.fill();
    }
}