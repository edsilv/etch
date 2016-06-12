
import Sketch = require("../../../src/sketch");
import Mover = require("./mover2");

class PointingDirectionOfMotion extends Sketch{

	mover: Mover;

	setup(): void{

		this.mover = new Mover();
	}

	draw(): void{
		background(255);

		this.mover.update();
		this.mover.checkEdges();
		this.mover.display();
	}

}

export = PointingDirectionOfMotion;