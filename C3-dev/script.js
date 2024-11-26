// Lista completa de cores HTML5
const htmlColors = [
    'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure',
    'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue',
    'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse',
    'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson',
    'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray',
    'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange',
    'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue',
    'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray',
    'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia',
    'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray',
    'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed',
    'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush',
    'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan',
    'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon',
    'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow',
    'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon',
    'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen',
    'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue',
    'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy',
    'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed',
    'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed',
    'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum',
    'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown',
    'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen',
    'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue',
    'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan',
    'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet',
    'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'
];

let gameColors, targetColor;

// Função para selecionar 10 cores aleatórias
function selectRandomColors(colors, count) {
    const shuffled = colors.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Inicializa o jogo
function initializeGame() {
    // Seleciona 10 cores aleatórias
    gameColors = selectRandomColors(htmlColors, 10);

    // Escolhe uma cor aleatória para o jogo
    targetColor = gameColors[Math.floor(Math.random() * gameColors.length)];

    // Seleciona o elemento de seleção de cor
    const colorSelect = document.getElementById('color-input');
    colorSelect.innerHTML = ''; // Limpa opções anteriores

    // Popula o select com as 10 cores do jogo
    gameColors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

    // Reseta elementos de interface
    document.body.style.backgroundColor = 'white';
    document.getElementById('feedback').textContent = '';
    document.getElementById('game-play').style.display = 'block';
    document.getElementById('restart-container').style.display = 'none';
}

function checkColor() {
    const selectedColor = document.getElementById('color-input').value;
    const feedbackElement = document.getElementById('feedback');

    if (selectedColor === targetColor) {
        // Acertou a cor
        document.body.style.backgroundColor = targetColor;
        feedbackElement.textContent = `Parabéns! Você acertou a cor ${targetColor}!`;
        feedbackElement.style.color = 'green';

        // Esconde área de jogo e mostra opções de recomeçar
        document.getElementById('game-play').style.display = 'none';
        document.getElementById('restart-container').style.display = 'block';
    } else {
        // Não acertou a cor
        const alphabeticalClue = getAlphabeticalClue(selectedColor, targetColor);
        feedbackElement.textContent = `Você não acertou. ${alphabeticalClue}`;
        feedbackElement.style.color = 'red';
    }
}

function getAlphabeticalClue(selectedColor, targetColor) {
    if (selectedColor < targetColor) {
        return `A cor correta vem depois de ${selectedColor} na ordem alfabética.`;
    } else {
        return `A cor correta vem antes de ${selectedColor} na ordem alfabética.`;
    }
}

function restartGame() {
    initializeGame();
}

function endGame() {
    alert('Obrigado por jogar! Até a próxima.');
    document.getElementById('restart-container').style.display = 'none';
    document.getElementById('feedback').textContent = 'Jogo encerrado. Recarregue a página para jogar novamente.';
}

// Inicializa o jogo quando a página carrega
initializeGame();
