import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Attractor} from './Attractor';
import {Mover5} from './Mover5';

export default class Attraction extends Stage {

	setup(): void{
		var mover: Mover5 = new Mover5(1, this.canvasWidth / 4, this.canvasHeight /4);
        mover.init(this);
		this.displayList.add(mover);
        mover.applyForce(new Vector(0, 5)); // give it an initial nudge into orbit

        var attractor: Attractor = new Attractor(50, this.canvasWidth / 2, this.canvasHeight / 2, [mover]);
        attractor.init(this);
		this.displayList.add(attractor);
	}

	update(): void {
		
	}
}
