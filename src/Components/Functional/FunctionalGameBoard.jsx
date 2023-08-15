import "./styles/game-board.css";
import { initialFishes } from "../../constants";

export function FunctionalGameBoard({
  currentIndex,
  handleSubmission,
  currentInput,
  handleInput,
}) {
  const currentFish = initialFishes[currentIndex];

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          value={currentInput}
          onChange={handleInput}
          type="text"
          name="fish-guess"
        />
        <input onClick={handleSubmission} type="submit" />
      </form>
    </div>
  );
}
