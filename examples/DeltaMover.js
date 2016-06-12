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
            this.position = new Vector(Math.randomBetween(this.canvasWidth - this.width), Math.randomBetween(this.canvasHeight - this.height)).toPoint();
            this.velocity = new Vector(Math.randomBetween(-0.25, 0.25), Math.randomBetween(-0.25, 0.25));
        };
        DeltaMover.prototype.update = function () {
            _super.prototype.update.call(this);
            var p = this.position.toVector();
            var deltaVelocity = new Vector(this.velocity.x * this.deltaTime, this.velocity.y * this.deltaTime);
            p.add(deltaVelocity);
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
