import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { allFishNames, initialFishes } from "../../constants.js";

export function FunctionalApp() {
  let [currentIndex, nextIndex] = useState(0);
  let [incorrectCount, setIncorrectCount] = useState(0);
  let [correctCount, setCorrectCount] = useState(0);
  let [isQuizComplete, setIsQuizComplete] = useState(false);
  let [currentInput, setCurrentInput] = useState("");
  let [answersLeft, setAnswersLeft] = useState([
    "trout",
    "salmon",
    "tuna",
    "shark",
  ]);

  const handleSubmission = (e) => {
    e.preventDefault();

    if (allFishNames[currentIndex] === currentInput) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    if (currentIndex !== initialFishes.length - 1) {
      nextIndex(currentIndex + 1);
      setCurrentInput("");
      setAnswersLeft(answersLeft.slice(1));
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleInput = (e) => {
    let value = e.target.value.trim().toLowerCase();
    setCurrentInput(value);
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
          currentIndex={currentIndex}
          handleInput={handleInput}
          handleSubmission={handleSubmission}
          currentInput={currentInput}
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
