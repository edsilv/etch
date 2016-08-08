import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Liquid from './Liquid';
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;
import FluidResistance from './FluidResistance';

export class Mover4 extends DisplayObject {

	public velocity: Vector;
	public acceleration: Vector;
	public mass: number;
	public color: string = '#eff2f6';

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

        if(this.isInside((<FluidResistance>this.drawTo).liquid)){
        	this.drag((<FluidResistance>this.drawTo).liquid)
        }

        var m = 0.1 * this.mass;
        var gravity = new Vector(0, m);
        this.applyForce(gravity);

        this.velocity.add(this.acceleration);
	    this.position = this.position.toVector().add(this.velocity).toPoint();
	    this.acceleration.mult(0);
    }

    isInside(l: Liquid): boolean{
		if(this.position.x >= l.position.x && this.position.x <= l.position.x + l.width && this.position.y > l.position.y && this.position.y < l.position.y + l.height){
			return true;
		} else {
		    return false;
		}
	}

    drag(l: Liquid): void {
		var speed: number = this.velocity.mag();
		var dragMagnitude: number = l.c * speed * speed;

		var drag: Vector = this.velocity.get();
		drag.mult(-1);
		drag.normalize();

		drag.mult(dragMagnitude);

		this.applyForce(drag);
	}

    draw(): void {
		this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.mass * 20, 0, Math.TAU, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

}