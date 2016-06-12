import Sketch = require("../../../src/sketch");
import Mover2 = require("./Mover2");

class ConstantAcceleration extends Sketch{

	mover: Mover2;

	setup(): void{
		this.mover = new Mover2();
	}

	draw(): void{
		background(255);

        this.mover.update();
        this.mover.checkEdges();
        this.mover.display();
	}

}

export = ConstantAcceleration;