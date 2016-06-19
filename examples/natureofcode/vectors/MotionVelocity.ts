import {Mover} from "./Mover";
import Stage = etch.drawing.Stage;

export default class MotionVelocity extends Stage{

    public mover: Mover;

    setup(): void {
        this.mover = new Mover();
        this.mover.init(this);
        this.displayList.add(this.mover);
    }

}