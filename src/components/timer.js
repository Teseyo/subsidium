import React from "react";

var seconds = 1200; // Number Of Seconds
var secondPass = () => {
    return
};

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 90
    };
  }

  

  countDown = setInterval(function() {
    secondPass();
  }, 1000);

  secondPass() {

    var minutes = Math.floor(seconds / 60);  // To Determine The Minutes 

    var remSeconds = seconds % 60;   // To Determine The Seconds

  }

  resetTime() {
    this.setState({ timer: 0 });
  }
  render() {
    const { timer } = this.state;
    return (
      <div className="App">
        <h2>{timer}</h2>
      </div>
    );
  }
}