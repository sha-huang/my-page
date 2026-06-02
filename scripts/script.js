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