import React, {Component} from 'react';
import ThreadStore from "../stores/ThreadStore";
import UnreadThreadStore from "../stores/UnreadThreadStore";
import {Container} from "flux/utils";
import ThreadListItem from "./ThreadListItem";

class ThreadSection extends Component {
	static getStores () {
        return [ThreadStore, UnreadThreadStore];
    }
    static calculateState (prevState) {
        return {
            threads: ThreadStore.getState(),
            unreadThreads: UnreadThreadStore.getState()
        }
    }
    render() {
    	const threadListItems = [];
    	this.state.threads.forEach(function (thread) {
            threadListItems.push(<ThreadListItem key={thread.id} thread={thread} />)
    	})
        return (
            <div className="thread-secion">
            	<div className="thread-count">{this.state.unreadThreads.size}</div>
            	<ul className="thread-list">{threadListItems}</ul>
            </div>
        );
    }
}

const container = Container.create(ThreadSection);
export default container;