import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard, initialFishes, allFishNames } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      incorrectCount: 0,
      correctCount: 0,
      isQuizComplete: false,
      currentInput: "",
      answersLeft: ["trout", "salmon", "tuna", "shark"], // must be in this order: "trout", "salmon", "tuna", "shark"
    };
  }

  // To avoid prop drilling, declare methods that deal with parent's state values, here:
  handleSubmission = (e) => {
    e.preventDefault();

    // I'm using setState() 2x in this method; is there a way to set the same conditions, but use it only once?
    if (this.state.currentInput === allFishNames[this.state.currentIndex]) {
      this.setState({ correctCount: this.state.correctCount + 1 });
    } else {
      this.setState({ incorrectCount: this.state.incorrectCount + 1 });
    }

    if (this.state.currentIndex !== initialFishes.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        currentInput: "",
        answersLeft: this.state.answersLeft.slice(1),
      });
    } else {
      this.setState({ isQuizComplete: true });
    }
  };

  handleInput = (e) => {
    let value = e.target.value.trim().toLowerCase();
    this.setState({ currentInput: value });
  };

  render() {
    return (
      <>
        <>
          {!this.state.isQuizComplete && (
            <ClassScoreBoard
              answersLeft={this.state.answersLeft}
              incorrectCount={this.state.incorrectCount}
              correctCount={this.state.correctCount}
            />
          )}
          {!this.state.isQuizComplete && (
            <ClassGameBoard
              handleInput={this.handleInput}
              currentIndex={this.state.currentIndex}
              currentInput={this.state.currentInput}
              handleSubmission={this.handleSubmission}
            />
          )}
        </>
        {this.state.isQuizComplete && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
