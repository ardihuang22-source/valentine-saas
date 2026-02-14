const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popupMessage");
const music = document.getElementById("bgMusic");
const countdownEl = document.getElementById("countdown");

// ===== Countdown Before Music =====
let timeLeft = 10;

const countdown = setInterval(() => {
    timeLeft--;
    countdownEl.innerHTML = "Music starts in " + timeLeft + " seconds...";

    if (timeLeft <= 0) {
        clearInterval(countdown);
        countdownEl.innerHTML = "🎵 Music Playing...";
        music.play();
    }
}, 1000);

// ===== YES CLICK =====
yesBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

// ===== NO CLICK → YES gets bigger =====
noBtn.addEventListener("click", () => {
    let currentSize = window.getComputedStyle(yesBtn).fontSize;
    let newSize = parseFloat(currentSize) + 5;
    yesBtn.style.fontSize = newSize + "px";
    yesBtn.style.padding = "15px 35px";
});

// ===== Floating Hearts =====
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 400);
