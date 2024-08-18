const hero = document.getElementById('hero');
let hue = 0;

function rotateHue() {
    hue = (hue + 0.2) % 360; // Increment hue and keep it within 0-359 degrees
    hero.style.filter = `hue-rotate(${hue}deg)`;
    requestAnimationFrame(rotateHue); // Recursively call rotateHue
}

// Start the hue rotation
rotateHue();