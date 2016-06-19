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
        }
        VectorSubtraction.prototype.setup = function () {
        };
        VectorSubtraction.prototype.draw = function () {
            var mouse = this.mousePos.clone();
            var center = new Point(this.canvasWidth * .5, this.canvasHeight * .5);
            mouse = mouse.toVector().sub(center.toVector()).toPoint();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL1ZlY3RvclN1YnRyYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNsQyxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUdyQztRQUErQyxxQ0FBSztRQUFwRDtZQUErQyw4QkFBSztRQW9CcEQsQ0FBQztRQWxCRyxpQ0FBSyxHQUFMO1FBRUEsQ0FBQztRQUVELGdDQUFJLEdBQUo7WUFFRixJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3pDLElBQUksTUFBTSxHQUFVLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDN0UsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFMUQsd0NBQXdDO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUVMLHdCQUFDO0lBQUQsQ0FwQkEsQUFvQkMsQ0FwQjhDLEtBQUssR0FvQm5EO0lBcEJEO3VDQW9CQyxDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS92ZWN0b3JzL1ZlY3RvclN1YnRyYWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBTdGFnZSA9IGV0Y2guZHJhd2luZy5TdGFnZTtcclxuaW1wb3J0IFBvaW50ID0gZXRjaC5wcmltaXRpdmVzLlBvaW50O1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvclN1YnRyYWN0aW9uIGV4dGVuZHMgU3RhZ2V7XHJcblxyXG4gICAgc2V0dXAoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKTogdm9pZCB7XHJcblxyXG5cdFx0dmFyIG1vdXNlOiBQb2ludCA9IHRoaXMubW91c2VQb3MuY2xvbmUoKTtcclxuXHRcdHZhciBjZW50ZXI6IFBvaW50ID0gbmV3IFBvaW50KHRoaXMuY2FudmFzV2lkdGggKiAuNSwgdGhpcy5jYW52YXNIZWlnaHQgKiAuNSk7XHJcblx0XHRtb3VzZSA9IG1vdXNlLnRvVmVjdG9yKCkuc3ViKGNlbnRlci50b1ZlY3RvcigpKS50b1BvaW50KCk7XHJcblxyXG5cdFx0Ly8gdHJhbnNsYXRlIGNvbnRleHQgdG8gY2VudGVyIG9mIGNhbnZhc1xyXG5cdFx0dGhpcy5jdHgudHJhbnNsYXRlKGNlbnRlci54LCBjZW50ZXIueSk7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4Lm1vdmVUbygwLCAwKTtcclxuXHRcdHRoaXMuY3R4LmxpbmVUbyhtb3VzZS54LCBtb3VzZS55KTtcclxuXHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
