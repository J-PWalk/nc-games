import React, { useState } from "react";
import "./Games.css";

// Array representing the winning combinations of the game
const winningCombinations = [
[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
[0, 4, 8], [2, 4, 6] // diagonals
];

const NoughtsAndCrosses = () => {
  // State variables
  const [board, setBoard] = useState(Array(9).fill("")); //uses Array() to decide size of board and .fill to add content
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  // Function to make a move on the board. Takes cellIndex as argument checking first if empty strin and no winner which if true it makes copy of board with spread then uses BoardCopy[i] to set cell to current player then setsBoard state using updated copy and mutated board
  const makeMove = (cellIndex) => {
    if (board[cellIndex] === "" && !winner) {
      const updatedBoard = [...board];
      updatedBoard[cellIndex] = currentPlayer;
      setBoard(updatedBoard);

      // Check if the current player wins or the game ends in a draw, calls checkWin to test if winner then checks if draw, if neither changes currentPlayer with setCurrentPlayer
      if (checkWin(currentPlayer, updatedBoard)) {
        setWinner(currentPlayer);
      } else if (updatedBoard.every((cell) => cell !== "")) {
        setWinner("draw");
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  // Checks if a player has won the game, uses .some method to check if any combinations satisfy winner requirement by using .every to check every current combination using index and player as comparisons.
  const checkWin = (player, currentBoard) => {
    return winningCombinations.some((combination) => {
      return combination.every((index) => currentBoard[index] === player);
    });
  };

  // Resets the board using setBoard state hook and array.fill method, uses setCurrentPlayer state hook to set player one back to X and setWinner hook back to Null
  const resetBoard = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
  };

  // Function to render a cell on the board, for each cellIndex we render using dynamic CSS (.cell) with template literals and adds an onClick element with anonymous makeMove function finally rendering each cell with state information, as states are updated so to are cells
  const renderCell = (cellIndex) => {
    return (
      <div
        className={`cell ${board[cellIndex]}`}
        onClick={() => makeMove(cellIndex)}
      >
        {board[cellIndex]}
      </div>
    );
  };

  // Determine the status of the game by checking weather 'winner' is truthy or falsey
  let status;
  if (winner) {
    status = winner === "draw" ? "It's a draw!" : `${winner} wins!`;
  } else {
    status = `Current Player: ${currentPlayer}`;
  }

  // Finally render the component
  return (
    <div className="games">
      <h1>Noughts and Crosses</h1>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((_, index) => renderCell(index))}
      </div>
      <button onClick={resetBoard}>Reset</button>
    </div>
  );
};

export default NoughtsAndCrosses;
