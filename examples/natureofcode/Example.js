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
            this.resize();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9FeGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUEsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFHcEM7UUFBQTtRQXVCQSxDQUFDO1FBakJVLHNCQUFJLEdBQVg7WUFBQSxpQkFXQztZQVZHLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvQyw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFFTSx3QkFBTSxHQUFiO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDM0QsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQXZCQSxBQXVCQyxJQUFBO0lBdkJEOzZCQXVCQyxDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS9FeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBJRGlzcGxheU9iamVjdCA9IGV0Y2guZHJhd2luZy5JRGlzcGxheU9iamVjdDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGV7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FudmFzOiBDYW52YXM7XHJcbiAgICBwcml2YXRlIF9wYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHB1YmxpYyBtYWluU2NlbmU6IElEaXNwbGF5T2JqZWN0O1xyXG5cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IG5ldyBDYW52YXModGhpcy5fcGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgLy90aGlzLl9jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xyXG4gICAgICAgIHRoaXMubWFpblNjZW5lLmluaXQodGhpcy5fY2FudmFzKTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fcGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
