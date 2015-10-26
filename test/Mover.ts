import Canvas = core.drawing.Canvas;

export class Mover extends DisplayObject {

    public Velocity: Vector;

    Init(canvas: IDisplayContext): void {
        super.Init(canvas);
    }

    Setup() {
        this.Width = 30;
        this.Height = 30;

        var width = this.Ctx.canvas.width;
        var height = this.Ctx.canvas.height;

        this.Position = new Vector(Math.randomBetween(width), Math.randomBetween(height));
        this.Velocity = new Vector(Math.randomBetween(-10, 10), Math.randomBetween(-10, 10));
    }

    Update() {
        super.Update();

        this.Position.Add(this.Velocity);

        var width = this.Ctx.canvas.width;
        var height = this.Ctx.canvas.height;

        if (this.Position.x > width) {
            this.Position.x = 0;
        } else if (this.Position.x < 0) {
            this.Position.x = width;
        }

        if (this.Position.y > height) {
            this.Position.y = 0;
        } else if (this.Position.y < 0) {
            this.Position.y = height;
        }
    }

    Draw() {
        super.Draw();

        console.log("draw " + this.FrameCount);

        if (this.IsFirstFrame()){
            console.log("cache");

            this.Cache = new Canvas();
            this.Cache.Width = this.Width;
            this.Cache.Height = this.Height;
            this.Cache.Ctx.fillStyle = "#000000";
            this.Cache.Ctx.beginPath();
            this.Cache.Ctx.arc(this.Width / 2, this.Height / 2, this.Width / 2, 0, Math.TAU);
            this.Cache.Ctx.closePath();
            this.Cache.Ctx.fill();
        }

        this.Ctx.drawImage(this.Cache.HTMLElement, this.Position.x, this.Position.y);
    }
}