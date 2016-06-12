
import Sketch = require("../../../src/sketch");

class SimpleHarmonicMotion extends Sketch{

	setup(): void{

	}

	draw(): void{

		background(255);

		var period = 120;
		var amplitude = 300;

		// Calculating horizontal location according to formula for simple harmonic motion
		var x = amplitude * cos(Math.TAU * frameCount / period);

		stroke(0);
		strokeWeight(2);
		fill(127);
		translate(width/2, height/2);
		line(0, 0 , x, 0);
		ellipse(x, 0, 48, 48);
	}

}

export = SimpleHarmonicMotion;