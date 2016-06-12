
import Sketch = require("../../../src/sketch");
import Mover = require("./mover3");
import PVector = require("../../../src/pvector");

class MutualAttraction extends Sketch{

	movers: Array<Mover>;

	setup(): void{

		this.movers = [];

		for (var i = 0; i < 20; i++) {
    		this.movers[i] = new Mover(random(0.1, 2), random(width), random(height));
		}
	}

	draw(): void{
		background(255);

        for (var i = 0; i < this.movers.length; i++) {
        	var mover = this.movers[i];
        	for (var j = 0; j < this.movers.length; j++) {
        		if (i != j) {
	        		var force = this.movers[j].attract(mover);
	        		mover.applyForce(force);
	        	}
 			}
		    mover.update();
		    mover.display();
        }
	}

}

export = MutualAttraction;