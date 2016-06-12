//import {DisplayObject} from '../src/Drawing/DisplayObject';
//import {IDisplayContext} from '../src/Drawing/IDisplayContext';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var RedSquare = (function (_super) {
        __extends(RedSquare, _super);
        function RedSquare() {
            _super.apply(this, arguments);
        }
        RedSquare.prototype.Init = function (canvas) {
            _super.prototype.Init.call(this, canvas);
        };
        RedSquare.prototype.Setup = function () {
            //console.log('setup red');
        };
        RedSquare.prototype.Update = function () {
            _super.prototype.Update.call(this);
            //console.log('update red');
        };
        RedSquare.prototype.Draw = function () {
            _super.prototype.Draw.call(this);
            this.Ctx.fillStyle = "#FF0000";
            this.Ctx.fillRect(0, 0, 150, 150);
            //console.log("draw red");
        };
        return RedSquare;
    }(DisplayObject));
    exports.RedSquare = RedSquare;
});
