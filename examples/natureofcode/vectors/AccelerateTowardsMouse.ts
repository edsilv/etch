import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Mover4} from './Mover4';

export class AccelerateTowardsMouse extends Stage{

	public mover: Mover4;

	setup(): void{
		this.mover = new Mover4();
	}

}