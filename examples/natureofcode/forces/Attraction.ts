import Sketch = require("../../../src/sketch");
import Mover = require("./mover");
import PVector = require("../../../src/pvector");
import Attractor = require("./Attractor");

class Attraction extends Sketch{

	m: Mover;
	a: Attractor;

	setup(): void{

		this.m = new Mover(1, width / 4, height / 4);

		this.m.applyForce(new PVector(.5, 1.5));

		this.a = new Attractor();
	}

	draw(): void{
		background(255);

        var force = this.a.attract(this.m);
        this.m.applyForce(force);
        this.m.update();

        this.a.display();
        this.m.display();
	}

}

export = Attraction;