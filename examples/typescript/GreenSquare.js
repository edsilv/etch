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
