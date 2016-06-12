import Sketch = require("../../../src/sketch");
import PVector = require("../../../src/pvector");

class VectorNormalization extends Sketch{

    setup(): void{

    }

    draw(){
      background(255);

      var mouse: PVector  = new PVector(mouseX, mouseY);
      var center: PVector = new PVector(width/2, height/2);

      mouse.sub(center);

      mouse.normalize();

      mouse.mult(50);

      // translate context to center of canvas
      translate(width / 2, height / 2);

      line(0, 0, mouse.x, mouse.y);
    }

}

export = VectorNormalization;