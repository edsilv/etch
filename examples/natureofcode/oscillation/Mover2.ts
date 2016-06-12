
import PVector = require("../../../src/pvector");

class Mover {

	position: PVector;
	velocity: PVector;
	acceleration: PVector;
	topspeed: number;

	xoff: number;
	yoff: number;
	r: number;

	constructor(){
		this.position = new PVector(width / 2, height / 2);
		this.velocity = new PVector(0, 0);
		this.topspeed = 4;
		this.xoff = 1000;
		this.yoff = 0;
		this.r = 16;
	}

	update(): void{
		var mouse = new PVector(mouseX, mouseY);
		var dir = PVector.sub(mouse, this.position);
		dir.normalize();
		dir.mult(0.5);
		this.acceleration = dir;

		this.velocity.add(this.acceleration);
		this.velocity.limit(this.topspeed);
		this.position.add(this.velocity);
	}

	display(): void{
		var theta = this.velocity.heading();

		stroke(0);
		strokeWeight(2);
		fill(127);
		pushMatrix();
		translate(this.position.x, this.position.y);
		rotate(theta);
		rect(0, 0, 30, 10);
		popMatrix();
	}

	checkEdges(): void {

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

export = Mover;