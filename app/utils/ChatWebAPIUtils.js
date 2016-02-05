import {dispatch} from "../dispatcher/ChatAppDispatcher";

export default {
	getAllMessages: function () {
		let rawMessages = JSON.parse(localStorage.getItem('messages'));
		dispatch({
			type: 'chat/receive_raw_messages',
			rawMessages: rawMessages,
		});
	}
}