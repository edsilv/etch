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
            this.color = '#E2E2E2';
            this.mass = mass;
            this.position = new Point(x, y);
            this.G = g;
            this.friction = friction;
            this.movers = movers;
            this.sticky = sticky;
            this.radius = Math.min(this.mass, 30);
            this.stickinessRadius = this.radius;
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
                //var force: Vector = m.velocity.clone();
                //force.mult(-1);
                //m.applyForce(force);
                m.velocity = new Vector(0, 0);
                m.acceleration = new Vector(0, 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvQXR0cmFjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUd2QztRQUErQiw2QkFBYTtRQVczQyxtQkFBWSxJQUFZLEVBQUUsQ0FBUyxFQUFFLFFBQWdCLEVBQUUsTUFBZSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBZTtZQUM1RyxpQkFBTyxDQUFDO1lBVEYsVUFBSyxHQUFXLFNBQVMsQ0FBQztZQVVoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNDLENBQUM7UUFFRCx3QkFBSSxHQUFKLFVBQUssTUFBdUIsRUFBRSxRQUEwQjtZQUNqRCxnQkFBSyxDQUFDLElBQUksWUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVKLGdDQUFZLEdBQVosVUFBYSxDQUFRO1lBQ2QsSUFB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QUM7WUFDaEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFTCxnQkFBQztJQUFELENBMUVBLEFBMEVDLENBMUU4QixhQUFhLEdBMEUzQztJQTFFWSxpQkFBUyxZQTBFckIsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvZm9yY2VzL0F0dHJhY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgRGlzcGxheU9iamVjdCA9IGV0Y2guZHJhd2luZy5EaXNwbGF5T2JqZWN0O1xyXG5pbXBvcnQgUG9pbnQgPSBldGNoLnByaW1pdGl2ZXMuUG9pbnQ7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5pbXBvcnQge01vdmVyNSBhcyBNb3Zlcn0gZnJvbSAnLi9Nb3ZlcjUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF0dHJhY3RvciBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG5cclxuXHRwdWJsaWMgbWFzczogbnVtYmVyO1xyXG5cdHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyNFMkUyRTInO1xyXG4gICAgcHVibGljIEc6IG51bWJlcjtcclxuICAgIHB1YmxpYyBmcmljdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIG1vdmVyczogTW92ZXJbXTtcclxuICAgIHB1YmxpYyBzdGlja3k6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3RpY2tpbmVzc1JhZGl1czogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihtYXNzOiBudW1iZXIsIGc6IG51bWJlciwgZnJpY3Rpb246IG51bWJlciwgc3RpY2t5OiBib29sZWFuLCB4OiBudW1iZXIsIHk6IG51bWJlciwgbW92ZXJzOiBNb3ZlcltdKXtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLm1hc3MgPSBtYXNzO1xyXG5cdFx0dGhpcy5wb3NpdGlvbiA9IG5ldyBQb2ludCh4LCB5KTtcclxuICAgICAgICB0aGlzLkcgPSBnO1xyXG4gICAgICAgIHRoaXMuZnJpY3Rpb24gPSBmcmljdGlvbjtcclxuICAgICAgICB0aGlzLm1vdmVycyA9IG1vdmVycztcclxuICAgICAgICB0aGlzLnN0aWNreSA9IHN0aWNreTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IE1hdGgubWluKHRoaXMubWFzcywgMzApO1xyXG4gICAgICAgIHRoaXMuc3RpY2tpbmVzc1JhZGl1cyA9IHRoaXMucmFkaXVzO1xyXG5cdH1cclxuXHJcblx0aW5pdChkcmF3VG86IElEaXNwbGF5Q29udGV4dCwgZHJhd0Zyb20/OiBJRGlzcGxheUNvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0KGRyYXdUbywgZHJhd0Zyb20pO1xyXG4gICAgfVxyXG5cclxuXHRhcHBseUdyYXZpdHkobTogTW92ZXIpOiB2b2lkIHtcclxuICAgICAgICB2YXIgZm9yY2U6IFZlY3RvciA9IFZlY3Rvci5zdWIodGhpcy5wb3NpdGlvbi50b1ZlY3RvcigpLCBtLnBvc2l0aW9uLnRvVmVjdG9yKCkpO1xyXG5cdFx0dmFyIGRpc3RhbmNlOiBudW1iZXIgPSBmb3JjZS5tYWcoKTtcclxuXHRcdGRpc3RhbmNlID0gTWF0aC5jbGFtcChkaXN0YW5jZSwgNS4wLCAyNS4wKTtcclxuXHRcdGZvcmNlLm5vcm1hbGl6ZSgpO1xyXG5cdFx0dmFyIHN0cmVuZ3RoOiBudW1iZXIgPSAodGhpcy5HICogdGhpcy5tYXNzKSAvIChkaXN0YW5jZSAqIGRpc3RhbmNlKTtcclxuXHRcdGZvcmNlLm11bHQoc3RyZW5ndGgpO1xyXG5cdFx0bS5hcHBseUZvcmNlKGZvcmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZyaWN0aW9uKG06IE1vdmVyKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGZvcmNlOiBWZWN0b3IgPSBtLnZlbG9jaXR5LmNsb25lKCk7XHJcbiAgICAgICAgZm9yY2UubXVsdCgtMSkubm9ybWFsaXplKCkubXVsdCh0aGlzLmZyaWN0aW9uKTtcclxuICAgICAgICBtLmFwcGx5Rm9yY2UoZm9yY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5U3RpY2tpbmVzcyhtOiBNb3Zlcik6IHZvaWQgeyAgICAgICAgXHJcbiAgICAgICAgdmFyIGRlbHRhOiBWZWN0b3IgPSBWZWN0b3Iuc3ViKHRoaXMucG9zaXRpb24udG9WZWN0b3IoKSwgbS5wb3NpdGlvbi50b1ZlY3RvcigpKTtcclxuICAgICAgICB2YXIgZGlzdGFuY2U6IG51bWJlciA9IGRlbHRhLm1hZygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMuc3RpY2tpbmVzc1JhZGl1cyl7XHJcbiAgICAgICAgICAgIC8vdmFyIGZvcmNlOiBWZWN0b3IgPSBtLnZlbG9jaXR5LmNsb25lKCk7XHJcbiAgICAgICAgICAgIC8vZm9yY2UubXVsdCgtMSk7XHJcbiAgICAgICAgICAgIC8vbS5hcHBseUZvcmNlKGZvcmNlKTtcclxuICAgICAgICAgICAgbS52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoMCwgMCk7XHJcbiAgICAgICAgICAgIG0uYWNjZWxlcmF0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcclxuICAgICAgICAgICAgbS5wb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgICAgICBtLnBvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lke1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb3ZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG1vdmVyOiBNb3ZlciA9IHRoaXMubW92ZXJzW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5R3Jhdml0eShtb3Zlcik7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlGcmljdGlvbihtb3Zlcik7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlTdGlja2luZXNzKG1vdmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguVEFVLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
