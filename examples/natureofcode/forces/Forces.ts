import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Mover} from './Mover';

export default class Forces extends Stage{

	public movers: Mover[];
	public wind: Vector;
	public gravity: Vector;

	setup(): void {
		this.movers = [];

		this.wind = new Vector(0.01, 0);
		this.gravity = new Vector(0, 0.1);

		for (var i = 0; i < 10; i++) {
    		var mover: Mover = new Mover(Math.randomBetween(0.1, 5), 0, 0);
			this.movers.push(mover);
			mover.init(this);
			this.displayList.add(mover);
		}
	}

}