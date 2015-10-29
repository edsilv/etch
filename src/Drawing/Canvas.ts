import Size = minerva.Size;

namespace etch.drawing{
    export class Canvas implements IDisplayContext {

        public HTMLElement: HTMLCanvasElement;
        public IsCached: boolean = false;

        constructor() {
            this.HTMLElement = document.createElement("canvas");
            document.body.appendChild(this.HTMLElement);
        }

        get Ctx(): CanvasRenderingContext2D {
            return this.HTMLElement.getContext("2d");
        }

        get Width(): number {
            return this.Ctx.canvas.width;
        }

        set Width(value: number) {
            this.Ctx.canvas.width = value;
        }

        get Height(): number {
            return this.Ctx.canvas.height;
        }

        set Height(value: number) {
            this.Ctx.canvas.height = value;
        }

        get Size(): Size {
            return new Size(this.Width, this.Height);
        }

        get Style(): any {
            return this.Ctx.canvas.style;
        }
    }
}