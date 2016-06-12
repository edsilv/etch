var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './BlueSquare', './RedSquare', "./DeltaMover"], function (require, exports, BlueSquare_1, RedSquare_1, DeltaMover_1) {
    "use strict";
    var Canvas = etch.drawing.Canvas;
    var Stage = etch.drawing.Stage;
    var MainScene = (function (_super) {
        __extends(MainScene, _super);
        function MainScene(maxDelta) {
            _super.call(this, maxDelta);
        }
        MainScene.prototype.Setup = function () {
            _super.prototype.Setup.call(this);
            this.RedSquare = new RedSquare_1.RedSquare();
            this.RedSquare.Init(this);
            this.BlueSquare = new BlueSquare_1.BlueSquare();
            this.BlueSquare.Init(this);
            var moverCache = new Canvas();
            //for (var i = 0; i < 1000; i++){
            //    var mover = new Mover();
            //    mover.Init(this, moverCache);
            //    this.DisplayList.Add(mover);
            //}
            for (var i = 0; i < 1000; i++) {
                var mover = new DeltaMover_1.DeltaMover();
                mover.Init(this, moverCache);
                this.DisplayList.Add(mover);
            }
            this.DisplayList.Add(this.RedSquare);
            this.DisplayList.Add(this.BlueSquare);
        };
        return MainScene;
    }(Stage));
    exports.MainScene = MainScene;
});
