import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;

export class Mover4 extends DisplayObject{

	public velocity: Vector;
	public acceleration: Vector;
	public topspeed: number;
	public color: string = '#000';

	init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void {
        super.init(drawTo, drawFrom);
    }

	setup(): void{
		this.width = 30;
        this.height = 30;

		this.position = new Point(Math.randomBetween(this.ctxWidth), Math.randomBetween(this.ctxHeight));
    	this.velocity = new Vector(1, 0);
    	this.topspeed = 10;
	}

    update(): void{
    	var mouse: Point = stage.mousePos.clone();
		this.acceleration = mouse.toVector().sub(this.position.toVector()).normalize().mult(0.5);

    	this.velocity.add(this.acceleration);
	    this.velocity.limit(this.topspeed);

	    this.position = this.position.toVector().add(this.velocity).toPoint();

		if (this.position.x > this.ctxWidth) {
			this.position.x = 0;
		} else if (this.position.x < 0) {
			this.position.x = this.ctxWidth;
		}

		if (this.position.y > this.ctxHeight) {
			this.position.y = 0;
		} else if (this.position.y < 0) {
			this.position.y = this.ctxHeight;
		}
    }

    draw(): void{
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.width * .5, 0, Math.TAU, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

}