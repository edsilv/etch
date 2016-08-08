import Canvas = etch.drawing.Canvas;
import Stage = etch.drawing.Stage;
import Vector = etch.primitives.Vector;
import {Attractor} from './Attractor';
import {Mover5 as Mover} from './Mover5';

export default class MultipleAttractors extends Stage {

    attractorArrangement: AttractorArrangement = AttractorArrangement.horizontalLine;
    totalAttractors: number = 25;
    attractors: Attractor[] = [];
    movers: Mover[] = [];

	setup(): void{

        for (var i = 0; i < this.totalAttractors; i++){            
            var mover: Mover = new Mover(1, this.canvasWidth / 2, this.canvasHeight / 2);
            this.movers.push(mover);
            mover.init(this);
            mover.position.x = Math.randomBetween(0, this.canvasWidth);
            mover.position.y = Math.randomBetween(0, this.canvasHeight);
		    this.displayList.add(mover);
            
            var attractor: Attractor = new Attractor(400, 1, 0.2, true, this.canvasWidth / 2, this.canvasHeight / 2, [mover]);
            this.attractors.push(attractor);
            attractor.init(this);
		    this.displayList.add(attractor);
            attractor.hide();
        }

        this.setAttractorArrangement(this.attractorArrangement);

        var that = this;

        this.canvas.htmlElement.addEventListener('click', (e) => {
            if (that.attractorArrangement === AttractorArrangement.horizontalLine){
                that.setAttractorArrangement(AttractorArrangement.verticalLine);
            } else {
                that.setAttractorArrangement(AttractorArrangement.horizontalLine);
            }
        }, false);
	}

    setAttractorArrangement(arrangement: AttractorArrangement): void {
        
        this.attractorArrangement = arrangement;
        
        for (var i = 0; i < this.totalAttractors; i++){ 
            var attractor: Attractor = this.attractors[i];
            var x: number;
            var y: number;
            var gap: number;

            switch(this.attractorArrangement) {
                case AttractorArrangement.horizontalLine :
                    gap = this.canvasWidth / this.totalAttractors;
                    x = gap * i;
                    y = this.canvasHeight / 2;
                    attractor.position.x = x;
                    attractor.position.y = y;
                    break;
                case AttractorArrangement.verticalLine :
                    gap = this.canvasHeight / this.totalAttractors;
                    x = this.canvasWidth / 2;
                    y = gap * i;
                    attractor.position.x = x;
                    attractor.position.y = y;
                    break;
            }
        }
    }

	update(): void {
		
	}
}

enum AttractorArrangement {
    horizontalLine, verticalLine
}
