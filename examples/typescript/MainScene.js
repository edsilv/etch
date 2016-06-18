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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQvTWFpblNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBQSxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQU9sQztRQUErQiw2QkFBSztRQUtoQyxtQkFBWSxRQUFpQjtZQUN6QixrQkFBTSxRQUFRLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBRUQseUJBQUssR0FBTDtZQUNJLGdCQUFLLENBQUMsS0FBSyxXQUFFLENBQUM7WUFFZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFM0IsSUFBSSxVQUFVLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUN0QyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFbEIsaUNBQWlDO1lBQ2pDLDhCQUE4QjtZQUM5QixtQ0FBbUM7WUFDbkMsa0NBQWtDO1lBQ2xDLEdBQUc7WUFFSCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztnQkFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDTCxnQkFBQztJQUFELENBbkNBLEFBbUNDLENBbkM4QixLQUFLLEdBbUNuQztJQW5DWSxpQkFBUyxZQW1DckIsQ0FBQSIsImZpbGUiOiJ0eXBlc2NyaXB0L01haW5TY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgU3RhZ2UgPSBldGNoLmRyYXdpbmcuU3RhZ2U7XHJcbmltcG9ydCB7Qmx1ZVNxdWFyZX0gZnJvbSAnLi9CbHVlU3F1YXJlJztcclxuaW1wb3J0IHtNb3Zlcn0gZnJvbSAnLi9Nb3Zlcic7XHJcbmltcG9ydCB7UmVkU3F1YXJlfSBmcm9tICcuL1JlZFNxdWFyZSc7XHJcbmltcG9ydCB7R3JlZW5TcXVhcmV9IGZyb20gXCIuL0dyZWVuU3F1YXJlXCI7XHJcbmltcG9ydCB7RGVsdGFNb3Zlcn0gZnJvbSBcIi4vRGVsdGFNb3ZlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5TY2VuZSBleHRlbmRzIFN0YWdle1xyXG5cclxuICAgIHB1YmxpYyByZWRTcXVhcmU6IFJlZFNxdWFyZTtcclxuICAgIHB1YmxpYyBibHVlU3F1YXJlOiBCbHVlU3F1YXJlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1heERlbHRhPzogbnVtYmVyKXtcclxuICAgICAgICBzdXBlcihtYXhEZWx0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXAoKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0dXAoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWRTcXVhcmUgPSBuZXcgUmVkU3F1YXJlKCk7XHJcbiAgICAgICAgdGhpcy5yZWRTcXVhcmUuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJsdWVTcXVhcmUgPSBuZXcgQmx1ZVNxdWFyZSgpO1xyXG4gICAgICAgIHRoaXMuYmx1ZVNxdWFyZS5pbml0KHRoaXMpO1xyXG5cclxuICAgICAgICB2YXIgbW92ZXJDYWNoZTogQ2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgICAgIG1vdmVyQ2FjaGUuaGlkZSgpO1xyXG5cclxuICAgICAgICAvL2ZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKXtcclxuICAgICAgICAvLyAgICB2YXIgbW92ZXIgPSBuZXcgTW92ZXIoKTtcclxuICAgICAgICAvLyAgICBtb3Zlci5Jbml0KHRoaXMsIG1vdmVyQ2FjaGUpO1xyXG4gICAgICAgIC8vICAgIHRoaXMuRGlzcGxheUxpc3QuQWRkKG1vdmVyKTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgbW92ZXIgPSBuZXcgRGVsdGFNb3ZlcigpO1xyXG4gICAgICAgICAgICBtb3Zlci5pbml0KHRoaXMsIG1vdmVyQ2FjaGUpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlMaXN0LmFkZChtb3Zlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc3BsYXlMaXN0LmFkZCh0aGlzLnJlZFNxdWFyZSk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TGlzdC5hZGQodGhpcy5ibHVlU3F1YXJlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
