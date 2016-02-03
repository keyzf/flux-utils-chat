import React, {Component} from 'react';
import {Container} from 'flux/utils';
import MessageStore from '../stores/MessageStore';
import MessageSection from './MessageSection';

class ChatApp extends Component {

	  static getStores () {
		    return [MessageStore];
	  }

	  static calculateState (prevState) {
		    return {
			      messages: MessageStore.getState()
		    }
	  }

    render() {
    	  return (
    	      <div className="chatapp">
      			    <div>ChatApp</div>
      			    <MessageSection messages={this.state.messages}/>
      		  </div>
    	  );
    }
}

const container = Container.create(ChatApp);
export default container;