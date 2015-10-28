module fletch.engine{
    export interface ITimerListener {
        OnTicked(lastTime: number, nowTime: number);
    }
}