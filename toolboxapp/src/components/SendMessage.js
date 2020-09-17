import React, { Component } from 'react'
import Header from './Header'

export default class SendMessage extends Component {
    render() {
        return (
            <div> 
                <Header></Header>
                <div className="col-md-4 offset-md-4">
                <form>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea type="text" className="form-control rounded-0" id="txtMessage" placeholder="Enter a Message" rows="3"></textarea>
                        <small  className="form-text text-muted">Write your message here!.</small>
                    </div>
                    <div className="form-group">
                        <label>ToolBoxAPI Answer</label>
                        <textarea  disabled type="text" className="form-control rounded-0" id="txtAnswer" placeholder="You'll see the answer from the API here" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
                </div>
            </div>
        )
    }
}
