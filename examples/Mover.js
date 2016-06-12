var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var Vector = etch.primitives.Vector;
    var Mover = (function (_super) {
        __extends(Mover, _super);
        function Mover() {
            _super.apply(this, arguments);
        }
        Mover.prototype.init = function (drawTo, drawFrom) {
            _super.prototype.init.call(this, drawTo, drawFrom);
        };
        Mover.prototype.setup = function () {
            this.width = 30;
            this.height = 30;
            this.position = new Vector(Math.randomBetween(this.canvasWidth), Math.randomBetween(this.canvasHeight)).toPoint();
            this.velocity = new Vector(Math.randomBetween(-10, 10), Math.randomBetween(-10, 10));
        };
        Mover.prototype.update = function () {
            _super.prototype.update.call(this);
            var p = this.position.toVector();
            p.add(this.velocity);
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
        Mover.prototype.draw = function () {
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
        Mover.prototype.drawToCtx = function (ctx) {
            ctx.moveTo(this.position.x, this.position.y);
            ctx.fillStyle = "#000000";
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
        return Mover;
    }(DisplayObject));
    exports.Mover = Mover;
});
