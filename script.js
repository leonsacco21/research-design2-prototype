// Define passages as array of objects
const passages = [
    {
        title: "The Life Cycle of a Butterfly",
        content: "Butterflies go through four stages in their lives. First, the female butterfly lays tiny eggs on leaves. After a few days, the eggs hatch into caterpillars. The caterpillar eats many leaves and grows quickly. Then, it forms a hard case called a chrysalis. Inside the chrysalis, the caterpillar changes into a butterfly. This process is called metamorphosis. After two to four weeks, a beautiful butterfly emerges. It pumps blood into its new wings and waits for them to dry. Once ready, the butterfly flies away to find flowers for nectar. The full life cycle, from egg to butterfly, can take about a month. Some butterflies live for just a few weeks, while others survive for several months."
    },
    {
        title: "How Rainbows Form",
        content: "Rainbows appear when sunlight shines through raindrops. Each raindrop acts like a tiny mirror and a prism. When light enters a raindrop, it bends, or refracts, and splits into different colors. The light bounces inside the raindrop and then exits. This process creates the colorful arc we see in the sky. A rainbow’s colors always appear in the same order: red, orange, yellow, green, blue, indigo, and violet. To see a rainbow, you must stand with your back to the sun and look toward the rain. Sometimes double rainbows appear, with the second rainbow being fainter and reversed in color. Rainbows are most common when sunlight breaks through after a rainstorm."
    },
    {
        title: "Why Leaves Change Color",
        content: "In autumn, many trees lose their green color and show bright reds, yellows, and oranges. Leaves are green because they contain a pigment called chlorophyll. Chlorophyll helps plants make food from sunlight during the growing season. As the days get shorter and cooler, trees stop producing chlorophyll. When the green fades, other pigments that were hidden before become visible. Carotenoids give leaves yellow and orange colors, while anthocyanins create red and purple shades. Different trees produce different amounts of these pigments, which is why forests can show a wide range of colors. After the leaves change color, they eventually fall to the ground, helping trees survive the cold winter months."
    },
    {
        title: "How Volcanoes Erupt",
        content: "Volcanoes are openings in the Earth's surface that allow hot gases, rocks, and lava to escape. Deep beneath the surface, high temperatures melt rock into a thick liquid called magma. Pressure builds up in the magma chamber until it forces its way upward through cracks in the Earth's crust. When the pressure becomes too great, a volcanic eruption occurs. Some eruptions are gentle, while others are very violent. Ash, lava, and gases are thrown into the air during large eruptions. Over time, repeated eruptions can build mountains, islands, and new landforms. Volcanoes can change landscapes and even affect the Earth's climate by releasing particles into the atmosphere."
    }        
];

// Randomly select one passage
const randomIndex = Math.floor(Math.random() * passages.length);
const selectedPassage = passages[randomIndex];

// Update the HTML with selected passage
document.getElementById('subtitle').textContent = selectedPassage.title;
document.getElementById('readingContent').textContent = selectedPassage.content;

// Theme toggle code
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const modeLabel = document.getElementById('modeLabel');

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        html.classList.add('dark-mode');
        modeLabel.textContent = "Dark Mode";
    } else {
        html.classList.remove('dark-mode');
        modeLabel.textContent = "Light Mode";
    }
});

let timerInterval;
let millisecondsElapsed = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        millisecondsElapsed += 10;
        updateTimerDisplay();
    }, 10);
});

stopButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    // Log the final reading time to the console
    const totalSeconds = Math.floor(millisecondsElapsed / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((millisecondsElapsed % 1000) / 10);
    const formattedTime = `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
    console.log("Final Reading Time:", formattedTime);
});

resetButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    millisecondsElapsed = 0;
    updateTimerDisplay();
});

function updateTimerDisplay() {
    const totalSeconds = Math.floor(millisecondsElapsed / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((millisecondsElapsed % 1000) / 10);

    timerDisplay.textContent = `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}