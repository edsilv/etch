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
