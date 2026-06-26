let hue1 = 0;
let hue2 = 100;

// Cache the element selector once outside the animation loop
const targetSection = document.getElementById('grad-color');

function animateBackground() {
    // Safety check: break out if the element does not exist on the page
    if (!targetSection) return;

    hue1 = (hue1 + 0.3) % 360;
    hue2 = (hue2 + 0.5) % 360;

    const color1 = `hsl(${hue1}, 70%, 60%)`;
    const color2 = `hsl(${hue2}, 70%, 60%)`;
    const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;

    // Apply the gradient exclusively to the targeted section
    targetSection.style.backgroundImage = gradient;

    requestAnimationFrame(animateBackground);
}

// Start the loop
animateBackground();


// Typewriter animation
const words = ["Hello!", "Hi hi!", "Good day!"];
const e1 = document.getElementById("typing");

let wordIdx = 0;
let charIdx = 0;
let deleting = false;

function animate() {
    const word = words[wordIdx];

    if (!deleting) {
        // Type one character
        charIdx++;
        e1.textContent = "[For dev] " + word.slice(0, charIdx) + " I am Sha";

        if (charIdx === word.length) {
            deleting = true;
            setTimeout(animate, 1000);
            return;
        }
    } else {
        // Delete one character
        charIdx--;
        e1.textContent = "[For dev] " + word.slice(0, charIdx) + " I am Sha";

        if (charIdx === 0) {
            deleting = false;
            wordIdx = (wordIdx + 1) % words.length;
        }
    }

    setTimeout(animate, deleting ? 100 : 150);
}

// Start the loop
animate();