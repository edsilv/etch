import Canvas = core.drawing.Canvas;
import {MainScene} from './MainScene';

export default class Test{

    public Canvas: Canvas;
    public MainScene: MainScene;
    public Timer: ClockTimer;

    public Setup(): void {
        this.Canvas = new Canvas();
        this.Canvas.Style.backgroundColor = '#FFF';
        this.Canvas.Width = 800;
        this.Canvas.Height = 600;
        this.MainScene = new MainScene();
        this.MainScene.Init(this.Canvas);
    }
}