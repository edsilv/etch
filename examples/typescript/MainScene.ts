import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import {BlueSquare} from './BlueSquare';
import {Mover} from './Mover';
import {RedSquare} from './RedSquare';
import {GreenSquare} from "./GreenSquare";
import {DeltaMover} from "./DeltaMover";

export class MainScene extends Stage{

    public redSquare: RedSquare;
    public blueSquare: BlueSquare;

    constructor(maxDelta?: number){
        super(maxDelta);
    }

    setup() {
        super.setup();

        this.redSquare = new RedSquare();
        this.redSquare.init(this);
        this.blueSquare = new BlueSquare();
        this.blueSquare.init(this);

        var moverCache: Canvas = new Canvas();
        moverCache.hide();

        //for (var i = 0; i < 1000; i++){
        //    var mover = new Mover();
        //    mover.Init(this, moverCache);
        //    this.DisplayList.Add(mover);
        //}

        for (var i = 0; i < 1000; i++){
            var mover = new DeltaMover();
            mover.init(this, moverCache);
            this.displayList.add(mover);
        }

        this.displayList.add(this.redSquare);
        this.displayList.add(this.blueSquare);
    }
}