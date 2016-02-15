import Immutable from "immutable";

const Message = Immutable.Record({
	id: undefined,
	threadID: undefined,
	threadName: undefined,
	authorName: undefined,
	text: undefined,
	date: undefined,
	isRead: undefined,
})

export default Message;