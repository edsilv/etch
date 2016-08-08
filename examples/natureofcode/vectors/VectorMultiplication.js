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
            this._color = '#E2E2E2';
        }
        VectorMultiplication.prototype.setup = function () {
        };
        VectorMultiplication.prototype.draw = function () {
            var mouse = this.mousePos.clone();
            var center = new Point(this.width * .5, this.height * .5);
            mouse = mouse.toVector().sub(center.toVector()).mult(.5).toPoint();
            // translate context to center of canvas
            this.ctx.translate(center.x, center.y);
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(mouse.x, mouse.y);
            this.ctx.strokeStyle = this._color;
            this.ctx.stroke();
        };
        return VectorMultiplication;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = VectorMultiplication;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL1ZlY3Rvck11bHRpcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNsQyxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUdyQztRQUFrRCx3Q0FBSztRQUF2RDtZQUFrRCw4QkFBSztZQUUzQyxXQUFNLEdBQVcsU0FBUyxDQUFDO1FBcUJ2QyxDQUFDO1FBbkJHLG9DQUFLLEdBQUw7UUFFQSxDQUFDO1FBRUQsbUNBQUksR0FBSjtZQUVJLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekMsSUFBSSxNQUFNLEdBQVUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNqRSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFbkUsd0NBQXdDO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRUwsMkJBQUM7SUFBRCxDQXZCQSxBQXVCQyxDQXZCaUQsS0FBSyxHQXVCdEQ7SUF2QkQ7MENBdUJDLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL3ZlY3RvcnMvVmVjdG9yTXVsdGlwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IFN0YWdlID0gZXRjaC5kcmF3aW5nLlN0YWdlO1xyXG5pbXBvcnQgUG9pbnQgPSBldGNoLnByaW1pdGl2ZXMuUG9pbnQ7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yTXVsdGlwbGljYXRpb24gZXh0ZW5kcyBTdGFnZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyA9ICcjRTJFMkUyJztcclxuXHJcbiAgICBzZXR1cCgpOiB2b2lke1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcblxyXG4gICAgICAgIHZhciBtb3VzZTogUG9pbnQgPSB0aGlzLm1vdXNlUG9zLmNsb25lKCk7XHJcbiAgICAgICAgdmFyIGNlbnRlcjogUG9pbnQgPSBuZXcgUG9pbnQodGhpcy53aWR0aCAqIC41LCB0aGlzLmhlaWdodCAqIC41KTtcclxuICAgICAgICBtb3VzZSA9IG1vdXNlLnRvVmVjdG9yKCkuc3ViKGNlbnRlci50b1ZlY3RvcigpKS5tdWx0KC41KS50b1BvaW50KCk7XHJcblxyXG4gICAgICAgIC8vIHRyYW5zbGF0ZSBjb250ZXh0IHRvIGNlbnRlciBvZiBjYW52YXNcclxuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoY2VudGVyLngsIGNlbnRlci55KTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKG1vdXNlLngsIG1vdXNlLnkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5fY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
