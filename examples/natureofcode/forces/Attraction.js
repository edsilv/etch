var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Attractor', './Mover5'], function (require, exports, Attractor_1, Mover5_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var Vector = etch.primitives.Vector;
    var Attraction = (function (_super) {
        __extends(Attraction, _super);
        function Attraction() {
            _super.apply(this, arguments);
        }
        Attraction.prototype.setup = function () {
            var mover = new Mover5_1.Mover5(1, this.canvasWidth / 4, this.canvasHeight / 4);
            mover.init(this);
            this.displayList.add(mover);
            mover.applyForce(new Vector(0, 5)); // give it an initial nudge into orbit
            var attractor = new Attractor_1.Attractor(50, 1, 0, false, this.canvasWidth / 2, this.canvasHeight / 2, [mover]);
            attractor.init(this);
            this.displayList.add(attractor);
        };
        Attraction.prototype.update = function () {
        };
        return Attraction;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Attraction;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvQXR0cmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDbEMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFJdkM7UUFBd0MsOEJBQUs7UUFBN0M7WUFBd0MsOEJBQUs7UUFnQjdDLENBQUM7UUFkQSwwQkFBSyxHQUFMO1lBQ0MsSUFBSSxLQUFLLEdBQVUsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QixLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsc0NBQXNDO1lBRTFFLElBQUksU0FBUyxHQUFjLElBQUkscUJBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hILFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELDJCQUFNLEdBQU47UUFFQSxDQUFDO1FBQ0YsaUJBQUM7SUFBRCxDQWhCQSxBQWdCQyxDQWhCdUMsS0FBSyxHQWdCNUM7SUFoQkQ7Z0NBZ0JDLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL2ZvcmNlcy9BdHRyYWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBTdGFnZSA9IGV0Y2guZHJhd2luZy5TdGFnZTtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcbmltcG9ydCB7QXR0cmFjdG9yfSBmcm9tICcuL0F0dHJhY3Rvcic7XHJcbmltcG9ydCB7TW92ZXI1IGFzIE1vdmVyfSBmcm9tICcuL01vdmVyNSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyYWN0aW9uIGV4dGVuZHMgU3RhZ2Uge1xyXG5cclxuXHRzZXR1cCgpOiB2b2lke1xyXG5cdFx0dmFyIG1vdmVyOiBNb3ZlciA9IG5ldyBNb3ZlcigxLCB0aGlzLmNhbnZhc1dpZHRoIC8gNCwgdGhpcy5jYW52YXNIZWlnaHQgLzQpO1xyXG4gICAgICAgIG1vdmVyLmluaXQodGhpcyk7XHJcblx0XHR0aGlzLmRpc3BsYXlMaXN0LmFkZChtb3Zlcik7XHJcbiAgICAgICAgbW92ZXIuYXBwbHlGb3JjZShuZXcgVmVjdG9yKDAsIDUpKTsgLy8gZ2l2ZSBpdCBhbiBpbml0aWFsIG51ZGdlIGludG8gb3JiaXRcclxuXHJcbiAgICAgICAgdmFyIGF0dHJhY3RvcjogQXR0cmFjdG9yID0gbmV3IEF0dHJhY3Rvcig1MCwgMSwgMCwgZmFsc2UsIHRoaXMuY2FudmFzV2lkdGggLyAyLCB0aGlzLmNhbnZhc0hlaWdodCAvIDIsIFttb3Zlcl0pO1xyXG4gICAgICAgIGF0dHJhY3Rvci5pbml0KHRoaXMpO1xyXG5cdFx0dGhpcy5kaXNwbGF5TGlzdC5hZGQoYXR0cmFjdG9yKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpOiB2b2lkIHtcclxuXHRcdFxyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
