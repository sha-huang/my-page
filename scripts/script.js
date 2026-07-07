function initBkgdAnimation() {
    // Cache the element selector once outside the animation loop
    const targetSection = document.getElementById('grad-color');
    if (!targetSection) return;

    let hue1 = 0;
    let hue2 = 100;

    function animateBackground() {
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
}


// Typewriter animation
function initTypewriter() {
    const e1 = document.getElementById("typing");
    if (!e1) return;

    const segmenter = new Intl.Segmenter(undefined, {
        granularity: "grapheme"
    });

    const words = ["Apa khabar!", "Hello!", "你好！", "வணக்கம்!"];
    const segmentedWords = words.map(word => [...segmenter.segment(word)].map(s => s.segment));

    let wordIdx = 0;
    let graphemeIdx = 0;
    let deleting = false;

    function animate() {
        const graphemes = segmentedWords[wordIdx];

        if (!deleting) {
            // Type one character
            graphemeIdx++;
            e1.innerHTML = graphemes.slice(0, graphemeIdx).join("");

            if (graphemeIdx === graphemes.length) {
                deleting = true;
                setTimeout(animate, 1000);
                return;
            }
        } else {
            // Delete one character
            graphemeIdx--;
            e1.innerHTML = graphemes.slice(0, graphemeIdx).join("");

            if (graphemeIdx === 0) {
                deleting = false;
                wordIdx = (wordIdx + 1) % segmentedWords.length;
            }
        }

        setTimeout(animate, deleting ? 100 : 150);
    }

    // Start the loop
    animate();
}


// Header background color gradient fading effect
function initHeaderFading() {
    const header = document.querySelector("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        const maxScroll = 1000;
        const scroll = Math.min(window.scrollY, maxScroll);

        const opacity = 1.0 - (scroll / maxScroll)*0.5;

        header.style.backgroundColor = `rgba(32, 178, 170, ${opacity})`;
    });
}


initBkgdAnimation();
initTypewriter();
initHeaderFading();