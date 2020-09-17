import React, { Component }from 'react';
import './App.css';
import SendMessage from './components/SendMessage';


export default class App extends Component {
  render() {
    return (
      <div>
        <SendMessage></SendMessage>
      </div>
    )
  }
}

