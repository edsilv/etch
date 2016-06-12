var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Vector = etch.primitives.Vector;
    var DeltaMover = (function (_super) {
        __extends(DeltaMover, _super);
        function DeltaMover() {
            _super.apply(this, arguments);
        }
        DeltaMover.prototype.Init = function (drawTo, drawFrom) {
            _super.prototype.Init.call(this, drawTo, drawFrom);
        };
        DeltaMover.prototype.Setup = function () {
            this.Width = 30;
            this.Height = 30;
            this.Position = new Vector(Math.randomBetween(this.CanvasWidth - this.Width), Math.randomBetween(this.CanvasHeight - this.Height)).ToPoint();
            this.Velocity = new Vector(Math.randomBetween(-0.25, 0.25), Math.randomBetween(-0.25, 0.25));
        };
        DeltaMover.prototype.Update = function () {
            _super.prototype.Update.call(this);
            var p = this.Position.ToVector();
            var deltaVelocity = new Vector(this.Velocity.x * this.DeltaTime, this.Velocity.y * this.DeltaTime);
            p.Add(deltaVelocity);
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
        DeltaMover.prototype.Draw = function () {
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
        DeltaMover.prototype.DrawToCtx = function (ctx) {
            ctx.moveTo(this.Position.x, this.Position.y);
            ctx.fillStyle = "#FF00FF";
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
        return DeltaMover;
    }(DisplayObject));
    exports.DeltaMover = DeltaMover;
});
