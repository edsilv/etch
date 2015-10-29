import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import {BlueSquare} from './BlueSquare';
import {Mover} from './Mover';
import {RedSquare} from './RedSquare';

export class MainScene extends Stage{

    public RedSquare: RedSquare;
    public BlueSquare: BlueSquare;

    Setup() {
        super.Setup();

        this.RedSquare = new RedSquare();
        this.RedSquare.Init(this);
        this.BlueSquare = new BlueSquare();
        this.BlueSquare.Init(this);

        var moverCache: Canvas = new Canvas();

        for (var i = 0; i < 1000; i++){
            var mover = new Mover();
            mover.Init(this, moverCache);
            this.DisplayList.Add(mover);
        }

        this.DisplayList.Add(this.RedSquare);
        this.DisplayList.Add(this.BlueSquare);
    }

    Update() {
        super.Update();
    }

    Draw() {
        super.Draw();
    }
}