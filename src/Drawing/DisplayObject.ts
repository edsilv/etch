module core.drawing {

    export class DisplayObject implements IDisplayObject {

        private _DisplayList:DisplayObjectCollection<IDisplayObject>;
        public FrameCount:number = -1;
        public Height:number;
        public IsCached:boolean = false;
        public IsInitialised:boolean = false;
        public IsPaused:boolean = false;
        public IsVisible:boolean = true;
        public Position:Vector;
        public DrawFrom:IDisplayContext;
        public DrawTo:IDisplayContext;
        public Width:number;
        public ZIndex:number;

        Init(drawTo: IDisplayContext, drawFrom?: IDisplayContext):void {
            this.DrawTo = drawTo;
            if (drawFrom) this.DrawFrom = drawFrom;
            this.DisplayList = new DisplayObjectCollection();
            this.IsInitialised = true;
            this.Setup();
        }

        get Ctx():CanvasRenderingContext2D {
            return this.DrawTo.Ctx;
        }

        get CanvasWidth(): number {
            return this.Ctx.canvas.width;
        }

        get CanvasHeight(): number {
            return this.Ctx.canvas.height;
        }

        get DisplayList():DisplayObjectCollection<IDisplayObject> {
            return this._DisplayList;
        }

        set DisplayList(value:DisplayObjectCollection<IDisplayObject>) {
            this._DisplayList = value;
        }

        public Setup():void {

        }

        public Update():void {

        }

        public Draw():void {
            this.FrameCount++;
        }

        public IsFirstFrame():boolean {
            return this.FrameCount === 0;
        }

        public Dispose():void {

        }

        public Play():void {
            this.IsPaused = false;
        }

        public Pause():void {
            this.IsPaused = true;
        }

        public Show():void {
            this.IsVisible = true;
        }

        public Hide():void {
            this.IsVisible = false;
        }

        //HitRect(x, y, w, h, mx, my): boolean {
        //return Utils.Measurements.Dimensions.HitRect(x, y, w, h, mx, my);
        //}
    }
}
