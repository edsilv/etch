import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Mover} from "./mover";

export class MotionVelocity extends Stage{

    public mover: Mover;

    setup(): void{
        this.mover = new Mover();
    }

}