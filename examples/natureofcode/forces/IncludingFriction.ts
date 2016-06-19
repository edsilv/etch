import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Mover3} from './Mover3';

export default class IncludingFriction extends Stage{

	public movers: Mover3[];
	public friction: number;
	public wind: Vector;
	public gravity: Vector;

	setup(): void {
		this.movers = [];

		this.friction = 0.01;
		this.wind = new Vector(0.01, 0);
		this.gravity = new Vector(0, 0.1);

		for (var i = 0; i < 10; i++) {
    		var mover: Mover3 = new Mover3(Math.randomBetween(0.1, 5), 0, 0);
			this.movers.push(mover);
			mover.init(this);
			this.displayList.add(mover);
		}
	}
}