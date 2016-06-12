module etch.drawing {

    // todo: make abstract?
    export class DisplayObject implements IDisplayObject {

        private _displayList: DisplayObjectCollection<IDisplayObject> = new DisplayObjectCollection();
        public deltaTime: number;
        public frameCount: number = -1;
        public height: number;
        public isCached: boolean = false;
        public isInitialised: boolean = false;
        public isPaused: boolean = false;
        public isVisible: boolean = true;
        public lastVisualTick: number = 0;
        public position: Point;
        public drawFrom: IDisplayContext;
        public drawTo: IDisplayContext;
        public width: number;
        public zIndex: number;

        init(drawTo: IDisplayContext, drawFrom?: IDisplayContext):void {
            this.drawTo = drawTo;
            if (drawFrom) this.drawFrom = drawFrom;
            this.isInitialised = true;
            this.setup();
            this.resize();
        }

        get ctx(): CanvasRenderingContext2D {
            return this.drawTo.ctx;
        }

        get canvasWidth(): number {
            return this.ctx.canvas.width;
        }

        get canvasHeight(): number {
            return this.ctx.canvas.height;
        }

        get displayList(): DisplayObjectCollection<IDisplayObject> {
            return this._displayList;
        }

        set displayList(value: DisplayObjectCollection<IDisplayObject>) {
            this._displayList = value;
        }

        public setup(): void {

        }

        public update(): void {

        }

        public draw(): void {

        }

        public isFirstFrame(): boolean {
            return this.frameCount === 0;
        }

        public dispose(): void {

        }

        public play(): void {
            this.isPaused = false;

            for (var i = 0; i < this.displayList.Count; i++){
                var displayObject: IDisplayObject = this.displayList.GetValueAt(i);
                displayObject.play();
            }
        }

        public pause(): void {
            this.isPaused = true;

            for (var i = 0; i < this.displayList.Count; i++){
                var displayObject: IDisplayObject = this.displayList.GetValueAt(i);
                displayObject.pause();
            }
        }

        public resize(): void {

        }

        public show(): void {
            this.isVisible = true;

            for (var i = 0; i < this.displayList.Count; i++){
                var displayObject: IDisplayObject = this.displayList.GetValueAt(i);
                displayObject.show();
            }
        }

        public hide(): void {
            this.isVisible = false;

            for (var i = 0; i < this.displayList.Count; i++){
                var displayObject: IDisplayObject = this.displayList.GetValueAt(i);
                displayObject.hide();
            }
        }
    }
}
