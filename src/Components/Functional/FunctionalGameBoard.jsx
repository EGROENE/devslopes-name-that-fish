import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({ currentFish, handleAnswer }) {
  const [userInput, setUserInput] = useState("");
  const handleSubmission = (e) => {
    e.preventDefault();
    handleAnswer(userInput);
    setUserInput("");
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          name="fish-guess"
        />
        <input onClick={handleSubmission} type="submit" />
      </form>
    </div>
  );
}
