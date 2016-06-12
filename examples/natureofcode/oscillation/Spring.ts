import graphics = require("../../../src/pgraphics");
import PVector = require("../../../src/pvector");
import Bob = require("./bob");

class Spring {

    // Location
    anchor: PVector;

    // Rest length and spring constant
    len: number;
    k: number = 0.2;

    // Constructor
    constructor(x: number, y: number, l: number) {
        this.anchor = new PVector(x, y);
        this.len = l;
    }

    // Calculate spring force
    connect(b: Bob): void {
        // Vector pointing from anchor to bob location
        var force = PVector.sub(b.position, this.anchor);
        // What is distance
        var d = force.mag();
        // Stretch is difference between current distance and rest length
        var stretch = d - this.len;

        // Calculate force according to Hooke's Law
        // F = k * stretch
        force.normalize();
        force.mult(-1 * this.k * stretch);
        b.applyForce(force);
    }

    // Constrain the distance between bob and anchor between min and max
    constrainLength(b: Bob, minlen: number, maxlen: number): void {
        var dir = PVector.sub(b.position, this.anchor);
        var d = dir.mag();
        // Is it too short?
        if (d < minlen) {
            dir.normalize();
            dir.mult(minlen);
            // Reset location and stop from moving (not realistic physics)
            b.position = PVector.add(this.anchor, dir);
            b.velocity.mult(0);
            // Is it too long?
        }
        else if (d > maxlen) {
            dir.normalize();
            dir.mult(maxlen);
            // Reset location and stop from moving (not realistic physics)
            b.position = PVector.add(this.anchor, dir);
            b.velocity.mult(0);
        }
    }

    display(): void {
        stroke(0);
        fill(175);
        strokeWeight(2);
        rectMode(graphics.RectMode.CENTER);
        rect(this.anchor.x, this.anchor.y, 10, 10);
    }

    displayLine(b: Bob): void {
        strokeWeight(2);
        stroke(0);
        line(b.position.x, b.position.y, this.anchor.x, this.anchor.y);
    }
}

export = Spring;