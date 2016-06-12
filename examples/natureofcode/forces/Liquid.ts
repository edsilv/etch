
class Liquid {

	constructor (public x: number,
				public y: number,
				public w: number,
				public h: number,
				public c: number) {

	}

	display(): void {
		fill(175);
		rect(this.x, this.y, this.w, this.h);
	}
}

export = Liquid;