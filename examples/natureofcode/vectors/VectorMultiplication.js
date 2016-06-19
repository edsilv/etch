var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var Point = etch.primitives.Point;
    var VectorMultiplication = (function (_super) {
        __extends(VectorMultiplication, _super);
        function VectorMultiplication() {
            _super.apply(this, arguments);
        }
        VectorMultiplication.prototype.setup = function () {
        };
        VectorMultiplication.prototype.draw = function () {
            var mouse = this.mousePos.clone();
            var center = new Point(this.canvasWidth * .5, this.canvasHeight * .5);
            mouse = mouse.toVector().sub(center.toVector()).mult(.5).toPoint();
            // translate context to center of canvas
            this.ctx.translate(center.x, center.y);
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(mouse.x, mouse.y);
            this.ctx.stroke();
        };
        return VectorMultiplication;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = VectorMultiplication;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL1ZlY3Rvck11bHRpcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNsQyxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUdyQztRQUFrRCx3Q0FBSztRQUF2RDtZQUFrRCw4QkFBSztRQW9CdkQsQ0FBQztRQWxCRyxvQ0FBSyxHQUFMO1FBRUEsQ0FBQztRQUVELG1DQUFJLEdBQUo7WUFFSSxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pDLElBQUksTUFBTSxHQUFVLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDN0UsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRW5FLHdDQUF3QztZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFFTCwyQkFBQztJQUFELENBcEJBLEFBb0JDLENBcEJpRCxLQUFLLEdBb0J0RDtJQXBCRDswQ0FvQkMsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvdmVjdG9ycy9WZWN0b3JNdWx0aXBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgU3RhZ2UgPSBldGNoLmRyYXdpbmcuU3RhZ2U7XHJcbmltcG9ydCBQb2ludCA9IGV0Y2gucHJpbWl0aXZlcy5Qb2ludDtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3JNdWx0aXBsaWNhdGlvbiBleHRlbmRzIFN0YWdlIHtcclxuXHJcbiAgICBzZXR1cCgpOiB2b2lke1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcblxyXG4gICAgICAgIHZhciBtb3VzZTogUG9pbnQgPSB0aGlzLm1vdXNlUG9zLmNsb25lKCk7XHJcbiAgICAgICAgdmFyIGNlbnRlcjogUG9pbnQgPSBuZXcgUG9pbnQodGhpcy5jYW52YXNXaWR0aCAqIC41LCB0aGlzLmNhbnZhc0hlaWdodCAqIC41KTtcclxuICAgICAgICBtb3VzZSA9IG1vdXNlLnRvVmVjdG9yKCkuc3ViKGNlbnRlci50b1ZlY3RvcigpKS5tdWx0KC41KS50b1BvaW50KCk7XHJcblxyXG4gICAgICAgIC8vIHRyYW5zbGF0ZSBjb250ZXh0IHRvIGNlbnRlciBvZiBjYW52YXNcclxuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoY2VudGVyLngsIGNlbnRlci55KTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKG1vdXNlLngsIG1vdXNlLnkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
