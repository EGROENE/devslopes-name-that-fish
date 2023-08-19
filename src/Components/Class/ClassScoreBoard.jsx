import { Component } from "react";
import "./styles/score-board.css";
export class ClassScoreBoard extends Component {
  render() {
    const { answersLeft, incorrectCount, correctCount } = this.props;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer.name} className="choice">
              {answer.name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
