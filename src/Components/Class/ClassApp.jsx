import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../constants";

export class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectCount: 0,
      correctCount: 0,
    };
  }

  // To avoid prop drilling, declare methods that deal with parent's state values, here:
  handleAnswer = (answer) => {
    if (
      initialFishes[this.state.incorrectCount + this.state.correctCount]
        .name === answer
    ) {
      this.setState({
        correctCount: this.state.correctCount + 1,
      });
    } else {
      this.setState({ incorrectCount: this.state.incorrectCount + 1 });
    }
  };

  render() {
    const { incorrectCount, correctCount } = this.state;
    const currentIndex = incorrectCount + correctCount;
    const isQuizComplete = currentIndex === initialFishes.length;
    const answersLeft = initialFishes.slice(currentIndex);
    return (
      <>
        <>
          {!isQuizComplete && (
            <ClassScoreBoard
              answersLeft={answersLeft}
              incorrectCount={incorrectCount}
              correctCount={correctCount}
            />
          )}
          {!isQuizComplete && (
            <ClassGameBoard
              currentFish={initialFishes[currentIndex]}
              handleAnswer={this.handleAnswer}
            />
          )}
        </>
        {isQuizComplete && (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
