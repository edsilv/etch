
import PVector = require("../../../src/pvector");

class Mover {

	position: PVector;
	velocity: PVector;
	acceleration: PVector;
	mass: number;

	angle: number = 0;
	aVelocity: number = 0;
	aAcceleration: number = 0;

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

	    this.aAcceleration = this.acceleration.x / 10.0;
		this.aVelocity += this.aAcceleration;
		this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
		this.angle += this.aVelocity;

	    this.acceleration.mult(0);
    }

    display(): void{
	    stroke(0);
	    fill(175, 200);
	    pushMatrix();
	    translate(this.position.x, this.position.y);
	    rotate(this.angle);
	    rect(0, 0, this.mass*16, this.mass*16);
	    popMatrix();
    }
}

export = Mover;