import React, {Component} from 'react';
import MessageListItem from "./MessageListItem";

export default class MessageSection extends Component {
    render() {
        const {messages} = this.props;
  	    const message_list = [];

        if(messages.size === 0){
            return null;
        }
        for(let [id, msg] of messages) {
            console.log(msg.timestamp);
            message_list.push(<MessageListItem key={msg.id} message={msg} />)
        }
        return (
          	<div className="message-section">
          		  <h3 className="message-thread-heading">MessageContainer</h3>
          		  <ul className="message-list" ref="messageList">
          			    {message_list}
          		  </ul>
          	</div>
        );
    }
}
