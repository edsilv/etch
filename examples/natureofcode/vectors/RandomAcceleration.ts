import Sketch = require("../../../src/sketch");
import Mover3 = require("./mover3");

class RandomAcceleration extends Sketch{

	mover: Mover3;

	setup(): void{
		this.mover = new Mover3();
	}

	draw(): void{
		background(255);

        this.mover.update();
        this.mover.checkEdges();
        this.mover.display();
	}

}

export = RandomAcceleration;