import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {default as Liquid} from './Liquid';
import {Mover4} from './Mover4';

export default class FluidResistance extends Stage {

	public movers: Mover4[];
	public gravity: Vector;
	public liquid: Liquid;

	setup(): void{
		this.movers = [];

		this.liquid = new Liquid(0.1);
		this.liquid.init(this);
		this.displayList.add(this.liquid);

		for (var i = 0; i < 10; i++) {
    		var mover: Mover4 = new Mover4(Math.randomBetween(1, 4), this.canvasWidth / 10 * i, 0);
			this.movers.push(mover);
			mover.init(this);
			this.displayList.add(mover);
		}
	}

	update(): void {
		this.liquid.position.x = 0;
		this.liquid.position.y = this.canvasHeight * .5;
		this.liquid.width = this.canvasWidth;
		this.liquid.height = this.canvasHeight * .5;
	}
}
