var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Mover4"], function (require, exports, Mover4_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var MultipleAccelerateTowardsMouse = (function (_super) {
        __extends(MultipleAccelerateTowardsMouse, _super);
        function MultipleAccelerateTowardsMouse() {
            _super.apply(this, arguments);
        }
        MultipleAccelerateTowardsMouse.prototype.setup = function () {
            this.movers = [];
            for (var i = 0; i < 20; i++) {
                var mover = new Mover4_1.Mover4();
                this.movers.push(mover);
                mover.init(this);
                this.displayList.add(mover);
            }
        };
        return MultipleAccelerateTowardsMouse;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MultipleAccelerateTowardsMouse;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL011bHRpcGxlQWNjZWxlcmF0ZVRvd2FyZHNNb3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFJbEM7UUFBNEQsa0RBQUs7UUFBakU7WUFBNEQsOEJBQUs7UUFlakUsQ0FBQztRQVhBLDhDQUFLLEdBQUw7WUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUVqQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMxQixJQUFJLEtBQUssR0FBVyxJQUFJLGVBQU0sRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0YsQ0FBQztRQUVGLHFDQUFDO0lBQUQsQ0FmQSxBQWVDLENBZjJELEtBQUssR0FlaEU7SUFmRDtvREFlQyxDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS92ZWN0b3JzL011bHRpcGxlQWNjZWxlcmF0ZVRvd2FyZHNNb3VzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgU3RhZ2UgPSBldGNoLmRyYXdpbmcuU3RhZ2U7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5pbXBvcnQge01vdmVyNH0gZnJvbSBcIi4vTW92ZXI0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsZUFjY2VsZXJhdGVUb3dhcmRzTW91c2UgZXh0ZW5kcyBTdGFnZXtcclxuXHJcblx0cHVibGljIG1vdmVyczogTW92ZXI0W107XHJcblxyXG5cdHNldHVwKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5tb3ZlcnMgPSBbXTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDIwOyBpKyspIHtcclxuICAgIFx0XHR2YXIgbW92ZXI6IE1vdmVyNCA9IG5ldyBNb3ZlcjQoKTtcclxuXHRcdFx0dGhpcy5tb3ZlcnMucHVzaChtb3Zlcik7XHJcblx0XHRcdG1vdmVyLmluaXQodGhpcyk7XHJcbiAgICAgICAgXHR0aGlzLmRpc3BsYXlMaXN0LmFkZChtb3Zlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
