import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;

export class Mover5 extends DisplayObject {

	public velocity: Vector;
	public acceleration: Vector;
	public mass: number;
	public color: string = '#E2E2E2';

	constructor(mass: number, x: number, y: number, color?: string){
		super();
		this.mass = mass;
		this.position = new Point(x, y);
    	this.velocity = new Vector(0, 0);
    	this.acceleration = new Vector(0, 0);
		if (color) this.color = color;
	}

	init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void {
        super.init(drawTo, drawFrom);
    }

	applyForce(force: Vector): void {
    	this.acceleration.add(Vector.divN(force, this.mass));
	}

    update(): void{		
		this.velocity.add(this.acceleration);
	    this.position = this.position.toVector().add(this.velocity).toPoint();
	    this.acceleration.mult(0);
    }

    draw(): void {
		this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.mass * 20, 0, Math.TAU, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

}