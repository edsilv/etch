import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Mover4} from "./mover4";

export class MultipleAccelerateTowardsMouse extends Stage{

	movers: Array<Mover4>;

	setup(): void{
		this.movers = [];

		for (var i = 0; i < 20; i++) {
    		this.movers[i] = new Mover4();
		}
	}

}