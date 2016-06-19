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
            this.ctx.stroke();
        };
        return VectorNormalization;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = VectorNormalization;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL1ZlY3Rvck5vcm1hbGl6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUNBLElBQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2xDLElBQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBR3JDO1FBQWlELHVDQUFLO1FBQXREO1lBQWlELDhCQUFLO1FBb0J0RCxDQUFDO1FBbEJHLG1DQUFLLEdBQUw7UUFFQSxDQUFDO1FBRUQsa0NBQUksR0FBSjtZQUVJLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekMsSUFBSSxNQUFNLEdBQVUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNqRSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFL0Usd0NBQXdDO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUVMLDBCQUFDO0lBQUQsQ0FwQkEsQUFvQkMsQ0FwQmdELEtBQUssR0FvQnJEO0lBcEJEO3lDQW9CQyxDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS92ZWN0b3JzL1ZlY3Rvck5vcm1hbGl6YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IFN0YWdlID0gZXRjaC5kcmF3aW5nLlN0YWdlO1xyXG5pbXBvcnQgUG9pbnQgPSBldGNoLnByaW1pdGl2ZXMuUG9pbnQ7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yTm9ybWFsaXphdGlvbiBleHRlbmRzIFN0YWdlIHtcclxuXHJcbiAgICBzZXR1cCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdmFyIG1vdXNlOiBQb2ludCA9IHRoaXMubW91c2VQb3MuY2xvbmUoKTtcclxuICAgICAgICB2YXIgY2VudGVyOiBQb2ludCA9IG5ldyBQb2ludCh0aGlzLndpZHRoICogLjUsIHRoaXMuaGVpZ2h0ICogLjUpO1xyXG4gICAgICAgIG1vdXNlID0gbW91c2UudG9WZWN0b3IoKS5zdWIoY2VudGVyLnRvVmVjdG9yKCkpLm5vcm1hbGl6ZSgpLm11bHQoNTApLnRvUG9pbnQoKTtcclxuXHJcbiAgICAgICAgLy8gdHJhbnNsYXRlIGNvbnRleHQgdG8gY2VudGVyIG9mIGNhbnZhc1xyXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShjZW50ZXIueCwgY2VudGVyLnkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLCAwKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8obW91c2UueCwgbW91c2UueSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
