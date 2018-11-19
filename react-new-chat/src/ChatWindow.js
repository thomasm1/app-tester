import React, { Component } from 'react';
import './App.css';
// import MainContainer from './App';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Elisa",
    }
  }
  render() {
    return (
      <div className="ChatWindow">
      <div className="ChatInput">
      </div>
        <h1>505 React Chat</h1>
        <div className="window">
        {this.props.messages.map(message => {
          return (
            <div>{message}</div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default ChatWindow;
