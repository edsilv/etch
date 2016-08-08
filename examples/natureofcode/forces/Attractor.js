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
    var Attractor = (function (_super) {
        __extends(Attractor, _super);
        function Attractor(mass, g, friction, sticky, x, y, movers) {
            _super.call(this);
            this.color = '#eff2f6';
            this.mass = mass;
            this.position = new Point(x, y);
            this.G = g;
            this.friction = friction;
            this.movers = movers;
            this.sticky = sticky;
            this.radius = Math.min(this.mass, 30);
            this.stickinessRadius = this.radius / 2;
        }
        Attractor.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Attractor.prototype.applyGravity = function (m) {
            var force = Vector.sub(this.position.toVector(), m.position.toVector());
            var distance = force.mag();
            distance = Math.clamp(distance, 5.0, 25.0);
            force.normalize();
            var strength = (this.G * this.mass) / (distance * distance);
            force.mult(strength);
            m.applyForce(force);
        };
        Attractor.prototype.applyFriction = function (m) {
            var force = m.velocity.clone();
            force.mult(-1).normalize().mult(this.friction);
            m.applyForce(force);
        };
        Attractor.prototype.applyStickiness = function (m) {
            var delta = Vector.sub(this.position.toVector(), m.position.toVector());
            var distance = delta.mag();
            if (distance < this.stickinessRadius) {
                m.killVelocity();
                m.position.x = this.position.x;
                m.position.y = this.position.y;
            }
        };
        Attractor.prototype.update = function () {
            for (var i = 0; i < this.movers.length; i++) {
                var mover = this.movers[i];
                this.applyGravity(mover);
                this.applyFriction(mover);
                this.applyStickiness(mover);
            }
        };
        Attractor.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Attractor;
    }(DisplayObject));
    exports.Attractor = Attractor;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvQXR0cmFjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUd2QztRQUErQiw2QkFBYTtRQVczQyxtQkFBWSxJQUFZLEVBQUUsQ0FBUyxFQUFFLFFBQWdCLEVBQUUsTUFBZSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBZTtZQUM1RyxpQkFBTyxDQUFDO1lBVEYsVUFBSyxHQUFXLFNBQVMsQ0FBQztZQVVoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBRUQsd0JBQUksR0FBSixVQUFLLE1BQXVCLEVBQUUsUUFBMEI7WUFDakQsZ0JBQUssQ0FBQyxJQUFJLFlBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFSixnQ0FBWSxHQUFaLFVBQWEsQ0FB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QXNFQyxDQXRFOEIsYUFBYSxHQXNFM0M7SUF0RVksaUJBQVMsWUFzRXJCLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL2ZvcmNlcy9BdHRyYWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuaW1wb3J0IFBvaW50ID0gZXRjaC5wcmltaXRpdmVzLlBvaW50O1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuaW1wb3J0IHtNb3ZlcjUgYXMgTW92ZXJ9IGZyb20gJy4vTW92ZXI1JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBdHRyYWN0b3IgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuXHJcblx0cHVibGljIG1hc3M6IG51bWJlcjtcclxuXHRwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjZWZmMmY2JztcclxuICAgIHB1YmxpYyBHOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZnJpY3Rpb246IG51bWJlcjtcclxuICAgIHB1YmxpYyBtb3ZlcnM6IE1vdmVyW107XHJcbiAgICBwdWJsaWMgc3RpY2t5OiBib29sZWFuO1xyXG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyO1xyXG4gICAgcHVibGljIHN0aWNraW5lc3NSYWRpdXM6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IobWFzczogbnVtYmVyLCBnOiBudW1iZXIsIGZyaWN0aW9uOiBudW1iZXIsIHN0aWNreTogYm9vbGVhbiwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG1vdmVyczogTW92ZXJbXSl7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5tYXNzID0gbWFzcztcclxuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5HID0gZztcclxuICAgICAgICB0aGlzLmZyaWN0aW9uID0gZnJpY3Rpb247XHJcbiAgICAgICAgdGhpcy5tb3ZlcnMgPSBtb3ZlcnM7XHJcbiAgICAgICAgdGhpcy5zdGlja3kgPSBzdGlja3k7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBNYXRoLm1pbih0aGlzLm1hc3MsIDMwKTtcclxuICAgICAgICB0aGlzLnN0aWNraW5lc3NSYWRpdXMgPSB0aGlzLnJhZGl1cyAvIDI7XHJcblx0fVxyXG5cclxuXHRpbml0KGRyYXdUbzogSURpc3BsYXlDb250ZXh0LCBkcmF3RnJvbT86IElEaXNwbGF5Q29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZHJhd1RvLCBkcmF3RnJvbSk7XHJcbiAgICB9XHJcblxyXG5cdGFwcGx5R3Jhdml0eShtOiBNb3Zlcik6IHZvaWQge1xyXG4gICAgICAgIHZhciBmb3JjZTogVmVjdG9yID0gVmVjdG9yLnN1Yih0aGlzLnBvc2l0aW9uLnRvVmVjdG9yKCksIG0ucG9zaXRpb24udG9WZWN0b3IoKSk7XHJcblx0XHR2YXIgZGlzdGFuY2U6IG51bWJlciA9IGZvcmNlLm1hZygpO1xyXG5cdFx0ZGlzdGFuY2UgPSBNYXRoLmNsYW1wKGRpc3RhbmNlLCA1LjAsIDI1LjApO1xyXG5cdFx0Zm9yY2Uubm9ybWFsaXplKCk7XHJcblx0XHR2YXIgc3RyZW5ndGg6IG51bWJlciA9ICh0aGlzLkcgKiB0aGlzLm1hc3MpIC8gKGRpc3RhbmNlICogZGlzdGFuY2UpO1xyXG5cdFx0Zm9yY2UubXVsdChzdHJlbmd0aCk7XHJcblx0XHRtLmFwcGx5Rm9yY2UoZm9yY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RnJpY3Rpb24obTogTW92ZXIpOiB2b2lkIHtcclxuICAgICAgICB2YXIgZm9yY2U6IFZlY3RvciA9IG0udmVsb2NpdHkuY2xvbmUoKTtcclxuICAgICAgICBmb3JjZS5tdWx0KC0xKS5ub3JtYWxpemUoKS5tdWx0KHRoaXMuZnJpY3Rpb24pO1xyXG4gICAgICAgIG0uYXBwbHlGb3JjZShmb3JjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlTdGlja2luZXNzKG06IE1vdmVyKTogdm9pZCB7ICAgICAgICBcclxuICAgICAgICB2YXIgZGVsdGE6IFZlY3RvciA9IFZlY3Rvci5zdWIodGhpcy5wb3NpdGlvbi50b1ZlY3RvcigpLCBtLnBvc2l0aW9uLnRvVmVjdG9yKCkpO1xyXG4gICAgICAgIHZhciBkaXN0YW5jZTogbnVtYmVyID0gZGVsdGEubWFnKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgdGhpcy5zdGlja2luZXNzUmFkaXVzKXtcclxuICAgICAgICAgICAgbS5raWxsVmVsb2NpdHkoKTtcclxuICAgICAgICAgICAgbS5wb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgICAgICBtLnBvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lke1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb3ZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG1vdmVyOiBNb3ZlciA9IHRoaXMubW92ZXJzW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5R3Jhdml0eShtb3Zlcik7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlGcmljdGlvbihtb3Zlcik7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlTdGlja2luZXNzKG1vdmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguVEFVLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
