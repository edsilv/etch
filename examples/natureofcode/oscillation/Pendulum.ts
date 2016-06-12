import PVector = require("../../../src/pvector");

class Pendulum  {

    position: PVector;     // position of pendulum ball
    origin: PVector;       // position of arm origin
    r: number;             // Length of arm
    angle: number;         // Pendulum arm angle
    aVelocity: number;     // Angle velocity
    aAcceleration: number; // Angle acceleration
    damping: number;       // Arbitary damping amount
    ballr: number;         // Ball radius

    dragging: boolean = false;

    // This constructor could be improved to allow a greater variety of pendulums
    constructor(origin: PVector, r: number) {
        // Fill all variables
        this.origin = origin.get();
        this.position = new PVector(0, 0);
        this.r = r;
        this.angle = Math.TAU/8;

        this.aVelocity = 0.0;
        this.aAcceleration = 0.0;
        this.damping = 0.995;   // Arbitrary damping
        this.ballr = 48.0;      // Arbitrary ball radius
    }

    go(): void {
        this.update();
        this.drag();            //for user interaction
        this.display();
    }

    // Function to update position
    update(): void {
        // As long as we aren't dragging the pendulum, let it swing!
        if (!this.dragging) {
            var gravity = 0.4;                                                      // Arbitrary constant
            this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle);         // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
            this.aVelocity += this.aAcceleration;                                   // Increment velocity
            this.aVelocity *= this.damping;                                         // Arbitrary damping
            this.angle += this.aVelocity;                                           // Increment angle
        }
    }

    display(): void {
        this.position.set(this.r * sin(this.angle), this.r * cos(this.angle));    // Polar to cartesian conversion
        this.position.add(this.origin);                                              // Make sure the position is relative to the pendulum's origin

        stroke(0);
        strokeWeight(2);

        // Draw the arm
        line(this.origin.x, this.origin.y, this.position.x, this.position.y);
        fill(175);

        if (this.dragging) fill(0);

        // Draw the ball
        ellipse(this.position.x, this.position.y, 48, 48);
    }

    // The methods below are for mouse interaction

    // This checks to see if we clicked on the pendulum ball
    clicked(mx: number, my: number) {
        var d = dist(mx, my, this.position.x, this.position.y);
        if (d < this.ballr) {
            this.dragging = true;
        }
    }

    // This tells us we are not longer clicking on the ball
    stopDragging(): void {
        this.aVelocity = 0; // No velocity once you let go
        this.dragging = false;
    }

    drag(): void {
        // If we are draging the ball, we calculate the angle between the
        // pendulum origin and mouse location
        // we assign that angle to the pendulum
        if (this.dragging) {
          var diff = PVector.sub(this.origin, new PVector(mouseX, mouseY));      // Difference between 2 points
          this.angle = atan2(-1 * diff.y, diff.x) - radians(90);            // Angle relative to vertical axis
        }
    }

}

export = Pendulum;