import {DisplayObject} from '../src/Drawing/DisplayObject';
import {RedSquare} from './RedSquare';
import {BlueSquare} from './BlueSquare';
import {Stage} from '../src/Drawing/Stage';

export class MainScene extends Stage{

    public RedSquare: RedSquare;
    public BlueSquare: BlueSquare;

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