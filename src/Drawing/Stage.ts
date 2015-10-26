import ClockTimer = core.engine.ClockTimer;
import DisplayObject = core.drawing.DisplayObject;
import IDisplayObject = core.drawing.IDisplayObject;

var MAX_FPS: number = 100;
var MAX_MSPF: number = 1000 / MAX_FPS;

module core.drawing{
    export class Stage extends DisplayObject implements ITimerListener {

        public FrameCount: number = 0;
        public LastVisualTick: number = new Date(0).getTime();
        public Timer: ClockTimer;
        //Updated = new nullstone.Event<nullstone.IEventArgs>();
        //Drawn = new nullstone.Event<nullstone.IEventArgs>();

        Init(sketch: IDisplayContext): void {
            super.Init(sketch);

            this.Timer = new ClockTimer();
            this.Timer.RegisterTimer(this);
        }

        OnTicked(lastTime: number, nowTime: number) {
            var now = new Date().getTime();
            if (now - this.LastVisualTick < MAX_MSPF) return;

            this.LastVisualTick = now;

            //TWEEN.update(nowTime);

            this.Ctx.clearRect(0, 0, this.Ctx.canvas.width, this.Ctx.canvas.height);

            this.UpdateDisplayList(this.DisplayList);

            //this.Updated.raise(this, new nullstone.EventArgs());

            this.DrawDisplayList(this.DisplayList);

            //this.Drawn.raise(this, new nullstone.EventArgs());
        }

        UpdateDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void {
            for (var i = 0; i < displayList.Count; i++){
                var displayObject: IDisplayObject = displayList.GetValueAt(i);
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
    }
}
