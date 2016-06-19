var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Mover2"], function (require, exports, Mover2_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var ConstantAcceleration = (function (_super) {
        __extends(ConstantAcceleration, _super);
        function ConstantAcceleration() {
            _super.apply(this, arguments);
        }
        ConstantAcceleration.prototype.setup = function () {
            this.mover = new Mover2_1.Mover2();
            this.mover.init(this);
            this.displayList.add(this.mover);
        };
        return ConstantAcceleration;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ConstantAcceleration;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL0NvbnN0YW50QWNjZWxlcmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUlsQztRQUFrRCx3Q0FBSztRQUF2RDtZQUFrRCw4QkFBSztRQVV2RCxDQUFDO1FBTkEsb0NBQUssR0FBTDtZQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUVGLDJCQUFDO0lBQUQsQ0FWQSxBQVVDLENBVmlELEtBQUssR0FVdEQ7SUFWRDswQ0FVQyxDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS92ZWN0b3JzL0NvbnN0YW50QWNjZWxlcmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBTdGFnZSA9IGV0Y2guZHJhd2luZy5TdGFnZTtcclxuaW1wb3J0IFZlY3RvciA9IGV0Y2gucHJpbWl0aXZlcy5WZWN0b3I7XHJcbmltcG9ydCB7TW92ZXIyfSBmcm9tIFwiLi9Nb3ZlcjJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0YW50QWNjZWxlcmF0aW9uIGV4dGVuZHMgU3RhZ2V7XHJcblxyXG5cdHB1YmxpYyBtb3ZlcjogTW92ZXIyO1xyXG5cclxuXHRzZXR1cCgpOiB2b2lke1xyXG5cdFx0dGhpcy5tb3ZlciA9IG5ldyBNb3ZlcjIoKTtcclxuXHRcdHRoaXMubW92ZXIuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlMaXN0LmFkZCh0aGlzLm1vdmVyKTtcclxuXHR9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
