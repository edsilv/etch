import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Mover2} from "./Mover2";

export default class ConstantAcceleration extends Stage{

	public mover: Mover2;

	setup(): void{
		this.mover = new Mover2();
		this.mover.init(this);
        this.displayList.add(this.mover);
	}

}