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
    var Mover4 = (function (_super) {
        __extends(Mover4, _super);
        function Mover4(mass, x, y) {
            _super.call(this);
            this.color = '#E2E2E2';
            this.mass = mass;
            this.position = new Point(x, y);
            this.velocity = new Vector(0, 0);
            this.acceleration = new Vector(0, 0);
        }
        Mover4.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover4.prototype.applyForce = function (force) {
            this.acceleration.add(Vector.divN(force, this.mass));
        };
        Mover4.prototype.update = function () {
            if (this.isInside(this.drawTo.liquid)) {
                this.drag(this.drawTo.liquid);
            }
            var m = 0.1 * this.mass;
            var gravity = new Vector(0, m);
            this.applyForce(gravity);
            this.velocity.add(this.acceleration);
            this.position = this.position.toVector().add(this.velocity).toPoint();
            this.acceleration.mult(0);
        };
        Mover4.prototype.isInside = function (l) {
            if (this.position.x >= l.position.x && this.position.x <= l.position.x + l.width && this.position.y > l.position.y && this.position.y < l.position.y + l.height) {
                return true;
            }
            else {
                return false;
            }
        };
        Mover4.prototype.drag = function (l) {
            var speed = this.velocity.mag();
            var dragMagnitude = l.c * speed * speed;
            var drag = this.velocity.get();
            drag.mult(-1);
            drag.normalize();
            drag.mult(dragMagnitude);
            this.applyForce(drag);
        };
        Mover4.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.mass * 20, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Mover4;
    }(DisplayObject));
    exports.Mover4 = Mover4;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTW92ZXI0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUVsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUd2QztRQUE0QiwwQkFBYTtRQU94QyxnQkFBWSxJQUFZLEVBQUUsQ0FBUyxFQUFFLENBQVM7WUFDN0MsaUJBQU8sQ0FBQztZQUhGLFVBQUssR0FBVyxTQUFTLENBQUM7WUFJaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVELHFCQUFJLEdBQUosVUFBSyxNQUF1QixFQUFFLFFBQTBCO1lBQ2pELGdCQUFLLENBQUMsSUFBSSxZQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUosMkJBQVUsR0FBVixVQUFXLEtBQWE7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVFLHVCQUFNLEdBQU47WUFFSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFtQixJQUFJLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLElBQUksQ0FBbUIsSUFBSSxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNqRCxDQUFDO1lBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFFRCx5QkFBUSxHQUFSLFVBQVMsQ0FBUztZQUNwQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUMvSixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztRQUNGLENBQUM7UUFFRSxxQkFBSSxHQUFKLFVBQUssQ0FBUztZQUNoQixJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3hDLElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUVoRCxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXpCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUVFLHFCQUFJLEdBQUo7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFTCxhQUFDO0lBQUQsQ0FsRUEsQUFrRUMsQ0FsRTJCLGFBQWEsR0FrRXhDO0lBbEVZLGNBQU0sU0FrRWxCLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL2ZvcmNlcy9Nb3ZlcjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuaW1wb3J0IExpcXVpZCBmcm9tICcuL0xpcXVpZCc7XHJcbmltcG9ydCBQb2ludCA9IGV0Y2gucHJpbWl0aXZlcy5Qb2ludDtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcbmltcG9ydCBGbHVpZFJlc2lzdGFuY2UgZnJvbSAnLi9GbHVpZFJlc2lzdGFuY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVyNCBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG5cclxuXHRwdWJsaWMgdmVsb2NpdHk6IFZlY3RvcjtcclxuXHRwdWJsaWMgYWNjZWxlcmF0aW9uOiBWZWN0b3I7XHJcblx0cHVibGljIG1hc3M6IG51bWJlcjtcclxuXHRwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjRTJFMkUyJztcclxuXHJcblx0Y29uc3RydWN0b3IobWFzczogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5tYXNzID0gbWFzcztcclxuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoeCwgeSk7XHJcbiAgICBcdHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDAsIDApO1xyXG4gICAgXHR0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCk7XHJcblx0fVxyXG5cclxuXHRpbml0KGRyYXdUbzogSURpc3BsYXlDb250ZXh0LCBkcmF3RnJvbT86IElEaXNwbGF5Q29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZHJhd1RvLCBkcmF3RnJvbSk7XHJcbiAgICB9XHJcblxyXG5cdGFwcGx5Rm9yY2UoZm9yY2U6IFZlY3Rvcik6IHZvaWQge1xyXG4gICAgXHR0aGlzLmFjY2VsZXJhdGlvbi5hZGQoVmVjdG9yLmRpdk4oZm9yY2UsIHRoaXMubWFzcykpO1xyXG5cdH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0luc2lkZSgoPEZsdWlkUmVzaXN0YW5jZT50aGlzLmRyYXdUbykubGlxdWlkKSl7XHJcbiAgICAgICAgXHR0aGlzLmRyYWcoKDxGbHVpZFJlc2lzdGFuY2U+dGhpcy5kcmF3VG8pLmxpcXVpZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtID0gMC4xICogdGhpcy5tYXNzO1xyXG4gICAgICAgIHZhciBncmF2aXR5ID0gbmV3IFZlY3RvcigwLCBtKTtcclxuICAgICAgICB0aGlzLmFwcGx5Rm9yY2UoZ3Jhdml0eSk7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkKHRoaXMuYWNjZWxlcmF0aW9uKTtcclxuXHQgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24udG9WZWN0b3IoKS5hZGQodGhpcy52ZWxvY2l0eSkudG9Qb2ludCgpO1xyXG5cdCAgICB0aGlzLmFjY2VsZXJhdGlvbi5tdWx0KDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5zaWRlKGw6IExpcXVpZCk6IGJvb2xlYW57XHJcblx0XHRpZih0aGlzLnBvc2l0aW9uLnggPj0gbC5wb3NpdGlvbi54ICYmIHRoaXMucG9zaXRpb24ueCA8PSBsLnBvc2l0aW9uLnggKyBsLndpZHRoICYmIHRoaXMucG9zaXRpb24ueSA+IGwucG9zaXRpb24ueSAmJiB0aGlzLnBvc2l0aW9uLnkgPCBsLnBvc2l0aW9uLnkgKyBsLmhlaWdodCl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdCAgICByZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIGRyYWcobDogTGlxdWlkKTogdm9pZCB7XHJcblx0XHR2YXIgc3BlZWQ6IG51bWJlciA9IHRoaXMudmVsb2NpdHkubWFnKCk7XHJcblx0XHR2YXIgZHJhZ01hZ25pdHVkZTogbnVtYmVyID0gbC5jICogc3BlZWQgKiBzcGVlZDtcclxuXHJcblx0XHR2YXIgZHJhZzogVmVjdG9yID0gdGhpcy52ZWxvY2l0eS5nZXQoKTtcclxuXHRcdGRyYWcubXVsdCgtMSk7XHJcblx0XHRkcmFnLm5vcm1hbGl6ZSgpO1xyXG5cclxuXHRcdGRyYWcubXVsdChkcmFnTWFnbml0dWRlKTtcclxuXHJcblx0XHR0aGlzLmFwcGx5Rm9yY2UoZHJhZyk7XHJcblx0fVxyXG5cclxuICAgIGRyYXcoKTogdm9pZCB7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMubWFzcyAqIDIwLCAwLCBNYXRoLlRBVSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
