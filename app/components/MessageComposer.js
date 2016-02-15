import React, {Component, PropTypes} from 'react';
import {dispatch} from "../dispatcher/ChatAppDispatcher";

const ENTER_KEY_CODE = 13;

export default class MessageComposer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			text: ""
		}
	}

    render() {
        return (
        	<textarea
        		className="message-composer"
        		name="message"
        		onChange={this._onChange.bind(this)}
        		onKeyDown={this._onKeyDown.bind(this)}
        		value={this.state.text}
      		/>
        );
    }

    _onChange (event, value) {
    	this.setState({text: event.target.value});
    }

    _onKeyDown (event) {
    	if (event.keyCode === ENTER_KEY_CODE) {
    		event.preventDefault();
    		let text = this.state.text.trim();
    		if (text) {
                dispatch({
                    type: "chat/create_message",
                    text: text,
                    threadID: this.props.threadID
                })
    		}
    		this.setState({text: ""});
    	}
    }
}

MessageComposer.propTypes = {
	threadID: PropTypes.string.isRequired
}