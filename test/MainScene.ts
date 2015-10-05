import {DisplayObject} from '../src/Drawing/DisplayObject';
import {RedSquare} from './RedSquare';
import {BlueSquare} from './BlueSquare';

export class MainScene extends DisplayObject{

    public RedSquare: RedSquare;
    public BlueSquare: BlueSquare;

    constructor() {
        super();
    }

    Setup() {
        super.Setup();

        this.RedSquare = new RedSquare();
        this.RedSquare.Init(this);
        this.BlueSquare = new BlueSquare();
        this.BlueSquare.Init(this);

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