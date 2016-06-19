import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Mover4} from "./Mover4";

export default class MultipleAccelerateTowardsMouse extends Stage{

	public movers: Mover4[];

	setup(): void {
		this.movers = [];

		for (var i = 0; i < 20; i++) {
    		var mover: Mover4 = new Mover4();
			this.movers.push(mover);
			mover.init(this);
        	this.displayList.add(mover);
		}
	}

}