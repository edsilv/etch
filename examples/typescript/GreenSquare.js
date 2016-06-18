var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var GreenSquare = (function (_super) {
        __extends(GreenSquare, _super);
        function GreenSquare() {
            _super.apply(this, arguments);
        }
        GreenSquare.prototype.init = function (canvas) {
            _super.prototype.init.call(this, canvas);
        };
        GreenSquare.prototype.setup = function () {
            //console.log('setup green');
        };
        GreenSquare.prototype.update = function () {
            _super.prototype.update.call(this);
            //console.log('update green');
        };
        GreenSquare.prototype.draw = function () {
            _super.prototype.draw.call(this);
            this.ctx.fillStyle = "#00FF00";
            this.ctx.fillRect(125, 125, 50, 50);
            //console.log("draw green");
        };
        return GreenSquare;
    }(DisplayObject));
    exports.GreenSquare = GreenSquare;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQvR3JlZW5TcXVhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFBLElBQU8sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBRWxEO1FBQWlDLCtCQUFhO1FBQTlDO1lBQWlDLDhCQUFhO1FBc0I5QyxDQUFDO1FBcEJHLDBCQUFJLEdBQUosVUFBSyxNQUF1QjtZQUN4QixnQkFBSyxDQUFDLElBQUksWUFBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBRUQsMkJBQUssR0FBTDtZQUNJLDZCQUE2QjtRQUNqQyxDQUFDO1FBRUQsNEJBQU0sR0FBTjtZQUNJLGdCQUFLLENBQUMsTUFBTSxXQUFFLENBQUM7WUFDZiw4QkFBOEI7UUFDbEMsQ0FBQztRQUVELDBCQUFJLEdBQUo7WUFDSSxnQkFBSyxDQUFDLElBQUksV0FBRSxDQUFDO1lBRWIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLDRCQUE0QjtRQUNoQyxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQXRCQSxBQXNCQyxDQXRCZ0MsYUFBYSxHQXNCN0M7SUF0QlksbUJBQVcsY0FzQnZCLENBQUEiLCJmaWxlIjoidHlwZXNjcmlwdC9HcmVlblNxdWFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaXNwbGF5T2JqZWN0ID0gZXRjaC5kcmF3aW5nLkRpc3BsYXlPYmplY3Q7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JlZW5TcXVhcmUgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuXHJcbiAgICBpbml0KGNhbnZhczogSURpc3BsYXlDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3NldHVwIGdyZWVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3VwZGF0ZSBncmVlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMEZGMDBcIjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMjUsIDEyNSwgNTAsIDUwKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZHJhdyBncmVlblwiKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
