export default function showResult(score, time) {
    let scoreBlock = document.querySelector(".finish__form-score");

    let scoreResult = document.createElement("span");
    scoreResult.innerText = " " + score;

    scoreBlock.appendChild(scoreResult);
}
