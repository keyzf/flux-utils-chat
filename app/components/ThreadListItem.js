import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {dispatch} from "../dispatcher/ChatAppDispatcher";

export default class ThreadListItem extends Component {
    render() {
    	let thread = this.props.thread;
    	let lastMessage = thread.lastMessage;

        return (
            <li
                className={classnames({
            	   'thread-list-item': true,
            	   'active': thread.id === this.props.currentThreadID
                })}
                onClick={this._onClick.bind(this)}
            >
            	<h5 className="thread-name">{thread.name}</h5>
            	<div className="thread-time">
            		{lastMessage.date.toLocaleTimeString()}
            	</div>
            	<div className="thread-last-message">
            		{lastMessage.text}
            	</div>
            </li>
        );
    }

    _onClick () {
        dispatch({
            type: 'chat/click_thread',
            threadID: this.props.thread.id,
        });
    }
}

ThreadListItem.propTypes = {
	thread: PropTypes.object,
	currentThreadID: PropTypes.string
}