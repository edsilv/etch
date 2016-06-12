import Sketch = require("../../../src/sketch");
import Mover4 = require("./mover4");

class AccelerateTowardsMouse extends Sketch{

	mover: Mover4;

	setup(): void{
		this.mover = new Mover4();
	}

	draw(): void{
		background(255);

        this.mover.update();
        this.mover.checkEdges();
        this.mover.display();
	}

}

export = AccelerateTowardsMouse;