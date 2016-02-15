import Message from "./Message";
import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import dispatcher from "../dispatcher/ChatAppDispatcher";
import ThreadStore from "./ThreadStore";
import ChatMessageUtils from "../utils/ChatMessageUtils";

let _eldThreadID = null;

class MessageStore extends ReduceStore {
	getInitialState () {
		return new Immutable.OrderedMap();
	}

	getAllForThread (threadID) {
		_eldThreadID = threadID;
		return this.getState().filter(msg => { return msg.threadID === threadID })
	}

	getAllForCurrentThread () {
		return this.getAllForThread(ThreadStore.getCurrentID());
	}

	areEqual(one, two) {
		return _eldThreadID === ThreadStore.getCurrentID() && one.equals(two);
	}

	reduce (state, action) {
		switch(action.type) {
			case "chat/receive_raw_messages":
				let state = Immutable.OrderedMap(action.rawMessages.map(msg => {
					let message = new Message(ChatMessageUtils.convertRawMessage(msg, ThreadStore.getCurrentID()));
					return [message.id, message];
				}))
			    dispatcher.waitFor([ThreadStore.getDispatchToken()]);
			    return state;
			default:
				return state;
		}
	}
}

const instance = new MessageStore(dispatcher);
export default instance;