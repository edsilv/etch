//import {DisplayObject} from '../src/Drawing/DisplayObject';
//import {IDisplayContext} from '../src/Drawing/IDisplayContext';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var GreenSquare = (function (_super) {
        __extends(GreenSquare, _super);
        function GreenSquare() {
            _super.apply(this, arguments);
        }
        GreenSquare.prototype.Init = function (canvas) {
            _super.prototype.Init.call(this, canvas);
        };
        GreenSquare.prototype.Setup = function () {
            //console.log('setup green');
        };
        GreenSquare.prototype.Update = function () {
            _super.prototype.Update.call(this);
            //console.log('update green');
        };
        GreenSquare.prototype.Draw = function () {
            _super.prototype.Draw.call(this);
            this.Ctx.fillStyle = "#00FF00";
            this.Ctx.fillRect(125, 125, 50, 50);
            //console.log("draw green");
        };
        return GreenSquare;
    }(DisplayObject));
    exports.GreenSquare = GreenSquare;
});
