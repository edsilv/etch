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
        function Mover3() {
            _super.apply(this, arguments);
            this.color = '#000';
        }
        Mover3.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover3.prototype.setup = function () {
            this.width = 30;
            this.height = 30;
            this.position = new Point(Math.randomBetween(this.ctxWidth), Math.randomBetween(this.ctxHeight));
            this.velocity = new Vector(1, 0);
            this.acceleration = new Vector(-0.001, 0.01);
            this.topspeed = 10;
        };
        Mover3.prototype.update = function () {
            this.acceleration = Vector.random2D();
            this.acceleration.mult(Math.randomBetween(2));
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.topspeed);
            this.position = this.position.toVector().add(this.velocity).toPoint();
            if (this.position.x > this.ctxWidth) {
                this.position.x = 0;
            }
            else if (this.position.x < 0) {
                this.position.x = this.ctxWidth;
            }
            if (this.position.y > this.ctxHeight) {
                this.position.y = 0;
            }
            else if (this.position.y < 0) {
                this.position.y = this.ctxHeight;
            }
        };
        Mover3.prototype.draw = function () {
            // optionally set origin to position
            this.ctx.translate(this.position.x, this.position.y);
            this.ctx.beginPath();
            this.ctx.arc(0, 0, this.width * .5, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Mover3;
    }(DisplayObject));
    exports.Mover3 = Mover3;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL01vdmVyMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDbEQsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFFdkM7UUFBNEIsMEJBQWE7UUFBekM7WUFBNEIsOEJBQWE7WUFLakMsVUFBSyxHQUFXLE1BQU0sQ0FBQztRQStDL0IsQ0FBQztRQTdDQSxxQkFBSSxHQUFKLFVBQUssTUFBdUIsRUFBRSxRQUEwQjtZQUNqRCxnQkFBSyxDQUFDLElBQUksWUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVKLHNCQUFLLEdBQUw7WUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5RixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFFRSx1QkFBTSxHQUFOO1lBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTlDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFekUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDakMsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xDLENBQUM7UUFDQyxDQUFDO1FBRUQscUJBQUksR0FBSjtZQUNDLG9DQUFvQztZQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVMLGFBQUM7SUFBRCxDQXBEQSxBQW9EQyxDQXBEMkIsYUFBYSxHQW9EeEM7SUFwRFksY0FBTSxTQW9EbEIsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvdmVjdG9ycy9Nb3ZlcjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuaW1wb3J0IFBvaW50ID0gZXRjaC5wcmltaXRpdmVzLlBvaW50O1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlcjMgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuXHJcblx0cHVibGljIHZlbG9jaXR5OiBWZWN0b3I7XHJcblx0cHVibGljIGFjY2VsZXJhdGlvbjogVmVjdG9yO1xyXG5cdHB1YmxpYyB0b3BzcGVlZDogbnVtYmVyO1xyXG5cdHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyMwMDAnO1xyXG5cclxuXHRpbml0KGRyYXdUbzogSURpc3BsYXlDb250ZXh0LCBkcmF3RnJvbT86IElEaXNwbGF5Q29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZHJhd1RvLCBkcmF3RnJvbSk7XHJcbiAgICB9XHJcblxyXG5cdHNldHVwKCk6IHZvaWR7XHJcblx0XHR0aGlzLndpZHRoID0gMzA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMDtcclxuXHJcblx0XHR0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgucmFuZG9tQmV0d2Vlbih0aGlzLmN0eFdpZHRoKSwgTWF0aC5yYW5kb21CZXR3ZWVuKHRoaXMuY3R4SGVpZ2h0KSk7XHJcbiAgICBcdHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDEsIDApO1xyXG4gICAgXHR0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IoLTAuMDAxLCAwLjAxKTtcclxuICAgIFx0dGhpcy50b3BzcGVlZCA9IDEwO1xyXG5cdH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZHtcclxuICAgIFx0dGhpcy5hY2NlbGVyYXRpb24gPSBWZWN0b3IucmFuZG9tMkQoKTtcclxuICAgIFx0dGhpcy5hY2NlbGVyYXRpb24ubXVsdChNYXRoLnJhbmRvbUJldHdlZW4oMikpO1xyXG5cclxuICAgIFx0dGhpcy52ZWxvY2l0eS5hZGQodGhpcy5hY2NlbGVyYXRpb24pO1xyXG5cdCAgICB0aGlzLnZlbG9jaXR5LmxpbWl0KHRoaXMudG9wc3BlZWQpO1xyXG5cclxuXHQgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24udG9WZWN0b3IoKS5hZGQodGhpcy52ZWxvY2l0eSkudG9Qb2ludCgpO1xyXG5cclxuXHRcdGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmN0eFdpZHRoKSB7XHJcblx0XHRcdHRoaXMucG9zaXRpb24ueCA9IDA7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcclxuXHRcdFx0dGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jdHhXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5wb3NpdGlvbi55ID4gdGhpcy5jdHhIZWlnaHQpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gMDtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55IDwgMCkge1xyXG5cdFx0XHR0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmN0eEhlaWdodDtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCk6IHZvaWR7XHJcblx0ICAgIC8vIG9wdGlvbmFsbHkgc2V0IG9yaWdpbiB0byBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIHRoaXMud2lkdGggKiAuNSwgMCwgTWF0aC5UQVUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
