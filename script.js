document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded!");

    // Handle move-random button (Only if it exists)
    const moveRandom = document.querySelector("#move-random");
    if (moveRandom) {
        moveRandom.addEventListener("mouseenter", function (e) {
            moveRandomEl(e.target);
        });

        moveRandom.addEventListener("touchstart", function (e) {
            moveRandomEl(e.target);
            e.preventDefault();
        });
    }

    // Start heart animation only on "Yes" page
    if (document.body.id === "yes-page") {
        console.log("Starting heart animation...");
        setInterval(createHeart, 500);
    }
});

function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖"; // Change to 💕 or ❤️ if needed

    // Randomize position
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh"; // Start from bottom
    heart.style.position = "fixed";
    heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Random size
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}


window.onload = function() {
    if (!localStorage.getItem("audioPlayed")) {
        localStorage.setItem("audioPlayed", "true");
        var audio = new Audio("love.mp3"); // Correct path to MP3 file
        audio.loop = true; // Loop the audio
        audio.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    }
};
