// utils.js

export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateDummyText(wordCount) {
    const loremIpsumWords = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
        "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
        "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
        "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
        "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
        "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
        "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt",
        "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
    ];

    let dummyText = '';

    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * loremIpsumWords.length);
        dummyText += loremIpsumWords[randomIndex] + ' ';
    }

    return dummyText.trim() + '.';
}


// export function rotateHue() {
//     hue = (hue + 0.2) % 360; // Increment hue and keep it within 0-359 degrees
//     hero.style.filter = `hue-rotate(${hue}deg)`;
//     requestAnimationFrame(rotateHue); // Recursively call rotateHue
// }

