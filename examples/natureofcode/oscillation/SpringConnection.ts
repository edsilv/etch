
import Sketch = require("../../../src/sketch");
import Spring = require("./spring");
import PVector = require("../../../src/pvector");
import Bob = require("./bob");

class SpringConnection extends Sketch{

	bob: Bob;
	spring: Spring;

	setup(): void{
		// Create objects at starting location
		// Note third argument in Spring constructor is "rest length"
		this.spring = new Spring(width / 2, 10, 100);
		this.bob = new Bob(width / 2, 100);
	}

	draw(): void{

		background(255);

		// Apply a gravity force to the bob
		var gravity = new PVector(0, 2);
		this.bob.applyForce(gravity);

		// Connect the bob to the spring (this calculates the force)
		this.spring.connect(this.bob);

		// Constrain spring distance between min and max
		this.spring.constrainLength(this.bob, 30, 200);

		// Update bob
		this.bob.update();

		// If it's being dragged
		this.bob.drag(mouseX, mouseY);

		// Draw everything
		this.spring.displayLine(this.bob); // Draw a line between spring and bob
		this.bob.display();
		this.spring.display();

		fill(0);
	}

	mousePressed(): void {
		this.bob.clicked(mouseX, mouseY);
	}

	mouseReleased(): void {
		this.bob.stopDragging();
	}
}

export = SpringConnection;