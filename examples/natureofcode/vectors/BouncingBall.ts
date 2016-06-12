import Sketch = require("../../../src/sketch");
import PVector = require("../../../src/pvector");
import SoundGen = require("../../../src/audio");

class BouncingBall extends Sketch{

	position: PVector;
	velocity: PVector;
    audio: SoundGen;

    setup(): void{
    	this.position = new PVector(100, 100);
  		this.velocity = new PVector(2.5, 5);
        this.audio = new SoundGen();
    }

    draw(){
    	background(255);

		this.position.add(this.velocity);

		if ((this.position.x > width) || (this.position.x < 0)) {
			this.velocity.x = this.velocity.x * -1;
            this.audio.playNote({
                frequency: 440,
                volume: 0.3

            });

		}

		if ((this.position.y > height) || (this.position.y < 0)) {
			this.velocity.y = this.velocity.y * -1;

            this.audio.playNote({
                frequency: 220,
                volume: 0.3
            });
		}

		fill(0);
		ellipse(this.position.x, this.position.y, 20);
    }

}

export = BouncingBall;