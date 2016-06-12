var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var CyanSquare = (function (_super) {
        __extends(CyanSquare, _super);
        function CyanSquare() {
            _super.apply(this, arguments);
        }
        CyanSquare.prototype.Init = function (canvas) {
            _super.prototype.Init.call(this, canvas);
        };
        CyanSquare.prototype.Setup = function () {
            //console.log('setup cyan');
        };
        CyanSquare.prototype.Update = function () {
            _super.prototype.Update.call(this);
            //console.log('update cyan');
        };
        CyanSquare.prototype.Draw = function () {
            _super.prototype.Draw.call(this);
            this.Ctx.fillStyle = "#00FFFF";
            this.Ctx.fillRect(145, 145, 50, 50);
            //console.log("draw cyan");
        };
        return CyanSquare;
    }(DisplayObject));
    exports.CyanSquare = CyanSquare;
});
