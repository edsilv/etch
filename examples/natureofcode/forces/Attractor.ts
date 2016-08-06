import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;
import {Mover5} from './Mover5';

export class Attractor extends DisplayObject {

	public mass: number;
	public color: string = '#000';
    public G: number;
    public movers: Mover5[];

	constructor(mass: number, x: number, y: number, movers: Mover5[]){
		super();
		this.mass = mass;
		this.position = new Point(x, y);
        this.G = 1;
        this.movers = movers;
	}

	init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void {
        super.init(drawTo, drawFrom);
    }

	attract(m: Mover5): Vector {
        var force: Vector = Vector.sub(this.position.toVector(), m.position.toVector());
		var distance: number = force.mag();
		distance = Math.clamp(distance, 5.0, 25.0);
		force.normalize();
		var strength = (this.G * this.mass) / (distance * distance);
		force.mult(strength);
		return force;
    }

    update(): void{
        for (var i = 0; i < this.movers.length; i++) {
            var mover: Mover5 = this.movers[i];
            var force = this.attract(mover);
            mover.applyForce(force);
        }
    }

    draw(): void {
		this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.mass, 0, Math.TAU, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

}