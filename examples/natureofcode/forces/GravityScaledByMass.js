var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Mover2'], function (require, exports, Mover2_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var Vector = etch.primitives.Vector;
    var GravityScaledByMass = (function (_super) {
        __extends(GravityScaledByMass, _super);
        function GravityScaledByMass() {
            _super.apply(this, arguments);
        }
        GravityScaledByMass.prototype.setup = function () {
            this.movers = [];
            this.wind = new Vector(0.01, 0);
            this.gravity = new Vector(0, 0.1);
            for (var i = 0; i < 10; i++) {
                var mover = new Mover2_1.Mover2(Math.randomBetween(0.1, 5), 0, 0);
                this.movers.push(mover);
                mover.init(this);
                this.displayList.add(mover);
            }
        };
        return GravityScaledByMass;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GravityScaledByMass;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvR3Jhdml0eVNjYWxlZEJ5TWFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDbEMsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFHdkM7UUFBaUQsdUNBQUs7UUFBdEQ7WUFBaUQsOEJBQUs7UUFvQnRELENBQUM7UUFkQSxtQ0FBSyxHQUFMO1lBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFFakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFbEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxLQUFLLEdBQVcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsQ0FBQztRQUNGLENBQUM7UUFFRiwwQkFBQztJQUFELENBcEJBLEFBb0JDLENBcEJnRCxLQUFLLEdBb0JyRDtJQXBCRDt5Q0FvQkMsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvZm9yY2VzL0dyYXZpdHlTY2FsZWRCeU1hc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IFN0YWdlID0gZXRjaC5kcmF3aW5nLlN0YWdlO1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuaW1wb3J0IHtNb3ZlcjJ9IGZyb20gJy4vTW92ZXIyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXZpdHlTY2FsZWRCeU1hc3MgZXh0ZW5kcyBTdGFnZXtcclxuXHJcblx0cHVibGljIG1vdmVyczogTW92ZXIyW107XHJcblx0cHVibGljIHdpbmQ6IFZlY3RvcjtcclxuXHRwdWJsaWMgZ3Jhdml0eTogVmVjdG9yO1xyXG5cclxuXHRzZXR1cCgpOiB2b2lkIHtcclxuXHRcdHRoaXMubW92ZXJzID0gW107XHJcblxyXG5cdFx0dGhpcy53aW5kID0gbmV3IFZlY3RvcigwLjAxLCAwKTtcclxuXHRcdHRoaXMuZ3Jhdml0eSA9IG5ldyBWZWN0b3IoMCwgMC4xKTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIFx0XHR2YXIgbW92ZXI6IE1vdmVyMiA9IG5ldyBNb3ZlcjIoTWF0aC5yYW5kb21CZXR3ZWVuKDAuMSwgNSksIDAsIDApO1xyXG5cdFx0XHR0aGlzLm1vdmVycy5wdXNoKG1vdmVyKTtcclxuXHRcdFx0bW92ZXIuaW5pdCh0aGlzKTtcclxuXHRcdFx0dGhpcy5kaXNwbGF5TGlzdC5hZGQobW92ZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
