import Sketch = require("../../../src/sketch");
import Mover = require("./mover");

class MotionVelocity extends Sketch{

    mover: Mover;

    setup(): void{
        this.mover = new Mover();
    }

    draw(){
        background(255);

        this.mover.update();
        this.mover.checkEdges();
        this.mover.display();
    }

}

export = MotionVelocity;