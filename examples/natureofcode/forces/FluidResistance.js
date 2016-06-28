var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Liquid', './Mover4'], function (require, exports, Liquid_1, Mover4_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var FluidResistance = (function (_super) {
        __extends(FluidResistance, _super);
        function FluidResistance() {
            _super.apply(this, arguments);
        }
        FluidResistance.prototype.setup = function () {
            this.movers = [];
            this.liquid = new Liquid_1.default(0.1);
            this.liquid.init(this);
            this.displayList.add(this.liquid);
            for (var i = 0; i < 10; i++) {
                var mover = new Mover4_1.Mover4(Math.randomBetween(1, 4), this.canvasWidth / 10 * i, 0);
                this.movers.push(mover);
                mover.init(this);
                this.displayList.add(mover);
            }
        };
        FluidResistance.prototype.update = function () {
            this.liquid.position.x = 0;
            this.liquid.position.y = this.canvasHeight * .5;
            this.liquid.width = this.canvasWidth;
            this.liquid.height = this.canvasHeight * .5;
        };
        return FluidResistance;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = FluidResistance;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvRmx1aWRSZXNpc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUtsQztRQUE2QyxtQ0FBSztRQUFsRDtZQUE2Qyw4QkFBSztRQTJCbEQsQ0FBQztRQXJCQSwrQkFBSyxHQUFMO1lBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFFakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWxDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzFCLElBQUksS0FBSyxHQUFXLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLENBQUM7UUFDRixDQUFDO1FBRUQsZ0NBQU0sR0FBTjtZQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDN0MsQ0FBQztRQUNGLHNCQUFDO0lBQUQsQ0EzQkEsQUEyQkMsQ0EzQjRDLEtBQUssR0EyQmpEO0lBM0JEO3FDQTJCQyxDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS9mb3JjZXMvRmx1aWRSZXNpc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBTdGFnZSA9IGV0Y2guZHJhd2luZy5TdGFnZTtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcbmltcG9ydCB7ZGVmYXVsdCBhcyBMaXF1aWR9IGZyb20gJy4vTGlxdWlkJztcclxuaW1wb3J0IHtNb3ZlcjR9IGZyb20gJy4vTW92ZXI0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdWlkUmVzaXN0YW5jZSBleHRlbmRzIFN0YWdlIHtcclxuXHJcblx0cHVibGljIG1vdmVyczogTW92ZXI0W107XHJcblx0cHVibGljIGdyYXZpdHk6IFZlY3RvcjtcclxuXHRwdWJsaWMgbGlxdWlkOiBMaXF1aWQ7XHJcblxyXG5cdHNldHVwKCk6IHZvaWR7XHJcblx0XHR0aGlzLm1vdmVycyA9IFtdO1xyXG5cclxuXHRcdHRoaXMubGlxdWlkID0gbmV3IExpcXVpZCgwLjEpO1xyXG5cdFx0dGhpcy5saXF1aWQuaW5pdCh0aGlzKTtcclxuXHRcdHRoaXMuZGlzcGxheUxpc3QuYWRkKHRoaXMubGlxdWlkKTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIFx0XHR2YXIgbW92ZXI6IE1vdmVyNCA9IG5ldyBNb3ZlcjQoTWF0aC5yYW5kb21CZXR3ZWVuKDEsIDQpLCB0aGlzLmNhbnZhc1dpZHRoIC8gMTAgKiBpLCAwKTtcclxuXHRcdFx0dGhpcy5tb3ZlcnMucHVzaChtb3Zlcik7XHJcblx0XHRcdG1vdmVyLmluaXQodGhpcyk7XHJcblx0XHRcdHRoaXMuZGlzcGxheUxpc3QuYWRkKG1vdmVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMubGlxdWlkLnBvc2l0aW9uLnggPSAwO1xyXG5cdFx0dGhpcy5saXF1aWQucG9zaXRpb24ueSA9IHRoaXMuY2FudmFzSGVpZ2h0ICogLjU7XHJcblx0XHR0aGlzLmxpcXVpZC53aWR0aCA9IHRoaXMuY2FudmFzV2lkdGg7XHJcblx0XHR0aGlzLmxpcXVpZC5oZWlnaHQgPSB0aGlzLmNhbnZhc0hlaWdodCAqIC41O1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
