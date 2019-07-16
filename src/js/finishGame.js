import showResult from "./result";
import startGame from "./startGame";

export default function finishGame(score, time) {
    let finishModal = document.querySelector(".finish"),
        restart = document.querySelector(".finish__form-button");

    showResult(score, time);
    finishModal.style.display = "flex";
    restart.addEventListener("click", function () {
        finishModal.style.display = "none";
        startGame();
    });
}