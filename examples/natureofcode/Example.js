define(["require", "exports"], function (require, exports) {
    "use strict";
    var Canvas = etch.drawing.Canvas;
    var Example = (function () {
        function Example() {
        }
        Example.prototype.init = function () {
            var _this = this;
            this._parentElement = document.getElementById('main');
            this._canvas = new Canvas(this._parentElement);
            //this._canvas.style.backgroundColor = 'blue';
            this.mainScene.init(this._canvas);
            $(window).on('resize', function (e) {
                _this.resize();
            });
            // this.mainScene.ticked.on((lastTime: number, nowTime: number) => {
            //     if(this.mainScene.isFirstFrame()){
            this.resize();
            //     }
            // }, this);
        };
        Example.prototype.resize = function () {
            this._canvas.width = this._parentElement.offsetWidth;
            this._canvas.height = this._parentElement.offsetHeight;
        };
        return Example;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Example;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9FeGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUEsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFJcEM7UUFBQTtRQTJCQSxDQUFDO1FBckJVLHNCQUFJLEdBQVg7WUFBQSxpQkFlQztZQWRHLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvQyw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBRUgsb0VBQW9FO1lBQ3BFLHlDQUF5QztZQUNqQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEIsUUFBUTtZQUNSLFlBQVk7UUFDaEIsQ0FBQztRQUVNLHdCQUFNLEdBQWI7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztZQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUMzRCxDQUFDO1FBQ0wsY0FBQztJQUFELENBM0JBLEFBMkJDLElBQUE7SUEzQkQ7NkJBMkJDLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL0V4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzID0gZXRjaC5kcmF3aW5nLkNhbnZhcztcclxuaW1wb3J0IElEaXNwbGF5T2JqZWN0ID0gZXRjaC5kcmF3aW5nLklEaXNwbGF5T2JqZWN0O1xyXG5pbXBvcnQgU3RhZ2UgPSBldGNoLmRyYXdpbmcuU3RhZ2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxle1xyXG5cclxuICAgIHByaXZhdGUgX2NhbnZhczogQ2FudmFzO1xyXG4gICAgcHJpdmF0ZSBfcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgbWFpblNjZW5lOiBTdGFnZTtcclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMuX3BhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIC8vdGhpcy5fY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcclxuICAgICAgICB0aGlzLm1haW5TY2VuZS5pbml0KHRoaXMuX2NhbnZhcyk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5tYWluU2NlbmUudGlja2VkLm9uKChsYXN0VGltZTogbnVtYmVyLCBub3dUaW1lOiBudW1iZXIpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYodGhpcy5tYWluU2NlbmUuaXNGaXJzdEZyYW1lKCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fcGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
