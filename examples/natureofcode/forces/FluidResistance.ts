import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Liquid} from './Liquid';
import {Mover3} from './Mover3';

export default class FluidResistance extends Stage {

	public movers: Mover3[];
	public friction: number;
	public wind: Vector;
	public gravity: Vector;
	public liquid: Liquid;

	setup(): void{
		this.movers = [];

		for (var i = 0; i < 10; i++) {
    		var mover: Mover3 = new Mover3(Math.randomBetween(1, 4), this.ctxWidth / 10 * i, 0);
			this.movers.push(mover);
		}

		this.liquid = new Liquid(0, this.ctxHeight * .5, this.ctxWidth, this.ctxHeight * .5, 0.1);
		this.liquid.init(this);
		this.displayList.add(this.liquid);
	}

	update(): void{

        for (var i = 0; i < this.movers.length; i++) {

			// var mover: Mover3 = this.movers[i];

			// if(mover.isInside(this.liquid)){
			// 	mover.drag(this.liquid)
			// }

			// var m = 0.1 * mover.mass;
			// var gravity = new PVector(0, m);
    		// mover.applyForce(gravity);
		}
	}

}
