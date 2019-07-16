export default function showResult(score, time) {
    let scoreBlock = document.querySelector(".finish__form-score"),
        timeBlock = document.querySelector(".finish__form-time");

    let scoreResult = document.createElement("span");
    scoreResult.innerText = " " + score;
    let timeResult = document.createElement("span");
    timeResult.innerText = " " + time;

    scoreBlock.appendChild(scoreResult);
    timeBlock.appendChild(timeResult);
}