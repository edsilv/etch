import ClockTimer = etch.engine.ClockTimer;
import DisplayObject = etch.drawing.DisplayObject;
import IDisplayObject = etch.drawing.IDisplayObject;

module etch.drawing{
    export class Stage extends DisplayObject implements ITimerListener {

        private _MaxDelta: number;
        public DeltaTime: number = new Date(0).getTime();
        public LastVisualTick: number = new Date(0).getTime();
        public Timer: ClockTimer;
        
        Updated = new nullstone.Event<number>();
        Drawn = new nullstone.Event<number>();
        
        constructor(maxDelta?: number) {
            super();
            this._MaxDelta = maxDelta || 1000 / 60;
        }
        
        Init(drawTo: IDisplayContext): void {
            super.Init(drawTo);

            this.Timer = new ClockTimer();
            this.Timer.RegisterTimer(this);
        }

        OnTicked(lastTime: number, nowTime: number) {

            this.DeltaTime = Math.min(nowTime - this.LastVisualTick, this._MaxDelta);
            this.LastVisualTick = nowTime;

            // todo: make this configurable
            this.Ctx.clearRect(0, 0, this.Ctx.canvas.width, this.Ctx.canvas.height);

            this.UpdateDisplayList(this.DisplayList);
            this.Updated.raise(this, this.LastVisualTick);

            this.DrawDisplayList(this.DisplayList);
            this.Drawn.raise(this, this.LastVisualTick);
        }

        UpdateDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void {
            for (var i = 0; i < displayList.Count; i++){
                var displayObject: IDisplayObject = displayList.GetValueAt(i);
                displayObject.FrameCount++;
                displayObject.DeltaTime = this.DeltaTime;
                displayObject.LastVisualTick = this.LastVisualTick;
                if (!displayObject.IsPaused) {
                    displayObject.Update();
                }
                this.UpdateDisplayList(displayObject.DisplayList);
            }
        }

        DrawDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void {
            for (var i = 0; i < displayList.Count; i++){
                var displayObject: IDisplayObject = displayList.GetValueAt(i);
                if (displayObject.IsVisible) {
                    displayObject.Draw();
                }
                this.DrawDisplayList(displayObject.DisplayList);
            }
        }

        ResizeDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void {
            for (var i = 0; i < displayList.Count; i++){
                var displayObject: IDisplayObject = displayList.GetValueAt(i);
                displayObject.Resize();
                this.ResizeDisplayList(displayObject.DisplayList);
            }
        }

        Resize(): void {
            super.Resize();
            this.ResizeDisplayList(this.DisplayList);
        }
    }
}
