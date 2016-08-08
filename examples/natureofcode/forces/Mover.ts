import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;
import Forces from './Forces';

export class Mover extends DisplayObject {

	public velocity: Vector;
	public acceleration: Vector;
	public mass: number;
	public color: string = '#E2E2E2';

	constructor(mass: number, x: number, y: number){
		super();
		this.mass = mass;
		this.position = new Point(x, y);
    	this.velocity = new Vector(0, 0);
    	this.acceleration = new Vector(0, 0);
	}

	init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void {
        super.init(drawTo, drawFrom);
    }

	applyForce(force: Vector): void {
    	this.acceleration.add(Vector.divN(force, this.mass));
	}

    update(): void{
    	this.applyForce((<Forces>this.drawTo).wind);
		this.applyForce((<Forces>this.drawTo).gravity);
		
		this.velocity.add(this.acceleration);
	    this.position = this.position.toVector().add(this.velocity).toPoint();
	    this.acceleration.mult(0);

		if (this.position.x > this.canvasWidth) {
			this.position.x = this.canvasHeight;
      		this.velocity.x *= -1;
		} else if (this.position.x < 0) {
			this.velocity.x *= -1;
      		this.position.x = 0;
		}

		if (this.position.y > this.canvasHeight) {
			this.velocity.y *= -1;
      		this.position.y = this.canvasHeight;
		}
    }

    draw(): void {
		this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.mass * 20, 0, Math.TAU, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

}