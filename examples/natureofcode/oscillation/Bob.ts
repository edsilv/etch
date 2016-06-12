import PVector = require("../../../src/pvector");

class Bob {
    position: PVector;
    velocity: PVector;
    acceleration: PVector;
    mass: number = 24;

    // Arbitrary damping to simulate friction / drag
    damping: number = 0.98;

    // For mouse interaction
    dragOffset: PVector;
    dragging: boolean = false;

    constructor(x: number, y: number) {
        this.position = new PVector(x, y);
        this.velocity = new PVector(0, 0);
        this.acceleration = new PVector(0, 0);
        this.dragOffset = new PVector(0, 0);
    }

    // Standard Euler integration
    update(): void {
        this.velocity.add(this.acceleration);
        this.velocity.mult(this.damping);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    // Newton's law: F = M * A
    applyForce(force: PVector): void {
        var f: PVector = force.get();
        f.div(this.mass);
        this.acceleration.add(f);
    }

    // Draw the bob
    display(): void {
        stroke(0);
        strokeWeight(2);
        fill(175);
        if (this.dragging) {
            fill(50);
        }
        ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
    }

    // The methods below are for mouse interaction

    // This checks to see if we clicked on the mover
    clicked(mx: number, my: number): void {
        var d: number = dist(mx, my, this.position.x, this.position.y);
        if (d < this.mass) {
          this.dragging = true;
          this.dragOffset.x = this.position.x - mx;
          this.dragOffset.y = this.position.y - my;
        }
    }

    stopDragging(): void {
        this.dragging = false;
    }

    drag(mx: number, my: number): void {
        if (this.dragging) {
          this.position.x = mx + this.dragOffset.x;
          this.position.y = my + this.dragOffset.y;
        }
    }
}

export = Bob;