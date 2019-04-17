import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput'
import UserInput from './components/UserInput'

class App extends Component {
  state = {
    usernames : [
      {username: "dhillondeep", fullname: "Deep Dhillon"},
      {username: "deepd", fullname: "Dim Dhillon"},
      {username: "deep613", fullname: "Deeply Dhillon"}
    ]
  };
  
  onEventHandler = (event, username) => {
    let newObj = {
      ...this.state
    }

    if (username === this.state.usernames[0].username) {
      newObj.usernames[0].fullname = event.target.value;
    } else if (username === this.state.usernames[1].username) {
      newObj.usernames[1].fullname = event.target.value;
    } else if (username === this.state.usernames[2].username) {
      newObj.usernames[2].fullname = event.target.value;
    }

    this.setState(newObj);
  }

  render() {
    return (
      <div className="App">
        <UserOutput fullname={this.state.usernames[0].fullname} username={this.state.usernames[0].username} />
        <UserInput changed={this.onEventHandler} fullname={this.state.usernames[0].fullname} username={this.state.usernames[0].username}/>
        <UserOutput fullname={this.state.usernames[1].fullname} username={this.state.usernames[1].username}/>
        <UserInput changed={this.onEventHandler} fullname={this.state.usernames[1].fullname} username={this.state.usernames[1].username}/>
        <UserOutput fullname={this.state.usernames[2].fullname} username={this.state.usernames[2].username}/>  
        <UserInput changed={this.onEventHandler} fullname={this.state.usernames[2].fullname} username={this.state.usernames[2].username}/>
      </div>
    );
  }
}

export default App;
