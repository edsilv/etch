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
        MainScene.prototype.setup = function () {
            _super.prototype.setup.call(this);
            this.redSquare = new RedSquare_1.RedSquare();
            this.redSquare.init(this);
            this.blueSquare = new BlueSquare_1.BlueSquare();
            this.blueSquare.init(this);
            var moverCache = new Canvas();
            moverCache.hide();
            //for (var i = 0; i < 1000; i++){
            //    var mover = new Mover();
            //    mover.Init(this, moverCache);
            //    this.DisplayList.Add(mover);
            //}
            for (var i = 0; i < 1000; i++) {
                var mover = new DeltaMover_1.DeltaMover();
                mover.init(this, moverCache);
                this.displayList.add(mover);
            }
            this.displayList.add(this.redSquare);
            this.displayList.add(this.blueSquare);
        };
        return MainScene;
    }(Stage));
    exports.MainScene = MainScene;
});
