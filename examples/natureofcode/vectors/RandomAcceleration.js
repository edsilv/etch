var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Mover3"], function (require, exports, Mover3_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var RandomAcceleration = (function (_super) {
        __extends(RandomAcceleration, _super);
        function RandomAcceleration() {
            _super.apply(this, arguments);
        }
        RandomAcceleration.prototype.setup = function () {
            this.mover = new Mover3_1.Mover3();
            this.mover.init(this);
            this.displayList.add(this.mover);
        };
        return RandomAcceleration;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = RandomAcceleration;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL1JhbmRvbUFjY2VsZXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFJbEM7UUFBZ0Qsc0NBQUs7UUFBckQ7WUFBZ0QsOEJBQUs7UUFVckQsQ0FBQztRQU5BLGtDQUFLLEdBQUw7WUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRix5QkFBQztJQUFELENBVkEsQUFVQyxDQVYrQyxLQUFLLEdBVXBEO0lBVkQ7d0NBVUMsQ0FBQSIsImZpbGUiOiJuYXR1cmVvZmNvZGUvdmVjdG9ycy9SYW5kb21BY2NlbGVyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IFN0YWdlID0gZXRjaC5kcmF3aW5nLlN0YWdlO1xyXG5pbXBvcnQgVmVjdG9yID0gZXRjaC5wcmltaXRpdmVzLlZlY3RvcjtcclxuaW1wb3J0IHtNb3ZlcjN9IGZyb20gXCIuL01vdmVyM1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tQWNjZWxlcmF0aW9uIGV4dGVuZHMgU3RhZ2V7XHJcblxyXG5cdHB1YmxpYyBtb3ZlcjogTW92ZXIzO1xyXG5cclxuXHRzZXR1cCgpOiB2b2lke1xyXG5cdFx0dGhpcy5tb3ZlciA9IG5ldyBNb3ZlcjMoKTtcclxuXHRcdHRoaXMubW92ZXIuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlMaXN0LmFkZCh0aGlzLm1vdmVyKTtcclxuXHR9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
