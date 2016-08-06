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
            var attractor = new Attractor_1.Attractor(50, this.canvasWidth / 2, this.canvasHeight / 2, [mover]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvQXR0cmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDbEMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFJdkM7UUFBd0MsOEJBQUs7UUFBN0M7WUFBd0MsOEJBQUs7UUFnQjdDLENBQUM7UUFkQSwwQkFBSyxHQUFMO1lBQ0MsSUFBSSxLQUFLLEdBQVcsSUFBSSxlQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QixLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsc0NBQXNDO1lBRTFFLElBQUksU0FBUyxHQUFjLElBQUkscUJBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25HLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELDJCQUFNLEdBQU47UUFFQSxDQUFDO1FBQ0YsaUJBQUM7SUFBRCxDQWhCQSxBQWdCQyxDQWhCdUMsS0FBSyxHQWdCNUM7SUFoQkQ7Z0NBZ0JDLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL2ZvcmNlcy9BdHRyYWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBTdGFnZSA9IGV0Y2guZHJhd2luZy5TdGFnZTtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcbmltcG9ydCB7QXR0cmFjdG9yfSBmcm9tICcuL0F0dHJhY3Rvcic7XHJcbmltcG9ydCB7TW92ZXI1fSBmcm9tICcuL01vdmVyNSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyYWN0aW9uIGV4dGVuZHMgU3RhZ2Uge1xyXG5cclxuXHRzZXR1cCgpOiB2b2lke1xyXG5cdFx0dmFyIG1vdmVyOiBNb3ZlcjUgPSBuZXcgTW92ZXI1KDEsIHRoaXMuY2FudmFzV2lkdGggLyA0LCB0aGlzLmNhbnZhc0hlaWdodCAvNCk7XHJcbiAgICAgICAgbW92ZXIuaW5pdCh0aGlzKTtcclxuXHRcdHRoaXMuZGlzcGxheUxpc3QuYWRkKG1vdmVyKTtcclxuICAgICAgICBtb3Zlci5hcHBseUZvcmNlKG5ldyBWZWN0b3IoMCwgNSkpOyAvLyBnaXZlIGl0IGFuIGluaXRpYWwgbnVkZ2UgaW50byBvcmJpdFxyXG5cclxuICAgICAgICB2YXIgYXR0cmFjdG9yOiBBdHRyYWN0b3IgPSBuZXcgQXR0cmFjdG9yKDUwLCB0aGlzLmNhbnZhc1dpZHRoIC8gMiwgdGhpcy5jYW52YXNIZWlnaHQgLyAyLCBbbW92ZXJdKTtcclxuICAgICAgICBhdHRyYWN0b3IuaW5pdCh0aGlzKTtcclxuXHRcdHRoaXMuZGlzcGxheUxpc3QuYWRkKGF0dHJhY3Rvcik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKTogdm9pZCB7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
