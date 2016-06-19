import DisplayObject = etch.drawing.DisplayObject;

export class Liquid extends DisplayObject {

	constructor (public x: number, public y: number, public w: number, public h: number, public c: number) {
		super();
	}

	draw(): void {
		//fill(175);
		//rect(this.x, this.y, this.w, this.h);
	}
}