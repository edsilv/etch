import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;

export default class VectorSubtraction extends Stage{

	private _color: string = '#eff2f6';

    setup(): void {

    }

    draw(): void {

		var mouse: Point = this.mousePos.clone();
		var center: Point = new Point(this.width * .5, this.height * .5);
		mouse = mouse.toVector().sub(center.toVector()).toPoint();

		// translate context to center of canvas
		this.ctx.translate(center.x, center.y);
		this.ctx.beginPath();
		this.ctx.moveTo(0, 0);
		this.ctx.lineTo(mouse.x, mouse.y);
		this.ctx.strokeStyle = this._color;
		this.ctx.stroke();
    }

}