import Message from "./Message";
import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import dispatcher from "../dispatcher/ChatAppDispatcher";
import Thread from "./Thread";

class ThreadStore extends ReduceStore {
	getInitialState () {
		let item = new Message({
            id: 'm1',
            threadID: 't1',
            threadName: 'Jing and Bill',
            authorName: 'Bill',
            text: 'Hey Jing, want to give a Flux talk at ForwardJS?',
            timestamp: new Date(Date.now() - 99999)
        });
        let item2 = new Message({
            id: 'm2',
            threadID: 't2',
            threadName: 'Jing and Bill',
            authorName: 'Bill',
            text: 'Hey Jing, want to give a Flux talk at ForwardJS?',
            timestamp: new Date(Date.now() - 99999)
        });
        let threadItem = new Thread({
        	id: 't1',
        	name: 'Jing and Bill',
        	lastMessage: item
        })
        let threadItem2 = new Thread({
        	id: 't2',
        	name: 'Jing and Bill2',
        	lastMessage: item2
        })
		let map = new Immutable.OrderedMap();
		map = map.set(threadItem.id, threadItem);
		map = map.set(threadItem2.id, threadItem2);
		return map;
	}
	reduce (state, action) {
		console.log(state);
		console.log(action);
		return state;
	}
}

const instance = new ThreadStore(dispatcher);
export default instance;