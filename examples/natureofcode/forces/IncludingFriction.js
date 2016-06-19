var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Mover3'], function (require, exports, Mover3_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var Vector = etch.primitives.Vector;
    var IncludingFriction = (function (_super) {
        __extends(IncludingFriction, _super);
        function IncludingFriction() {
            _super.apply(this, arguments);
        }
        IncludingFriction.prototype.setup = function () {
            this.movers = [];
            this.friction = 0.01;
            this.wind = new Vector(0.01, 0);
            this.gravity = new Vector(0, 0.1);
            for (var i = 0; i < 10; i++) {
                var mover = new Mover3_1.Mover3(Math.randomBetween(0.1, 5), 0, 0);
                this.movers.push(mover);
                mover.init(this);
                this.displayList.add(mover);
            }
        };
        return IncludingFriction;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = IncludingFriction;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS9mb3JjZXMvSW5jbHVkaW5nRnJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUNBLElBQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2xDLElBQU8sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBR3ZDO1FBQStDLHFDQUFLO1FBQXBEO1lBQStDLDhCQUFLO1FBcUJwRCxDQUFDO1FBZEEsaUNBQUssR0FBTDtZQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWpCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRWxDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzFCLElBQUksS0FBSyxHQUFXLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLENBQUM7UUFDRixDQUFDO1FBQ0Ysd0JBQUM7SUFBRCxDQXJCQSxBQXFCQyxDQXJCOEMsS0FBSyxHQXFCbkQ7SUFyQkQ7dUNBcUJDLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL2ZvcmNlcy9JbmNsdWRpbmdGcmljdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgU3RhZ2UgPSBldGNoLmRyYXdpbmcuU3RhZ2U7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5pbXBvcnQge01vdmVyM30gZnJvbSAnLi9Nb3ZlcjMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkaW5nRnJpY3Rpb24gZXh0ZW5kcyBTdGFnZXtcclxuXHJcblx0cHVibGljIG1vdmVyczogTW92ZXIzW107XHJcblx0cHVibGljIGZyaWN0aW9uOiBudW1iZXI7XHJcblx0cHVibGljIHdpbmQ6IFZlY3RvcjtcclxuXHRwdWJsaWMgZ3Jhdml0eTogVmVjdG9yO1xyXG5cclxuXHRzZXR1cCgpOiB2b2lkIHtcclxuXHRcdHRoaXMubW92ZXJzID0gW107XHJcblxyXG5cdFx0dGhpcy5mcmljdGlvbiA9IDAuMDE7XHJcblx0XHR0aGlzLndpbmQgPSBuZXcgVmVjdG9yKDAuMDEsIDApO1xyXG5cdFx0dGhpcy5ncmF2aXR5ID0gbmV3IFZlY3RvcigwLCAwLjEpO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgXHRcdHZhciBtb3ZlcjogTW92ZXIzID0gbmV3IE1vdmVyMyhNYXRoLnJhbmRvbUJldHdlZW4oMC4xLCA1KSwgMCwgMCk7XHJcblx0XHRcdHRoaXMubW92ZXJzLnB1c2gobW92ZXIpO1xyXG5cdFx0XHRtb3Zlci5pbml0KHRoaXMpO1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlMaXN0LmFkZChtb3Zlcik7XHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
