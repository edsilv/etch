import ITimerListener = etch.engine.ITimerListener;

var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        (<any>window).webkitRequestAnimationFrame ||
        (<any>window).mozRequestAnimationFrame ||
        (<any>window).oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 200);
        };
})();

module etch.engine{
    export class ClockTimer {
        private _listeners: ITimerListener[] = [];
        private _lastTime: number = 0;

        registerTimer(listener: ITimerListener) {
            var ls = this._listeners;
            var index = ls.indexOf(listener);
            if (index > -1)
                return;
            ls.push(listener);
            if (ls.length === 1)
                this._requestAnimationTick();
        }

        unregisterTimer(listener: ITimerListener) {
            var ls = this._listeners;
            var index = ls.indexOf(listener);
            if (index > -1)
                ls.splice(index, 1);
        }

        private _doTick() {
            var nowTime = new Date().getTime();
            var lastTime = this._lastTime;
            this._lastTime = nowTime;

            var ls = this._listeners;
            var len = ls.length;
            if (len === 0)
                return;
            for (var i = 0; i < len; i++) {
                ls[i].onTicked(lastTime, nowTime);
            }
            this._requestAnimationTick();
        }

        private _requestAnimationTick() {
            requestAnimFrame(() => this._doTick());
        }
    }
}