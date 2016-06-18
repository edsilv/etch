var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Stage = etch.drawing.Stage;
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
            //mouse = Point.subVector(mouse, center);
            // translate context to center of canvas
            //this.ctx.translate(center.x, center.y);
            this.ctx.beginPath();
            this.ctx.moveTo(center.x, center.y);
            this.ctx.lineTo(mouse.x, mouse.y);
            this.ctx.stroke();
            //this.ctx.translate(0, 0);
        };
        return VectorSubtraction;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = VectorSubtraction;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL1ZlY3RvclN1YnRyYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUVsQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUV2QztRQUErQyxxQ0FBSztRQUFwRDtZQUErQyw4QkFBSztRQXNCcEQsQ0FBQztRQXBCRyxpQ0FBSyxHQUFMO1FBRUEsQ0FBQztRQUVELGdDQUFJLEdBQUo7WUFFRixJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pDLElBQUksTUFBTSxHQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFN0UseUNBQXlDO1lBRXpDLHdDQUF3QztZQUN4Qyx5Q0FBeUM7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLDJCQUEyQjtRQUN6QixDQUFDO1FBRUwsd0JBQUM7SUFBRCxDQXRCQSxBQXNCQyxDQXRCOEMsS0FBSyxHQXNCbkQ7SUF0QkQ7dUNBc0JDLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL3ZlY3RvcnMvVmVjdG9yU3VidHJhY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IFN0YWdlID0gZXRjaC5kcmF3aW5nLlN0YWdlO1xyXG5pbXBvcnQgUG9pbnQgPSBldGNoLnByaW1pdGl2ZXMuUG9pbnQ7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yU3VidHJhY3Rpb24gZXh0ZW5kcyBTdGFnZXtcclxuXHJcbiAgICBzZXR1cCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuXHJcblx0XHR2YXIgbW91c2U6IFBvaW50ID0gdGhpcy5tb3VzZVBvcy5jbG9uZSgpO1xyXG5cdFx0dmFyIGNlbnRlcjogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLmNhbnZhc1dpZHRoIC8gMiwgdGhpcy5jYW52YXNIZWlnaHQgLyAyKTtcclxuXHJcblx0XHQvL21vdXNlID0gUG9pbnQuc3ViVmVjdG9yKG1vdXNlLCBjZW50ZXIpO1xyXG5cclxuXHRcdC8vIHRyYW5zbGF0ZSBjb250ZXh0IHRvIGNlbnRlciBvZiBjYW52YXNcclxuXHRcdC8vdGhpcy5jdHgudHJhbnNsYXRlKGNlbnRlci54LCBjZW50ZXIueSk7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4Lm1vdmVUbyhjZW50ZXIueCwgY2VudGVyLnkpO1xyXG5cdFx0dGhpcy5jdHgubGluZVRvKG1vdXNlLngsIG1vdXNlLnkpO1xyXG5cdFx0dGhpcy5jdHguc3Ryb2tlKCk7XHJcblx0XHQvL3RoaXMuY3R4LnRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
