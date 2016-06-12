import ClockTimer = etch.engine.ClockTimer;
import DisplayObject = etch.drawing.DisplayObject;
import IDisplayObject = etch.drawing.IDisplayObject;

module etch.drawing{
    export class Stage extends DisplayObject implements ITimerListener {

        private _maxDelta: number;
        public deltaTime: number = new Date(0).getTime();
        public lastVisualTick: number = new Date(0).getTime();
        public timer: ClockTimer;
        
        updated = new nullstone.Event<number>();
        drawn = new nullstone.Event<number>();
        
        constructor(maxDelta?: number) {
            super();
            this._maxDelta = maxDelta || 1000 / 60; // 60 fps
        }
        
        init(drawTo: IDisplayContext): void {
            super.init(drawTo);

            this.timer = new ClockTimer();
            this.timer.registerTimer(this);
        }

        onTicked(lastTime: number, nowTime: number) {

            this.deltaTime = Math.min(nowTime - this.lastVisualTick, this._maxDelta);
            this.lastVisualTick = nowTime;

            // todo: make this configurable
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

            this.updateDisplayList(this.displayList);
            this.updated.raise(this, this.lastVisualTick);

            this.drawDisplayList(this.displayList);
            this.drawn.raise(this, this.lastVisualTick);
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

        resize(): void {
            super.resize();
            this.resizeDisplayList(this.displayList);
        }
    }
}
