import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import {sendMessageToAPI} from '../actions'

class SendMessage extends Component {
    render() {
        return (
            <div> 
                <Header></Header>
                <div className="col-md-4 offset-md-4">
                <form onSubmit={(event)=>{
                        event.preventDefault();
                        let input = event.target.userMessage.value;
                        this.props.sendMessageToAPI(input);
                        event.target.userMessage.value = "";
                    }}>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea type="text" className="form-control rounded-0" id="txtMessage" placeholder="Enter a Message" rows="3" name="userMessage"></textarea>
                        <small  className="form-text text-muted">Write your message here!.</small>
                    </div>
                    <div className="form-group">
                        <label>ToolBoxAPI Answer</label>
                <textarea  disabled type="text" className="form-control rounded-0" id="txtAnswer" placeholder="You'll see the answer from the API here" rows="3" value={this.props.message}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
                </div>
            </div>
        )
    }
}

export default connect((state)=>({
    message: state.messages.message
}),
{
    sendMessageToAPI
}
)(SendMessage);