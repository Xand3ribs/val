function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e){
    moveRandomEl(e.target);
});

moveRandom.addEventListener("touchstart", function (e) {
    moveRandomEl(e.target);
    e.preventDefault(); 
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖"; // You can change to 💕 or ❤️

    // Randomize position
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh"; // Start from bottom
    heart.style.position = "fixed";
    heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Random size
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Remove after animation ends
    }, 5000);
}

// Generate hearts every 500ms
setInterval(createHeart, 500);


document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded!");

    // Check if we are on the "Yes" page
    if (document.body.id === "yes-page") {
        console.log("Starting heart animation...");
        setInterval(createHeart, 500); // Generate hearts every 500ms
    }
});