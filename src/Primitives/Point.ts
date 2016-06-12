module etch.primitives {
    export class Point extends minerva.Point {
        clone(): Point {
            return new Point(this.x, this.y);
        }

        toVector(): Vector {
            return new Vector(this.x, this.y);
        }
    }
}