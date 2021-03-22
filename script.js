"use strict";

const bubblesBackground = document.querySelector(".bubble_box").getBoundingClientRect();

for (let bubble = 0; bubble < 100; bubble++) {
    const bubbleFriend = document.createElement("div");
    bubbleFriend.classList.add("bubble");

    document.querySelector(".bubble_box").appendChild(bubbleFriend);
}

const bubble = document.querySelectorAll(".bubble");
bubble.forEach(b => {
    const endX = (Math.random() - .5) * bubblesBackground.width * 2;
    const endY = (Math.random() - .5) * bubblesBackground.height * 2;

    const randomOpacity = Math.random();
    const randomDuration = (Math.floor(Math.random() * 7000) + 4000);
    const randomScale = (Math.floor(Math.random() * 1.5) + 0.5);

    const keyframes = [{
            offset: 0,
            opacity: 1,
        },
        {
            offset: .25,
            transform: `translate(${endY}px,${endX}px) 
                      scale(${randomScale})`,
            opacity: randomOpacity,
        },
        {
            opacity: 1,
            opacity: randomOpacity,
        },
    ]

    const properties = {
        duration: randomDuration,
        iterations: Infinity
    };

    const starAnimation = b.animate(keyframes, properties);
    starAnimation.onfinish = function () {
        starAnimation.cancel();
        starAnimation.currentTime = 0;
        starAnimation();
    };
})