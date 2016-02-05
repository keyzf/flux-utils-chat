import React, {Component} from 'react';
import MessageStore from '../stores/MessageStore';
import MessageSection from './MessageSection';
import ThreadSection from './ThreadSection';

export default class ChatApp extends Component {
    render() {
    	return (
    	    <div className="chatapp">
      			<MessageSection />
      			<ThreadSection />
      		</div>
    	  );
    }
}