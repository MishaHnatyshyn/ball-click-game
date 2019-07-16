import Game from './game'

const game = new Game();

export default function startGame() {
    let start = document.querySelector(".start__form-button"),
        startModal = document.querySelector(".start");

    start.addEventListener("click", function () {
        game.start();
        startModal.style.display = "none";
    });


}
