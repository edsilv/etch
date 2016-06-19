var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var Liquid = (function (_super) {
        __extends(Liquid, _super);
        function Liquid(x, y, w, h, c) {
            _super.call(this);
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.c = c;
        }
        Liquid.prototype.draw = function () {
            //fill(175);
            //rect(this.x, this.y, this.w, this.h);
        };
        return Liquid;
    }(DisplayObject));
    exports.Liquid = Liquid;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvTGlxdWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUVsRDtRQUE0QiwwQkFBYTtRQUV4QyxnQkFBb0IsQ0FBUyxFQUFTLENBQVMsRUFBUyxDQUFTLEVBQVMsQ0FBUyxFQUFTLENBQVM7WUFDcEcsaUJBQU8sQ0FBQztZQURXLE1BQUMsR0FBRCxDQUFDLENBQVE7WUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO1lBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtZQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7WUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBRXJHLENBQUM7UUFFRCxxQkFBSSxHQUFKO1lBQ0MsWUFBWTtZQUNaLHVDQUF1QztRQUN4QyxDQUFDO1FBQ0YsYUFBQztJQUFELENBVkEsQUFVQyxDQVYyQixhQUFhLEdBVXhDO0lBVlksY0FBTSxTQVVsQixDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS9mb3JjZXMvTGlxdWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXF1aWQgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuXHJcblx0Y29uc3RydWN0b3IgKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIsIHB1YmxpYyB3OiBudW1iZXIsIHB1YmxpYyBoOiBudW1iZXIsIHB1YmxpYyBjOiBudW1iZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRkcmF3KCk6IHZvaWQge1xyXG5cdFx0Ly9maWxsKDE3NSk7XHJcblx0XHQvL3JlY3QodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
