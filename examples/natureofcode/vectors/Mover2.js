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
    var Mover2 = (function (_super) {
        __extends(Mover2, _super);
        function Mover2() {
            _super.apply(this, arguments);
            this.color = '#000';
        }
        Mover2.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover2.prototype.setup = function () {
            this.width = 30;
            this.height = 30;
            this.position = new Point(Math.randomBetween(this.ctxWidth), Math.randomBetween(this.ctxHeight));
            this.velocity = new Vector(1, 0);
            this.acceleration = new Vector(-0.001, 0.01);
            this.topspeed = 10;
        };
        Mover2.prototype.update = function () {
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.topspeed);
            this.position = this.position.toVector().add(this.velocity).toPoint();
            if (this.position.x > this.ctxWidth) {
                this.position.x = 0;
            }
            else if (this.position.x < 0) {
                this.position.x = this.ctxWidth;
            }
            if (this.position.y > this.ctxHeight) {
                this.position.y = 0;
            }
            else if (this.position.y < 0) {
                this.position.y = this.ctxHeight;
            }
        };
        Mover2.prototype.draw = function () {
            // optionally set origin to position
            this.ctx.translate(this.position.x, this.position.y);
            this.ctx.beginPath();
            this.ctx.arc(0, 0, this.width * .5, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Mover2;
    }(DisplayObject));
    exports.Mover2 = Mover2;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL01vdmVyMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDbEQsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFFdkM7UUFBNEIsMEJBQWE7UUFBekM7WUFBNEIsOEJBQWE7WUFLakMsVUFBSyxHQUFXLE1BQU0sQ0FBQztRQTZDL0IsQ0FBQztRQTNDQSxxQkFBSSxHQUFKLFVBQUssTUFBdUIsRUFBRSxRQUEwQjtZQUNqRCxnQkFBSyxDQUFDLElBQUksWUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVKLHNCQUFLLEdBQUw7WUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5RixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFFRSx1QkFBTSxHQUFOO1lBRUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV6RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEMsQ0FBQztRQUNDLENBQUM7UUFFRCxxQkFBSSxHQUFKO1lBQ0Msb0NBQW9DO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBRUwsYUFBQztJQUFELENBbERBLEFBa0RDLENBbEQyQixhQUFhLEdBa0R4QztJQWxEWSxjQUFNLFNBa0RsQixDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS92ZWN0b3JzL01vdmVyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgRGlzcGxheU9iamVjdCA9IGV0Y2guZHJhd2luZy5EaXNwbGF5T2JqZWN0O1xyXG5pbXBvcnQgUG9pbnQgPSBldGNoLnByaW1pdGl2ZXMuUG9pbnQ7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVyMiBleHRlbmRzIERpc3BsYXlPYmplY3R7XHJcblxyXG5cdHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yO1xyXG5cdHB1YmxpYyBhY2NlbGVyYXRpb246IFZlY3RvcjtcclxuXHRwdWJsaWMgdG9wc3BlZWQ6IG51bWJlcjtcclxuXHRwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwJztcclxuXHJcblx0aW5pdChkcmF3VG86IElEaXNwbGF5Q29udGV4dCwgZHJhd0Zyb20/OiBJRGlzcGxheUNvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0KGRyYXdUbywgZHJhd0Zyb20pO1xyXG4gICAgfVxyXG5cclxuXHRzZXR1cCgpOiB2b2lke1xyXG5cdFx0dGhpcy53aWR0aCA9IDMwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzA7XHJcblx0XHRcclxuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5yYW5kb21CZXR3ZWVuKHRoaXMuY3R4V2lkdGgpLCBNYXRoLnJhbmRvbUJldHdlZW4odGhpcy5jdHhIZWlnaHQpKTtcclxuICAgIFx0dGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoMSwgMCk7XHJcbiAgICBcdHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFZlY3RvcigtMC4wMDEsIDAuMDEpO1xyXG4gICAgXHR0aGlzLnRvcHNwZWVkID0gMTA7XHJcblx0fVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lke1xyXG5cclxuICAgIFx0dGhpcy52ZWxvY2l0eS5hZGQodGhpcy5hY2NlbGVyYXRpb24pO1xyXG5cdCAgICB0aGlzLnZlbG9jaXR5LmxpbWl0KHRoaXMudG9wc3BlZWQpO1xyXG5cclxuXHQgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24udG9WZWN0b3IoKS5hZGQodGhpcy52ZWxvY2l0eSkudG9Qb2ludCgpO1xyXG5cclxuXHRcdGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmN0eFdpZHRoKSB7XHJcblx0XHRcdHRoaXMucG9zaXRpb24ueCA9IDA7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcclxuXHRcdFx0dGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jdHhXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5wb3NpdGlvbi55ID4gdGhpcy5jdHhIZWlnaHQpIHtcclxuXHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gMDtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55IDwgMCkge1xyXG5cdFx0XHR0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmN0eEhlaWdodDtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCk6IHZvaWR7XHJcblx0ICAgIC8vIG9wdGlvbmFsbHkgc2V0IG9yaWdpbiB0byBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIHRoaXMud2lkdGggKiAuNSwgMCwgTWF0aC5UQVUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
