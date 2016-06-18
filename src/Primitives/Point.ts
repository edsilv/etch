module etch.primitives {
    export class Point extends minerva.Point {
        clone(): Point {
            return new Point(this.x, this.y);
        }

        toVector(): Vector {
            return new Vector(this.x, this.y);
        }

        static addVector(p: Point, v: Vector): Point {
            return new Point(p.x + v.x, p.y + v.y);
        }

        static subVector(p: Point, v: Vector): Point {
            return new Point(p.x - v.x, p.y - v.y);
        }
    }
}