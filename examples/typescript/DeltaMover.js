var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var Vector = etch.primitives.Vector;
    var DeltaMover = (function (_super) {
        __extends(DeltaMover, _super);
        function DeltaMover() {
            _super.apply(this, arguments);
        }
        DeltaMover.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        DeltaMover.prototype.setup = function () {
            this.width = 30;
            this.height = 30;
            this.position = new Vector(Math.randomBetween(this.ctxWidth - this.width), Math.randomBetween(this.ctxHeight - this.height)).toPoint();
            this.velocity = new Vector(Math.randomBetween(-0.25, 0.25), Math.randomBetween(-0.25, 0.25));
        };
        DeltaMover.prototype.update = function () {
            _super.prototype.update.call(this);
            var p = this.position.toVector();
            var deltaVelocity = new Vector(this.velocity.x * this.deltaTime, this.velocity.y * this.deltaTime);
            p.add(deltaVelocity);
            if (p.x > this.ctxWidth) {
                p.x = 0;
            }
            else if (p.x < 0) {
                p.x = this.ctxWidth;
            }
            if (p.y > this.ctxHeight) {
                p.y = 0;
            }
            else if (p.y < 0) {
                p.y = this.ctxHeight;
            }
            this.position = p.toPoint();
        };
        DeltaMover.prototype.draw = function () {
            _super.prototype.draw.call(this);
            // if this is the first frame of the mover, and it has a display cache that hasn't been drawn to yet.
            // draw to the display cache.
            if (this.isFirstFrame() && this.drawFrom && !this.drawFrom.isCached) {
                //console.log("draw to cache");
                this.drawFrom.width = this.width;
                this.drawFrom.height = this.height;
                this.drawToCtx(this.drawFrom.ctx);
                this.drawFrom.isCached = true; // no other movers will draw to the cache
            }
            if (this.drawFrom) {
                //console.log("draw from cache");
                this.ctx.drawImage(this.drawFrom.htmlElement, this.position.x, this.position.y);
            }
            else {
                //console.log("draw fresh");
                this.drawToCtx(this.ctx);
            }
        };
        DeltaMover.prototype.drawToCtx = function (ctx) {
            ctx.moveTo(this.position.x, this.position.y);
            ctx.fillStyle = "#FF00FF";
            ctx.beginPath();
            if (this.drawFrom) {
                ctx.beginPath();
                ctx.moveTo(this.width / 2, 0);
                ctx.lineTo(this.width, this.height / 2);
                ctx.lineTo(this.width / 2, this.height);
                ctx.lineTo(0, this.height / 2);
                ctx.closePath();
                ctx.fill();
            }
            else {
                ctx.beginPath();
                ctx.moveTo(this.position.x + this.width / 2, this.position.y);
                ctx.lineTo(this.position.x + this.width, this.position.y + this.height / 2);
                ctx.lineTo(this.position.x + this.width / 2, this.position.y + this.height);
                ctx.lineTo(this.position.x, this.position.y + this.height / 2);
                ctx.closePath();
                ctx.fill();
            }
            ctx.closePath();
            ctx.fill();
        };
        return DeltaMover;
    }(DisplayObject));
    exports.DeltaMover = DeltaMover;
});

//# sourceMappingURL=data:application/json;base64,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QUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFLZixDQUFDO1lBRUQsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFDTCxpQkFBQztJQUFELENBaEdBLEFBZ0dDLENBaEcrQixhQUFhLEdBZ0c1QztJQWhHWSxrQkFBVSxhQWdHdEIsQ0FBQSIsImZpbGUiOiJ0eXBlc2NyaXB0L0RlbHRhTW92ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVsdGFNb3ZlciBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG5cclxuICAgIHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yO1xyXG5cclxuICAgIGluaXQoZHJhd1RvOiBJRGlzcGxheUNvbnRleHQsIGRyYXdGcm9tPzogSURpc3BsYXlDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChkcmF3VG8sIGRyYXdGcm9tKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cCgpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gMzA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMDtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IoTWF0aC5yYW5kb21CZXR3ZWVuKHRoaXMuY3R4V2lkdGggLSB0aGlzLndpZHRoKSwgTWF0aC5yYW5kb21CZXR3ZWVuKHRoaXMuY3R4SGVpZ2h0IC0gdGhpcy5oZWlnaHQpKS50b1BvaW50KCk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoTWF0aC5yYW5kb21CZXR3ZWVuKC0wLjI1LCAwLjI1KSwgTWF0aC5yYW5kb21CZXR3ZWVuKC0wLjI1LCAwLjI1KSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB2YXIgcDogVmVjdG9yID0gdGhpcy5wb3NpdGlvbi50b1ZlY3RvcigpO1xyXG5cclxuICAgICAgICB2YXIgZGVsdGFWZWxvY2l0eTogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLnZlbG9jaXR5LnggKiB0aGlzLmRlbHRhVGltZSwgdGhpcy52ZWxvY2l0eS55ICogdGhpcy5kZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICBwLmFkZChkZWx0YVZlbG9jaXR5KTtcclxuXHJcbiAgICAgICAgaWYgKHAueCA+IHRoaXMuY3R4V2lkdGgpIHtcclxuICAgICAgICAgICAgcC54ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHAueCA8IDApIHtcclxuICAgICAgICAgICAgcC54ID0gdGhpcy5jdHhXaWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwLnkgPiB0aGlzLmN0eEhlaWdodCkge1xyXG4gICAgICAgICAgICBwLnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocC55IDwgMCkge1xyXG4gICAgICAgICAgICBwLnkgPSB0aGlzLmN0eEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwLnRvUG9pbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIG1vdmVyLCBhbmQgaXQgaGFzIGEgZGlzcGxheSBjYWNoZSB0aGF0IGhhc24ndCBiZWVuIGRyYXduIHRvIHlldC5cclxuICAgICAgICAvLyBkcmF3IHRvIHRoZSBkaXNwbGF5IGNhY2hlLlxyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RGcmFtZSgpICYmIHRoaXMuZHJhd0Zyb20gJiYgIXRoaXMuZHJhd0Zyb20uaXNDYWNoZWQpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZHJhdyB0byBjYWNoZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3RnJvbS53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0Zyb20uaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1RvQ3R4KHRoaXMuZHJhd0Zyb20uY3R4KTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3RnJvbS5pc0NhY2hlZCA9IHRydWU7IC8vIG5vIG90aGVyIG1vdmVycyB3aWxsIGRyYXcgdG8gdGhlIGNhY2hlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kcmF3RnJvbSl7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkcmF3IGZyb20gY2FjaGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSgoPENhbnZhcz50aGlzLmRyYXdGcm9tKS5odG1sRWxlbWVudCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkcmF3IGZyZXNoXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdUb0N0eCh0aGlzLmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdUb0N0eChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwRkZcIjtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyYXdGcm9tKXtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMud2lkdGggLyAyLCAwKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMCwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgLy9jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy9jdHguYXJjKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggLyAyLCAwLCBNYXRoLlRBVSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgIC8vY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvL2N0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGggLyAyLCAwLCBNYXRoLlRBVSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
