define(["require", "exports", './MainScene'], function (require, exports, MainScene_1) {
    "use strict";
    var Canvas = etch.drawing.Canvas;
    var Example = (function () {
        function Example() {
        }
        Example.prototype.setup = function () {
            this.canvas = new Canvas();
            this.canvas.style.backgroundColor = '#FFF';
            this.canvas.width = 1024;
            this.canvas.height = 768;
            this.mainScene = new MainScene_1.MainScene();
            this.mainScene.init(this.canvas);
            this.mainScene.drawn.on(function (s, time) {
                //console.log(time);
            }, this);
        };
        return Example;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Example;
});
