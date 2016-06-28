var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var Point = etch.primitives.Point;
    var Liquid = (function (_super) {
        __extends(Liquid, _super);
        function Liquid(c) {
            _super.call(this);
            this.c = c;
            this.color = 'blue';
            this.position = new Point(0, 0);
        }
        Liquid.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.rect(this.position.x, this.position.y, this.width, this.height);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Liquid;
    }(DisplayObject));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Liquid;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTGlxdWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUVyQztRQUFvQywwQkFBYTtRQUloRCxnQkFBb0IsQ0FBUztZQUM1QixpQkFBTyxDQUFDO1lBRFcsTUFBQyxHQUFELENBQUMsQ0FBUTtZQUZ0QixVQUFLLEdBQVcsTUFBTSxDQUFDO1lBSTdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCxxQkFBSSxHQUFKO1lBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUNGLGFBQUM7SUFBRCxDQWZBLEFBZUMsQ0FmbUMsYUFBYSxHQWVoRDtJQWZEOzRCQWVDLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL2ZvcmNlcy9MaXF1aWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzcGxheU9iamVjdCA9IGV0Y2guZHJhd2luZy5EaXNwbGF5T2JqZWN0O1xyXG5pbXBvcnQgUG9pbnQgPSBldGNoLnByaW1pdGl2ZXMuUG9pbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXF1aWQgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuXHJcblx0cHVibGljIGNvbG9yOiBzdHJpbmcgPSAnYmx1ZSc7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChwdWJsaWMgYzogbnVtYmVyKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5wb3NpdGlvbiA9IG5ldyBQb2ludCgwLCAwKTtcclxuXHR9XHJcblxyXG5cdGRyYXcoKTogdm9pZCB7XHJcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdHRoaXMuY3R4LnJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcblx0XHR0aGlzLmN0eC5maWxsKCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
