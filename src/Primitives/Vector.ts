namespace etch.primitives{
    export class Vector {

        constructor(
            public x: number,
            public y: number
        ) {}

        public Get(): Vector {
            return new Vector(this.x, this.y);
        }

        public Set(x: number, y: number): void{
            this.x = x;
            this.y = y;
        }

        public Add(v: Vector): void {
            this.x += v.x;
            this.y += v.y;
        }

        static Add(v1: Vector, v2: Vector): Vector {
            return new Vector(v1.x + v2.x, v1.y + v2.y);
        }

        public Clone(): Vector {
            return new Vector(this.x, this.y);
        }

        static LERP(start: Vector, end: Vector, p: number): Vector {
            var x = start.x + (end.x - start.x) * p;
            var y = start.y + (end.y - start.y) * p;
            return new Vector(x, y);
        }

        public Sub(v: Vector): void {
            this.x -= v.x;
            this.y -= v.y;
        }

        static Sub(v1: Vector, v2: Vector): Vector {
            return new Vector(v1.x - v2.x, v1.y - v2.y);
        }

        public Mult(n: number): void {
            this.x = this.x * n;
            this.y = this.y * n;
        }

        static Mult(v1: Vector, v2: Vector): Vector {
            return new Vector(v1.x * v2.x, v1.y * v2.y);
        }

        static MultN(v1: Vector, n: number): Vector {
            return new Vector(v1.x * n, v1.y * n);
        }

        public Div(n: number): void {
            this.x = this.x / n;
            this.y = this.y / n;
        }

        static Div(v1: Vector, v2: Vector): Vector {
            return new Vector(v1.x / v2.x, v1.y / v2.y);
        }

        static DivN(v1: Vector, n: number): Vector {
            return new Vector(v1.x / n, v1.y / n);
        }

        public Mag(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }

        public MagSq(): number {
            return (this.x * this.x + this.y * this.y);
        }

        public Normalize(): void {
            var m = this.Mag();
            if (m != 0 && m != 1) {
                this.Div(m);
            }
        }

        public Limit(max: number){
            if (this.MagSq() > max * max) {
                this.Normalize();
                this.Mult(max);
            }
        }

        public Heading() {
            var angle = Math.atan2(-this.y, this.x);
            return -1*angle;
        }

        static Random2D(): Vector{
            return Vector.FromAngle((Math.random() * Math.TAU));
        }

        static FromAngle(angle: number): Vector {
            return new Vector(Math.cos(angle), Math.sin(angle));
        }
    }
}
