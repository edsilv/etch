define(["require", "exports", './MainScene'], function (require, exports, MainScene_1) {
    "use strict";
    var Canvas = etch.drawing.Canvas;
    var Example = (function () {
        function Example() {
        }
        Example.prototype.init = function () {
            this.canvas = new Canvas();
            this.canvas.style.backgroundColor = '#FFF';
            this.canvas.width = 1024;
            this.canvas.height = 768;
            this.mainScene = new MainScene_1.MainScene();
            this.mainScene.init(this.canvas);
        };
        return Example;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Example;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQvRXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUFBLElBQU8sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBR3BDO1FBQUE7UUFtQkEsQ0FBQztRQWRVLHNCQUFJLEdBQVg7WUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFPTCxjQUFDO0lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtJQW5CRDs2QkFtQkMsQ0FBQSIsImZpbGUiOiJ0eXBlc2NyaXB0L0V4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IHtNYWluU2NlbmV9IGZyb20gJy4vTWFpblNjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGV7XHJcblxyXG4gICAgcHVibGljIGNhbnZhczogQ2FudmFzO1xyXG4gICAgcHVibGljIG1haW5TY2VuZTogTWFpblNjZW5lO1xyXG5cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkZGJztcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDEwMjQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNzY4O1xyXG4gICAgICAgIHRoaXMubWFpblNjZW5lID0gbmV3IE1haW5TY2VuZSgpO1xyXG4gICAgICAgIHRoaXMubWFpblNjZW5lLmluaXQodGhpcy5jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5lY2Vzc2FyeSBmb3Igc3RhdHNcclxuICAgIC8vIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgLy8gICAgIHRoaXMuTWFpblNjZW5lLlVwZGF0ZSgpO1xyXG4gICAgLy8gICAgIHRoaXMuTWFpblNjZW5lLkRyYXcoKTtcclxuICAgIC8vIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
