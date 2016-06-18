import Size = minerva.Size;

module etch.drawing{
    export class Canvas implements IDisplayContext {

        public htmlElement: HTMLCanvasElement;
        public isCached: boolean = false;

        constructor(parentElement?: HTMLElement) {
            this.htmlElement = document.createElement("canvas");

            if (parentElement){
                parentElement.appendChild(this.htmlElement);
            } else {
                document.body.appendChild(this.htmlElement);
            }
        }

        get ctx(): CanvasRenderingContext2D {
            return this.htmlElement.getContext("2d");
        }

        get width(): number {
            return this.ctx.canvas.width;
        }

        set width(value: number) {
            this.ctx.canvas.width = value;
        }

        get height(): number {
            return this.ctx.canvas.height;
        }

        set height(value: number) {
            this.ctx.canvas.height = value;
        }

        get size(): Size {
            return new Size(this.width, this.height);
        }

        get style(): any {
            return this.ctx.canvas.style;
        }

        public hide(): void {
            this.style.display = 'none';
        }

        public show(): void {
            this.style.display = 'block';
        }
    }
}