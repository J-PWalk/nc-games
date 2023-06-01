import React from "react";
import { Link } from "react-router-dom";
import "./Games.css";

const Games = () => {
  return (
    <div className="games-container">
      <h1>Games Directory</h1>
      <ul className="games-list">
        <li className="game-item">
          <Link to="/noughts-and-crosses">Noughts and Crosses</Link>
        </li>
        <li className="game-item">
          <Link to="/hangman">Hangman</Link>
        </li>
        <li className="game-item">
          <Link to="/crossword">Crossword</Link>
        </li>
        <li className="game-item">
          <Link to="/sudoku">Sudoku</Link>
        </li>
      </ul>
    </div>
  );
};

export default Games;
