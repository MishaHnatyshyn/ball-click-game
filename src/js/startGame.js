export default function startGame() {
    let start = document.querySelector(".start__form-button"),
        startModal = document.querySelector(".start");

    start.addEventListener("click", function () {
        startModal.style.display = "none";
    });

    game.start();
}