var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var Point = etch.primitives.Point;
    var VectorSubtraction = (function (_super) {
        __extends(VectorSubtraction, _super);
        function VectorSubtraction() {
            _super.apply(this, arguments);
            this._color = '#E2E2E2';
        }
        VectorSubtraction.prototype.setup = function () {
        };
        VectorSubtraction.prototype.draw = function () {
            var mouse = this.mousePos.clone();
            var center = new Point(this.width * .5, this.height * .5);
            mouse = mouse.toVector().sub(center.toVector()).toPoint();
            // translate context to center of canvas
            this.ctx.translate(center.x, center.y);
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(mouse.x, mouse.y);
            this.ctx.strokeStyle = this._color;
            this.ctx.stroke();
        };
        return VectorSubtraction;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = VectorSubtraction;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL1ZlY3RvclN1YnRyYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNsQyxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUdyQztRQUErQyxxQ0FBSztRQUFwRDtZQUErQyw4QkFBSztZQUUzQyxXQUFNLEdBQVcsU0FBUyxDQUFDO1FBcUJwQyxDQUFDO1FBbkJHLGlDQUFLLEdBQUw7UUFFQSxDQUFDO1FBRUQsZ0NBQUksR0FBSjtZQUVGLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekMsSUFBSSxNQUFNLEdBQVUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNqRSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUxRCx3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFFTCx3QkFBQztJQUFELENBdkJBLEFBdUJDLENBdkI4QyxLQUFLLEdBdUJuRDtJQXZCRDt1Q0F1QkMsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvdmVjdG9ycy9WZWN0b3JTdWJ0cmFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgU3RhZ2UgPSBldGNoLmRyYXdpbmcuU3RhZ2U7XHJcbmltcG9ydCBQb2ludCA9IGV0Y2gucHJpbWl0aXZlcy5Qb2ludDtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3JTdWJ0cmFjdGlvbiBleHRlbmRzIFN0YWdle1xyXG5cclxuXHRwcml2YXRlIF9jb2xvcjogc3RyaW5nID0gJyNFMkUyRTInO1xyXG5cclxuICAgIHNldHVwKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCk6IHZvaWQge1xyXG5cclxuXHRcdHZhciBtb3VzZTogUG9pbnQgPSB0aGlzLm1vdXNlUG9zLmNsb25lKCk7XHJcblx0XHR2YXIgY2VudGVyOiBQb2ludCA9IG5ldyBQb2ludCh0aGlzLndpZHRoICogLjUsIHRoaXMuaGVpZ2h0ICogLjUpO1xyXG5cdFx0bW91c2UgPSBtb3VzZS50b1ZlY3RvcigpLnN1YihjZW50ZXIudG9WZWN0b3IoKSkudG9Qb2ludCgpO1xyXG5cclxuXHRcdC8vIHRyYW5zbGF0ZSBjb250ZXh0IHRvIGNlbnRlciBvZiBjYW52YXNcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZShjZW50ZXIueCwgY2VudGVyLnkpO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5tb3ZlVG8oMCwgMCk7XHJcblx0XHR0aGlzLmN0eC5saW5lVG8obW91c2UueCwgbW91c2UueSk7XHJcblx0XHR0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuX2NvbG9yO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
