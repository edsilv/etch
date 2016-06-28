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
            this.mainScene.ticked.on(function (lastTime, nowTime) {
                // example of listening to stage ticked event
            }, this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9FeGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUEsSUFBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFJcEM7UUFBQTtRQTJCQSxDQUFDO1FBckJVLHNCQUFJLEdBQVg7WUFBQSxpQkFlQztZQWRHLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvQyw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQUMsUUFBZ0IsRUFBRSxPQUFlO2dCQUN2RCw2Q0FBNkM7WUFDakQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRVQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFFTSx3QkFBTSxHQUFiO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDM0QsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQTNCQSxBQTJCQyxJQUFBO0lBM0JEOzZCQTJCQyxDQUFBIiwiZmlsZSI6Im5hdHVyZW9mY29kZS9FeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyA9IGV0Y2guZHJhd2luZy5DYW52YXM7XHJcbmltcG9ydCBJRGlzcGxheU9iamVjdCA9IGV0Y2guZHJhd2luZy5JRGlzcGxheU9iamVjdDtcclxuaW1wb3J0IFN0YWdlID0gZXRjaC5kcmF3aW5nLlN0YWdlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZXtcclxuXHJcbiAgICBwcml2YXRlIF9jYW52YXM6IENhbnZhcztcclxuICAgIHByaXZhdGUgX3BhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHVibGljIG1haW5TY2VuZTogU3RhZ2U7XHJcblxyXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLl9wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAvL3RoaXMuX2NhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XHJcbiAgICAgICAgdGhpcy5tYWluU2NlbmUuaW5pdCh0aGlzLl9jYW52YXMpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpblNjZW5lLnRpY2tlZC5vbigobGFzdFRpbWU6IG51bWJlciwgbm93VGltZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGV4YW1wbGUgb2YgbGlzdGVuaW5nIHRvIHN0YWdlIHRpY2tlZCBldmVudFxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fcGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5fcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
