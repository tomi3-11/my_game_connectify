// Function to start the selected game
function startGame(gameName) {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = "";  // Clear any existing game

    switch (gameName) {
        case 'word-search':
            gameContainer.innerHTML = createWordSearch();
            break;
        case 'sudoku':
            gameContainer.innerHTML = createSudoku();
            break;
        case 'tic-tac-toe':
            gameContainer.innerHTML = createTicTacToe();
            break;
        case 'memory-match':
            gameContainer.innerHTML = createMemoryMatch();
            break;
        case 'connect-four':
            gameContainer.innerHTML = createConnectFour();
            break;
        default:
            gameContainer.innerHTML = "<p>Game not found!</p>";
    }
}

// --- Word Search Game ---
function createWordSearch() {
    // Example word search puzzle (not a real implementation)
    const words = ["JAVASCRIPT", "HTML", "CSS", "WEB", "GAME"];
    const grid = generateWordSearchGrid(words, 10);
    const gridHtml = grid.map(row => `<div class="grid-row">${row.join(' ')}</div>`).join('');

    return `
        <h2>Word Search</h2>
        <p>Find the following words: ${words.join(', ')}</p>
        <div class="word-search-grid">${gridHtml}</div>
    `;
}

function generateWordSearchGrid(words, size) {
    // Basic grid generation (without real word placement)
    let grid = Array.from({ length: size }, () => Array(size).fill('.'));
    words.forEach(word => {
        let startRow = Math.floor(Math.random() * size);
        let startCol = Math.floor(Math.random() * size);
        for (let i = 0; i < word.length; i++) {
            grid[startRow][startCol + i] = word[i];
        }
    });
    return grid;
}

// --- Sudoku Game ---
function createSudoku() {
    return `
        <h2>Sudoku</h2>
        <div class="sudoku-board">
            ${createSudokuBoard()}
        </div>
    `;
}

function createSudokuBoard() {
    let board = '';
    for (let i = 0; i < 81; i++) {
        board += `<input class="sudoku-cell" type="text" maxlength="1">`;
    }
    return board;
}

// --- Tic Tac Toe Game ---
function createTicTacToe() {
    let board = Array(9).fill(null);
    let currentPlayer = "X";

    return `
        <h2>Tic Tac Toe</h2>
        <div class="tic-tac-toe-board">
            ${board.map((_, i) => `<div class="tic-tac-toe-cell" onclick="handleTicTacToeClick(${i}, '${currentPlayer}')"></div>`).join('')}
        </div>
    `;
}

function handleTicTacToeClick(index, currentPlayer) {
    // Logic for handling Tic Tac Toe moves
    let cell = document.querySelectorAll('.tic-tac-toe-cell')[index];
    if (!cell.innerHTML) {
        cell.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// --- Memory Match Game ---
function createMemoryMatch() {
    const cards = generateMemoryCards();
    return `
        <h2>Memory Match</h2>
        <div class="memory-match-board">
            ${cards.map(card => `<div class="memory-card" onclick="flipMemoryCard(event)">${card}</div>`).join('')}
        </div>
    `;
}

function generateMemoryCards() {
    const symbols = ['🍎', '🍌', '🍒', '🍓', '🍍'];
    let cards = [...symbols, ...symbols];  // Pair cards
    cards = cards.sort(() => Math.random() - 0.5);  // Shuffle cards
    return cards;
}

function flipMemoryCard(event) {
    const card = event.target;
    card.classList.toggle('flipped');
}

// --- Connect Four Game ---
function createConnectFour() {
    return `
        <h2>Connect Four</h2>
        <div class="connect-four-board">
            ${Array(42).fill().map((_, i) => `
                <div class="connect-four-cell" onclick="dropDisc(${i})"></div>
            `).join('')}
        </div>
    `;
}

function dropDisc(index) {
    // Logic to drop discs and check for winning condition
    const cell = document.getElementsByClassName('connect-four-cell')[index];
    cell.classList.add('red');  // Example of dropping a red disc
}


