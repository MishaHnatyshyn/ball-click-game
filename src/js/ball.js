export default class Ball {
  constructor(onFail, onSuccess) {
    this.ball = null;
    this.onFail = onFail;
    this.onSuccess = onSuccess;
    this.currentRadius = 0;
    this.createBall();
    this.startInterval();
    this.render();
  }

  createBall() {
    const ball = document.createElement('div');
    ball.style.width = '70px';
    ball.className = 'ball';
    ball.style.height = '70px';
    ball.style.top = `${this.getRandomPosition()}%`;
    ball.style.left = `${this.getRandomPosition()}%`;
    ball.addEventListener('click', this.handleClick.bind(this));
    this.ball = ball;
  }

  getRandomPosition() {
    return Math.random() * 80 + 10;
  }

  handleClick() {
    this.destroy();
    this.onSuccess();
  }

  startInterval() {
    this.interval = setInterval(() => {
      if (this.currentRadius >= 70) {
        this.setFailed();
      }
      this.currentRadius += 3;
      this.ball.style.transform = `scale(${this.currentRadius / 70})`;
      this.ball.style.display = 'block';
    }, 100);
  }

  setFailed() {
    this.destroy();
    this.onFail();
  }

  destroy() {
    clearInterval(this.interval);
    this.ball.remove();
  }

  render() {
    document.getElementById('field').appendChild(this.ball);
  }
}
