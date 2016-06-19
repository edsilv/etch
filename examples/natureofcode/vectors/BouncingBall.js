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
            this.position = Vector.add(this.position.toVector(), this.velocity).toPoint();
            if ((this.position.x > this.width) || (this.position.x < 0)) {
                this.velocity.x = this.velocity.x * -1;
            }
            if ((this.position.y > this.height) || (this.position.y < 0)) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL0JvdW5jaW5nQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDbEMsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFFdkM7UUFBMEMsZ0NBQUs7UUFBL0M7WUFBMEMsOEJBQUs7WUFHckMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7WUFDekIsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQTBCbEMsQ0FBQztRQXhCQyw0QkFBSyxHQUFMO1lBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELDZCQUFNLEdBQU47WUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFOUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztRQUNILENBQUM7UUFFRCwyQkFBSSxHQUFKO1lBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBRUgsbUJBQUM7SUFBRCxDQTlCQSxBQThCQyxDQTlCeUMsS0FBSyxHQThCOUM7SUE5QkQ7a0NBOEJDLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL3ZlY3RvcnMvQm91bmNpbmdCYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBTdGFnZSA9IGV0Y2guZHJhd2luZy5TdGFnZTtcclxuaW1wb3J0IFBvaW50ID0gZXRjaC5wcmltaXRpdmVzLlBvaW50O1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5jaW5nQmFsbCBleHRlbmRzIFN0YWdle1xyXG5cclxuXHRcdHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yO1xyXG5cdFx0cHJpdmF0ZSBfYmFsbFJhZGl1czogbnVtYmVyID0gMjA7XHJcblx0XHRwcml2YXRlIF9jb2xvcjogc3RyaW5nID0gJyMwMDAnO1xyXG5cclxuXHRcdHNldHVwKCk6IHZvaWQge1xyXG5cdFx0XHRcdHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoMTAwLCAxMDApO1xyXG5cdFx0XHRcdHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDIuNSwgNSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dXBkYXRlKCk6IHZvaWQge1xyXG5cdFx0XHRcdHRoaXMucG9zaXRpb24gPSBWZWN0b3IuYWRkKHRoaXMucG9zaXRpb24udG9WZWN0b3IoKSwgdGhpcy52ZWxvY2l0eSkudG9Qb2ludCgpO1xyXG5cclxuXHRcdFx0XHRpZiAoKHRoaXMucG9zaXRpb24ueCA+IHRoaXMud2lkdGgpIHx8ICh0aGlzLnBvc2l0aW9uLnggPCAwKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZlbG9jaXR5LnggPSB0aGlzLnZlbG9jaXR5LnggKiAtMTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICgodGhpcy5wb3NpdGlvbi55ID4gdGhpcy5oZWlnaHQpIHx8ICh0aGlzLnBvc2l0aW9uLnkgPCAwKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLnZlbG9jaXR5LnkgKiAtMTtcclxuXHRcdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZHJhdygpOiB2b2lkIHtcclxuXHRcdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHR0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuX2JhbGxSYWRpdXMsIDAsIE1hdGguVEFVLCBmYWxzZSk7XHJcblx0XHRcdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5fY29sb3I7XHJcblx0XHRcdFx0dGhpcy5jdHguZmlsbCgpO1xyXG5cdFx0fVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
