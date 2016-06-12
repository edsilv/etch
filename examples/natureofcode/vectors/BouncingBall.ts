import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;

export class BouncingBall extends Stage{

	public position: Vector;
	public velocity: Vector;
    
    setup(): void{
    	this.position = new Vector(100, 100);
  		this.velocity = new Vector(2.5, 5);
    }

    update(): void {
        this.position.add(this.velocity);

		if ((this.position.x > this.canvasWidth) || (this.position.x < 0)) {
			this.velocity.x = this.velocity.x * -1;
		}

		if ((this.position.y > this.canvasHeight) || (this.position.y < 0)) {
			this.velocity.y = this.velocity.y * -1;
		}
    }

    draw(): void{
		this.ctx.fill(0);
		this.ctx.ellipse(this.position.x, this.position.y, 20);
    }

}