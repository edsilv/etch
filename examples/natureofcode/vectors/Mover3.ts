import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Vector = etch.primitives.Vector;

export class Mover3 extends DisplayObject {

	public position: Vector;
	public velocity: Vector;
	public acceleration: Vector;
	public topspeed: number;

	setup(): void{
		this.position = new Vector(Math.randomBetween(width), random(height));
    	this.velocity = new Vector(1, 0);
    	this.acceleration = new Vector(-0.001, 0.01);
    	this.topspeed = 10;
	}

    update(): void{
    	this.acceleration = Vector.random2D();
    	this.acceleration.mult(Math.randomBetween(2));

    	this.velocity.add(this.acceleration);
	    this.velocity.limit(this.topspeed);
	    this.position.add(this.velocity);

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

    draw(): void{
	    this.ctx.fill(0);
	    this.ctx.ellipse(this.position.x, this.position.y, 20);
    }

}