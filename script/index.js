const track = document.getElementById("testimonialTrack");
let index = 0;
let cardWidth;

function visibleCount() {
    if (window.innerWidth >= 992) return 4;
    if (window.innerWidth >= 768) return 3;
    return 1;
}

function cloneCards() {
    const count = visibleCount();
    const cards = [...track.children];
    for (let i = 0; i < count; i++) {
        track.appendChild(cards[i].cloneNode(true));
    }
}

cloneCards();

setTimeout(() => {
    cardWidth = track.children[0].offsetWidth;
}, 200);

setInterval(() => {
    index++;
    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    if (index >= 7) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            track.style.transform = "translateX(0)";
        }, 700);
    }
}, 2500);

window.addEventListener("resize", () => location.reload());



// COUNTER SCRIPT 
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

function runCounter() {
    counters.forEach(counter => {
        counter.innerText = "0";
        let target = +counter.getAttribute("data-target");
        let speed = target / 100;

        function updateCounter() {
            let value = +counter.innerText.replace('+', ''); // remove + while calculating
            if (value < target) {
                counter.innerText = Math.ceil(value + speed) + "+";
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target + "+";
            }
        }
        updateCounter();
    });
}

// Trigger when in viewport
window.addEventListener("scroll", () => {
    let section = document.getElementById("counter-section");
    let position = section.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 100 && !counterStarted) {
        runCounter();
        counterStarted = true;
    }
});