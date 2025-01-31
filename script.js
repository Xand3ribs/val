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
    heart.innerHTML = "💖"; // Change to another emoji if you like
    document.body.appendChild(heart);

    // Set random position
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";  // Start at the bottom
    heart.style.fontSize = Math.random() * 30 + 20 + "px"; // Vary sizes

    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Vary speed

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts every 500ms
setInterval(createHeart, 500);


// Generate hearts every 500ms
setInterval(createHeart, 500);
