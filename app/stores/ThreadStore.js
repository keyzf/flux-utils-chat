import Message from "./Message";
import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import dispatcher from "../dispatcher/ChatAppDispatcher";
import Thread from "./Thread";
import ChatMessageUtils from "../utils/ChatMessageUtils";

let _currentID = "t_1";

class ThreadStore extends ReduceStore {
    getCurrentID () {
        return _currentID;
    }
    getCurrent () {
        return this.getState().get(this.getCurrentID());
    }
	getInitialState () {
        return new Immutable.Map();
	}
    init (rawMessages) {
        let map = new Immutable.Map();
        let _this = this;
        rawMessages.forEach(function (msg) {
            let thread = map.get(msg.threadID);
            if(thread && thread.lastMessage.date.getTime() > msg.timestamp) {
                return;
            }
            let message = new Message(ChatMessageUtils.convertRawMessage(msg, _this.getCurrentID()));
            thread = new Thread({
                id: msg.threadID,
                name: msg.threadName,
                lastMessage: message,
            })
            map = map.set(thread.id, thread);
        });
        return map;
    }
	reduce (state, action) {
        switch(action.type) {
            case 'chat/receive_raw_messages':
                return this.init(action.rawMessages);
            default:
                return state;
        }
	}
}

const instance = new ThreadStore(dispatcher);
export default instance;