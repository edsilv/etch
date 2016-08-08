import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;
import {Mover5 as Mover} from './Mover5';

export class Attractor extends DisplayObject {

	public mass: number;
	public color: string = '#000';
    public G: number;
    public friction: number;
    public movers: Mover[];
    public sticky: boolean;
    public radius: number;
    public stickinessRadius: number;

	constructor(mass: number, g: number, friction: number, sticky: boolean, x: number, y: number, movers: Mover[]){
		super();
		this.mass = mass;
		this.position = new Point(x, y);
        this.G = g;
        this.friction = friction;
        this.movers = movers;
        this.sticky = sticky;
        this.radius = Math.min(this.mass, 30);
        this.stickinessRadius = this.radius;
	}

	init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void {
        super.init(drawTo, drawFrom);
    }

	applyGravity(m: Mover): void {
        var force: Vector = Vector.sub(this.position.toVector(), m.position.toVector());
		var distance: number = force.mag();
		distance = Math.clamp(distance, 5.0, 25.0);
		force.normalize();
		var strength: number = (this.G * this.mass) / (distance * distance);
		force.mult(strength);
		m.applyForce(force);
    }

    applyFriction(m: Mover): void {
        var force: Vector = m.velocity.clone();
        force.mult(-1).normalize().mult(this.friction);
        m.applyForce(force);
    }

    applyStickiness(m: Mover): void {        
        var delta: Vector = Vector.sub(this.position.toVector(), m.position.toVector());
        var distance: number = delta.mag();
        
        if (distance < this.stickinessRadius){
            var force: Vector = m.velocity.clone();
            force.mult(-1);
            m.applyForce(force);
            m.position.x = this.position.x;
            m.position.y = this.position.y;
        }
    }

    update(): void{
        for (var i = 0; i < this.movers.length; i++) {
            var mover: Mover = this.movers[i];
            this.applyGravity(mover);
            this.applyFriction(mover);
            this.applyStickiness(mover);
        }
    }

    draw(): void {
		this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.TAU, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

}