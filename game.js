let score = 0;
let lives = 5;

const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const gameOverText = document.getElementById("game-over");
const finalScoreText = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

const target = document.getElementById("target");
const container = document.getElementById("game-container");

// 🎵 Música del juego
const music = document.getElementById("game-music");

const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
const targetSize = target.clientWidth;

let moveInterval;

// Generar color aleatorio
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Mueve el cuadro
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

    music.pause();      // 🔇 Detener música
}

// Reinicia el juego
function restartGame() {
    score = 0;
    lives = 5;
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;

    gameOverText.style.display = "none";
    target.style.display = "block";

    // 🎵 Reiniciar música
    music.currentTime = 0;
    music.play();

    moveTarget();
    clearInterval(moveInterval);
    moveInterval = setInterval(moveTarget, 800);
}

// Click en el cuadro
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

// Botón reiniciar
restartBtn.addEventListener("click", restartGame);

// Inicializar juego
moveTarget();
music.volume = 0.4;  // Volumen 40%
music.play();        // 🎵 Iniciar música
moveInterval = setInterval(moveTarget, 800);
