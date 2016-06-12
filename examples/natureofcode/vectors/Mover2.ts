
import PVector = require("../../../src/pvector");

class Mover2 {

	position: PVector;
	velocity: PVector;
	acceleration: PVector;
	topspeed: number;

	constructor(){
		this.position = new PVector(random(width), random(height));
    	this.velocity = new PVector(1, 0);
    	this.acceleration = new PVector(-0.001, 0.01);
    	this.topspeed = 10;
	}

    update(): void{
    	this.velocity.add(this.acceleration);
	    this.velocity.limit(this.topspeed);
	    this.position.add(this.velocity);
    }

    display(): void{
	    fill(0);
	    ellipse(this.position.x, this.position.y, 20);
    }

    checkEdges(): void{
    	if (this.position.x > width) {
			this.position.x = 0;
		} else if (this.position.x < 0) {
			this.position.x = width;
		}

		if (this.position.y > height) {
			this.position.y = 0;
		} else if (this.position.y < 0) {
			this.position.y = height;
		}
    }

}

export = Mover2;