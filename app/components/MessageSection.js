import React, {Component} from 'react';
import MessageListItem from "./MessageListItem";
import MessageStore from '../stores/MessageStore';
import ThreadStore from '../stores/ThreadStore';
import {Container} from 'flux/utils';
import MessageComposer from "./MessageComposer";

class MessageSection extends Component {

    constructor (props) {
        super(props);
        this.state = {
            thread: ThreadStore.getCurrent()
        }
    }

    static getStores () {
        return [MessageStore];
    }

    static calculateState (prevState) {
        console.log(prevState);
        return {
            messages: MessageStore.getState(),
            thread: ThreadStore.getCurrent(),
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
                  <MessageComposer threadID={this.state.thread.id}/>
            </div>
        );
    }
}

const container = Container.create(MessageSection);
export default container;