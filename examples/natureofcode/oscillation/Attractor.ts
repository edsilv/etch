
import Mover = require("./mover");
import PVector = require("../../../src/pvector");

class Attractor{

	mass: number;
	position: PVector;
	G: number;

	constructor() {
		this.position = new PVector(width / 2, height / 2);
		this.mass = 20;
		this.G = 0.4;
	}

	attract(m: Mover): PVector {
		var force = PVector.sub(this.position, m.position);
		var distance = force.mag();
		distance = constrain(distance, 5.0, 25.0);

		force.normalize();
		var strength = (this.G * this.mass) / (distance * distance);
		force.mult(strength);

		return force;
	}

	display(): void {
		fill(175);
		ellipse(this.position.x, this.position.y, this.mass * 2);
	}
}

export = Attractor;