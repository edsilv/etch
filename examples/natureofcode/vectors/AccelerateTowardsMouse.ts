import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Mover4} from './Mover4';

export default class AccelerateTowardsMouse extends Stage{

	public mover: Mover4;

	setup(): void {
		this.mover = new Mover4();
		this.mover.init(this);
        this.displayList.add(this.mover);
	}

}