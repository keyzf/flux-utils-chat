import Immutable from "immutable";

const Message = Immutable.Record({
	id: undefined,
	threadID: undefined,
	threadName: undefined,
	authorName: undefined,
	text: undefined,
	timestamp: undefined,
})

export default Message;