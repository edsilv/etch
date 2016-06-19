var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Liquid', './Mover3'], function (require, exports, Liquid_1, Mover3_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var FluidResistance = (function (_super) {
        __extends(FluidResistance, _super);
        function FluidResistance() {
            _super.apply(this, arguments);
        }
        FluidResistance.prototype.setup = function () {
            this.movers = [];
            for (var i = 0; i < 10; i++) {
                var mover = new Mover3_1.Mover3(Math.randomBetween(1, 4), this.ctxWidth / 10 * i, 0);
                this.movers.push(mover);
            }
            this.liquid = new Liquid_1.Liquid(0, this.ctxHeight * .5, this.ctxWidth, this.ctxHeight * .5, 0.1);
            this.liquid.init(this);
            this.displayList.add(this.liquid);
        };
        FluidResistance.prototype.update = function () {
            for (var i = 0; i < this.movers.length; i++) {
            }
        };
        return FluidResistance;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = FluidResistance;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvRmx1aWRSZXNpc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUtsQztRQUE2QyxtQ0FBSztRQUFsRDtZQUE2Qyw4QkFBSztRQXFDbEQsQ0FBQztRQTdCQSwrQkFBSyxHQUFMO1lBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFFakIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxLQUFLLEdBQVcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVELGdDQUFNLEdBQU47WUFFTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFXcEQsQ0FBQztRQUNGLENBQUM7UUFFRixzQkFBQztJQUFELENBckNBLEFBcUNDLENBckM0QyxLQUFLLEdBcUNqRDtJQXJDRDtxQ0FxQ0MsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvZm9yY2VzL0ZsdWlkUmVzaXN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgU3RhZ2UgPSBldGNoLmRyYXdpbmcuU3RhZ2U7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5pbXBvcnQge0xpcXVpZH0gZnJvbSAnLi9MaXF1aWQnO1xyXG5pbXBvcnQge01vdmVyM30gZnJvbSAnLi9Nb3ZlcjMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmx1aWRSZXNpc3RhbmNlIGV4dGVuZHMgU3RhZ2Uge1xyXG5cclxuXHRwdWJsaWMgbW92ZXJzOiBNb3ZlcjNbXTtcclxuXHRwdWJsaWMgZnJpY3Rpb246IG51bWJlcjtcclxuXHRwdWJsaWMgd2luZDogVmVjdG9yO1xyXG5cdHB1YmxpYyBncmF2aXR5OiBWZWN0b3I7XHJcblx0cHVibGljIGxpcXVpZDogTGlxdWlkO1xyXG5cclxuXHRzZXR1cCgpOiB2b2lke1xyXG5cdFx0dGhpcy5tb3ZlcnMgPSBbXTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIFx0XHR2YXIgbW92ZXI6IE1vdmVyMyA9IG5ldyBNb3ZlcjMoTWF0aC5yYW5kb21CZXR3ZWVuKDEsIDQpLCB0aGlzLmN0eFdpZHRoIC8gMTAgKiBpLCAwKTtcclxuXHRcdFx0dGhpcy5tb3ZlcnMucHVzaChtb3Zlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5saXF1aWQgPSBuZXcgTGlxdWlkKDAsIHRoaXMuY3R4SGVpZ2h0ICogLjUsIHRoaXMuY3R4V2lkdGgsIHRoaXMuY3R4SGVpZ2h0ICogLjUsIDAuMSk7XHJcblx0XHR0aGlzLmxpcXVpZC5pbml0KHRoaXMpO1xyXG5cdFx0dGhpcy5kaXNwbGF5TGlzdC5hZGQodGhpcy5saXF1aWQpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKCk6IHZvaWR7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb3ZlcnMubGVuZ3RoOyBpKyspIHtcclxuXHJcblx0XHRcdC8vIHZhciBtb3ZlcjogTW92ZXIzID0gdGhpcy5tb3ZlcnNbaV07XHJcblxyXG5cdFx0XHQvLyBpZihtb3Zlci5pc0luc2lkZSh0aGlzLmxpcXVpZCkpe1xyXG5cdFx0XHQvLyBcdG1vdmVyLmRyYWcodGhpcy5saXF1aWQpXHJcblx0XHRcdC8vIH1cclxuXHJcblx0XHRcdC8vIHZhciBtID0gMC4xICogbW92ZXIubWFzcztcclxuXHRcdFx0Ly8gdmFyIGdyYXZpdHkgPSBuZXcgUFZlY3RvcigwLCBtKTtcclxuICAgIFx0XHQvLyBtb3Zlci5hcHBseUZvcmNlKGdyYXZpdHkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
