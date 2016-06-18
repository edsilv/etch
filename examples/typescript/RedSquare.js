var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var RedSquare = (function (_super) {
        __extends(RedSquare, _super);
        function RedSquare() {
            _super.apply(this, arguments);
        }
        RedSquare.prototype.init = function (canvas) {
            _super.prototype.init.call(this, canvas);
        };
        RedSquare.prototype.setup = function () {
            //console.log('setup red');
        };
        RedSquare.prototype.update = function () {
            _super.prototype.update.call(this);
            //console.log('update red');
        };
        RedSquare.prototype.draw = function () {
            _super.prototype.draw.call(this);
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(0, 0, 150, 150);
            //console.log("draw red");
        };
        return RedSquare;
    }(DisplayObject));
    exports.RedSquare = RedSquare;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQvUmVkU3F1YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBQSxJQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUVsRDtRQUErQiw2QkFBYTtRQUE1QztZQUErQiw4QkFBYTtRQXNCNUMsQ0FBQztRQXBCRyx3QkFBSSxHQUFKLFVBQUssTUFBdUI7WUFDeEIsZ0JBQUssQ0FBQyxJQUFJLFlBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUVELHlCQUFLLEdBQUw7WUFDSSwyQkFBMkI7UUFDL0IsQ0FBQztRQUVELDBCQUFNLEdBQU47WUFDSSxnQkFBSyxDQUFDLE1BQU0sV0FBRSxDQUFDO1lBQ2YsNEJBQTRCO1FBQ2hDLENBQUM7UUFFRCx3QkFBSSxHQUFKO1lBQ0ksZ0JBQUssQ0FBQyxJQUFJLFdBQUUsQ0FBQztZQUViLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsQywwQkFBMEI7UUFDOUIsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0F0QkEsQUFzQkMsQ0F0QjhCLGFBQWEsR0FzQjNDO0lBdEJZLGlCQUFTLFlBc0JyQixDQUFBIiwiZmlsZSI6InR5cGVzY3JpcHQvUmVkU3F1YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWRTcXVhcmUgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuXHJcbiAgICBpbml0KGNhbnZhczogSURpc3BsYXlDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3NldHVwIHJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCd1cGRhdGUgcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI0ZGMDAwMFwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDE1MCwgMTUwKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZHJhdyByZWRcIik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
