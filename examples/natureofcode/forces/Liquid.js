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
            this.ctx.rect(this.position.x, this.position.y, this.width, this.height);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        };
        return Liquid;
    }(DisplayObject));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Liquid;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTGlxdWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNsRCxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUVyQztRQUFvQywwQkFBYTtRQUloRCxnQkFBb0IsQ0FBUztZQUM1QixpQkFBTyxDQUFDO1lBRFcsTUFBQyxHQUFELENBQUMsQ0FBUTtZQUZ0QixVQUFLLEdBQVcsTUFBTSxDQUFDO1lBSTdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCxxQkFBSSxHQUFKO1lBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFDRixhQUFDO0lBQUQsQ0FkQSxBQWNDLENBZG1DLGFBQWEsR0FjaEQ7SUFkRDs0QkFjQyxDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS9mb3JjZXMvTGlxdWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuaW1wb3J0IFBvaW50ID0gZXRjaC5wcmltaXRpdmVzLlBvaW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlxdWlkIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcblxyXG5cdHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJ2JsdWUnO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAocHVibGljIGM6IG51bWJlcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgUG9pbnQoMCwgMCk7XHJcblx0fVxyXG5cclxuXHRkcmF3KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jdHgucmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuXHRcdHRoaXMuY3R4LmZpbGwoKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
