module etch.primitives {
    export class Point extends minerva.Point {
        Clone(): Point {
            return new Point(this.x, this.y);
        }
    }
}