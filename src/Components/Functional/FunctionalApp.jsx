import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../../constants.js";

export function FunctionalApp() {
  // useState should be used minimally; derive values from state when possible.
  let [incorrectCount, setIncorrectCount] = useState(0);
  let [correctCount, setCorrectCount] = useState(0);

  const currentIndex = incorrectCount + correctCount;
  const isQuizComplete = currentIndex === initialFishes.length;
  const answersLeft = initialFishes.slice(currentIndex);

  const handleAnswer = (answer) => {
    if (initialFishes[currentIndex].name === answer) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
  };

  return (
    <>
      {!isQuizComplete && (
        <FunctionalScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          answersLeft={answersLeft}
        />
      )}
      {!isQuizComplete && (
        <FunctionalGameBoard
          currentFish={initialFishes[currentIndex]}
          handleAnswer={handleAnswer}
        />
      )}
      {isQuizComplete && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
