var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Mover'], function (require, exports, Mover_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var Vector = etch.primitives.Vector;
    var Forces = (function (_super) {
        __extends(Forces, _super);
        function Forces() {
            _super.apply(this, arguments);
        }
        Forces.prototype.setup = function () {
            this.movers = [];
            this.wind = new Vector(0.01, 0);
            this.gravity = new Vector(0, 0.1);
            for (var i = 0; i < 10; i++) {
                var mover = new Mover_1.Mover(Math.randomBetween(0.1, 5), 0, 0);
                this.movers.push(mover);
                mover.init(this);
                this.displayList.add(mover);
            }
        };
        return Forces;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Forces;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvRm9yY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNsQyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUd2QztRQUFvQywwQkFBSztRQUF6QztZQUFvQyw4QkFBSztRQW9CekMsQ0FBQztRQWRBLHNCQUFLLEdBQUw7WUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUVqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMxQixJQUFJLEtBQUssR0FBVSxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0YsQ0FBQztRQUVGLGFBQUM7SUFBRCxDQXBCQSxBQW9CQyxDQXBCbUMsS0FBSyxHQW9CeEM7SUFwQkQ7NEJBb0JDLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL2ZvcmNlcy9Gb3JjZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IFN0YWdlID0gZXRjaC5kcmF3aW5nLlN0YWdlO1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuaW1wb3J0IHtNb3Zlcn0gZnJvbSAnLi9Nb3Zlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JjZXMgZXh0ZW5kcyBTdGFnZXtcclxuXHJcblx0cHVibGljIG1vdmVyczogTW92ZXJbXTtcclxuXHRwdWJsaWMgd2luZDogVmVjdG9yO1xyXG5cdHB1YmxpYyBncmF2aXR5OiBWZWN0b3I7XHJcblxyXG5cdHNldHVwKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5tb3ZlcnMgPSBbXTtcclxuXHJcblx0XHR0aGlzLndpbmQgPSBuZXcgVmVjdG9yKDAuMDEsIDApO1xyXG5cdFx0dGhpcy5ncmF2aXR5ID0gbmV3IFZlY3RvcigwLCAwLjEpO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgXHRcdHZhciBtb3ZlcjogTW92ZXIgPSBuZXcgTW92ZXIoTWF0aC5yYW5kb21CZXR3ZWVuKDAuMSwgNSksIDAsIDApO1xyXG5cdFx0XHR0aGlzLm1vdmVycy5wdXNoKG1vdmVyKTtcclxuXHRcdFx0bW92ZXIuaW5pdCh0aGlzKTtcclxuXHRcdFx0dGhpcy5kaXNwbGF5TGlzdC5hZGQobW92ZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
