import Canvas = etch.drawing.Canvas;
import {MainScene} from './MainScene';

export default class Test{

    public Canvas: Canvas;
    public MainScene: MainScene;

    public Setup(): void {
        this.Canvas = new Canvas();
        this.Canvas.Style.backgroundColor = '#FFF';
        this.Canvas.Width = 800;
        this.Canvas.Height = 600;
        this.MainScene = new MainScene();
        this.MainScene.Init(this.Canvas);
        this.MainScene.Drawn.on((s: any, time: number) => {
            console.log(time);
        }, this);
    }

    public Tick(): void {
        this.MainScene.Update();
        this.MainScene.Draw();
    }
}