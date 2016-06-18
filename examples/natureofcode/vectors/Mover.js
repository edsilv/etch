var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var Vector = etch.primitives.Vector;
    var Mover = (function (_super) {
        __extends(Mover, _super);
        function Mover() {
            _super.apply(this, arguments);
        }
        Mover.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover.prototype.setup = function () {
            this.width = 30;
            this.height = 30;
            this.position = new Point(Math.randomBetween(this.canvasWidth), Math.randomBetween(this.canvasHeight));
            this.velocity = new Vector(Math.randomBetween(-10, 10), Math.randomBetween(-10, 10));
        };
        Mover.prototype.update = function () {
            var p = Point.addVector(this.position, this.velocity);
            if (p.x > this.canvasWidth) {
                p.x = 0;
            }
            else if (p.x < 0) {
                p.x = this.canvasWidth;
            }
            if (p.y > this.canvasHeight) {
                p.y = 0;
            }
            else if (p.y < 0) {
                p.y = this.canvasHeight;
            }
            this.position = p;
        };
        Mover.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.ellipse(this.position.x, this.position.y, this.width, this.height, 0, 0, 0);
            this.ctx.stroke();
        };
        return Mover;
    }(DisplayObject));
    exports.Mover = Mover;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL01vdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUV2QztRQUEyQix5QkFBYTtRQUF4QztZQUEyQiw4QkFBYTtRQXVDeEMsQ0FBQztRQW5DQSxvQkFBSSxHQUFKLFVBQUssTUFBdUIsRUFBRSxRQUEwQjtZQUNqRCxnQkFBSyxDQUFDLElBQUksWUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVKLHFCQUFLLEdBQUw7WUFDTyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUVqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDO1FBRUQsc0JBQU0sR0FBTjtZQUNJLElBQUksQ0FBQyxHQUFVLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFN0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDWixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzNCLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNaLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDNUIsQ0FBQztZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxvQkFBSSxHQUFKO1lBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0F2Q0EsQUF1Q0MsQ0F2QzBCLGFBQWEsR0F1Q3ZDO0lBdkNZLGFBQUssUUF1Q2pCLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL3ZlY3RvcnMvTW92ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZXIgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuXHJcblx0cHVibGljIHZlbG9jaXR5OiBWZWN0b3I7XHJcblxyXG5cdGluaXQoZHJhd1RvOiBJRGlzcGxheUNvbnRleHQsIGRyYXdGcm9tPzogSURpc3BsYXlDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChkcmF3VG8sIGRyYXdGcm9tKTtcclxuICAgIH1cclxuXHJcblx0c2V0dXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDMwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzA7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5yYW5kb21CZXR3ZWVuKHRoaXMuY2FudmFzV2lkdGgpLCBNYXRoLnJhbmRvbUJldHdlZW4odGhpcy5jYW52YXNIZWlnaHQpKTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcihNYXRoLnJhbmRvbUJldHdlZW4oLTEwLCAxMCksIE1hdGgucmFuZG9tQmV0d2VlbigtMTAsIDEwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBwOiBQb2ludCA9IFBvaW50LmFkZFZlY3Rvcih0aGlzLnBvc2l0aW9uLCB0aGlzLnZlbG9jaXR5KTtcclxuXHJcbiAgICAgICAgaWYgKHAueCA+IHRoaXMuY2FudmFzV2lkdGgpIHtcclxuICAgICAgICAgICAgcC54ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHAueCA8IDApIHtcclxuICAgICAgICAgICAgcC54ID0gdGhpcy5jYW52YXNXaWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwLnkgPiB0aGlzLmNhbnZhc0hlaWdodCkge1xyXG4gICAgICAgICAgICBwLnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocC55IDwgMCkge1xyXG4gICAgICAgICAgICBwLnkgPSB0aGlzLmNhbnZhc0hlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKTogdm9pZCB7XHJcbiAgICBcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIDApO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
