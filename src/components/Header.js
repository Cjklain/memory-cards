import React from "react";

const Header = () => (
  <div className="header-wrapper">
    <div>
      <h1 className="game-title">Memory Game</h1>
      <p>Your goal here is to not click twice in the same picture</p>
    </div>
    <div className="score">
      <div>Your Score: {0}</div>
      <div>Best score: {0}</div>
    </div>
  </div>
);

export default Header;
