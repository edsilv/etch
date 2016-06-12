var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Vector = etch.primitives.Vector;
    var Mover = (function (_super) {
        __extends(Mover, _super);
        function Mover() {
            _super.apply(this, arguments);
        }
        Mover.prototype.Init = function (drawTo, drawFrom) {
            _super.prototype.Init.call(this, drawTo, drawFrom);
        };
        Mover.prototype.Setup = function () {
            this.Width = 30;
            this.Height = 30;
            this.Position = new Vector(Math.randomBetween(this.CanvasWidth), Math.randomBetween(this.CanvasHeight)).ToPoint();
            this.Velocity = new Vector(Math.randomBetween(-10, 10), Math.randomBetween(-10, 10));
        };
        Mover.prototype.Update = function () {
            _super.prototype.Update.call(this);
            var p = this.Position.ToVector();
            p.Add(this.Velocity);
            if (p.x > this.CanvasWidth) {
                p.x = 0;
            }
            else if (p.x < 0) {
                p.x = this.CanvasWidth;
            }
            if (p.y > this.CanvasHeight) {
                p.y = 0;
            }
            else if (p.y < 0) {
                p.y = this.CanvasHeight;
            }
            this.Position = p.ToPoint();
        };
        Mover.prototype.Draw = function () {
            _super.prototype.Draw.call(this);
            // if this is the first frame of the mover, and it has a display cache that hasn't been drawn to yet.
            // draw to the display cache.
            if (this.IsFirstFrame() && this.DrawFrom && !this.DrawFrom.IsCached) {
                //console.log("draw to cache");
                this.DrawFrom.Width = this.Width;
                this.DrawFrom.Height = this.Height;
                this.DrawToCtx(this.DrawFrom.Ctx);
                this.DrawFrom.IsCached = true; // no other movers will draw to the cache
            }
            if (this.DrawFrom) {
                //console.log("draw from cache");
                this.Ctx.drawImage(this.DrawFrom.HTMLElement, this.Position.x, this.Position.y);
            }
            else {
                //console.log("draw fresh");
                this.DrawToCtx(this.Ctx);
            }
        };
        Mover.prototype.DrawToCtx = function (ctx) {
            ctx.moveTo(this.Position.x, this.Position.y);
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            if (this.DrawFrom) {
                ctx.beginPath();
                ctx.moveTo(this.Width / 2, 0);
                ctx.lineTo(this.Width, this.Height / 2);
                ctx.lineTo(this.Width / 2, this.Height);
                ctx.lineTo(0, this.Height / 2);
                ctx.closePath();
                ctx.fill();
            }
            else {
                ctx.beginPath();
                ctx.moveTo(this.Position.x + this.Width / 2, this.Position.y);
                ctx.lineTo(this.Position.x + this.Width, this.Position.y + this.Height / 2);
                ctx.lineTo(this.Position.x + this.Width / 2, this.Position.y + this.Height);
                ctx.lineTo(this.Position.x, this.Position.y + this.Height / 2);
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
