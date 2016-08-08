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
    var Mover3 = (function (_super) {
        __extends(Mover3, _super);
        function Mover3(mass, x, y) {
            _super.call(this);
            this.color = '#eff2f6';
            this.mass = mass;
            this.position = new Point(x, y);
            this.velocity = new Vector(0, 0);
            this.acceleration = new Vector(0, 0);
        }
        Mover3.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover3.prototype.applyForce = function (force) {
            this.acceleration.add(Vector.divN(force, this.mass));
        };
        Mover3.prototype.update = function () {
            var friction = this.velocity.clone();
            var multiplyer = this.drawTo.friction;
            friction.mult(-1).normalize().mult(multiplyer);
            this.applyForce(friction);
            var wind = this.drawTo.wind;
            this.applyForce(wind);
            var gravity = Vector.multN(this.drawTo.gravity, this.mass);
            this.applyForce(gravity);
            this.velocity.add(this.acceleration);
            this.position = this.position.toVector().add(this.velocity).toPoint();
            this.acceleration.mult(0);
            if (this.position.x > this.canvasWidth) {
                this.position.x = this.canvasWidth;
                this.velocity.x *= -1;
            }
            else if (this.position.x < 0) {
                this.velocity.x *= -1;
                this.position.x = 0;
            }
            if (this.position.y > this.canvasHeight) {
                this.velocity.y *= -1;
                this.position.y = this.canvasHeight;
            }
        };
        Mover3.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.mass * 20, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Mover3;
    }(DisplayObject));
    exports.Mover3 = Mover3;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTW92ZXIzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUd2QztRQUE0QiwwQkFBYTtRQU94QyxnQkFBWSxJQUFZLEVBQUUsQ0FBUyxFQUFFLENBQVM7WUFDN0MsaUJBQU8sQ0FBQztZQUhGLFVBQUssR0FBVyxTQUFTLENBQUM7WUFJaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVELHFCQUFJLEdBQUosVUFBSyxNQUF1QixFQUFFLFFBQTBCO1lBQ2pELGdCQUFLLENBQUMsSUFBSSxZQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUosMkJBQVUsR0FBVixVQUFXLEtBQWE7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVFLHVCQUFNLEdBQU47WUFFSSxJQUFJLFFBQVEsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLElBQUksVUFBVSxHQUErQixJQUFJLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztZQUNuRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFMUIsSUFBSSxJQUFJLEdBQStCLElBQUksQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEIsSUFBSSxPQUFPLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBcUIsSUFBSSxDQUFDLE1BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUMxQyxDQUFDO1FBQ0MsQ0FBQztRQUVELHFCQUFJLEdBQUo7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFTCxhQUFDO0lBQUQsQ0E3REEsQUE2REMsQ0E3RDJCLGFBQWEsR0E2RHhDO0lBN0RZLGNBQU0sU0E2RGxCLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL2ZvcmNlcy9Nb3ZlcjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuaW1wb3J0IFBvaW50ID0gZXRjaC5wcmltaXRpdmVzLlBvaW50O1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuaW1wb3J0IEluY2x1ZGluZ0ZyaWN0aW9uIGZyb20gJy4vSW5jbHVkaW5nRnJpY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVyMyBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG5cclxuXHRwdWJsaWMgdmVsb2NpdHk6IFZlY3RvcjtcclxuXHRwdWJsaWMgYWNjZWxlcmF0aW9uOiBWZWN0b3I7XHJcblx0cHVibGljIG1hc3M6IG51bWJlcjtcclxuXHRwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjZWZmMmY2JztcclxuXHJcblx0Y29uc3RydWN0b3IobWFzczogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5tYXNzID0gbWFzcztcclxuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoeCwgeSk7XHJcbiAgICBcdHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDAsIDApO1xyXG4gICAgXHR0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCk7XHJcblx0fVxyXG5cclxuXHRpbml0KGRyYXdUbzogSURpc3BsYXlDb250ZXh0LCBkcmF3RnJvbT86IElEaXNwbGF5Q29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZHJhd1RvLCBkcmF3RnJvbSk7XHJcbiAgICB9XHJcblxyXG5cdGFwcGx5Rm9yY2UoZm9yY2U6IFZlY3Rvcik6IHZvaWQge1xyXG4gICAgXHR0aGlzLmFjY2VsZXJhdGlvbi5hZGQoVmVjdG9yLmRpdk4oZm9yY2UsIHRoaXMubWFzcykpO1xyXG5cdH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZHtcclxuXHJcbiAgICAgICAgdmFyIGZyaWN0aW9uOiBWZWN0b3IgPSB0aGlzLnZlbG9jaXR5LmNsb25lKCk7XHJcbiAgICAgICAgdmFyIG11bHRpcGx5ZXI6IG51bWJlciA9ICg8SW5jbHVkaW5nRnJpY3Rpb24+dGhpcy5kcmF3VG8pLmZyaWN0aW9uO1xyXG4gICAgICAgIGZyaWN0aW9uLm11bHQoLTEpLm5vcm1hbGl6ZSgpLm11bHQobXVsdGlwbHllcik7XHJcblx0XHR0aGlzLmFwcGx5Rm9yY2UoZnJpY3Rpb24pO1xyXG5cclxuXHRcdHZhciB3aW5kOiBWZWN0b3IgPSAoPEluY2x1ZGluZ0ZyaWN0aW9uPnRoaXMuZHJhd1RvKS53aW5kO1xyXG5cdFx0dGhpcy5hcHBseUZvcmNlKHdpbmQpO1xyXG5cclxuXHRcdHZhciBncmF2aXR5OiBWZWN0b3IgPSBWZWN0b3IubXVsdE4oKDxJbmNsdWRpbmdGcmljdGlvbj50aGlzLmRyYXdUbykuZ3Jhdml0eSwgdGhpcy5tYXNzKTtcclxuXHRcdHRoaXMuYXBwbHlGb3JjZShncmF2aXR5KTtcclxuXHRcdFxyXG5cdFx0dGhpcy52ZWxvY2l0eS5hZGQodGhpcy5hY2NlbGVyYXRpb24pO1xyXG5cdCAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi50b1ZlY3RvcigpLmFkZCh0aGlzLnZlbG9jaXR5KS50b1BvaW50KCk7XHJcblx0ICAgIHRoaXMuYWNjZWxlcmF0aW9uLm11bHQoMCk7XHJcblxyXG5cdFx0aWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY2FudmFzV2lkdGgpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jYW52YXNXaWR0aDtcclxuICAgICAgXHRcdHRoaXMudmVsb2NpdHkueCAqPSAtMTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkge1xyXG5cdFx0XHR0aGlzLnZlbG9jaXR5LnggKj0gLTE7XHJcbiAgICAgIFx0XHR0aGlzLnBvc2l0aW9uLnggPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnBvc2l0aW9uLnkgPiB0aGlzLmNhbnZhc0hlaWdodCkge1xyXG5cdFx0XHR0aGlzLnZlbG9jaXR5LnkgKj0gLTE7XHJcbiAgICAgIFx0XHR0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmNhbnZhc0hlaWdodDtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLm1hc3MgKiAyMCwgMCwgTWF0aC5UQVUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
