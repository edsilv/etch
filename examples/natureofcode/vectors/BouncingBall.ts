import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;

export default class BouncingBall extends Stage{

		public velocity: Vector;
		private _ballRadius: number = 20;
		private _color: string = '#000';

		setup(): void {
				this.position = new Point(100, 100);
				this.velocity = new Vector(2.5, 5);
		}

		update(): void {
				this.position = Vector.add(this.position.toVector(), this.velocity).toPoint();

				if ((this.position.x > this.width) || (this.position.x < 0)) {
						this.velocity.x = this.velocity.x * -1;
				}

				if ((this.position.y > this.height) || (this.position.y < 0)) {
						this.velocity.y = this.velocity.y * -1;
				}
		}

		draw(): void {
				this.ctx.beginPath();
				this.ctx.arc(this.position.x, this.position.y, this._ballRadius, 0, Math.TAU, false);
				this.ctx.fillStyle = this._color;
				this.ctx.fill();
		}

}