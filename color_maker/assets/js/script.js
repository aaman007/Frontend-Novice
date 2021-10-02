const colorBoard = document.querySelector('.color-board');
const colorText = document.querySelector('.color-text');
const controls = document.querySelectorAll('.range-control');
const rgbColor = document.querySelector('.rgb-color');
const hexColor = document.querySelector('.hex-color');

const colorThreshold = 210;
const colors = {
    black: '#000000',
    white: '#ffffff'
};

const rgbToHex = (r, g, b) => {
    const toHex = value => {
        const hex = value.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

controls.forEach(control => {
    control.querySelector('input').addEventListener('change', () => {
        const redValue = parseInt(document.querySelector('#red-value').value);
        const greenValue = parseInt(document.querySelector('#green-value').value);
        const blueValue = parseInt(document.querySelector('#blue-value').value);
        const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        colorBoard.style.backgroundColor = color;
        rgbColor.textContent = color;
        hexColor.textContent = rgbToHex(redValue, greenValue, blueValue);
        
        const textColor = (redValue + greenValue + blueValue) / 2 > 210 ? colors.black : colors.white;
        colorText.style.color = textColor;
    });
});