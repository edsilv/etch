var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var Point = etch.primitives.Point;
    var Vector = etch.primitives.Vector;
    var BouncingBall = (function (_super) {
        __extends(BouncingBall, _super);
        function BouncingBall() {
            _super.apply(this, arguments);
            this._ballRadius = 20;
            this._color = '#000';
        }
        BouncingBall.prototype.setup = function () {
            this.position = new Point(100, 100);
            this.velocity = new Vector(2.5, 5);
        };
        BouncingBall.prototype.update = function () {
            this.position = Point.addVector(this.position, this.velocity);
            if ((this.position.x > this.canvasWidth) || (this.position.x < 0)) {
                this.velocity.x = this.velocity.x * -1;
            }
            if ((this.position.y > this.canvasHeight) || (this.position.y < 0)) {
                this.velocity.y = this.velocity.y * -1;
            }
        };
        BouncingBall.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this._ballRadius, 0, Math.TAU, false);
            this.ctx.fillStyle = this._color;
            this.ctx.fill();
        };
        return BouncingBall;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BouncingBall;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL0JvdW5jaW5nQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDbEMsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFFdkM7UUFBMEMsZ0NBQUs7UUFBL0M7WUFBMEMsOEJBQUs7WUFHdEMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7WUFDekIsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQTBCakMsQ0FBQztRQXhCRyw0QkFBSyxHQUFMO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVELDZCQUFNLEdBQU47WUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFcEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNDLENBQUM7UUFFRCwyQkFBSSxHQUFKO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFFTCxtQkFBQztJQUFELENBOUJBLEFBOEJDLENBOUJ5QyxLQUFLLEdBOEI5QztJQTlCRDtrQ0E4QkMsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvdmVjdG9ycy9Cb3VuY2luZ0JhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IFN0YWdlID0gZXRjaC5kcmF3aW5nLlN0YWdlO1xyXG5pbXBvcnQgUG9pbnQgPSBldGNoLnByaW1pdGl2ZXMuUG9pbnQ7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmNpbmdCYWxsIGV4dGVuZHMgU3RhZ2V7XHJcblxyXG5cdHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yO1xyXG5cdHByaXZhdGUgX2JhbGxSYWRpdXM6IG51bWJlciA9IDIwO1xyXG5cdHByaXZhdGUgX2NvbG9yOiBzdHJpbmcgPSAnIzAwMCc7XHJcblxyXG4gICAgc2V0dXAoKTogdm9pZCB7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KDEwMCwgMTAwKTtcclxuICBcdFx0dGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoMi41LCA1KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFBvaW50LmFkZFZlY3Rvcih0aGlzLnBvc2l0aW9uLCB0aGlzLnZlbG9jaXR5KTtcclxuXHJcblx0XHRpZiAoKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY2FudmFzV2lkdGgpIHx8ICh0aGlzLnBvc2l0aW9uLnggPCAwKSkge1xyXG5cdFx0XHR0aGlzLnZlbG9jaXR5LnggPSB0aGlzLnZlbG9jaXR5LnggKiAtMTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoKHRoaXMucG9zaXRpb24ueSA+IHRoaXMuY2FudmFzSGVpZ2h0KSB8fCAodGhpcy5wb3NpdGlvbi55IDwgMCkpIHtcclxuXHRcdFx0dGhpcy52ZWxvY2l0eS55ID0gdGhpcy52ZWxvY2l0eS55ICogLTE7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0dGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLl9iYWxsUmFkaXVzLCAwLCBNYXRoLlRBVSwgZmFsc2UpO1xyXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5fY29sb3I7XHJcblx0XHR0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
