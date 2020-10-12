const React = require('react')

    // function getYoutubeLikeToDisplay(millisec) {
    //     var seconds = (millisec / 1000).toFixed(0);
    //     var minutes = Math.floor(seconds / 60);
    //     var hours = "";
    //     if (minutes > 59) {
    //         hours = Math.floor(minutes / 60);
    //         hours = (hours >= 10) ? hours : "0" + hours;
    //         minutes = minutes - (hours * 60);
    //         minutes = (minutes >= 10) ? minutes : "0" + minutes;
    //     }

    //     seconds = Math.floor(seconds % 60);
    //     seconds = (seconds >= 10) ? seconds : "0" + seconds;
    //     if (hours != "") {
    //         return hours + ":" + minutes + ":" + seconds;
    //     }
    //     return minutes + ":" + seconds;
    // }
  
class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 60000,
      seconds: 0,
      minutes: 0,
      hour: 0,
      day: 0,
      start: 0,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setTimeout(() => this.setState({
      time: Date.now() - this.state.start
    }), 10000000);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 0})
  }
  render() {
    let start = (this.state.time == 0) ?
      <button onClick={this.startTimer}>start</button> :
      null
    let stop = (this.state.isOn) ?
      <button onClick={this.stopTimer}>stop</button> :
      null
    let reset = (this.state.time != 0 && !this.state.isOn) ?
      <button onClick={this.resetTimer}>reset</button> :
      null
    let resume = (this.state.time != 0 && !this.state.isOn) ?
      <button onClick={this.startTimer}>resume</button> :
      null
      console.log(Math.floor(this.state.time))
    return(
      <div>
        <h3>timer: {Math.floor(this.state.time/60000)} {Math.floor(this.state.time/1000)} </h3>
        
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}
module.exports = Timer