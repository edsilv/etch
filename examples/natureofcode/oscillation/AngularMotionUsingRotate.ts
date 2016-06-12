
import Sketch = require("../../../src/sketch");

class AngularMotionUsingRotate extends Sketch{

	angle: number = 0;
	aVelocity: number = 0;
	aAcceleration: number = 0.001;

	setup(): void{

	}

	draw(): void{
		background(255);

        fill(175);
        stroke(0);
        translate(width / 2, height / 2);
		rotate(this.angle);
		line(-50, 0, 50, 0);
		ellipse(50, 0, 10, 10);
		ellipse(-50, 0, 10, 10);

		this.aVelocity += this.aAcceleration;
	    this.angle += this.aVelocity;
	}

}

export = AngularMotionUsingRotate;