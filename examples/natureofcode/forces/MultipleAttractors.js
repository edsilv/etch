var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Attractor', './Mover5'], function (require, exports, Attractor_1, Mover5_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
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
                attractor.hide();
            }
            this.setAttractorArrangement(this.attractorArrangement);
            var that = this;
            this.canvas.htmlElement.addEventListener('click', function (e) {
                if (that.attractorArrangement === AttractorArrangement.horizontalLine) {
                    that.setAttractorArrangement(AttractorArrangement.verticalLine);
                }
                else {
                    that.setAttractorArrangement(AttractorArrangement.horizontalLine);
                }
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
                        attractor.position.x = x;
                        attractor.position.y = y;
                        break;
                    case AttractorArrangement.verticalLine:
                        gap = this.canvasHeight / this.totalAttractors;
                        x = this.canvasWidth / 2;
                        y = gap * i;
                        attractor.position.x = x;
                        attractor.position.y = y;
                        break;
                }
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
    })(AttractorArrangement || (AttractorArrangement = {}));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTXVsdGlwbGVBdHRyYWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUtsQztRQUFnRCxzQ0FBSztRQUFyRDtZQUFnRCw4QkFBSztZQUVqRCx5QkFBb0IsR0FBeUIsb0JBQW9CLENBQUMsY0FBYyxDQUFDO1lBQ2pGLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1lBQzdCLGVBQVUsR0FBZ0IsRUFBRSxDQUFDO1lBQzdCLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFnRXpCLENBQUM7UUE5REEsa0NBQUssR0FBTDtZQUVPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQyxJQUFJLEtBQUssR0FBVSxJQUFJLGVBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxx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b0I7UUFDckIsbUZBQWMsQ0FBQTtRQUFFLCtFQUFZLENBQUE7SUFDaEMsQ0FBQyxFQUZJLG9CQUFvQixLQUFwQixvQkFBb0IsUUFFeEIiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL2ZvcmNlcy9NdWx0aXBsZUF0dHJhY3RvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IFN0YWdlID0gZXRjaC5kcmF3aW5nLlN0YWdlO1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuaW1wb3J0IHtBdHRyYWN0b3J9IGZyb20gJy4vQXR0cmFjdG9yJztcclxuaW1wb3J0IHtNb3ZlcjUgYXMgTW92ZXJ9IGZyb20gJy4vTW92ZXI1JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpcGxlQXR0cmFjdG9ycyBleHRlbmRzIFN0YWdlIHtcclxuXHJcbiAgICBhdHRyYWN0b3JBcnJhbmdlbWVudDogQXR0cmFjdG9yQXJyYW5nZW1lbnQgPSBBdHRyYWN0b3JBcnJhbmdlbWVudC5ob3Jpem9udGFsTGluZTtcclxuICAgIHRvdGFsQXR0cmFjdG9yczogbnVtYmVyID0gMjA7XHJcbiAgICBhdHRyYWN0b3JzOiBBdHRyYWN0b3JbXSA9IFtdO1xyXG4gICAgbW92ZXJzOiBNb3ZlcltdID0gW107XHJcblxyXG5cdHNldHVwKCk6IHZvaWR7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50b3RhbEF0dHJhY3RvcnM7IGkrKyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBtb3ZlcjogTW92ZXIgPSBuZXcgTW92ZXIoMSwgdGhpcy5jYW52YXNXaWR0aCAvIDIsIHRoaXMuY2FudmFzSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZXJzLnB1c2gobW92ZXIpO1xyXG4gICAgICAgICAgICBtb3Zlci5pbml0KHRoaXMpO1xyXG4gICAgICAgICAgICBtb3Zlci5wb3NpdGlvbi54ID0gTWF0aC5yYW5kb21CZXR3ZWVuKDAsIHRoaXMuY2FudmFzV2lkdGgpO1xyXG4gICAgICAgICAgICBtb3Zlci5wb3NpdGlvbi55ID0gTWF0aC5yYW5kb21CZXR3ZWVuKDAsIHRoaXMuY2FudmFzSGVpZ2h0KTtcclxuXHRcdCAgICB0aGlzLmRpc3BsYXlMaXN0LmFkZChtb3Zlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgYXR0cmFjdG9yOiBBdHRyYWN0b3IgPSBuZXcgQXR0cmFjdG9yKDQwMCwgMSwgMC4yLCB0cnVlLCB0aGlzLmNhbnZhc1dpZHRoIC8gMiwgdGhpcy5jYW52YXNIZWlnaHQgLyAyLCBbbW92ZXJdKTtcclxuICAgICAgICAgICAgdGhpcy5hdHRyYWN0b3JzLnB1c2goYXR0cmFjdG9yKTtcclxuICAgICAgICAgICAgYXR0cmFjdG9yLmluaXQodGhpcyk7XHJcblx0XHQgICAgdGhpcy5kaXNwbGF5TGlzdC5hZGQoYXR0cmFjdG9yKTtcclxuICAgICAgICAgICAgYXR0cmFjdG9yLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0QXR0cmFjdG9yQXJyYW5nZW1lbnQodGhpcy5hdHRyYWN0b3JBcnJhbmdlbWVudCk7XHJcblxyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMuaHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhhdC5hdHRyYWN0b3JBcnJhbmdlbWVudCA9PT0gQXR0cmFjdG9yQXJyYW5nZW1lbnQuaG9yaXpvbnRhbExpbmUpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZXRBdHRyYWN0b3JBcnJhbmdlbWVudChBdHRyYWN0b3JBcnJhbmdlbWVudC52ZXJ0aWNhbExpbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZXRBdHRyYWN0b3JBcnJhbmdlbWVudChBdHRyYWN0b3JBcnJhbmdlbWVudC5ob3Jpem9udGFsTGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuICAgIHNldEF0dHJhY3RvckFycmFuZ2VtZW50KGFycmFuZ2VtZW50OiBBdHRyYWN0b3JBcnJhbmdlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXR0cmFjdG9yQXJyYW5nZW1lbnQgPSBhcnJhbmdlbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudG90YWxBdHRyYWN0b3JzOyBpKyspeyBcclxuICAgICAgICAgICAgdmFyIGF0dHJhY3RvcjogQXR0cmFjdG9yID0gdGhpcy5hdHRyYWN0b3JzW2ldO1xyXG4gICAgICAgICAgICB2YXIgeDogbnVtYmVyO1xyXG4gICAgICAgICAgICB2YXIgeTogbnVtYmVyO1xyXG4gICAgICAgICAgICB2YXIgZ2FwOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5hdHRyYWN0b3JBcnJhbmdlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBBdHRyYWN0b3JBcnJhbmdlbWVudC5ob3Jpem9udGFsTGluZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwID0gdGhpcy5jYW52YXNXaWR0aCAvIHRoaXMudG90YWxBdHRyYWN0b3JzO1xyXG4gICAgICAgICAgICAgICAgICAgIHggPSBnYXAgKiBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSB0aGlzLmNhbnZhc0hlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi55ID0geTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQXR0cmFjdG9yQXJyYW5nZW1lbnQudmVydGljYWxMaW5lIDpcclxuICAgICAgICAgICAgICAgICAgICBnYXAgPSB0aGlzLmNhbnZhc0hlaWdodCAvIHRoaXMudG90YWxBdHRyYWN0b3JzO1xyXG4gICAgICAgICAgICAgICAgICAgIHggPSB0aGlzLmNhbnZhc1dpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICB5ID0gZ2FwICogaTtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyYWN0b3IucG9zaXRpb24ueCA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHR1cGRhdGUoKTogdm9pZCB7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcbmVudW0gQXR0cmFjdG9yQXJyYW5nZW1lbnQge1xyXG4gICAgaG9yaXpvbnRhbExpbmUsIHZlcnRpY2FsTGluZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
