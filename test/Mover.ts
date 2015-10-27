import Canvas = core.drawing.Canvas;

export class Mover extends DisplayObject {

    public Velocity: Vector;

    Init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void {
        super.Init(drawTo, drawFrom);
    }

    Setup() {
        this.Width = 30;
        this.Height = 30;

        this.Position = new Vector(Math.randomBetween(this.CanvasWidth), Math.randomBetween(this.CanvasHeight));
        this.Velocity = new Vector(Math.randomBetween(-10, 10), Math.randomBetween(-10, 10));
    }

    Update() {
        super.Update();

        this.Position.Add(this.Velocity);

        if (this.Position.x > this.CanvasWidth) {
            this.Position.x = 0;
        } else if (this.Position.x < 0) {
            this.Position.x = this.CanvasWidth;
        }

        if (this.Position.y > this.CanvasHeight) {
            this.Position.y = 0;
        } else if (this.Position.y < 0) {
            this.Position.y = this.CanvasHeight;
        }
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
        ctx.fillStyle = "#000000";
        ctx.beginPath();

        if (this.DrawFrom){
            ctx.beginPath();
            ctx.moveTo(16,0);
            ctx.lineTo(32,16);
            ctx.lineTo(16,32);
            ctx.lineTo(0,16);
            ctx.closePath();
            ctx.fill();

            //ctx.fillRect(0, 0, this.Width, this.Height);

            //ctx.arc(this.Width / 2, this.Height / 2, this.Width / 2, 0, Math.TAU);
        } else {
            ctx.beginPath();
            ctx.moveTo(this.Position.x + 16, this.Position.y);
            ctx.lineTo(this.Position.x + 32, this.Position.y + 16);
            ctx.lineTo(this.Position.x + 16, this.Position.y + 32);
            ctx.lineTo(this.Position.x, this.Position.y + 16);
            ctx.closePath();
            ctx.fill();

            //ctx.fillRect(this.Position.x, this.Position.y, this.Width, this.Height);

            //ctx.arc(this.Position.x, this.Position.y, this.Width / 2, 0, Math.TAU);
        }

        ctx.closePath();
        ctx.fill();
    }
}