var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var Point = etch.primitives.Point;
    var VectorNormalization = (function (_super) {
        __extends(VectorNormalization, _super);
        function VectorNormalization() {
            _super.apply(this, arguments);
            this._color = '#eff2f6';
        }
        VectorNormalization.prototype.setup = function () {
        };
        VectorNormalization.prototype.draw = function () {
            var mouse = this.mousePos.clone();
            var center = new Point(this.width * .5, this.height * .5);
            mouse = mouse.toVector().sub(center.toVector()).normalize().mult(50).toPoint();
            // translate context to center of canvas
            this.ctx.translate(center.x, center.y);
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(mouse.x, mouse.y);
            this.ctx.strokeStyle = this._color;
            this.ctx.stroke();
        };
        return VectorNormalization;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = VectorNormalization;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL1ZlY3Rvck5vcm1hbGl6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUNBLElBQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2xDLElBQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBR3JDO1FBQWlELHVDQUFLO1FBQXREO1lBQWlELDhCQUFLO1lBRTFDLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFxQnZDLENBQUM7UUFuQkcsbUNBQUssR0FBTDtRQUVBLENBQUM7UUFFRCxrQ0FBSSxHQUFKO1lBRUksSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6QyxJQUFJLE1BQU0sR0FBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUvRSx3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFFTCwwQkFBQztJQUFELENBdkJBLEFBdUJDLENBdkJnRCxLQUFLLEdBdUJyRDtJQXZCRDt5Q0F1QkMsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvdmVjdG9ycy9WZWN0b3JOb3JtYWxpemF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBTdGFnZSA9IGV0Y2guZHJhd2luZy5TdGFnZTtcclxuaW1wb3J0IFBvaW50ID0gZXRjaC5wcmltaXRpdmVzLlBvaW50O1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3Rvck5vcm1hbGl6YXRpb24gZXh0ZW5kcyBTdGFnZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyA9ICcjZWZmMmY2JztcclxuXHJcbiAgICBzZXR1cCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdmFyIG1vdXNlOiBQb2ludCA9IHRoaXMubW91c2VQb3MuY2xvbmUoKTtcclxuICAgICAgICB2YXIgY2VudGVyOiBQb2ludCA9IG5ldyBQb2ludCh0aGlzLndpZHRoICogLjUsIHRoaXMuaGVpZ2h0ICogLjUpO1xyXG4gICAgICAgIG1vdXNlID0gbW91c2UudG9WZWN0b3IoKS5zdWIoY2VudGVyLnRvVmVjdG9yKCkpLm5vcm1hbGl6ZSgpLm11bHQoNTApLnRvUG9pbnQoKTtcclxuXHJcbiAgICAgICAgLy8gdHJhbnNsYXRlIGNvbnRleHQgdG8gY2VudGVyIG9mIGNhbnZhc1xyXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShjZW50ZXIueCwgY2VudGVyLnkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLCAwKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8obW91c2UueCwgbW91c2UueSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
