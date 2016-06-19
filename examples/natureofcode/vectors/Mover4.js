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
    var Mover4 = (function (_super) {
        __extends(Mover4, _super);
        function Mover4() {
            _super.apply(this, arguments);
            this.color = '#000';
        }
        Mover4.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover4.prototype.setup = function () {
            this.width = 30;
            this.height = 30;
            this.position = new Point(Math.randomBetween(this.ctxWidth), Math.randomBetween(this.ctxHeight));
            this.velocity = new Vector(1, 0);
            this.topspeed = 10;
        };
        Mover4.prototype.update = function () {
            var mouse = stage.mousePos.clone();
            this.acceleration = mouse.toVector().sub(this.position.toVector()).normalize().mult(0.5);
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
        Mover4.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.position.x, this.position.y, this.width * .5, 0, Math.TAU, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Mover4;
    }(DisplayObject));
    exports.Mover4 = Mover4;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL01vdmVyNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDbEQsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDckMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFFdkM7UUFBNEIsMEJBQWE7UUFBekM7WUFBNEIsOEJBQWE7WUFLakMsVUFBSyxHQUFXLE1BQU0sQ0FBQztRQTRDL0IsQ0FBQztRQTFDQSxxQkFBSSxHQUFKLFVBQUssTUFBdUIsRUFBRSxRQUEwQjtZQUNqRCxnQkFBSyxDQUFDLElBQUksWUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVKLHNCQUFLLEdBQUw7WUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5RixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBRUUsdUJBQU0sR0FBTjtZQUNDLElBQUksS0FBSyxHQUFVLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV6RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEMsQ0FBQztRQUNDLENBQUM7UUFFRCxxQkFBSSxHQUFKO1lBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNwRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVMLGFBQUM7SUFBRCxDQWpEQSxBQWlEQyxDQWpEMkIsYUFBYSxHQWlEeEM7SUFqRFksY0FBTSxTQWlEbEIsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvdmVjdG9ycy9Nb3ZlcjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuaW1wb3J0IFBvaW50ID0gZXRjaC5wcmltaXRpdmVzLlBvaW50O1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlcjQgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0e1xyXG5cclxuXHRwdWJsaWMgdmVsb2NpdHk6IFZlY3RvcjtcclxuXHRwdWJsaWMgYWNjZWxlcmF0aW9uOiBWZWN0b3I7XHJcblx0cHVibGljIHRvcHNwZWVkOiBudW1iZXI7XHJcblx0cHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMCc7XHJcblxyXG5cdGluaXQoZHJhd1RvOiBJRGlzcGxheUNvbnRleHQsIGRyYXdGcm9tPzogSURpc3BsYXlDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChkcmF3VG8sIGRyYXdGcm9tKTtcclxuICAgIH1cclxuXHJcblx0c2V0dXAoKTogdm9pZHtcclxuXHRcdHRoaXMud2lkdGggPSAzMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDMwO1xyXG5cclxuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5yYW5kb21CZXR3ZWVuKHRoaXMuY3R4V2lkdGgpLCBNYXRoLnJhbmRvbUJldHdlZW4odGhpcy5jdHhIZWlnaHQpKTtcclxuICAgIFx0dGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoMSwgMCk7XHJcbiAgICBcdHRoaXMudG9wc3BlZWQgPSAxMDtcclxuXHR9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWR7XHJcbiAgICBcdHZhciBtb3VzZTogUG9pbnQgPSBzdGFnZS5tb3VzZVBvcy5jbG9uZSgpO1xyXG5cdFx0dGhpcy5hY2NlbGVyYXRpb24gPSBtb3VzZS50b1ZlY3RvcigpLnN1Yih0aGlzLnBvc2l0aW9uLnRvVmVjdG9yKCkpLm5vcm1hbGl6ZSgpLm11bHQoMC41KTtcclxuXHJcbiAgICBcdHRoaXMudmVsb2NpdHkuYWRkKHRoaXMuYWNjZWxlcmF0aW9uKTtcclxuXHQgICAgdGhpcy52ZWxvY2l0eS5saW1pdCh0aGlzLnRvcHNwZWVkKTtcclxuXHJcblx0ICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnRvVmVjdG9yKCkuYWRkKHRoaXMudmVsb2NpdHkpLnRvUG9pbnQoKTtcclxuXHJcblx0XHRpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5jdHhXaWR0aCkge1xyXG5cdFx0XHR0aGlzLnBvc2l0aW9uLnggPSAwO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XHJcblx0XHRcdHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY3R4V2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMuY3R4SGVpZ2h0KSB7XHJcblx0XHRcdHRoaXMucG9zaXRpb24ueSA9IDA7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA8IDApIHtcclxuXHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gdGhpcy5jdHhIZWlnaHQ7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCAqIC41LCAwLCBNYXRoLlRBVSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
