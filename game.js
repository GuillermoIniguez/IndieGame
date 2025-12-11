let score = 0;
let lives = 5;

const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const gameOverText = document.getElementById("game-over");
const finalScoreText = document.getElementById("final-score");

const target = document.getElementById("target");
const container = document.getElementById("game-container");

const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
const targetSize = target.clientWidth;

function moveTarget() {
    const x = Math.random() * (containerWidth - targetSize);
    const y = Math.random() * (containerHeight - targetSize);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

function gameOver() {
    target.style.display = "none";
    gameOverText.style.display = "block";
    finalScoreText.textContent = score;
}

target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
});

container.addEventListener("click", (e) => {
    if (e.target.id !== "target") {
        lives--;
        livesDisplay.textContent = lives;
        if (lives <= 0) {
            gameOver();
        }
    }
});

// Inicializamos el juego
moveTarget();
