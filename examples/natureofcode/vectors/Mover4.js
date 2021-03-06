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
        function Mover4() {
            _super.apply(this, arguments);
            this.color = '#eff2f6';
        }
        Mover4.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover4.prototype.setup = function () {
            this.width = 30;
            this.height = 30;
            this.position = new Point(Math.randomBetween(this.stage.width), Math.randomBetween(this.stage.height));
            this.velocity = new Vector(1, 0);
            this.topspeed = 10;
        };
        Mover4.prototype.update = function () {
            var mouse = this.stage.mousePos.clone();
            this.acceleration = mouse.toVector().sub(this.position.toVector()).normalize().mult(0.5);
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.topspeed);
            this.position = this.position.toVector().add(this.velocity).toPoint();
            if (this.position.x > this.stage.width) {
                this.position.x = 0;
            }
            else if (this.position.x < 0) {
                this.position.x = this.stage.width;
            }
            if (this.position.y > this.stage.height) {
                this.position.y = 0;
            }
            else if (this.position.y < 0) {
                this.position.y = this.stage.height;
            }
        };
        Mover4.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.width * .5, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Mover4;
    }(DisplayObject));
    exports.Mover4 = Mover4;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL01vdmVyNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDbEQsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFFdkM7UUFBNEIsMEJBQWE7UUFBekM7WUFBNEIsOEJBQWE7WUFLakMsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQTRDbEMsQ0FBQztRQTFDQSxxQkFBSSxHQUFKLFVBQUssTUFBdUIsRUFBRSxRQUEwQjtZQUNqRCxnQkFBSyxDQUFDLElBQUksWUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVKLHNCQUFLLEdBQUw7WUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFFRSx1QkFBTSxHQUFOO1lBQ0MsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV6RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3BDLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3JDLENBQUM7UUFDQyxDQUFDO1FBRUQscUJBQUksR0FBSjtZQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFTCxhQUFDO0lBQUQsQ0FqREEsQUFpREMsQ0FqRDJCLGFBQWEsR0FpRHhDO0lBakRZLGNBQU0sU0FpRGxCLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL3ZlY3RvcnMvTW92ZXI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBEaXNwbGF5T2JqZWN0ID0gZXRjaC5kcmF3aW5nLkRpc3BsYXlPYmplY3Q7XHJcbmltcG9ydCBQb2ludCA9IGV0Y2gucHJpbWl0aXZlcy5Qb2ludDtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZXI0IGV4dGVuZHMgRGlzcGxheU9iamVjdHtcclxuXHJcblx0cHVibGljIHZlbG9jaXR5OiBWZWN0b3I7XHJcblx0cHVibGljIGFjY2VsZXJhdGlvbjogVmVjdG9yO1xyXG5cdHB1YmxpYyB0b3BzcGVlZDogbnVtYmVyO1xyXG5cdHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyNlZmYyZjYnO1xyXG5cclxuXHRpbml0KGRyYXdUbzogSURpc3BsYXlDb250ZXh0LCBkcmF3RnJvbT86IElEaXNwbGF5Q29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZHJhd1RvLCBkcmF3RnJvbSk7XHJcbiAgICB9XHJcblxyXG5cdHNldHVwKCk6IHZvaWR7XHJcblx0XHR0aGlzLndpZHRoID0gMzA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMDtcclxuXHJcblx0XHR0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgucmFuZG9tQmV0d2Vlbih0aGlzLnN0YWdlLndpZHRoKSwgTWF0aC5yYW5kb21CZXR3ZWVuKHRoaXMuc3RhZ2UuaGVpZ2h0KSk7XHJcbiAgICBcdHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDEsIDApO1xyXG4gICAgXHR0aGlzLnRvcHNwZWVkID0gMTA7XHJcblx0fVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lke1xyXG4gICAgXHR2YXIgbW91c2U6IFBvaW50ID0gdGhpcy5zdGFnZS5tb3VzZVBvcy5jbG9uZSgpO1xyXG5cdFx0dGhpcy5hY2NlbGVyYXRpb24gPSBtb3VzZS50b1ZlY3RvcigpLnN1Yih0aGlzLnBvc2l0aW9uLnRvVmVjdG9yKCkpLm5vcm1hbGl6ZSgpLm11bHQoMC41KTtcclxuXHJcbiAgICBcdHRoaXMudmVsb2NpdHkuYWRkKHRoaXMuYWNjZWxlcmF0aW9uKTtcclxuXHQgICAgdGhpcy52ZWxvY2l0eS5saW1pdCh0aGlzLnRvcHNwZWVkKTtcclxuXHJcblx0ICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnRvVmVjdG9yKCkuYWRkKHRoaXMudmVsb2NpdHkpLnRvUG9pbnQoKTtcclxuXHJcblx0XHRpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5zdGFnZS53aWR0aCkge1xyXG5cdFx0XHR0aGlzLnBvc2l0aW9uLnggPSAwO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XHJcblx0XHRcdHRoaXMucG9zaXRpb24ueCA9IHRoaXMuc3RhZ2Uud2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMuc3RhZ2UuaGVpZ2h0KSB7XHJcblx0XHRcdHRoaXMucG9zaXRpb24ueSA9IDA7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA8IDApIHtcclxuXHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gdGhpcy5zdGFnZS5oZWlnaHQ7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCAqIC41LCAwLCBNYXRoLlRBVSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
