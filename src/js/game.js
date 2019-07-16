import Ball from './ball';
import deleteLives from './lives';

export default class Game {
  constructor() {
    this.state = {
      lives: 5,
      score: 0,
      balls: [],
    };
    this.scoreContainer = document.getElementById('score');
  }

  start() {
    this.startInterval(2000);
  }

  log() {
    console.log('Lives: ', this.state.lives);
    console.log('Score: ', this.state.score);
  }

  addScore() {
    this.state.score += 1;
    if (this.state.score % 5 === 0) this.updateInterval();
    this.renderScore();
    this.log();
  }

  renderScore() {
    this.scoreContainer.innerText = this.state.score;
  }

  updateInterval() {
    const newInterval = 2000 - this.state.score * 4 * 10;
    clearInterval(this.interval);
    this.startInterval(newInterval);
  }

  removeLife() {
    this.state.lives -= 1;
    deleteLives();
    this.log();
    if (this.state.lives === 0) this.gameOver();
  }

  gameOver() {
    clearInterval(this.interval);
    this.removeAllBalls();
    this.showResults();
  }

  startInterval(interval) {
    this.interval = setInterval(() => {
      this.renderNewBall();
    }, interval);
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
