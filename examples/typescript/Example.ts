import Canvas = etch.drawing.Canvas;
import {MainScene} from './MainScene';

export default class Example{

    public canvas: Canvas;
    public mainScene: MainScene;

    public init(): void {
        this.canvas = new Canvas();
        this.canvas.style.backgroundColor = '#FFF';
        this.canvas.width = 1024;
        this.canvas.height = 768;
        this.mainScene = new MainScene();
        this.mainScene.init(this.canvas);
    }

    // necessary for stats
    // public Tick(): void {
    //     this.MainScene.Update();
    //     this.MainScene.Draw();
    // }
}