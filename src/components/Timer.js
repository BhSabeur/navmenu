// import React from "react";

// function Timer() {
//   return (

//   );
// }
// export default Timer;

import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStarted: false,

      hours: 0,
      minutes: 0,
      seconds: 0
    };
    setInterval(() => {
      if (this.state.timerStarted) {
        if (this.state.seconds >= 60) {
          this.setState(prevState => ({
            minutes: prevState.minutes + 1,
            seconds: 0
          }));
        }
        if (this.state.minutes >= 60) {
          this.setState(prevState => ({
            hours: prevState.hours + 1,
            minutes: 0,
            seconds: 0
          }));
        }
        this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
      }
    }, 1000);
  }

  handleTimerStart = e => {
    e.preventDefault();
    this.setState({ timerStarted: !this.state.timerStarted });
  };
  // handleTimerStop = e => {
  //   e.preventDefault();
  //   this.setState({ timerStarted: false, timerStopped: true });
  //   clearInterval(this.timer);
  // };
  handleTimerReset = e => {
    this.setState({
      timerStarted: false,
      timerStopped: true,
      seconds: 0,
      minutes: 0,
      hours: 0
    });
    clearInterval(this.timer);
  };

  render() {
    return (
      <div>
        HELLO WORLD
        <div className="current-timer">
          {this.state.hours.toString().padStart(2, "0") +
            ":" +
            this.state.minutes.toString().padStart(2, "0") +
            ":" +
            this.state.seconds.toString().padStart(2, "0")}
        </div>
        <h1> {this.state.time}</h1>
        <div className="timer-controls">
          <button className="btn-start" onClick={this.handleTimerStart}>
            {this.state.timerStarted ? "start" : "pause"}
          </button>
          {/* <button
            className="btn-stop"
            onClick={this.handleTimerStop.bind(this)}
          >
            Stop
          </button> */}
          <button className="btn-reset" onClick={this.handleTimerReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
