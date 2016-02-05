import Immutable from "immutable";

const Thread = Immutable.Record({
	id: undefined,
	name: undefined,
	lastMessage: undefined,
})

export default Thread;