
import PVector = require("../../../src/pvector");

class Mover {

	position: PVector;
	velocity: PVector;
	acceleration: PVector;
	mass: number;

	constructor(mass: number, x: number, y: number){
		this.mass = mass;
		this.position = new PVector(x, y);
    	this.velocity = new PVector(0, 0);
    	this.acceleration = new PVector(0, 0);
	}

	applyForce(force: PVector): void {
		var f = PVector.divN(force, this.mass);
    	this.acceleration.add(f);
	}

    update(): void{
    	this.velocity.add(this.acceleration);
	    this.position.add(this.velocity);
	    this.acceleration.mult(0);
    }

    display(): void{
	    fill(0);
	    ellipse(this.position.x, this.position.y, this.mass * 20);
    }

    checkEdges(): void{
    	if (this.position.x > width) {
			this.position.x = width;
      		this.velocity.x *= -1;
		} else if (this.position.x < 0) {
			this.velocity.x *= -1;
      		this.position.x = 0;
		}

		if (this.position.y > height) {
			this.velocity.y *= -1;
      		this.position.y = height;
		}
    }

}

export = Mover;