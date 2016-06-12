
import PVector = require("../../../src/pvector");
import Mover = require("./mover");
import Liquid = require("./liquid");

class Mover2 extends Mover{

	isInside(l: Liquid): boolean{
		if (this.position.x >= l.x && this.position.x <= l.x + l.w && this.position.y > l.y && this.position.y < l.y + l.h){
			return true;
		} else {
		    return false;
		}
	}

	drag(l: Liquid): void {
		var speed = this.velocity.mag();
		var dragMagnitude = l.c * speed * speed;

		var drag: PVector = this.velocity.get();
		drag.mult(-1);
		drag.normalize();

		drag.mult(dragMagnitude);

		this.applyForce(drag);
	}
}

export = Mover2;