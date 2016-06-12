define(["require", "exports", './MainScene'], function (require, exports, MainScene_1) {
    "use strict";
    var Canvas = etch.drawing.Canvas;
    var Test = (function () {
        function Test() {
        }
        Test.prototype.Setup = function () {
            this.Canvas = new Canvas();
            this.Canvas.Style.backgroundColor = '#FFF';
            this.Canvas.Width = 1024;
            this.Canvas.Height = 768;
            this.MainScene = new MainScene_1.MainScene();
            this.MainScene.Init(this.Canvas);
            this.MainScene.Drawn.on(function (s, time) {
                //console.log(time);
            }, this);
        };
        return Test;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Test;
});
