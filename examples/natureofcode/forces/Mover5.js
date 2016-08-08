var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var Point = etch.primitives.Point;
    var Vector = etch.primitives.Vector;
    var Mover5 = (function (_super) {
        __extends(Mover5, _super);
        function Mover5(mass, x, y, color) {
            _super.call(this);
            this.color = '#E2E2E2';
            this.mass = mass;
            this.position = new Point(x, y);
            this.velocity = new Vector(0, 0);
            this.acceleration = new Vector(0, 0);
            if (color)
                this.color = color;
        }
        Mover5.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover5.prototype.applyForce = function (force) {
            this.acceleration.add(Vector.divN(force, this.mass));
        };
        Mover5.prototype.killVelocity = function () {
            this.velocity = new Vector(0, 0);
            this.acceleration = new Vector(0, 0);
        };
        Mover5.prototype.update = function () {
            this.velocity.add(this.acceleration);
            this.position = this.position.toVector().add(this.velocity).toPoint();
            this.acceleration.mult(0);
        };
        Mover5.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.mass * 20, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Mover5;
    }(DisplayObject));
    exports.Mover5 = Mover5;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTW92ZXI1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUV2QztRQUE0QiwwQkFBYTtRQU94QyxnQkFBWSxJQUFZLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFjO1lBQzdELGlCQUFPLENBQUM7WUFIRixVQUFLLEdBQVcsU0FBUyxDQUFDO1lBSWhDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO1FBRUQscUJBQUksR0FBSixVQUFLLE1BQXVCLEVBQUUsUUFBMEI7WUFDakQsZ0JBQUssQ0FBQyxJQUFJLFlBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFSiwyQkFBVSxHQUFWLFVBQVcsS0FBYTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRUQsNkJBQVksR0FBWjtZQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRSx1QkFBTSxHQUFOO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFFRCxxQkFBSSxHQUFKO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBRUwsYUFBQztJQUFELENBMUNBLEFBMENDLENBMUMyQixhQUFhLEdBMEN4QztJQTFDWSxjQUFNLFNBMENsQixDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS9mb3JjZXMvTW92ZXI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBEaXNwbGF5T2JqZWN0ID0gZXRjaC5kcmF3aW5nLkRpc3BsYXlPYmplY3Q7XHJcbmltcG9ydCBQb2ludCA9IGV0Y2gucHJpbWl0aXZlcy5Qb2ludDtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZXI1IGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcblxyXG5cdHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yO1xyXG5cdHB1YmxpYyBhY2NlbGVyYXRpb246IFZlY3RvcjtcclxuXHRwdWJsaWMgbWFzczogbnVtYmVyO1xyXG5cdHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyNFMkUyRTInO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihtYXNzOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcj86IHN0cmluZyl7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5tYXNzID0gbWFzcztcclxuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoeCwgeSk7XHJcbiAgICBcdHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDAsIDApO1xyXG4gICAgXHR0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCk7XHJcblx0XHRpZiAoY29sb3IpIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblxyXG5cdGluaXQoZHJhd1RvOiBJRGlzcGxheUNvbnRleHQsIGRyYXdGcm9tPzogSURpc3BsYXlDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChkcmF3VG8sIGRyYXdGcm9tKTtcclxuICAgIH1cclxuXHJcblx0YXBwbHlGb3JjZShmb3JjZTogVmVjdG9yKTogdm9pZCB7XHJcbiAgICBcdHRoaXMuYWNjZWxlcmF0aW9uLmFkZChWZWN0b3IuZGl2Tihmb3JjZSwgdGhpcy5tYXNzKSk7XHJcblx0fVxyXG5cclxuXHRraWxsVmVsb2NpdHkoKTogdm9pZCB7XHJcblx0XHR0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcigwLCAwKTtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IoMCwgMCk7XHJcblx0fVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lke1x0XHRcclxuXHRcdHRoaXMudmVsb2NpdHkuYWRkKHRoaXMuYWNjZWxlcmF0aW9uKTtcclxuXHQgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24udG9WZWN0b3IoKS5hZGQodGhpcy52ZWxvY2l0eSkudG9Qb2ludCgpO1xyXG5cdCAgICB0aGlzLmFjY2VsZXJhdGlvbi5tdWx0KDApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKTogdm9pZCB7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMubWFzcyAqIDIwLCAwLCBNYXRoLlRBVSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
