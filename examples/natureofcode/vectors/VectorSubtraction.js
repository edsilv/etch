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
    var VectorSubtraction = (function (_super) {
        __extends(VectorSubtraction, _super);
        function VectorSubtraction() {
            _super.apply(this, arguments);
        }
        VectorSubtraction.prototype.setup = function () {
        };
        VectorSubtraction.prototype.draw = function () {
            var mouse = this.mousePos.clone();
            var center = new Vector(this.canvasWidth / 2, this.canvasHeight / 2);
            mouse = Point.subVector(mouse, center);
            // translate context to center of canvas
            this.ctx.translate(center.x, center.y);
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(mouse.x, mouse.y);
            this.ctx.stroke();
        };
        return VectorSubtraction;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = VectorSubtraction;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL1ZlY3RvclN1YnRyYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNsQyxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUV2QztRQUErQyxxQ0FBSztRQUFwRDtZQUErQyw4QkFBSztRQXFCcEQsQ0FBQztRQW5CRyxpQ0FBSyxHQUFMO1FBRUEsQ0FBQztRQUVELGdDQUFJLEdBQUo7WUFFRixJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pDLElBQUksTUFBTSxHQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFN0UsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXZDLHdDQUF3QztZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFFTCx3QkFBQztJQUFELENBckJBLEFBcUJDLENBckI4QyxLQUFLLEdBcUJuRDtJQXJCRDt1Q0FxQkMsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvdmVjdG9ycy9WZWN0b3JTdWJ0cmFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgU3RhZ2UgPSBldGNoLmRyYXdpbmcuU3RhZ2U7XHJcbmltcG9ydCBQb2ludCA9IGV0Y2gucHJpbWl0aXZlcy5Qb2ludDtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3JTdWJ0cmFjdGlvbiBleHRlbmRzIFN0YWdle1xyXG5cclxuICAgIHNldHVwKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCk6IHZvaWQge1xyXG5cclxuXHRcdHZhciBtb3VzZTogUG9pbnQgPSB0aGlzLm1vdXNlUG9zLmNsb25lKCk7XHJcblx0XHR2YXIgY2VudGVyOiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMuY2FudmFzV2lkdGggLyAyLCB0aGlzLmNhbnZhc0hlaWdodCAvIDIpO1xyXG5cclxuXHRcdG1vdXNlID0gUG9pbnQuc3ViVmVjdG9yKG1vdXNlLCBjZW50ZXIpO1xyXG5cclxuXHRcdC8vIHRyYW5zbGF0ZSBjb250ZXh0IHRvIGNlbnRlciBvZiBjYW52YXNcclxuXHRcdHRoaXMuY3R4LnRyYW5zbGF0ZShjZW50ZXIueCwgY2VudGVyLnkpO1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcblx0XHR0aGlzLmN0eC5tb3ZlVG8oMCwgMCk7XHJcblx0XHR0aGlzLmN0eC5saW5lVG8obW91c2UueCwgbW91c2UueSk7XHJcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
