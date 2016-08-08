import DisplayObject = etch.drawing.DisplayObject;
import Point = etch.primitives.Point;

export default class Liquid extends DisplayObject {

	public color: string = '#3a7bae';

	constructor (public c: number) {
		super();
		this.position = new Point(0, 0);
	}

	draw(): void {
		this.ctx.beginPath();
		this.ctx.rect(this.position.x, this.position.y, this.width, this.height);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
	}
}