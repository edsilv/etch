import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import Vector = etch.primitives.Vector;

export class Mover extends DisplayObject {

    public velocity: Vector;

    init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void {
        super.init(drawTo, drawFrom);
    }

    setup() {
        this.width = 30;
        this.height = 30;

        this.position = new Vector(Math.randomBetween(this.canvasWidth), Math.randomBetween(this.canvasHeight)).toPoint();
        this.velocity = new Vector(Math.randomBetween(-10, 10), Math.randomBetween(-10, 10));
    }

    update() {
        super.update();

        var p: Vector = this.position.toVector();
        p.add(this.velocity);

        if (p.x > this.canvasWidth) {
            p.x = 0;
        } else if (p.x < 0) {
            p.x = this.canvasWidth;
        }

        if (p.y > this.canvasHeight) {
            p.y = 0;
        } else if (p.y < 0) {
            p.y = this.canvasHeight;
        }

        this.position = p.toPoint();
    }

    draw() {
        super.draw();

        // if this is the first frame of the mover, and it has a display cache that hasn't been drawn to yet.
        // draw to the display cache.
        if (this.isFirstFrame() && this.drawFrom && !this.drawFrom.isCached){
            //console.log("draw to cache");
            this.drawFrom.width = this.width;
            this.drawFrom.height = this.height;
            this.drawToCtx(this.drawFrom.ctx);
            this.drawFrom.isCached = true; // no other movers will draw to the cache
        }

        if (this.drawFrom){
            //console.log("draw from cache");
            this.ctx.drawImage((<Canvas>this.drawFrom).htmlElement, this.position.x, this.position.y);
        } else {
            //console.log("draw fresh");
            this.drawToCtx(this.ctx);
        }
    }

    drawToCtx(ctx: CanvasRenderingContext2D) {
        ctx.moveTo(this.position.x, this.position.y);
        ctx.fillStyle = "#000000";
        ctx.beginPath();

        if (this.drawFrom){
            ctx.beginPath();
            ctx.moveTo(this.width / 2, 0);
            ctx.lineTo(this.width, this.height / 2);
            ctx.lineTo(this.width / 2, this.height);
            ctx.lineTo(0, this.height / 2);
            ctx.closePath();
            ctx.fill();

            //ctx.fillRect(0, 0, this.width, this.height);

            //ctx.arc(this.width / 2, this.height / 2, this.width / 2, 0, Math.TAU);
        } else {
            ctx.beginPath();
            ctx.moveTo(this.position.x + this.width / 2, this.position.y);
            ctx.lineTo(this.position.x + this.width, this.position.y + this.height / 2);
            ctx.lineTo(this.position.x + this.width / 2, this.position.y + this.height);
            ctx.lineTo(this.position.x, this.position.y + this.height / 2);
            ctx.closePath();
            ctx.fill();

            //ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

            //ctx.arc(this.position.x, this.position.y, this.width / 2, 0, Math.TAU);
        }

        ctx.closePath();
        ctx.fill();
    }
}