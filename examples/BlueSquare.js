var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './GreenSquare', './CyanSquare'], function (require, exports, GreenSquare_1, CyanSquare_1) {
    "use strict";
    var DisplayObject = etch.drawing.DisplayObject;
    var BlueSquare = (function (_super) {
        __extends(BlueSquare, _super);
        function BlueSquare() {
            _super.apply(this, arguments);
        }
        BlueSquare.prototype.init = function (canvas) {
            _super.prototype.init.call(this, canvas);
        };
        BlueSquare.prototype.setup = function () {
            //console.log('setup blue');
            this.greenSquare = new GreenSquare_1.GreenSquare();
            this.greenSquare.init(this);
            //this.greenSquare.Hide();
            //this.greenSquare.Pause();
            this.displayList.add(this.greenSquare);
            this.cyanSquare = new CyanSquare_1.CyanSquare();
            this.cyanSquare.init(this);
            this.displayList.add(this.cyanSquare);
            //this.DisplayList.Swap(this.greenSquare, this.cyanSquare);
            //this.DisplayList.ToFront(this.greenSquare);
            //this.DisplayList.SetIndex(this.greenSquare, 1);
        };
        BlueSquare.prototype.update = function () {
            _super.prototype.update.call(this);
            //console.log('update blue');
        };
        BlueSquare.prototype.draw = function () {
            _super.prototype.draw.call(this);
            this.ctx.fillStyle = "#0000FF";
            this.ctx.fillRect(150, 150, 150, 150);
            //console.log("draw blue");
        };
        return BlueSquare;
    }(DisplayObject));
    exports.BlueSquare = BlueSquare;
});
