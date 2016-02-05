import ChatApp from "./components/ChatApp";
import React from "react";
import {render} from "react-dom";
import ChatExampleData from "./ChatExampleData";
import ChatWebAPIUtils from "./utils/ChatWebAPIUtils";

ChatExampleData.init();
ChatWebAPIUtils.getAllMessages();

render(<ChatApp />, document.getElementById("app"));