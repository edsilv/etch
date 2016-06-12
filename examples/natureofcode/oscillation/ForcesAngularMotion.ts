
import Sketch = require("../../../src/sketch");
import Mover = require("./mover");
import Attractor = require("./attractor");

class AngularMotionUsingRotate extends Sketch{

	movers: Array<Mover>;
	a: Attractor;

	setup(): void{

		this.movers = [];

		for (var i = 0; i < 10; i++) {
    		this.movers[i] = new Mover(random(0.1, 2), random(width), random(height));
		}

		this.a = new Attractor();
	}

	draw(): void{
		background(255);

		this.a.display();

        for (var i = 0; i < this.movers.length; i++) {
        	var force = this.a.attract(this.movers[i]);

        	this.movers[i].applyForce(force);

		    this.movers[i].update();
		    this.movers[i].display();
        }
	}

}

export = AngularMotionUsingRotate;