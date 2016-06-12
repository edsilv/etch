
import Sketch = require("../../../src/sketch");
import Oscillator = require("./oscillator");

class OscillatingObjects extends Sketch{

	oscillators: Array<Oscillator>;

	setup(): void{
		this.oscillators = [];

		for (var i = 0; i < 10; i++) {
    		this.oscillators[i] = new Oscillator();
		}
	}

	draw(): void{

		background(255);

		for (var i = 0; i < this.oscillators.length; i++) {
			this.oscillators[i].oscillate();
			this.oscillators[i].display();
		}
	}

}

export = OscillatingObjects;