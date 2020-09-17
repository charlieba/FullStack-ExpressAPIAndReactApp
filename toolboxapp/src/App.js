import React, { Component }from 'react';
import { connect } from 'react-redux';
import './App.css';
import SendMessage from './components/SendMessage';


class App extends Component {
  render() {
    return (
      <div>
        <SendMessage></SendMessage>
      </div>
    )
  }
}

export default connect()(App);