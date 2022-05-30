import React from "react";

const Header = ({score, bestScore}) => (
  <div className="header-wrapper">
    <div>
      <h1 className="game-title">Memory Game</h1>
      <p>Your goal here is to not click twice in the same picture</p>
    </div>
    <div className="score">
      <div>Your Score: {score}</div>
      <div>Best score: {bestScore}</div>
    </div>
  </div>
);

export default Header;
