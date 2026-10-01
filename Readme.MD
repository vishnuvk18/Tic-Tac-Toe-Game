# Tic Tac Toe Game

A two-player Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript. Players take turns as **O** and **X** on a 3×3 grid, with win and draw detection.

## Features

- Two-player local gameplay (O starts)
- Win detection across all 8 winning combinations
- Draw detection when all 9 boxes are filled
- Winner/draw message with a **New Game** button
- **Reset Game** button to restart anytime
- Responsive layout using `vmin` units
- Boxes lock after a move, and the whole board locks once the game ends

## Tech Stack

- HTML5
- CSS3 (Flexbox)
- JavaScript (ES6, DOM manipulation)

## Project Structure

```
Tic-Tac-Toe-Game/
├── index.html   # Game layout
├── style.css    # Styling
└── script.js    # Game logic
```

## Getting Started

```bash
git clone https://github.com/vishnuvk18/Tic-Tac-Toe-Game.git
cd Tic-Tac-Toe-Game
```

Open `index.html` in any browser. No build step or dependencies needed.

## How to Play

1. Player **O** goes first; players then alternate turns by clicking an empty box.
2. First to get three in a row (horizontal, vertical, or diagonal) wins.
3. If all 9 boxes fill with no winner, the game is a draw.
4. Click **New Game** (on the result screen) or **Reset Game** to play again.

## How It Works

- `winchances` holds the 8 winning index patterns.
- `turnO` tracks whose turn it is; `count` tracks moves made to detect a draw.
- `CheckWinner()` compares box text against each pattern after every move.
- `disableBoxes()` / `enableBoxes()` lock and unlock the board.

## Future Improvements

- Single-player mode with computer opponent
- Score tracking across rounds
- Highlight winning line
- Player name input

## Author

**Vishnu** — [@vishnuvk18](https://github.com/vishnuvk18)