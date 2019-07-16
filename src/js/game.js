import Ball from './ball';

export default class Game {
  constructor() {
    this.state = {
      lives: 5,
      score: 0,
      balls: [],
    };
  }

  start() {
    this.startInterval();
  }

  log() {
    console.log('Lives: ', this.state.lives);
    console.log('Score: ', this.state.score);
  }

  addScore() {
    this.state.score += 1;
    this.log();
  }

  removeLife() {
    this.state.lives -= 1;
    this.log();
    if (this.state.lives === 0) this.gameOver();
  }

  gameOver() {
    clearInterval(this.interval);
    this.removeAllBalls();
    this.showResults();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.renderNewBall();
    }, 2000);
  }

  clearGameData() {
    this.state = {
      lives: 5,
      score: 0,
      balls: [],
    };
  }

  showResults() {
    alert(`Lives: ${this.state.lives}\nScore: , ${this.state.score}`);
  }

  renderNewBall() {
    this.state.balls.push(new Ball(this.removeLife.bind(this), this.addScore.bind(this)));
  }

  removeAllBalls() {
    this.state.balls.forEach(ball => ball.destroy());
  }
}
