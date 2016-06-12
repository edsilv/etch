import Sketch = require("../../../src/sketch");
import Mover = require("./mover");
import PVector = require("../../../src/pvector");

class GravityScaledByMass extends Sketch{

	movers: Array<Mover>;
	wind: PVector;
	gravity: PVector;

	setup(): void{
		this.movers = [];

		for (var i = 0; i < 10; i++) {
    		this.movers[i] = new Mover(random(0.1, 5), 0, 0);
		}

		this.wind = new PVector(0.01, 0);
		this.gravity = new PVector(0, 0.1);
	}

	draw(): void{
		background(255);

        for (var i = 0; i < this.movers.length; i++) {

			var mover = this.movers[i];

			var gravity = PVector.multN(this.gravity, mover.mass);

			mover.applyForce(this.wind);
    		mover.applyForce(gravity);

			mover.update();
			mover.checkEdges();
			mover.display();
		}
	}

}

export = GravityScaledByMass;