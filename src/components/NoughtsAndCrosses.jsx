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
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  // Function to make a move on the board
  const makeMove = (cellIndex) => {
    if (board[cellIndex] === "" && !winner) {
      const updatedBoard = [...board];
      updatedBoard[cellIndex] = currentPlayer;
      setBoard(updatedBoard);

      // Check if the current player wins or the game ends in a draw
      if (checkWin(currentPlayer, updatedBoard)) {
        setWinner(currentPlayer);
      } else if (updatedBoard.every((cell) => cell !== "")) {
        setWinner("draw");
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  // Checks if a player has won the game
  const checkWin = (player, currentBoard) => {
    return winningCombinations.some((combination) => {
      return combination.every((index) => currentBoard[index] === player);
    });
  };

  // Resets the board
  const resetBoard = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner(null);
  };

  // Function to render a cell on the board
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

  // Determine the status of the game
  let status;
  if (winner) {
    status = winner === "draw" ? "It's a draw!" : `${winner} wins!`;
  } else {
    status = `Current Player: ${currentPlayer}`;
  }

  // Render the Noughts and Crosses game component
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
