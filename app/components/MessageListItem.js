import React, {Component} from 'react';

export default class MessageListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	var message = this.props.message;
        return (
            <li className="message-list-item">
            	<h5 className="message-author-name">{message.authorName}</h5>
            	<div className="message-time">
            		{message.timestamp.toLocaleTimeString()}
            	</div>
            	<div className="message-text">{message.text}</div>
            </li>
        );
    }
}