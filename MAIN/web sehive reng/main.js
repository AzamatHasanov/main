document.addEventListener('DOMContentLoaded', () => {
    const generatePaletteButton = document.getElementById('generate-palette');
    const paletteContainer = document.getElementById('palette');

    generatePaletteButton.addEventListener('click', () => {
        generatePalette();
    });

    function generatePalette() {
        paletteContainer.innerHTML = '';

        for (let i = 0; i < 5; i++) {
            const color = getRandomColor();
            const colorDiv = document.createElement('div');
            colorDiv.style.backgroundColor = color;
            colorDiv.title = color;
            paletteContainer.appendChild(colorDiv);
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});