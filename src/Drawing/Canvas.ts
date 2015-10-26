import Size = minerva.Size;

module core.drawing{
    export class Canvas implements IDisplayContext {

        public HTMLElement: HTMLCanvasElement;
        public IsCached: boolean = false;

        constructor() {
            this.HTMLElement = document.createElement("canvas");
            document.body.appendChild(this.HTMLElement);
        }

        //todo: typing as CanvasRenderingContext2D causes "Property 'fillStyle' is missing in type 'WebGLRenderingContext'"
        // upgrade to newer compiler (1.5) which has no error - requires gulp as grunt-typescript seemingly no longer supported
        get Ctx(): any {
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