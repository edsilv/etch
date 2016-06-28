import Canvas = etch.drawing.Canvas;
import IDisplayObject = etch.drawing.IDisplayObject;
import Stage = etch.drawing.Stage;

export default class Example{

    private _canvas: Canvas;
    private _parentElement: HTMLElement;
    public mainScene: Stage;

    public init(): void {
        this._parentElement = document.getElementById('main');
        this._canvas = new Canvas(this._parentElement);
        //this._canvas.style.backgroundColor = 'blue';
        this.mainScene.init(this._canvas);

        $(window).on('resize', (e) => {
            this.resize();
        });

        // this.mainScene.ticked.on((lastTime: number, nowTime: number) => {
        //     if(this.mainScene.isFirstFrame()){
                this.resize();
        //     }
        // }, this);
    }

    public resize(): void {
        this._canvas.width = this._parentElement.offsetWidth;
        this._canvas.height = this._parentElement.offsetHeight;
    }
}