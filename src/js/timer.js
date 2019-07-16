class Timer {
    constructor (){
        this.seconds = 0;
        this.minutes = 0;
        this.timePlace = document.getElementById('time')
    }
    start = () => {
        this.interval = setInterval(this.updateSeconds, 1000);
        requestAnimationFrame(this.getTime);
    }
    stop = () => {
        clearInterval(this.interval);
    }
    updateSeconds = () => {
        this.seconds++;
        if (this.seconds == 10) {
            this.seconds = 0;
            this.updateMinutes();
        }
        return this.getTime();
    }
    updateMinutes = () => {
        this.minutes++;
    }
    getTime = () => {
        this.timePlace.innerHTML = (this.seconds < 10)
            ? `${this.minutes}:0${this.seconds}`
            : `${this.minutes}:${this.seconds}`;
    }

}

const timer = new Timer();
timer.start();