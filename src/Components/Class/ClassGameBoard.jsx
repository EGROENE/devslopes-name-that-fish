import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  handleSubmission = (e) => {
    e.preventDefault();
    this.props.handleAnswer(this.state.userInput);
    this.setState({ userInput: "" });
  };

  render() {
    const { currentFish } = this.props;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            value={this.state.userInput}
            onChange={(e) => this.setState({ userInput: e.target.value })}
            type="text"
            name="fish-guess"
          />
          <input onClick={this.handleSubmission} type="submit" />
        </form>
      </div>
    );
  }
}
