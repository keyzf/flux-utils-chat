import React, {Component} from 'react';
import MessageListItem from "./MessageListItem";
import MessageStore from '../stores/MessageStore';
import {Container} from 'flux/utils';

class MessageSection extends Component {
    static getStores () {
        return [MessageStore];
    }

    static calculateState (prevState) {
        return {
            messages: MessageStore.getState()
        }
    }

    render() {
        const message_list = [];
        if(this.state.messages.size === 0){
            return null;
        }
        for(let [id, msg] of this.state.messages) {
            message_list.push(<MessageListItem key={msg.id} message={msg} />)
        }
        return (
          	<div className="message-section">
          		  <h3 className="message-thread-heading">MessageContainer</h3>
          		  <ul className="message-list" ref="messageList">{message_list}</ul>
            </div>
        );
    }
}

const container = Container.create(MessageSection);
export default container;