import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Vector = etch.primitives.Vector;

export class Mover4 extends DisplayObject{

	public position: Vector;
	public velocity: Vector;
	public acceleration: Vector;
	public topspeed: number;
	public width: number;
	public height: number;

	setup(): void{
		this.width = 30;
        this.height = 30;

		this.position = new Vector(Math.randomBetween(this.width), Math.randomBetween(this.height));
    	this.velocity = new Vector(1, 0);
    	this.topspeed = 10;
	}

    update(): void{
    	var mouse = new Vector(mouseX, mouseY);
    	var dir = Vector.sub(mouse, this.position);

    	dir.normalize();
    	dir.mult(0.5);

    	this.acceleration = dir;

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