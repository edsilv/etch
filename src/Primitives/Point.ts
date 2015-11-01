module etch.primitives {
    export class Point extends minerva.Point {
        Clone(): Point {
            return new Point(this.x, this.y);
        }

        ToVector(): Vector {
            return new Vector(this.x, this.y);
        }
    }
}