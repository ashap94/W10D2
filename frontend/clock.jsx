import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
    this.week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  }

  render() {
    this.getTime();
    this.getDate();
    return (
      <div class='clock'>
        <h1 class='clock-title'>This super Awesome Clock</h1>
        <div class="clock-info">
          <section class="clock-time">
            <h3>Time:</h3>
            <h3>{this.hours}:{this.minutes}:{this.seconds}</h3>
          </section>
          <section class="clock-date">
            <h3>Date:</h3>
            <h3>{this.week[this.day]} {this.months[this.month]} {this.date} {this.year}</h3>
          </section>
        </div>
      </div>
    );
  }

  getDate() {
    this.year = this.state.time.getFullYear();
    this.month = this.state.time.getMonth();
    this.day = this.state.time.getDay();
    this.date = this.state.time.getDate();
  }

  getTime() {
    this.hours = ('0' + this.state.time.getHours()).slice(-2);
    this.minutes = ('0' + this.state.time.getMinutes()).slice(-2);
    this.seconds = ('0' + this.state.time.getSeconds()).slice(-2);
  }

  tick() {
    this.setState( {
      time: new Date()
    });
  }
 
  componentDidMount() {
    this.tickInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval);
  }

}

export default Clock;