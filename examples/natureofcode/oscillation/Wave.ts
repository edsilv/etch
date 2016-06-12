
import Sketch = require("../../../src/sketch");

class Wave extends Sketch{

	startAngle: number = 0;
	angleVel: number = 0.15;

	draw(): void{

		background(255);

		this.startAngle += 0.015;
  		var angle = this.startAngle;

  		for (var x = 0; x <= width; x += 24) {
			var y = map(sin(angle), -1, 1, 0, height);
			stroke(0);
			fill(127);
			strokeWeight(2);
			ellipse(x, y, 48, 48);
			angle += this.angleVel;
		}
	}

}

export = Wave;