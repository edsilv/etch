var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Mover4'], function (require, exports, Mover4_1) {
    "use strict";
    var Stage = etch.drawing.Stage;
    var AccelerateTowardsMouse = (function (_super) {
        __extends(AccelerateTowardsMouse, _super);
        function AccelerateTowardsMouse() {
            _super.apply(this, arguments);
        }
        AccelerateTowardsMouse.prototype.setup = function () {
            this.mover = new Mover4_1.Mover4();
            this.mover.init(this);
            this.displayList.add(this.mover);
        };
        return AccelerateTowardsMouse;
    }(Stage));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AccelerateTowardsMouse;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdHVyZW9mY29kZS92ZWN0b3JzL0FjY2VsZXJhdGVUb3dhcmRzTW91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUNBLElBQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBSWxDO1FBQW9ELDBDQUFLO1FBQXpEO1lBQW9ELDhCQUFLO1FBVXpELENBQUM7UUFOQSxzQ0FBSyxHQUFMO1lBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUYsNkJBQUM7SUFBRCxDQVZBLEFBVUMsQ0FWbUQsS0FBSyxHQVV4RDtJQVZEOzRDQVVDLENBQUEiLCJmaWxlIjoibmF0dXJlb2Zjb2RlL3ZlY3RvcnMvQWNjZWxlcmF0ZVRvd2FyZHNNb3VzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgPSBldGNoLmRyYXdpbmcuQ2FudmFzO1xyXG5pbXBvcnQgU3RhZ2UgPSBldGNoLmRyYXdpbmcuU3RhZ2U7XHJcbmltcG9ydCBWZWN0b3IgPSBldGNoLnByaW1pdGl2ZXMuVmVjdG9yO1xyXG5pbXBvcnQge01vdmVyNH0gZnJvbSAnLi9Nb3ZlcjQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjZWxlcmF0ZVRvd2FyZHNNb3VzZSBleHRlbmRzIFN0YWdle1xyXG5cclxuXHRwdWJsaWMgbW92ZXI6IE1vdmVyNDtcclxuXHJcblx0c2V0dXAoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1vdmVyID0gbmV3IE1vdmVyNCgpO1xyXG5cdFx0dGhpcy5tb3Zlci5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheUxpc3QuYWRkKHRoaXMubW92ZXIpO1xyXG5cdH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
