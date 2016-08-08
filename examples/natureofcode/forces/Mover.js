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
    var Mover = (function (_super) {
        __extends(Mover, _super);
        function Mover(mass, x, y) {
            _super.call(this);
            this.color = '#E2E2E2';
            this.mass = mass;
            this.position = new Point(x, y);
            this.velocity = new Vector(0, 0);
            this.acceleration = new Vector(0, 0);
        }
        Mover.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover.prototype.applyForce = function (force) {
            this.acceleration.add(Vector.divN(force, this.mass));
        };
        Mover.prototype.update = function () {
            this.applyForce(this.drawTo.wind);
            this.applyForce(this.drawTo.gravity);
            this.velocity.add(this.acceleration);
            this.position = this.position.toVector().add(this.velocity).toPoint();
            this.acceleration.mult(0);
            if (this.position.x > this.canvasWidth) {
                this.position.x = this.canvasHeight;
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
        Mover.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.mass * 20, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Mover;
    }(DisplayObject));
    exports.Mover = Mover;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTW92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUNBLElBQU8sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ2xELElBQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3JDLElBQU8sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBR3ZDO1FBQTJCLHlCQUFhO1FBT3ZDLGVBQVksSUFBWSxFQUFFLENBQVMsRUFBRSxDQUFTO1lBQzdDLGlCQUFPLENBQUM7WUFIRixVQUFLLEdBQVcsU0FBUyxDQUFDO1lBSWhDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxvQkFBSSxHQUFKLFVBQUssTUFBdUIsRUFBRSxRQUEwQjtZQUNqRCxnQkFBSyxDQUFDLElBQUksWUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVKLDBCQUFVLEdBQVYsVUFBVyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFFRSxzQkFBTSxHQUFOO1lBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBVSxJQUFJLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLENBQVUsSUFBSSxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzFDLENBQUM7UUFDQyxDQUFDO1FBRUQsb0JBQUksR0FBSjtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVMLFlBQUM7SUFBRCxDQXBEQSxBQW9EQyxDQXBEMEIsYUFBYSxHQW9EdkM7SUFwRFksYUFBSyxRQW9EakIsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvZm9yY2VzL01vdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBEaXNwbGF5T2JqZWN0ID0gZXRjaC5kcmF3aW5nLkRpc3BsYXlPYmplY3Q7XHJcbmltcG9ydCBQb2ludCA9IGV0Y2gucHJpbWl0aXZlcy5Qb2ludDtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcbmltcG9ydCBGb3JjZXMgZnJvbSAnLi9Gb3JjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVyIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcblxyXG5cdHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yO1xyXG5cdHB1YmxpYyBhY2NlbGVyYXRpb246IFZlY3RvcjtcclxuXHRwdWJsaWMgbWFzczogbnVtYmVyO1xyXG5cdHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyNFMkUyRTInO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihtYXNzOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLm1hc3MgPSBtYXNzO1xyXG5cdFx0dGhpcy5wb3NpdGlvbiA9IG5ldyBQb2ludCh4LCB5KTtcclxuICAgIFx0dGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoMCwgMCk7XHJcbiAgICBcdHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcclxuXHR9XHJcblxyXG5cdGluaXQoZHJhd1RvOiBJRGlzcGxheUNvbnRleHQsIGRyYXdGcm9tPzogSURpc3BsYXlDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChkcmF3VG8sIGRyYXdGcm9tKTtcclxuICAgIH1cclxuXHJcblx0YXBwbHlGb3JjZShmb3JjZTogVmVjdG9yKTogdm9pZCB7XHJcbiAgICBcdHRoaXMuYWNjZWxlcmF0aW9uLmFkZChWZWN0b3IuZGl2Tihmb3JjZSwgdGhpcy5tYXNzKSk7XHJcblx0fVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lke1xyXG4gICAgXHR0aGlzLmFwcGx5Rm9yY2UoKDxGb3JjZXM+dGhpcy5kcmF3VG8pLndpbmQpO1xyXG5cdFx0dGhpcy5hcHBseUZvcmNlKCg8Rm9yY2VzPnRoaXMuZHJhd1RvKS5ncmF2aXR5KTtcclxuXHRcdFxyXG5cdFx0dGhpcy52ZWxvY2l0eS5hZGQodGhpcy5hY2NlbGVyYXRpb24pO1xyXG5cdCAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi50b1ZlY3RvcigpLmFkZCh0aGlzLnZlbG9jaXR5KS50b1BvaW50KCk7XHJcblx0ICAgIHRoaXMuYWNjZWxlcmF0aW9uLm11bHQoMCk7XHJcblxyXG5cdFx0aWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY2FudmFzV2lkdGgpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jYW52YXNIZWlnaHQ7XHJcbiAgICAgIFx0XHR0aGlzLnZlbG9jaXR5LnggKj0gLTE7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcclxuXHRcdFx0dGhpcy52ZWxvY2l0eS54ICo9IC0xO1xyXG4gICAgICBcdFx0dGhpcy5wb3NpdGlvbi54ID0gMDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5wb3NpdGlvbi55ID4gdGhpcy5jYW52YXNIZWlnaHQpIHtcclxuXHRcdFx0dGhpcy52ZWxvY2l0eS55ICo9IC0xO1xyXG4gICAgICBcdFx0dGhpcy5wb3NpdGlvbi55ID0gdGhpcy5jYW52YXNIZWlnaHQ7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5tYXNzICogMjAsIDAsIE1hdGguVEFVLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
