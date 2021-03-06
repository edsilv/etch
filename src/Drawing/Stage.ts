import ClockTimer = etch.engine.ClockTimer;
import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import IDisplayObject = etch.drawing.IDisplayObject;

module etch.drawing{
    export class Stage extends DisplayObject implements ITimerListener {

        private _maxDelta: number;
        public deltaTime: number = new Date(0).getTime();
        public lastVisualTick: number = new Date(0).getTime();
        public mousePos: etch.primitives.Point = new etch.primitives.Point(0, 0);
        public timer: ClockTimer;
        
        ticked = new nullstone.Event<number>();
        
        constructor(maxDelta?: number) {
            super();
            this._maxDelta = maxDelta || 1000 / 60; // 60 fps
        }
        
        init(drawTo: IDisplayContext): void {
            (<any>drawTo.ctx).stage = this;
            
            super.init(drawTo);

            this.timer = new ClockTimer();
            this.timer.registerTimer(this);

            this.canvas.htmlElement.addEventListener('mousemove', (e) => {
                this.mousePos = this._getMousePos(this.canvas.htmlElement, e);
                //console.log('mouseX: ', this.mousePos.x, ' mouseY: ', this.mousePos.y);
            }, false);
        }

        get canvas(): Canvas {
            return this.drawTo as Canvas;
        }

        get width(): number {
            return this.canvas.width;
        }

        get height(): number {
            return this.canvas.height;
        }

        private _getMousePos(canvas: HTMLCanvasElement, e: MouseEvent) {
            var rect = canvas.getBoundingClientRect();
            var pos: etch.primitives.Point = new etch.primitives.Point();
            pos.x = e.clientX - rect.left;
            pos.y = e.clientY - rect.top;
            return pos;
        }

        onTicked(lastTime: number, nowTime: number) {

            this.frameCount++;

            this.deltaTime = Math.min(nowTime - this.lastVisualTick, this._maxDelta);
            this.lastVisualTick = nowTime;

            this.ticked.raise(this, this.lastVisualTick);

            // reset transform.
		    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.clearRect(0, 0, this.width, this.height);

            if (this.isFirstFrame()){
                this.setup();
                this.setupDisplayList(this.displayList);
            }

            this.update();
            this.updateDisplayList(this.displayList);

            this.draw();
            this.drawDisplayList(this.displayList);
        }

        setup(): void {
            super.setup();
        }

        setupDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void {
            for (var i = 0; i < displayList.Count; i++){
                var displayObject: IDisplayObject = displayList.GetValueAt(i);
                displayObject.setup();
                this.setupDisplayList(displayObject.displayList);
            }
        }

        update() : void {
            super.update();
        }

        updateDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void {
            for (var i = 0; i < displayList.Count; i++){
                var displayObject: IDisplayObject = displayList.GetValueAt(i);
                displayObject.frameCount++;
                displayObject.deltaTime = this.deltaTime;
                displayObject.lastVisualTick = this.lastVisualTick;
                if (!displayObject.isPaused) {
                    displayObject.update();
                }
                this.updateDisplayList(displayObject.displayList);
            }
        }

        draw(): void {
            super.draw();
        }

        drawDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void {
            for (var i = 0; i < displayList.Count; i++){
                var displayObject: IDisplayObject = displayList.GetValueAt(i);
                if (displayObject.isVisible) {
                    displayObject.draw();
                }
                this.drawDisplayList(displayObject.displayList);
            }
        }

        resizeDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void {
            for (var i = 0; i < displayList.Count; i++){
                var displayObject: IDisplayObject = displayList.GetValueAt(i);
                displayObject.resize();
                this.resizeDisplayList(displayObject.displayList);
            }
        }

        dispose(): void {
            // loop through all displayobjects calling their dispose methods.
            this.disposeDisplayList(this.displayList);

            // unregister from clocktimer
            this.timer.unregisterTimer(this);
        }

        disposeDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void {
            for (var i = 0; i < displayList.Count; i++){
                var displayObject: IDisplayObject = displayList.GetValueAt(i);
                displayObject.dispose();
                this.disposeDisplayList(displayObject.displayList);
            }
        }

        resize(): void {
            super.resize();
            this.resizeDisplayList(this.displayList);
        }
    }
}
