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
