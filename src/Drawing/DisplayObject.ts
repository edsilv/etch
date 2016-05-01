module etch.drawing {

    // todo: make abstract?
    export class DisplayObject implements IDisplayObject {

        private _DisplayList: DisplayObjectCollection<IDisplayObject> = new DisplayObjectCollection();
        public DeltaTime: number;
        public FrameCount: number = -1;
        public Height: number;
        public IsCached: boolean = false;
        public IsInitialised: boolean = false;
        public IsPaused: boolean = false;
        public IsVisible: boolean = true;
        public LastVisualTick: number = 0;
        public Position: Point;
        public DrawFrom: IDisplayContext;
        public DrawTo: IDisplayContext;
        public Width: number;
        public ZIndex: number;

        Init(drawTo: IDisplayContext, drawFrom?: IDisplayContext):void {
            this.DrawTo = drawTo;
            if (drawFrom) this.DrawFrom = drawFrom;
            this.IsInitialised = true;
            this.Setup();
            this.Resize();
        }

        get Ctx(): CanvasRenderingContext2D {
            return this.DrawTo.Ctx;
        }

        get CanvasWidth(): number {
            return this.Ctx.canvas.width;
        }

        get CanvasHeight(): number {
            return this.Ctx.canvas.height;
        }

        get DisplayList(): DisplayObjectCollection<IDisplayObject> {
            return this._DisplayList;
        }

        set DisplayList(value: DisplayObjectCollection<IDisplayObject>) {
            this._DisplayList = value;
        }

        public Setup(): void {

        }

        public Update(): void {

        }

        public Draw(): void {

        }

        public IsFirstFrame(): boolean {
            return this.FrameCount === 0;
        }

        public Dispose(): void {

        }

        public Play(): void {
            this.IsPaused = false;

            for (var i = 0; i < this.DisplayList.Count; i++){
                var displayObject: IDisplayObject = this.DisplayList.GetValueAt(i);
                displayObject.Play();
            }
        }

        public Pause(): void {
            this.IsPaused = true;

            for (var i = 0; i < this.DisplayList.Count; i++){
                var displayObject: IDisplayObject = this.DisplayList.GetValueAt(i);
                displayObject.Pause();
            }
        }

        public Resize(): void {

        }

        public Show(): void {
            this.IsVisible = true;

            for (var i = 0; i < this.DisplayList.Count; i++){
                var displayObject: IDisplayObject = this.DisplayList.GetValueAt(i);
                displayObject.Show();
            }
        }

        public Hide(): void {
            this.IsVisible = false;

            for (var i = 0; i < this.DisplayList.Count; i++){
                var displayObject: IDisplayObject = this.DisplayList.GetValueAt(i);
                displayObject.Hide();
            }
        }
    }
}
