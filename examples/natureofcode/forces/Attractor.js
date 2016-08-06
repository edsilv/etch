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
        function Attractor(mass, x, y, movers) {
            _super.call(this);
            this.color = '#000';
            this.mass = mass;
            this.position = new Point(x, y);
            this.G = 1;
            this.movers = movers;
        }
        Attractor.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Attractor.prototype.attract = function (m) {
            var force = Vector.sub(this.position.toVector(), m.position.toVector());
            var distance = force.mag();
            distance = Math.clamp(distance, 5.0, 25.0);
            force.normalize();
            var strength = (this.G * this.mass) / (distance * distance);
            force.mult(strength);
            return force;
        };
        Attractor.prototype.update = function () {
            for (var i = 0; i < this.movers.length; i++) {
                var mover = this.movers[i];
                var force = this.attract(mover);
                mover.applyForce(force);
            }
        };
        Attractor.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.mass, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Attractor;
    }(DisplayObject));
    exports.Attractor = Attractor;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvQXR0cmFjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUd2QztRQUErQiw2QkFBYTtRQU8zQyxtQkFBWSxJQUFZLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxNQUFnQjtZQUMvRCxpQkFBTyxDQUFDO1lBTEYsVUFBSyxHQUFXLE1BQU0sQ0FBQztZQU03QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzVCLENBQUM7UUFFRCx3QkFBSSxHQUFKLFVBQUssTUFBdUIsRUFBRSxRQUEwQjtZQUNqRCxnQkFBSyxDQUFDLElBQUksWUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVKLDJCQUFPLEdBQVAsVUFBUSxDQUFTO1lBQ1YsSUFBSSxLQUFLLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN0RixJQUFJLFFBQVEsR0FBVyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUM1RCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDWCxDQUFDO1FBRUQsMEJBQU0sR0FBTjtZQUNJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQztRQUVELHdCQUFJLEdBQUo7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVMLGdCQUFDO0lBQUQsQ0E1Q0EsQUE0Q0MsQ0E1QzhCLGFBQWEsR0E0QzNDO0lBNUNZLGlCQUFTLFlBNENyQixDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS9mb3JjZXMvQXR0cmFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBEaXNwbGF5T2JqZWN0ID0gZXRjaC5kcmF3aW5nLkRpc3BsYXlPYmplY3Q7XHJcbmltcG9ydCBQb2ludCA9IGV0Y2gucHJpbWl0aXZlcy5Qb2ludDtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcbmltcG9ydCB7TW92ZXI1fSBmcm9tICcuL01vdmVyNSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXR0cmFjdG9yIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcblxyXG5cdHB1YmxpYyBtYXNzOiBudW1iZXI7XHJcblx0cHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMCc7XHJcbiAgICBwdWJsaWMgRzogbnVtYmVyO1xyXG4gICAgcHVibGljIG1vdmVyczogTW92ZXI1W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKG1hc3M6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG1vdmVyczogTW92ZXI1W10pe1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMubWFzcyA9IG1hc3M7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KHgsIHkpO1xyXG4gICAgICAgIHRoaXMuRyA9IDE7XHJcbiAgICAgICAgdGhpcy5tb3ZlcnMgPSBtb3ZlcnM7XHJcblx0fVxyXG5cclxuXHRpbml0KGRyYXdUbzogSURpc3BsYXlDb250ZXh0LCBkcmF3RnJvbT86IElEaXNwbGF5Q29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXQoZHJhd1RvLCBkcmF3RnJvbSk7XHJcbiAgICB9XHJcblxyXG5cdGF0dHJhY3QobTogTW92ZXI1KTogVmVjdG9yIHtcclxuICAgICAgICB2YXIgZm9yY2U6IFZlY3RvciA9IFZlY3Rvci5zdWIodGhpcy5wb3NpdGlvbi50b1ZlY3RvcigpLCBtLnBvc2l0aW9uLnRvVmVjdG9yKCkpO1xyXG5cdFx0dmFyIGRpc3RhbmNlOiBudW1iZXIgPSBmb3JjZS5tYWcoKTtcclxuXHRcdGRpc3RhbmNlID0gTWF0aC5jbGFtcChkaXN0YW5jZSwgNS4wLCAyNS4wKTtcclxuXHRcdGZvcmNlLm5vcm1hbGl6ZSgpO1xyXG5cdFx0dmFyIHN0cmVuZ3RoID0gKHRoaXMuRyAqIHRoaXMubWFzcykgLyAoZGlzdGFuY2UgKiBkaXN0YW5jZSk7XHJcblx0XHRmb3JjZS5tdWx0KHN0cmVuZ3RoKTtcclxuXHRcdHJldHVybiBmb3JjZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW92ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBtb3ZlcjogTW92ZXI1ID0gdGhpcy5tb3ZlcnNbaV07XHJcbiAgICAgICAgICAgIHZhciBmb3JjZSA9IHRoaXMuYXR0cmFjdChtb3Zlcik7XHJcbiAgICAgICAgICAgIG1vdmVyLmFwcGx5Rm9yY2UoZm9yY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLm1hc3MsIDAsIE1hdGguVEFVLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
