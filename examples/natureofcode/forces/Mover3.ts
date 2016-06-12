
import PVector = require("../../../src/pvector");
import Mover = require("./mover");
import Liquid = require("./liquid");

class Mover3 extends Mover{

	G: number;

	constructor(mass: number, x: number, y: number){
		super(mass, x, y);

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

	display(): void{
	    fill(0);
	    ellipse(this.position.x, this.position.y, this.mass * 24);
    }
}

export = Mover3;