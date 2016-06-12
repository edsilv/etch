module etch.engine{
    export interface ITimerListener {
        onTicked(lastTime: number, nowTime: number);
    }
}