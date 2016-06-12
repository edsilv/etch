import Sketch = require("../../../src/sketch");
import Mover4 = require("./mover4");

class MultipleAccelerateTowardsMouse extends Sketch{

	movers: Array<Mover4>;

	setup(): void{
		this.movers = [];

		for (var i = 0; i < 20; i++) {
    		this.movers[i] = new Mover4();
		}
	}

	draw(): void{
		background(255);

        for (var i = 0; i < this.movers.length; i++) {
			this.movers[i].update();
			this.movers[i].checkEdges();
			this.movers[i].display();
		}
	}

}

export = MultipleAccelerateTowardsMouse;