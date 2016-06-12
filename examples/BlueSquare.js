var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './GreenSquare', './CyanSquare'], function (require, exports, GreenSquare_1, CyanSquare_1) {
    "use strict";
    var BlueSquare = (function (_super) {
        __extends(BlueSquare, _super);
        function BlueSquare() {
            _super.apply(this, arguments);
        }
        BlueSquare.prototype.Init = function (canvas) {
            _super.prototype.Init.call(this, canvas);
        };
        BlueSquare.prototype.Setup = function () {
            //console.log('setup blue');
            this.GreenSquare = new GreenSquare_1.GreenSquare();
            this.GreenSquare.Init(this);
            //this.GreenSquare.Hide();
            //this.GreenSquare.Pause();
            this.DisplayList.Add(this.GreenSquare);
            this.CyanSquare = new CyanSquare_1.CyanSquare();
            this.CyanSquare.Init(this);
            this.DisplayList.Add(this.CyanSquare);
            //this.DisplayList.Swap(this.GreenSquare, this.CyanSquare);
            //this.DisplayList.ToFront(this.GreenSquare);
            //this.DisplayList.SetIndex(this.GreenSquare, 1);
        };
        BlueSquare.prototype.Update = function () {
            _super.prototype.Update.call(this);
            //console.log('update blue');
        };
        BlueSquare.prototype.Draw = function () {
            _super.prototype.Draw.call(this);
            this.Ctx.fillStyle = "#0000FF";
            this.Ctx.fillRect(150, 150, 150, 150);
            //console.log("draw blue");
        };
        return BlueSquare;
    }(DisplayObject));
    exports.BlueSquare = BlueSquare;
});
