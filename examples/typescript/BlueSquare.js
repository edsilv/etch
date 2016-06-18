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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQvQmx1ZVNxdWFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBRUEsSUFBTyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFFbEQ7UUFBZ0MsOEJBQWE7UUFBN0M7WUFBZ0MsOEJBQWE7UUFzQzdDLENBQUM7UUFqQ0cseUJBQUksR0FBSixVQUFLLE1BQXVCO1lBQ3hCLGdCQUFLLENBQUMsSUFBSSxZQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCwwQkFBSyxHQUFMO1lBQ0ksNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsMEJBQTBCO1lBQzFCLDJCQUEyQjtZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFdEMsMkRBQTJEO1lBQzNELDZDQUE2QztZQUM3QyxpREFBaUQ7UUFDckQsQ0FBQztRQUVELDJCQUFNLEdBQU47WUFDSSxnQkFBSyxDQUFDLE1BQU0sV0FBRSxDQUFDO1lBQ2YsNkJBQTZCO1FBQ2pDLENBQUM7UUFFRCx5QkFBSSxHQUFKO1lBQ0ksZ0JBQUssQ0FBQyxJQUFJLFdBQUUsQ0FBQztZQUViLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN0QywyQkFBMkI7UUFDL0IsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0F0Q0EsQUFzQ0MsQ0F0QytCLGFBQWEsR0FzQzVDO0lBdENZLGtCQUFVLGFBc0N0QixDQUFBIiwiZmlsZSI6InR5cGVzY3JpcHQvQmx1ZVNxdWFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R3JlZW5TcXVhcmV9IGZyb20gJy4vR3JlZW5TcXVhcmUnO1xyXG5pbXBvcnQge0N5YW5TcXVhcmV9IGZyb20gJy4vQ3lhblNxdWFyZSc7XHJcbmltcG9ydCBEaXNwbGF5T2JqZWN0ID0gZXRjaC5kcmF3aW5nLkRpc3BsYXlPYmplY3Q7XHJcblxyXG5leHBvcnQgY2xhc3MgQmx1ZVNxdWFyZSBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG5cclxuICAgIHB1YmxpYyBjeWFuU3F1YXJlOiBDeWFuU3F1YXJlO1xyXG4gICAgcHVibGljIGdyZWVuU3F1YXJlOiBHcmVlblNxdWFyZTtcclxuXHJcbiAgICBpbml0KGNhbnZhczogSURpc3BsYXlDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdChjYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3NldHVwIGJsdWUnKTtcclxuICAgICAgICB0aGlzLmdyZWVuU3F1YXJlID0gbmV3IEdyZWVuU3F1YXJlKCk7XHJcbiAgICAgICAgdGhpcy5ncmVlblNxdWFyZS5pbml0KHRoaXMpO1xyXG4gICAgICAgIC8vdGhpcy5ncmVlblNxdWFyZS5IaWRlKCk7XHJcbiAgICAgICAgLy90aGlzLmdyZWVuU3F1YXJlLlBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TGlzdC5hZGQodGhpcy5ncmVlblNxdWFyZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3lhblNxdWFyZSA9IG5ldyBDeWFuU3F1YXJlKCk7XHJcbiAgICAgICAgdGhpcy5jeWFuU3F1YXJlLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TGlzdC5hZGQodGhpcy5jeWFuU3F1YXJlKTtcclxuXHJcbiAgICAgICAgLy90aGlzLkRpc3BsYXlMaXN0LlN3YXAodGhpcy5ncmVlblNxdWFyZSwgdGhpcy5jeWFuU3F1YXJlKTtcclxuICAgICAgICAvL3RoaXMuRGlzcGxheUxpc3QuVG9Gcm9udCh0aGlzLmdyZWVuU3F1YXJlKTtcclxuICAgICAgICAvL3RoaXMuRGlzcGxheUxpc3QuU2V0SW5kZXgodGhpcy5ncmVlblNxdWFyZSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3VwZGF0ZSBibHVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDBGRlwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDE1MCwgMTUwLCAxNTAsIDE1MCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRyYXcgYmx1ZVwiKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
