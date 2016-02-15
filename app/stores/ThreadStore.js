import Message from "./Message";
import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import dispatcher from "../dispatcher/ChatAppDispatcher";
import Thread from "./Thread";
import ChatMessageUtils from "../utils/ChatMessageUtils";

let _eldThreadID = null;
let _currentID = null;

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

        if(!_currentID) {
            let allChrono = map.sortBy(thread => thread.lastMessage.date);
            _currentID = allChrono.last().id;
        }

        return map.setIn([_currentID, 'lastMessage', 'isRead'], true);
    }
    areEqual(one, two) {
        return _eldThreadID === _currentID && one.equals(two);
    }
	reduce (state, action) {
        _eldThreadID = _currentID;
        switch(action.type) {
            case 'chat/receive_raw_messages':
                return this.init(action.rawMessages);
            case 'chat/click_thread':
                _currentID = action.threadID;
                return state;
            default:
                return state;
        }
	}
}

const instance = new ThreadStore(dispatcher);
export default instance;