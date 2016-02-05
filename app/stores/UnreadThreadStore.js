import Message from "./Message";
import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import dispatcher from "../dispatcher/ChatAppDispatcher";

class UnreadThreadStore extends ReduceStore {
	getInitialState () {
		let map = new Immutable.OrderedMap();
		return map;
	}
	reduce (state, action) {
		return state;
	}
}

const instance = new UnreadThreadStore(dispatcher);
export default instance;