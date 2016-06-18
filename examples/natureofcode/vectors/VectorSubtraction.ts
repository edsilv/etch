import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Point = etch.primitives.Point;
import Vector = etch.primitives.Vector;

export default class VectorSubtraction extends Stage{

    setup(): void {

    }

    draw(): void {

		var mouse: Point = this.mousePos.clone();
		var center: Vector = new Vector(this.canvasWidth / 2, this.canvasHeight / 2);

		//mouse = Point.subVector(mouse, center);

		// translate context to center of canvas
		//this.ctx.translate(center.x, center.y);
		this.ctx.beginPath();
		this.ctx.moveTo(center.x, center.y);
		this.ctx.lineTo(mouse.x, mouse.y);
		this.ctx.stroke();
		//this.ctx.translate(0, 0);
    }

}