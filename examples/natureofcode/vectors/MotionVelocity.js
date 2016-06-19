var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Mover"], function (require, exports, Mover_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var MotionVelocity = (function (_super) {
        __extends(MotionVelocity, _super);
        function MotionVelocity() {
            _super.apply(this, arguments);
        }
        MotionVelocity.prototype.setup = function () {
            this.mover = new Mover_1.Mover();
            this.mover.init(this);
            this.displayList.add(this.mover);
        };
        return MotionVelocity;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MotionVelocity;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL01vdGlvblZlbG9jaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUVsQztRQUE0QyxrQ0FBSztRQUFqRDtZQUE0Qyw4QkFBSztRQVVqRCxDQUFDO1FBTkcsOEJBQUssR0FBTDtZQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVMLHFCQUFDO0lBQUQsQ0FWQSxBQVVDLENBVjJDLEtBQUssR0FVaEQ7SUFWRDtvQ0FVQyxDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS92ZWN0b3JzL01vdGlvblZlbG9jaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb3Zlcn0gZnJvbSBcIi4vTW92ZXJcIjtcclxuaW1wb3J0IFN0YWdlID0gZXRjaC5kcmF3aW5nLlN0YWdlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW90aW9uVmVsb2NpdHkgZXh0ZW5kcyBTdGFnZXtcclxuXHJcbiAgICBwdWJsaWMgbW92ZXI6IE1vdmVyO1xyXG5cclxuICAgIHNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW92ZXIgPSBuZXcgTW92ZXIoKTtcclxuICAgICAgICB0aGlzLm1vdmVyLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TGlzdC5hZGQodGhpcy5tb3Zlcik7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
