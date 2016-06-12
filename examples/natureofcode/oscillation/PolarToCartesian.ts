
import Sketch = require("../../../src/sketch");

class PolarToCartesian extends Sketch{

	r: number;
	theta: number;

	setup(): void{
		this.r = height * 0.45;
		this.theta = 0;
	}

	draw(): void{

		// Translate the origin point to the center of the screen
		translate(width / 2, height / 2);

		// Convert polar to cartesian
		var x = this.r * cos(this.theta);
		var y = this.r * sin(this.theta);

		// Draw the ellipse at the cartesian coordinate
		fill(127);
		stroke(0);
		strokeWeight(2);
		line(0, 0, x, y);
		ellipse(x, y, 48, 48);

		// Increase the angle over time
		this.theta += 0.02;
	}

}

export = PolarToCartesian;