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
        function Mover5(mass, x, y) {
            _super.call(this);
            this.color = '#000';
            this.mass = mass;
            this.position = new Point(x, y);
            this.velocity = new Vector(0, 0);
            this.acceleration = new Vector(0, 0);
        }
        Mover5.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover5.prototype.applyForce = function (force) {
            this.acceleration.add(Vector.divN(force, this.mass));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTW92ZXI1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUV2QztRQUE0QiwwQkFBYTtRQU94QyxnQkFBWSxJQUFZLEVBQUUsQ0FBUyxFQUFFLENBQVM7WUFDN0MsaUJBQU8sQ0FBQztZQUhGLFVBQUssR0FBVyxNQUFNLENBQUM7WUFJN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVELHFCQUFJLEdBQUosVUFBSyxNQUF1QixFQUFFLFFBQTBCO1lBQ2pELGdCQUFLLENBQUMsSUFBSSxZQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUosMkJBQVUsR0FBVixVQUFXLEtBQWE7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVFLHVCQUFNLEdBQU47WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVELHFCQUFJLEdBQUo7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFTCxhQUFDO0lBQUQsQ0FwQ0EsQUFvQ0MsQ0FwQzJCLGFBQWEsR0FvQ3hDO0lBcENZLGNBQU0sU0FvQ2xCLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL2ZvcmNlcy9Nb3ZlcjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuaW1wb3J0IFBvaW50ID0gZXRjaC5wcmltaXRpdmVzLlBvaW50O1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlcjUgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuXHJcblx0cHVibGljIHZlbG9jaXR5OiBWZWN0b3I7XHJcblx0cHVibGljIGFjY2VsZXJhdGlvbjogVmVjdG9yO1xyXG5cdHB1YmxpYyBtYXNzOiBudW1iZXI7XHJcblx0cHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMCc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG1hc3M6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMubWFzcyA9IG1hc3M7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KHgsIHkpO1xyXG4gICAgXHR0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcigwLCAwKTtcclxuICAgIFx0dGhpcy5hY2NlbGVyYXRpb24gPSBuZXcgVmVjdG9yKDAsIDApO1xyXG5cdH1cclxuXHJcblx0aW5pdChkcmF3VG86IElEaXNwbGF5Q29udGV4dCwgZHJhd0Zyb20/OiBJRGlzcGxheUNvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0KGRyYXdUbywgZHJhd0Zyb20pO1xyXG4gICAgfVxyXG5cclxuXHRhcHBseUZvcmNlKGZvcmNlOiBWZWN0b3IpOiB2b2lkIHtcclxuICAgIFx0dGhpcy5hY2NlbGVyYXRpb24uYWRkKFZlY3Rvci5kaXZOKGZvcmNlLCB0aGlzLm1hc3MpKTtcclxuXHR9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWR7XHRcdFxyXG5cdFx0dGhpcy52ZWxvY2l0eS5hZGQodGhpcy5hY2NlbGVyYXRpb24pO1xyXG5cdCAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi50b1ZlY3RvcigpLmFkZCh0aGlzLnZlbG9jaXR5KS50b1BvaW50KCk7XHJcblx0ICAgIHRoaXMuYWNjZWxlcmF0aW9uLm11bHQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5tYXNzICogMjAsIDAsIE1hdGguVEFVLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
