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
    var Mover = (function (_super) {
        __extends(Mover, _super);
        function Mover() {
            _super.apply(this, arguments);
            this._color = '#000';
        }
        Mover.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover.prototype.setup = function () {
            this.width = 30;
            this.height = 30;
            this.position = new Point(Math.randomBetween(this.canvasWidth), Math.randomBetween(this.canvasHeight));
            this.velocity = new Vector(Math.randomBetween(-10, 10), Math.randomBetween(-10, 10));
        };
        Mover.prototype.update = function () {
            var p = Vector.add(this.position.toVector(), this.velocity).toPoint();
            if (p.x > this.canvasWidth) {
                p.x = 0;
            }
            else if (p.x < 0) {
                p.x = this.canvasWidth;
            }
            if (p.y > this.canvasHeight) {
                p.y = 0;
            }
            else if (p.y < 0) {
                p.y = this.canvasHeight;
            }
            this.position = p;
        };
        Mover.prototype.draw = function () {
            this.ctx.translate(this.position.x, this.position.y);
            this.ctx.beginPath();
            this.ctx.arc(0, 0, this.width * .5, 0, Math.TAU, false);
            this.ctx.fillStyle = this._color;
            this.ctx.fill();
        };
        return Mover;
    }(DisplayObject));
    exports.Mover = Mover;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL01vdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUV2QztRQUEyQix5QkFBYTtRQUF4QztZQUEyQiw4QkFBYTtZQUc1QixXQUFNLEdBQVcsTUFBTSxDQUFDO1FBdUNwQyxDQUFDO1FBckNBLG9CQUFJLEdBQUosVUFBSyxNQUF1QixFQUFFLFFBQTBCO1lBQ2pELGdCQUFLLENBQUMsSUFBSSxZQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUoscUJBQUssR0FBTDtZQUNPLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWpCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2RyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLENBQUM7UUFFRCxzQkFBTSxHQUFOO1lBQ0ksSUFBSSxDQUFDLEdBQVUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU3RSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNaLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDM0IsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1osQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUM1QixDQUFDO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUVELG9CQUFJLEdBQUo7WUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQTFDQSxBQTBDQyxDQTFDMEIsYUFBYSxHQTBDdkM7SUExQ1ksYUFBSyxRQTBDakIsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvdmVjdG9ycy9Nb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgRGlzcGxheU9iamVjdCA9IGV0Y2guZHJhd2luZy5EaXNwbGF5T2JqZWN0O1xyXG5pbXBvcnQgUG9pbnQgPSBldGNoLnByaW1pdGl2ZXMuUG9pbnQ7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVyIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcblxyXG5cdHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yO1xyXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyA9ICcjMDAwJztcclxuXHJcblx0aW5pdChkcmF3VG86IElEaXNwbGF5Q29udGV4dCwgZHJhd0Zyb20/OiBJRGlzcGxheUNvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0KGRyYXdUbywgZHJhd0Zyb20pO1xyXG4gICAgfVxyXG5cclxuXHRzZXR1cCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gMzA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMDtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLnJhbmRvbUJldHdlZW4odGhpcy5jYW52YXNXaWR0aCksIE1hdGgucmFuZG9tQmV0d2Vlbih0aGlzLmNhbnZhc0hlaWdodCkpO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKE1hdGgucmFuZG9tQmV0d2VlbigtMTAsIDEwKSwgTWF0aC5yYW5kb21CZXR3ZWVuKC0xMCwgMTApKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHA6IFBvaW50ID0gVmVjdG9yLmFkZCh0aGlzLnBvc2l0aW9uLnRvVmVjdG9yKCksIHRoaXMudmVsb2NpdHkpLnRvUG9pbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHAueCA+IHRoaXMuY2FudmFzV2lkdGgpIHtcclxuICAgICAgICAgICAgcC54ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHAueCA8IDApIHtcclxuICAgICAgICAgICAgcC54ID0gdGhpcy5jYW52YXNXaWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwLnkgPiB0aGlzLmNhbnZhc0hlaWdodCkge1xyXG4gICAgICAgICAgICBwLnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocC55IDwgMCkge1xyXG4gICAgICAgICAgICBwLnkgPSB0aGlzLmNhbnZhc0hlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmMoMCwgMCwgdGhpcy53aWR0aCAqIC41LCAwLCBNYXRoLlRBVSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
