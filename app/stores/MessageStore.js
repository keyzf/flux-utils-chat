import Message from "./Message";
import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import dispatcher from "../dispatcher/ChatAppDispatcher";

class MessageStore extends ReduceStore {
	getInitialState () {
        let item = new Message({
            id: 'm1',
            threadID: 't1',
            threadName: 'Jing and Bill',
            authorName: 'Bill',
            text: 'Hey Jing, want to give a Flux talk at ForwardJS?',
            timestamp: new Date(Date.now() - 99999)
        });
		let map = new Immutable.OrderedMap();
		map = map.set(item.id, item);
		return map;
	}
	reduce (state, action) {
		console.log("reduce");
		console.log(state);
		console.log(action);
		return state;
	}
}

const instance = new MessageStore(dispatcher);
export default instance;