import Sketch = require("../../../src/sketch");
import Mover = require("./mover2");
import PVector = require("../../../src/pvector");
import Liquid = require("./liquid");

class FluidResistance extends Sketch{

	movers: Array<Mover>;
	liquid: Liquid;

	setup(): void{
		this.movers = [];

		for (var i = 0; i < 10; i++) {
    		this.movers[i] = new Mover(random(1, 4), width / 10 * i, 0);
		}

		this.liquid = new Liquid(0, height/2, width, height/2, 0.1);
	}

	draw(): void{
		background(255);

		this.liquid.display();

        for (var i = 0; i < this.movers.length; i++) {

			var mover = this.movers[i];

			if(mover.isInside(this.liquid)){
				mover.drag(this.liquid)
			}

			var m = 0.1 * mover.mass;
			var gravity = new PVector(0, m);
    		mover.applyForce(gravity);

			mover.update();
			mover.checkEdges();
			mover.display();
		}
	}

}

export = FluidResistance;