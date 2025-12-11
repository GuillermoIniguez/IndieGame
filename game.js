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

let moveInterval;

// Genera un color aleatorio
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Mueve el cuadro a posición aleatoria y cambia color
function moveTarget() {
    const x = Math.random() * (containerWidth - targetSize);
    const y = Math.random() * (containerHeight - targetSize);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    target.style.backgroundColor = getRandomColor();
}

// Termina el juego
function gameOver() {
    clearInterval(moveInterval);
    target.style.display = "none";
    gameOverText.style.display = "block";
    finalScoreText.textContent = score;
}

// Click sobre el cuadro
target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
});

// Click fuera del cuadro
container.addEventListener("click", (e) => {
    if (e.target.id !== "target") {
        lives--;
        livesDisplay.textContent = lives;
        if (lives <= 0) {
            gameOver();
        }
    }
});

// Inicializa el juego
moveTarget();
moveInterval = setInterval(moveTarget, 800); // Se mueve cada 0.8s
