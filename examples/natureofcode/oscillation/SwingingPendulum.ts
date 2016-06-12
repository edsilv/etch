import Sketch = require("../../../src/sketch");
import PVector = require("../../../src/pvector");
import Pendulum = require("./pendulum");

class SwingingPendulum extends Sketch{

	p: Pendulum;

	setup(): void {
		// Make a new Pendulum with an origin location and armlength
		this.p = new Pendulum(new PVector(width / 2, height / 2), 175);

	}

	draw(): void {
		background(255);
		this.p.go();
	}

	mousePressed(): void {
		this.p.clicked(mouseX,mouseY);
	}

	mouseReleased(): void {
  		this.p.stopDragging();
	}
}

export = SwingingPendulum;