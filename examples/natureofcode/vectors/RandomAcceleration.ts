import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Mover3} from "./Mover3";

export default class RandomAcceleration extends Stage{

	public mover: Mover3;

	setup(): void{
		this.mover = new Mover3();
		this.mover.init(this);
        this.displayList.add(this.mover);
	}

}