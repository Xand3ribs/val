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
    heart.innerHTML = "💖"; // You can change to 💕 or 💖
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random speed
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove after 5 seconds
}

// Generate hearts every 500ms
setInterval(createHeart, 500);
