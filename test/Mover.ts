import Canvas = core.drawing.Canvas;

export class Mover extends DisplayObject {

    public Velocity: Vector;

    Init(canvas: IDisplayContext): void {
        super.Init(canvas);
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

        if (this.IsFirstFrame() && this.IsCached){
            this.Cache = new Canvas();
            this.Cache.Width = this.Width;
            this.Cache.Height = this.Height;
            this.DrawTo(this.Cache.Ctx);
        }

        if (this.IsCached){
            console.log("draw from cache");
            this.Ctx.drawImage(this.Cache.HTMLElement, this.Position.x, this.Position.y);
        } else {
            console.log("draw fresh");
            this.DrawTo(this.Ctx);
        }
    }

    DrawTo(ctx: CanvasRenderingContext2D) {
        ctx.moveTo(this.Position.x, this.Position.y);
        ctx.fillStyle = "#000000";
        ctx.beginPath();

        if (this.IsCached){
            ctx.arc(this.Width / 2, this.Height / 2, this.Width / 2, 0, Math.TAU);
        } else {
            ctx.arc(this.Position.x, this.Position.y, this.Width / 2, 0, Math.TAU);
        }

        ctx.closePath();
        ctx.fill();
    }
}