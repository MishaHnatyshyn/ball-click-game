const timePlace = document.getElementById('time')
export default class Timer {
    constructor (tick){
        this.seconds = 0;
        this.minutes = 0;
        this.tick = tick;
    }
    start() {
        this.interval = setInterval(this.updateSeconds, 1000);
    }
    stop() {
        clearInterval(this.interval);
    }
    updateSeconds() {
        this.seconds++;
        if (this.seconds == 10) {
            this.seconds = 0;
            this.updateMinutes();
        }
        return this.getTime;
    }
    updateMinutes() {
        this.minutes++;
    }
    getTime() {
        return (this.seconds < 10)
            ? `${this.minutes}:0${this.seconds}`
            : `${this.minutes}:${this.seconds}`;
    }

}

const timer1 = new Timer(tick);

timer1.start();
requestAnimationFrame(tick);

function tick(){
    timePlace.innerHTML = timer1.getTime()
}
