import Canvas = etch.drawing.Canvas;
import Vector = etch.primitives.Vector;

export class DeltaMover extends DisplayObject {

    public Velocity: Vector;

    Init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void {
        super.Init(drawTo, drawFrom);
    }

    Setup() {
        this.Width = 30;
        this.Height = 30;

        this.Position = new Vector(Math.randomBetween(this.CanvasWidth - this.Width), Math.randomBetween(this.CanvasHeight - this.Height)).ToPoint();
        this.Velocity = new Vector(Math.randomBetween(-0.25, 0.25), Math.randomBetween(-0.25, 0.25));
    }

    Update() {
        super.Update();

        var p: Vector = this.Position.ToVector();

        var deltaVelocity: Vector = new Vector(this.Velocity.x * this.DeltaTime, this.Velocity.y * this.DeltaTime);

        p.Add(deltaVelocity);

        if (p.x > this.CanvasWidth) {
            p.x = 0;
        } else if (p.x < 0) {
            p.x = this.CanvasWidth;
        }

        if (p.y > this.CanvasHeight) {
            p.y = 0;
        } else if (p.y < 0) {
            p.y = this.CanvasHeight;
        }

        this.Position = p.ToPoint();
    }

    Draw() {
        super.Draw();

        // if this is the first frame of the mover, and it has a display cache that hasn't been drawn to yet.
        // draw to the display cache.
        if (this.IsFirstFrame() && this.DrawFrom && !this.DrawFrom.IsCached){
            //console.log("draw to cache");
            this.DrawFrom.Width = this.Width;
            this.DrawFrom.Height = this.Height;
            this.DrawToCtx(this.DrawFrom.Ctx);
            this.DrawFrom.IsCached = true; // no other movers will draw to the cache
        }

        if (this.DrawFrom){
            //console.log("draw from cache");
            this.Ctx.drawImage((<Canvas>this.DrawFrom).HTMLElement, this.Position.x, this.Position.y);
        } else {
            //console.log("draw fresh");
            this.DrawToCtx(this.Ctx);
        }
    }

    DrawToCtx(ctx: CanvasRenderingContext2D) {
        ctx.moveTo(this.Position.x, this.Position.y);
        ctx.fillStyle = "#FF00FF";
        ctx.beginPath();

        if (this.DrawFrom){
            ctx.beginPath();
            ctx.moveTo(this.Width / 2, 0);
            ctx.lineTo(this.Width, this.Height / 2);
            ctx.lineTo(this.Width / 2, this.Height);
            ctx.lineTo(0, this.Height / 2);
            ctx.closePath();
            ctx.fill();

            //ctx.fillRect(0, 0, this.Width, this.Height);

            //ctx.arc(this.Width / 2, this.Height / 2, this.Width / 2, 0, Math.TAU);
        } else {
            ctx.beginPath();
            ctx.moveTo(this.Position.x + this.Width / 2, this.Position.y);
            ctx.lineTo(this.Position.x + this.Width, this.Position.y + this.Height / 2);
            ctx.lineTo(this.Position.x + this.Width / 2, this.Position.y + this.Height);
            ctx.lineTo(this.Position.x, this.Position.y + this.Height / 2);
            ctx.closePath();
            ctx.fill();

            //ctx.fillRect(this.Position.x, this.Position.y, this.Width, this.Height);

            //ctx.arc(this.Position.x, this.Position.y, this.Width / 2, 0, Math.TAU);
        }

        ctx.closePath();
        ctx.fill();
    }
}