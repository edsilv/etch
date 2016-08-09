var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Attractor', './Mover5'], function (require, exports, Attractor_1, Mover5_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var Point = etch.primitives.Point;
    var MultipleAttractors = (function (_super) {
        __extends(MultipleAttractors, _super);
        function MultipleAttractors() {
            _super.apply(this, arguments);
            this.attractorArrangement = AttractorArrangement.horizontalLine;
            this.totalAttractors = 20;
            this.attractors = [];
            this.movers = [];
        }
        MultipleAttractors.prototype.setup = function () {
            for (var i = 0; i < this.totalAttractors; i++) {
                var mover = new Mover5_1.Mover5(1, this.canvasWidth / 2, this.canvasHeight / 2);
                this.movers.push(mover);
                mover.init(this);
                mover.position.x = Math.randomBetween(0, this.canvasWidth);
                mover.position.y = Math.randomBetween(0, this.canvasHeight);
                this.displayList.add(mover);
                var attractor = new Attractor_1.Attractor(400, 1, 0.2, true, this.canvasWidth / 2, this.canvasHeight / 2, [mover]);
                this.attractors.push(attractor);
                attractor.init(this);
                this.displayList.add(attractor);
                this.displayList.toBack(attractor);
                attractor.color = '#000';
                attractor.hide();
            }
            this.setAttractorArrangement(this.attractorArrangement);
            var that = this;
            this.canvas.htmlElement.addEventListener('click', function (e) {
                that.attractorArrangement += 1;
                if (that.attractorArrangement === 3) {
                    that.attractorArrangement = 0;
                }
                that.setAttractorArrangement(that.attractorArrangement);
            }, false);
        };
        MultipleAttractors.prototype.setAttractorArrangement = function (arrangement) {
            this.attractorArrangement = arrangement;
            for (var i = 0; i < this.totalAttractors; i++) {
                var attractor = this.attractors[i];
                var x;
                var y;
                var gap;
                switch (this.attractorArrangement) {
                    case AttractorArrangement.horizontalLine:
                        gap = this.canvasWidth / this.totalAttractors;
                        x = gap * i;
                        y = this.canvasHeight / 2;
                        break;
                    case AttractorArrangement.verticalLine:
                        gap = this.canvasHeight / this.totalAttractors;
                        x = this.canvasWidth / 2;
                        y = gap * i;
                        break;
                    case AttractorArrangement.circle:
                        gap = Math.TAU / this.totalAttractors;
                        var theta = gap * i;
                        var radius = 200;
                        var center = new Point(this.width * .5, this.height * .5);
                        x = (radius * Math.cos(theta)) + center.x;
                        y = (radius * Math.sin(theta)) + center.y;
                        break;
                }
                attractor.position.x = x;
                attractor.position.y = y;
            }
        };
        MultipleAttractors.prototype.update = function () {
        };
        return MultipleAttractors;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MultipleAttractors;
    var AttractorArrangement;
    (function (AttractorArrangement) {
        AttractorArrangement[AttractorArrangement["horizontalLine"] = 0] = "horizontalLine";
        AttractorArrangement[AttractorArrangement["verticalLine"] = 1] = "verticalLine";
        AttractorArrangement[AttractorArrangement["circle"] = 2] = "circle";
    })(AttractorArrangement || (AttractorArrangement = {}));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTXVsdGlwbGVBdHRyYWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUVsQyxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUlyQztRQUFnRCxzQ0FBSztRQUFyRDtZQUFnRCw4QkFBSztZQUVqRCx5QkFBb0IsR0FBeUIsb0JBQW9CLENBQUMsY0FBYyxDQUFDO1lBQ2pGLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1lBQzdCLGVBQVUsR0FBZ0IsRUFBRSxDQUFDO1lBQzdCLFdBQU0sR0FBWSxFQUFFLENBQUM7UUEwRXpCLENBQUM7UUF4RUEsa0NBQUssR0FBTDtZQUVPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQyxJQUFJLEtBQUssR0FBVSxJQUFJLGVBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdB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QUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQ2pFLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDaEQsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxLQUFLLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQztRQUVKLG1DQUFNLEdBQU47UUFFQSxDQUFDO1FBQ0YseUJBQUM7SUFBRCxDQS9FQSxBQStFQyxDQS9FK0MsS0FBSyxHQStFcEQ7SUEvRUQ7d0NBK0VDLENBQUE7SUFFRCxJQUFLLG9CQUVKO0lBRkQsV0FBSyxvQkFBb0I7UUFDckIsbUZBQWMsQ0FBQTtRQUFFLCtFQUFZLENBQUE7UUFBRSxtRUFBTSxDQUFBO0lBQ3hDLENBQUMsRUFGSSxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBRXhCIiwiZmlsZSI6Im5hdHVyZW9mY29kZS9mb3JjZXMvTXVsdGlwbGVBdHRyYWN0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBTdGFnZSA9IGV0Y2guZHJhd2luZy5TdGFnZTtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcbmltcG9ydCBQb2ludCA9IGV0Y2gucHJpbWl0aXZlcy5Qb2ludDtcclxuaW1wb3J0IHtBdHRyYWN0b3J9IGZyb20gJy4vQXR0cmFjdG9yJztcclxuaW1wb3J0IHtNb3ZlcjUgYXMgTW92ZXJ9IGZyb20gJy4vTW92ZXI1JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpcGxlQXR0cmFjdG9ycyBleHRlbmRzIFN0YWdlIHtcclxuXHJcbiAgICBhdHRyYWN0b3JBcnJhbmdlbWVudDogQXR0cmFjdG9yQXJyYW5nZW1lbnQgPSBBdHRyYWN0b3JBcnJhbmdlbWVudC5ob3Jpem9udGFsTGluZTtcclxuICAgIHRvdGFsQXR0cmFjdG9yczogbnVtYmVyID0gMjA7XHJcbiAgICBhdHRyYWN0b3JzOiBBdHRyYWN0b3JbXSA9IFtdO1xyXG4gICAgbW92ZXJzOiBNb3ZlcltdID0gW107XHJcblxyXG5cdHNldHVwKCk6IHZvaWR7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50b3RhbEF0dHJhY3RvcnM7IGkrKyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBtb3ZlcjogTW92ZXIgPSBuZXcgTW92ZXIoMSwgdGhpcy5jYW52YXNXaWR0aCAvIDIsIHRoaXMuY2FudmFzSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZXJzLnB1c2gobW92ZXIpO1xyXG4gICAgICAgICAgICBtb3Zlci5pbml0KHRoaXMpO1xyXG4gICAgICAgICAgICBtb3Zlci5wb3NpdGlvbi54ID0gTWF0aC5yYW5kb21CZXR3ZWVuKDAsIHRoaXMuY2FudmFzV2lkdGgpO1xyXG4gICAgICAgICAgICBtb3Zlci5wb3NpdGlvbi55ID0gTWF0aC5yYW5kb21CZXR3ZWVuKDAsIHRoaXMuY2FudmFzSGVpZ2h0KTtcclxuXHRcdCAgICB0aGlzLmRpc3BsYXlMaXN0LmFkZChtb3Zlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgYXR0cmFjdG9yOiBBdHRyYWN0b3IgPSBuZXcgQXR0cmFjdG9yKDQwMCwgMSwgMC4yLCB0cnVlLCB0aGlzLmNhbnZhc1dpZHRoIC8gMiwgdGhpcy5jYW52YXNIZWlnaHQgLyAyLCBbbW92ZXJdKTtcclxuICAgICAgICAgICAgdGhpcy5hdHRyYWN0b3JzLnB1c2goYXR0cmFjdG9yKTtcclxuICAgICAgICAgICAgYXR0cmFjdG9yLmluaXQodGhpcyk7XHJcblx0XHQgICAgdGhpcy5kaXNwbGF5TGlzdC5hZGQoYXR0cmFjdG9yKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TGlzdC50b0JhY2soYXR0cmFjdG9yKTtcclxuICAgICAgICAgICAgYXR0cmFjdG9yLmNvbG9yID0gJyMwMDAnO1xyXG4gICAgICAgICAgICBhdHRyYWN0b3IuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRBdHRyYWN0b3JBcnJhbmdlbWVudCh0aGlzLmF0dHJhY3RvckFycmFuZ2VtZW50KTtcclxuXHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcy5odG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoYXQuYXR0cmFjdG9yQXJyYW5nZW1lbnQgKz0gMTtcclxuICAgICAgICAgICAgaWYgKHRoYXQuYXR0cmFjdG9yQXJyYW5nZW1lbnQgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5hdHRyYWN0b3JBcnJhbmdlbWVudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoYXQuc2V0QXR0cmFjdG9yQXJyYW5nZW1lbnQodGhhdC5hdHRyYWN0b3JBcnJhbmdlbWVudCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcbiAgICBzZXRBdHRyYWN0b3JBcnJhbmdlbWVudChhcnJhbmdlbWVudDogQXR0cmFjdG9yQXJyYW5nZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmF0dHJhY3RvckFycmFuZ2VtZW50ID0gYXJyYW5nZW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvdGFsQXR0cmFjdG9yczsgaSsrKXsgXHJcbiAgICAgICAgICAgIHZhciBhdHRyYWN0b3I6IEF0dHJhY3RvciA9IHRoaXMuYXR0cmFjdG9yc1tpXTtcclxuICAgICAgICAgICAgdmFyIHg6IG51bWJlcjtcclxuICAgICAgICAgICAgdmFyIHk6IG51bWJlcjtcclxuICAgICAgICAgICAgdmFyIGdhcDogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMuYXR0cmFjdG9yQXJyYW5nZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQXR0cmFjdG9yQXJyYW5nZW1lbnQuaG9yaXpvbnRhbExpbmUgOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhcCA9IHRoaXMuY2FudmFzV2lkdGggLyB0aGlzLnRvdGFsQXR0cmFjdG9ycztcclxuICAgICAgICAgICAgICAgICAgICB4ID0gZ2FwICogaTtcclxuICAgICAgICAgICAgICAgICAgICB5ID0gdGhpcy5jYW52YXNIZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBBdHRyYWN0b3JBcnJhbmdlbWVudC52ZXJ0aWNhbExpbmUgOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhcCA9IHRoaXMuY2FudmFzSGVpZ2h0IC8gdGhpcy50b3RhbEF0dHJhY3RvcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IHRoaXMuY2FudmFzV2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSBnYXAgKiBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBBdHRyYWN0b3JBcnJhbmdlbWVudC5jaXJjbGUgOlxyXG4gICAgICAgICAgICAgICAgICAgIGdhcCA9IE1hdGguVEFVIC8gdGhpcy50b3RhbEF0dHJhY3RvcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoZXRhOiBudW1iZXIgPSBnYXAgKiBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByYWRpdXM6IG51bWJlciA9IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2VudGVyOiBQb2ludCA9IG5ldyBQb2ludCh0aGlzLndpZHRoICogLjUsIHRoaXMuaGVpZ2h0ICogLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHggPSAocmFkaXVzICogTWF0aC5jb3ModGhldGEpKSArIGNlbnRlci54O1xyXG5cdFx0ICAgICAgICAgICAgeSA9IChyYWRpdXMgKiBNYXRoLnNpbih0aGV0YSkpICsgY2VudGVyLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi54ID0geDtcclxuICAgICAgICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0dXBkYXRlKCk6IHZvaWQge1xyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5lbnVtIEF0dHJhY3RvckFycmFuZ2VtZW50IHtcclxuICAgIGhvcml6b250YWxMaW5lLCB2ZXJ0aWNhbExpbmUsIGNpcmNsZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
