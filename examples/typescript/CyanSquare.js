var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var CyanSquare = (function (_super) {
        __extends(CyanSquare, _super);
        function CyanSquare() {
            _super.apply(this, arguments);
        }
        CyanSquare.prototype.init = function (canvas) {
            _super.prototype.init.call(this, canvas);
        };
        CyanSquare.prototype.setup = function () {
            //console.log('setup cyan');
        };
        CyanSquare.prototype.update = function () {
            _super.prototype.update.call(this);
            //console.log('update cyan');
        };
        CyanSquare.prototype.draw = function () {
            _super.prototype.draw.call(this);
            this.ctx.fillStyle = "#00FFFF";
            this.ctx.fillRect(145, 145, 50, 50);
            //console.log("draw cyan");
        };
        return CyanSquare;
    }(DisplayObject));
    exports.CyanSquare = CyanSquare;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQvQ3lhblNxdWFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsSUFBTyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFFbEQ7UUFBZ0MsOEJBQWE7UUFBN0M7WUFBZ0MsOEJBQWE7UUFzQjdDLENBQUM7UUFwQkcseUJBQUksR0FBSixVQUFLLE1BQXVCO1lBQ3hCLGdCQUFLLENBQUMsSUFBSSxZQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCwwQkFBSyxHQUFMO1lBQ0ksNEJBQTRCO1FBQ2hDLENBQUM7UUFFRCwyQkFBTSxHQUFOO1lBQ0ksZ0JBQUssQ0FBQyxNQUFNLFdBQUUsQ0FBQztZQUNmLDZCQUE2QjtRQUNqQyxDQUFDO1FBRUQseUJBQUksR0FBSjtZQUNJLGdCQUFLLENBQUMsSUFBSSxXQUFFLENBQUM7WUFFYixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEMsMkJBQTJCO1FBQy9CLENBQUM7UUFDTCxpQkFBQztJQUFELENBdEJBLEFBc0JDLENBdEIrQixhQUFhLEdBc0I1QztJQXRCWSxrQkFBVSxhQXNCdEIsQ0FBQSIsImZpbGUiOiJ0eXBlc2NyaXB0L0N5YW5TcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyZWVuU3F1YXJlfSBmcm9tICcuL0dyZWVuU3F1YXJlJztcclxuaW1wb3J0IERpc3BsYXlPYmplY3QgPSBldGNoLmRyYXdpbmcuRGlzcGxheU9iamVjdDtcclxuXHJcbmV4cG9ydCBjbGFzcyBDeWFuU3F1YXJlIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcblxyXG4gICAgaW5pdChjYW52YXM6IElEaXNwbGF5Q29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXQoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdzZXR1cCBjeWFuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3VwZGF0ZSBjeWFuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwRkZGRlwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDE0NSwgMTQ1LCA1MCwgNTApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkcmF3IGN5YW5cIik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
