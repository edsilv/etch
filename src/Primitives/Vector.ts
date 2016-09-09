module etch.primitives{
    
    export interface IVector {
        x: number;
        y: number;
    }
    
    export class Vector implements IVector {

        constructor(
            public x: number,
            public y: number
        ) {}

        public get(): Vector {
            return new Vector(this.x, this.y);
        }

        public set(x: number, y: number): void{
            this.x = x;
            this.y = y;
        }

        public add(v: Vector): Vector {
            this.x += v.x;
            this.y += v.y;
            return this;
        }

        static add(v1: Vector, v2: Vector): Vector {
            return new Vector(v1.x + v2.x, v1.y + v2.y);
        }

        public clone(): Vector {
            return new Vector(this.x, this.y);
        }

        static LERP(start: Vector, end: Vector, p: number): Vector {
            var x = start.x + (end.x - start.x) * p;
            var y = start.y + (end.y - start.y) * p;
            return new Vector(x, y);
        }

        public sub(v: Vector): Vector {
            this.x -= v.x;
            this.y -= v.y;
            return this;
        }

        static sub(v1: Vector, v2: Vector): Vector {
            return new Vector(v1.x - v2.x, v1.y - v2.y);
        }

        public mult(n: number): Vector {
            this.x = this.x * n;
            this.y = this.y * n;
            return this;
        }

        static mult(v1: Vector, v2: Vector): Vector {
            return new Vector(v1.x * v2.x, v1.y * v2.y);
        }

        static multN(v1: Vector, n: number): Vector {
            return new Vector(v1.x * n, v1.y * n);
        }

        public div(n: number): Vector {
            this.x = this.x / n;
            this.y = this.y / n;
            return this;
        }

        static div(v1: Vector, v2: Vector): Vector {
            return new Vector(v1.x / v2.x, v1.y / v2.y);
        }

        static divN(v1: Vector, n: number): Vector {
            return new Vector(v1.x / n, v1.y / n);
        }

        public mag(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }

        public magSq(): number {
            return (this.x * this.x + this.y * this.y);
        }

        public normalize(): Vector {
            var m = this.mag();
            if (m != 0 && m != 1) {
                this.div(m);
            }
            return this;
        }

        public limit(max: number): Vector {
            if (this.magSq() > max * max) {
                this.normalize();
                this.mult(max);
            }
            return this;
        }

        public heading(): number {
            var angle = Math.atan2(-this.y, this.x);
            return -1 * angle;
        }

        static random2D(): Vector{
            return Vector.fromAngle((Math.random() * Math.TAU));
        }

        static fromAngle(angle: number): Vector {
            return new Vector(Math.cos(angle), Math.sin(angle));
        }

        public toPoint(): Point {
            return new Point(this.x, this.y);
        }
    }
}
