var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var Point = etch.primitives.Point;
    var Vector = etch.primitives.Vector;
    var Mover5 = (function (_super) {
        __extends(Mover5, _super);
        function Mover5(mass, x, y, color) {
            _super.call(this);
            this.color = '#000';
            this.mass = mass;
            this.position = new Point(x, y);
            this.velocity = new Vector(0, 0);
            this.acceleration = new Vector(0, 0);
            if (color)
                this.color = color;
        }
        Mover5.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover5.prototype.applyForce = function (force) {
            this.acceleration.add(Vector.divN(force, this.mass));
        };
        Mover5.prototype.update = function () {
            this.velocity.add(this.acceleration);
            this.position = this.position.toVector().add(this.velocity).toPoint();
            this.acceleration.mult(0);
        };
        Mover5.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.mass * 20, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Mover5;
    }(DisplayObject));
    exports.Mover5 = Mover5;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTW92ZXI1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUV2QztRQUE0QiwwQkFBYTtRQU94QyxnQkFBWSxJQUFZLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFjO1lBQzdELGlCQUFPLENBQUM7WUFIRixVQUFLLEdBQVcsTUFBTSxDQUFDO1lBSTdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO1FBRUQscUJBQUksR0FBSixVQUFLLE1BQXVCLEVBQUUsUUFBMEI7WUFDakQsZ0JBQUssQ0FBQyxJQUFJLFlBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFSiwyQkFBVSxHQUFWLFVBQVcsS0FBYTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRUUsdUJBQU0sR0FBTjtZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBRUQscUJBQUksR0FBSjtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVMLGFBQUM7SUFBRCxDQXJDQSxBQXFDQyxDQXJDMkIsYUFBYSxHQXFDeEM7SUFyQ1ksY0FBTSxTQXFDbEIsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvZm9yY2VzL01vdmVyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgRGlzcGxheU9iamVjdCA9IGV0Y2guZHJhd2luZy5EaXNwbGF5T2JqZWN0O1xyXG5pbXBvcnQgUG9pbnQgPSBldGNoLnByaW1pdGl2ZXMuUG9pbnQ7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVyNSBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG5cclxuXHRwdWJsaWMgdmVsb2NpdHk6IFZlY3RvcjtcclxuXHRwdWJsaWMgYWNjZWxlcmF0aW9uOiBWZWN0b3I7XHJcblx0cHVibGljIG1hc3M6IG51bWJlcjtcclxuXHRwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwJztcclxuXHJcblx0Y29uc3RydWN0b3IobWFzczogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I/OiBzdHJpbmcpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMubWFzcyA9IG1hc3M7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KHgsIHkpO1xyXG4gICAgXHR0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcigwLCAwKTtcclxuICAgIFx0dGhpcy5hY2NlbGVyYXRpb24gPSBuZXcgVmVjdG9yKDAsIDApO1xyXG5cdFx0aWYgKGNvbG9yKSB0aGlzLmNvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cclxuXHRpbml0KGRyYXdUbzogSURpc3BsYXlDb250ZXh0LCBkcmF3RnJvbT86IElEaXNwbGF5Q29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZHJhd1RvLCBkcmF3RnJvbSk7XHJcbiAgICB9XHJcblxyXG5cdGFwcGx5Rm9yY2UoZm9yY2U6IFZlY3Rvcik6IHZvaWQge1xyXG4gICAgXHR0aGlzLmFjY2VsZXJhdGlvbi5hZGQoVmVjdG9yLmRpdk4oZm9yY2UsIHRoaXMubWFzcykpO1xyXG5cdH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZHtcdFx0XHJcblx0XHR0aGlzLnZlbG9jaXR5LmFkZCh0aGlzLmFjY2VsZXJhdGlvbik7XHJcblx0ICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnRvVmVjdG9yKCkuYWRkKHRoaXMudmVsb2NpdHkpLnRvUG9pbnQoKTtcclxuXHQgICAgdGhpcy5hY2NlbGVyYXRpb24ubXVsdCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLm1hc3MgKiAyMCwgMCwgTWF0aC5UQVUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
