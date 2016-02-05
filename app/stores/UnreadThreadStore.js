import Message from "./Message";
import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import dispatcher from "../dispatcher/ChatAppDispatcher";

class UnreadThreadStore extends ReduceStore {
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
		let map = new Immutable.OrderedMap();
		map = map.set(item.id, item);
		map = map.set(item2.id, item2);
		return map;
	}
	reduce (state, action) {
		console.log(state);
		console.log(action);
		return state;
	}
}

const instance = new UnreadThreadStore(dispatcher);
export default instance;